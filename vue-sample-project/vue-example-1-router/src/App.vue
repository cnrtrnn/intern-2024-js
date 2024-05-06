<template>
  <div>
    <router-view></router-view>
    <router-view name="SideBar"></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
  export default {
    components: {
    // HelloWorld,
    // RouterView
},
    data () {
      return {
        messageText: "Hello World",
        newMessage: ''
      }
    },
    methods: {
      onMessageChanged (message) {
        this.newMessage = message;
      },
      send() {
        console.log(this.$route);
        console.log(this.$router.push);
        const to = {
          name : 'about',
          params: {aboutId: '3'}, 
          query: { test: 'test2' }
        }
        this.$router.push(to);
      }
    },
    mounted() {
    }
  }
</script>

<style>
a {
  display: block;
}
</style>