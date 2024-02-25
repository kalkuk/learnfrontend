<template>
    <div class="container">
        <div class="content mt-3">
            <div class="field has-addons">
                <div class="control is-expanded">
                    <input class="input" type="text" v-model="message" @keydown.enter= "addItem ">
                </div>
                <div class="control">
                    <button class="button is-info" @click="addItem">
                      Add item
                    </button>
                </div>
            </div>
            <ul>
                <li v-for="item in items">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
let message = ref('');
let items = ref(['sai', 'piim', 'leib']);
function addItem() {
  if(message.value.trim() !== '') {
    items.value.push(message.value.trim());
  }
  message.value = '';
}
</script>
