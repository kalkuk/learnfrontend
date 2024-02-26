 <template>
    <h1>{{  title  }}</h1>
            <ul>
                <li v-for="item in items" :key="item.id">
                  {{ item.name }}
                <input type="checkbox" v-model="item.isDone">
                </li>
            </ul>
 </template>
 <script setup>
    // import { defineProps } from 'vue';
    defineProps(['items', 'title'])
</script>
