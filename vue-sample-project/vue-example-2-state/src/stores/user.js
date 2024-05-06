import { defineStore } from 'pinia'

const GENDERS = {
  unknown: "Unknown",
  male: "Male",
  female: "Female",
  trangender: "Trangender"
}

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      name: "",
      birthOf: "2000-01-01",
      gender: GENDERS.unknown,
      // alternative way
      user: {
        name: "",
        birthOf: "2000-01-01",
        gender: GENDERS.unknown,
      }
    }
  },
  getters: {
    userName(state) {
      return state.name
    },
    age(state) {
      //calc
      const birthOfYear = new Date(state.birthOf).getFullYear();
      return new Date().getFullYear() - birthOfYear;
    },
    user(state) {
      return state.user;
    }
  },
  actions: {
    setName(name) {
      this.state.name = name;
    },
    updateUser(user) {
      this.user = user;
    }
  },
})