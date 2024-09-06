<script setup>
    
// state

    const route = useRoute()
    

</script>

<template>
    <div class="text-black">
        {{ route.params['slug'] }}
    </div>
</template>
