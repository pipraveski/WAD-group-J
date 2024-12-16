<template>
  <div id="app">
    <PageHeader />
    <Post v-for="post in Posts" :key="post.id" :post="post" />
    <PageFooter />
</div>
</template>

<script>
import PageFooter from "./components/Footer.vue"
import PageHeader from "./components/Header.vue"
import Post from "./components/Posts.vue";
import Posts from "./json/posts.json";

export default {
  name: "app",
  components: {
      PageHeader,
      PageFooter,
      Post,
    },
    data() {
      return {
        Posts: [],
      };
    },
  created() {
    this.Posts = Posts.posts;
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
