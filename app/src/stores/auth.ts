import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useStorage } from "@vueuse/core";

import type { TAuthToken } from "@/types/user";
import { graphql, useMutation } from "@/gql";

export const useAuthStore = defineStore("auth", () => {
  const authToken = useStorage("shoppingList:authToken", null as TAuthToken | null | undefined);
  const isAuthenticated = ref(false);
  const isFetching = { verifyToken: ref(false) };

  const isReady = computed(() => {
    return !isFetching.verifyToken.value;
  });

  function setIsAuthenticated() {
    isAuthenticated.value = typeof authToken.value !== "undefined" && authToken.value !== null;
  }

  async function autoLogin() {
    if (authToken.value) {
      const verifyTokenDocument = graphql(/* GraphQL */ `
        mutation VerifyToken($token: String!) {
          verifyToken(input: {token: $token}) {
            payload
          }
        }
      `);

      const mutation = useMutation(verifyTokenDocument);
      isFetching.verifyToken = mutation.isFetching;

      await mutation.execute({ token: authToken.value });

      if (mutation.data.value?.verifyToken?.payload) {
        isAuthenticated.value = true;
      } else {
        authToken.value = null;
        isAuthenticated.value = false;
      }
    }
  }

  async function loginWithSocial({
    accessToken,
    socialBackend,
  }: {
    accessToken: string;
    socialBackend: string;
  }) {
    const registerSocialDocument = graphql(/* GraphQL */ `
      mutation RegisterSocial($accessToken: String!, $socialBackend: String!) {
        registerSocial(input: { accessToken: $accessToken, socialBackend: $socialBackend }) {
          token
        }
      }
    `);
    const { data, execute } = useMutation(registerSocialDocument);
    await execute({ accessToken, socialBackend });
    authToken.value = data?.value?.registerSocial?.token;
    setIsAuthenticated();
  }

  function logout() {
    authToken.value = null;
    setIsAuthenticated();
  }

  return {
    isAuthenticated,
    isReady,
    isFetching,
    authToken,
    autoLogin,
    loginWithSocial,
    logout,
  };
});
