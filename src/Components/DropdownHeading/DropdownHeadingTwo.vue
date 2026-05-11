<script setup>

defineProps({
    group: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

</script>

<template>

    <section class="bg-slate-950 text-white py-20">
            <div class="container mx-auto px-4 text-center">
                <p class="text-sm uppercase tracking-[0.3em] text-slate-400 mb-4">{{ group }}</p>
                <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ title }}</h1>
                <p class="max-w-3xl mx-auto text-slate-300 text-base md:text-lg leading-relaxed">
                    {{ description }}
                </p>
            </div>
        </section>
</template>