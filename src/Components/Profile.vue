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
    expertise: {
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
    <div class="max-w-xs bg-white shadow-xl rounded-lg mt-10 mb-10 sm:mb-2">
        <div class="relative mb-4">
            <div class="absolute inset-x-0 bottom-0 flex justify-center">
                <div class="relative -bottom-16">
                    <div class="w-32 h-32 rounded-full border-4 border-white bg-white overflow-hidden shadow-lg">
                        <img src="/Images/ics.png" :alt="name" class="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
        <div class="px-6 pt-16 pb-8 text-center">
            <h2 class="text-2xl font-semibold text-slate-900">{{ name }}</h2>
            <p class="mt-2 text-sm text-slate-500">{{ position }}</p>
            <div class="mt-6 rounded-3xl bg-slate-50 p-4 text-center">
                <p class="mt-2 text-slate-600">{{ expertise }}</p>
            </div>
        </div>
    </div>
</template>