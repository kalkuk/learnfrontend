<template>
    <button class="button is-primary is-outlined" @click="modalOpen = true">Open Modal</button>
    <Modal :open="modalOpen" @close="modalOpen = false">
        <p class="image is-4by3">
            <img src="http://placekitten.com/1280/961" alt="">
        </p>
    </Modal>

    <button class="button is-primary is-outlined" @click="modalOpen2 = true">Open Modal2</button>
    <Modal :open="modalOpen2" @close="modalOpen2 = false">
        <p class="image is-4by3">
            <img src="http://placekitten.com/1280/962" alt="">
        </p>
    </Modal>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '../components/Modal.vue'
let modalOpen = ref(false);
let modalOpen2 = ref(false);
</script>