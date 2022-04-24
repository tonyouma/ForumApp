<template>
  <header class="header" id="header">
    <router-link :to="{ name: 'Home' }" class="logo">
      <img src="../assets/svg/vueschool-logo.svg" alt="Vue School" />
    </router-link>

    <div class="btn-hamburger">
      <div class="top bar"></div>
      <div class="middle bar"></div>
      <div class="bottom bar"></div>
    </div>

    <nav class="navbar">
      <ul>
        <li v-if="authUser" class="navbar-user">
          <router-link :to="{ name: 'Profile' }"
            ><img
              :src="authUser.avatar"
              alt="`${authUser.name} profile picture`"
              class="avatar-small"
            />
            <span>{{ authUser.name }}</span>
            <img
              src="../assets/svg/arrow-profile.svg"
              alt=""
              class="icon-profile"
            />
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["authUser"]),
  },
};
</script>
<style scoped></style>
