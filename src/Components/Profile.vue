<script setup>
defineProps({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    course_taught: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});
</script>

<template>
    <div class="w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
        <div class="flex justify-center pt-6">
            <div class="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-gray-200 overflow-hidden">
                <img :src="imageUrl" :alt="name" class="w-full h-full object-cover object-center rounded-full" loading="lazy"/>
            </div>
        </div>
        <div class="px-6 py-4 text-center">
            <h2 class="text-xl font-semibold text-slate-900">{{ name }}</h2>
            <p class="text-sm text-slate-600 mt-1">{{ position }}</p>
            <div class="mt-4 bg-slate-50 rounded-lg p-3">
                <p class="text-sm text-slate-700">{{ course_taught }}</p>
            </div>
        </div>
    </div>
</template>