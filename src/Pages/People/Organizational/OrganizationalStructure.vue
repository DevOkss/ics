<script setup>
import Breadcrum from '@/Components/Breadcrum.vue';
import DropdownHeadingOne from '@/Components/DropdownHeading/DropdownHeadingOne.vue';
import Layout from '@/Layouts/Layout.vue';
</script>

<template>
    <Layout>

        <DropdownHeadingOne group="People" title="Organizational Structure" class="mb-8" />


        <div class="px-5">
            <Breadcrum :path="{ data: { path_name: 'People', label: 'Organizational Structure' } }" class="mt-5" />
        </div>

        <div class="text-center">
            <p class="text-sm uppercase tracking-[0.2em] text-gray-500">Latest Revision</p>
            <p class="text-3xl font-semibold text-black mt-2">AY 25-26</p>
            <p class="text-2xl text-black mt-2">Second Semester</p>
        </div>

        <section>
            <div class="max-w-7xl mx-auto px-10 py-5">
                <img src="/Images/org-struct.jpg"
                    alt="Organizational Structure" class="w-full h-auto rounded-lg shadow-lg object-cover">
            </div>
        </section>

    </Layout>
</template>