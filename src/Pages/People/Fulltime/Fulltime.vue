<script setup>

import Breadcrum from '@/Components/Breadcrum.vue';
import DropdownHeadingOne from '@/Components/DropdownHeading/DropdownHeadingOne.vue';
import Profile from '@/Components/Profile.vue';
import Layout from '@/Layouts/Layout.vue';


</script>

<template>
    <Layout>

        <DropdownHeadingOne  group="People" title="Full-Time Faculty" class="mb-8" />
        
        <div class="px-5">
            <Breadcrum :path="{data: {path_name: 'People', label: 'Full-Time Faculty'}}" class="mt-5"/>
        </div>

        <section class=" grid max-w-7xl place-items-center  px-10 py-5 sm:grid-cols-2 lg:grid-cols-3">
        
            <Profile name="Carin Z. Cabatingan" position="Dean" expertise="Software Engineering, Artificial Intelligence, and Data Systems" imageUrl="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80" />

        </section>
    </Layout>
</template>