import { defineStore } from 'pinia'

export const useUsersStore = defineStore("users", {
  state: () => {
    return {
      users: [],
      loading: false,
      error: false
    }
  },
  getters: {
    getUserById: (state) => {
      // [].find > undefined 
      return (userId) => state.users.find((user) => user.id === userId)
    },
  },
  actions: {
    async fetchUsers() {
      this.users = [];
      this.loading = true;
      try {
        this.users = await fetch("https://jsonplaceholder.typicode.com/users").then(response=> response.json());
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    }
  },
})