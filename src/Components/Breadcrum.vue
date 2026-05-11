<script setup>
defineProps({
    path: {
        type: Object,
        required: true,
        data() {
            return {
                path_name: String,
                label: String
            };
        }
    },
});

</script>

<template>
    <nav class="text-sm text-gray-600 mb-8 flex flex-wrap gap-2">
        <router-link to="/" class="hover:text-black">Home</router-link>
        <span>/</span>
        <p v-if="path.data.path_name" class="hover:text-black">{{ path.data.path_name }}</p>
        <span>/</span>
        <span class="font-semibold text-black">{{ path.data.label }}</span>
    </nav>
</template>