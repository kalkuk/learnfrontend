<template>
    <div class="tabs is-centered">
        <ul>
            <li v-for="link in $router.getRoutes()" class="{'is-active': $route.path === link.path}">
                <RouterLink :to="link.path">{{ link.name }}</RouterLink>
            </li>
            
        </ul>
    </div>
</template>
<script setup>

</script>