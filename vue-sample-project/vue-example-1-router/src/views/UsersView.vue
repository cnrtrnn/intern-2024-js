<template>
  <div>
    <h1>This is an users page</h1>
    <router-link to="/users/1">User 1</router-link>
    <router-link to="/users/detail">User Detail</router-link>
    <router-view></router-view>
    <router-view name="AboutView"></router-view>
  </div>
</template>
