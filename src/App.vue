<template>
  <div class="container">
    <button v-on:click="count++" class="button is-primary my-4">Click Me! Count: {{ count }}</button>
  </div>
</template>
  <script setup>
    import { ref } from 'vue';
    let count = ref(0);
  </script>
