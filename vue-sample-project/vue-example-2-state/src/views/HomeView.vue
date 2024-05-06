<template>
  <div v-if="postStore.loading" class="loading">Loading</div>
  <div v-if="postStore.error" class="error"></div>
    <p v-for="post in postStore.posts" :key="post.id">
      {{ post.body }}
    </p>
</template>

<script>
import { mapStores } from 'pinia'
import { usePostStore } from "../stores/post";
export default {
  computed: {
    ...mapStores(usePostStore)
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      this.postStore.fetchPosts();
    }
  }
}
</script>

<style lang="scss" scoped></style>