<script setup lang="ts">
import { computed } from "vue";
import { GoogleLogin, type CallbackTypes } from "vue3-google-login";
import { useAuthStore } from "@/stores/auth";
import { useUsersStore } from "@/stores/users";

const authStore = useAuthStore();
const usersStore = useUsersStore();

const isAuthenticated = computed(() => authStore.isAuthenticated);
const currentUser = computed(() => usersStore.me);

const callback: CallbackTypes.TokenResponseCallback = (response) => {
  authStore.loginWithSocial({ accessToken: response.access_token, socialBackend: "google-oauth2" })
};
</script>

<template>
  <header v-if="isAuthenticated">
    <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'Signout' }">Sign out {{ currentUser?.username }}</RouterLink>
  </header>
  <header v-else>
    <GoogleLogin :callback="callback" popup-type="TOKEN">
      <button>Login Using Google</button>
    </GoogleLogin>
  </header>
</template>
