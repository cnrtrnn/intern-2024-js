<template>
  <h1>This is an user page</h1>
  User Id from route params : {{ $route.params.id }}
  User Id from props : {{ name }}
</template>

<script>
export default {
  props: {
    name: String
  },
  data() {
    return {
      user: null
    }
  },
  beforeRouteEnter(to, from) {
    //fetch user information
    this.getUser(route.params.id);
  },
  beforeRouteUpdate(to, from) {
    // called when the route that renders this component has changed, but this component is reused in the new route.
    // For example, given a route with params `/users/:id`, when we navigate between `/users/1` and `/users/2`,
    // the same `UserDetails` component instance will be reused, and this hook will be called when that happens.
    // Because the component is mounted while this happens, the navigation guard has access to `this` component instance.
    console.log(to, from)
    this.user = null;
    this.getUser(route.params.id);
  },
  methods: {
    async getUser(userId) {
      this.user = await fetch('/user/' + userId)
    }
  }
}
</script>