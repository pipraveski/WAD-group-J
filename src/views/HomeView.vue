<template>
  <div id="app">
    <PageHeader />
    <h1>{{ title }}</h1>
    <p>Welcome to my Vue.js app!</p>
    <PageFooter />
  </div>
 
</template>

<script>
import PageHeader from '@/components/Header.vue';
import PageFooter from '@/components/Footer.vue';

export default {
  components: {
    PageHeader, // Register Header component
    PageFooter, // Register Footer component
  },
  data() {
    return {
      title: 'Hello, Vue!',
    };
  },
};
</script>
