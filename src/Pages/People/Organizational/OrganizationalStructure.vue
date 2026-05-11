<script setup>
import Breadcrum from '@/Components/Breadcrum.vue';
import DropdownHeadingOne from '@/Components/DropdownHeading/DropdownHeadingOne.vue';
import Layout from '@/Layouts/Layout.vue';
</script>

<template>
    <Layout>

        <DropdownHeadingOne group="People" title="Organizational Structure" class="mb-8" />
        
        <div class="px-5">
            <Breadcrum :path="{data: {path_name: 'People', label: 'Organizational Structure'}}" class="mt-5"/>
        </div>

        <section>
            <div class="max-w-7xl mx-auto px-10 py-5">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80" alt="Organizational Structure" class="w-full h-auto rounded-lg shadow-lg object-cover">
            </div>
        </section>

    </Layout>
</template>