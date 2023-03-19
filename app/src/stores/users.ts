import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { graphql, useQuery } from "@/gql";
import type { TUUID } from "@/types/shared";
import type { IUsers, IUser } from "@/types/user";
import { useAuthStore } from "./auth";

export const useUsersStore = defineStore("users", () => {
  const authStore = useAuthStore();
  const currentUserUid = ref(null as TUUID | null);
  const users = ref({} as IUsers);

  const me = computed(() => {
    return currentUserUid.value ? users.value[currentUserUid.value] : null;
  });

  authStore.$subscribe((mutation, state) => {
    if (state.isAuthenticated) {
      fetchMe();
    } else if (currentUserUid.value !== null) {
      delete users.value[currentUserUid.value];
      currentUserUid.value = null;
    }
  });

  async function fetchMe() {
    const meDocument = graphql(/* GraphQL */ `
      query Me {
        me {
          uid,
          username,
        }
      }
    `);
    const { data } = await useQuery({ query: meDocument, cachePolicy: "network-only" });
    if (data.value?.me) {
      const user = data.value.me as IUser;
      currentUserUid.value = user.uid;
      users.value[user.uid] = user;
    }
  }

  return {
    currentUserUid,
    me,
    fetchMe,
  };
});
