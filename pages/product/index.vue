<script setup>
// state

const route = useRoute();

// life-cycle

onMounted(() => {
    if (
        !route.params.hasOwnProperty("slug") ||
        route.params["slug"].trim() == ""
    ) {
        navigateTo("/");
    }
});
</script>

<template>
    <div></div>
</template>
