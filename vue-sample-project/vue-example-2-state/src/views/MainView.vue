<template>
  <h2>Home Page</h2>
  <router-link to="about">Go About Page</router-link>

  <p>{{pickedUsername}}</p>

  <p v-if="usersStore.loading">Loading</p>
  <p v-if="usersStore.error">Error</p>
  <p v-for="user in usersStore.users" :key="user.id">
    {{ user.id }}
    {{ user.name }}
    {{ user.username }}
  </p>
</template>

<script>
import { mapStores } from 'pinia'
import { useUsersStore } from '../stores/users';
export default {
  data() {
    // local state
    return {
      // users: []
      pickedUsername: "",
    }
  },
  watch: {
    "usersStore.users": function ()  {
      if (this.usersStore.users.length) {
        this.pickedUsername = this.usersStore.getUserById(1).username;
      }
    }
  },
  computed: {
    // each store will be accessible as its id + 'Store'
    ...mapStores(useUsersStore),
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      this.usersStore.fetchUsers();
    },
  },
}
</script>