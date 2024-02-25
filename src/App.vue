<template>
  <div class="container">
    <div class="content mt-3">
        <input class="input" v-model="message">
        <h1>{{ message.split('').reverse().join('') }}</h1>
    </div>
  </div>
</template>
  <script setup>
    import { ref } from 'vue';
    let message = ref('Hello vue!');
  </script>
