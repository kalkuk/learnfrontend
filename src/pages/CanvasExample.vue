<template>
    <container class="is-centered" >
        <input type="range" min="10" max="300" v-model="radius"  @input="setSize"><br>
        <canvas ref="mycanvas" width="800" height="600"  ></canvas>
    </container>

    
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    const mycanvas = ref(null);
    let ctx ;
    let radius = ref(150);
    onMounted(() => {
        ctx = mycanvas.value.getContext("2d");
        ctx.beginPath();
        ctx.arc(400, 300, radius.value, 0, 2 * Math.PI);
        ctx.stroke();
    })
    function setSize() {
        // ctx.reset();
        ctx.beginPath();
        ctx.arc(400, 300, radius.value, 0, 2 * Math.PI);
        ctx.stroke();
    }
</script>
<style scoped>
    canvas {
        border: 1px black solid;
    }
</style>