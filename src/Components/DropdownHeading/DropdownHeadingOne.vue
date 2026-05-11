<script setup>

defineProps({
    group: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});

</script>

<template>
    <section class="py-16">
            <div class="container mx-auto text-center">
                <p class="text-sm  font-medium uppercase tracking-[0.3em] text-slate-800 mb-4">{{ $props.group }}</p>
                <h1 class="text-4xl md:text-5xl font-bold mb-4 text-red-800 uppercase">{{ $props.title  }}</h1>
            </div>
    </section>
        <div class="px-5">
            <hr>
        </div>
</template>