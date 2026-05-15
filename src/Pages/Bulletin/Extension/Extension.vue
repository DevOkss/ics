<script setup>
import Breadcrum from '@/Components/Breadcrum.vue';
import DropdownHeadingTwo from '@/Components/DropdownHeading/DropdownHeadingTwo.vue';
import Layout from '@/Layouts/Layout.vue';
</script>

<template>
    <Layout>
        <DropdownHeadingTwo group="Bulletin" title="Extension and Public Services"
            description="Discover how the Institute of Computer Studies connects with the community through training, outreach, and extension services." />

        <div class="mt-2 px-5">
            <Breadcrum :path="{ data: { path_name: 'Bulletin', label: 'Extension and Public Services' } }" class="mt-5" />
        </div>

        <section class="container mx-auto px-5 py-5">
            <div class="grid gap-8 lg:grid-cols-3">
                <article class="rounded-4xl border border-slate-200 bg-white p-8 shadow-lg" v-if="1 == 0">
                    <h2 class="text-2xl font-semibold text-slate-900 mb-4">Outreach Workshops</h2>
                    <p class="text-slate-600 leading-relaxed mb-6">
                        Hands-on technology workshops for students and community members, covering coding, digital
                        literacy, and career preparation.
                    </p>
                    <ul class="space-y-3 text-slate-700">
                        <li>Intro to web development</li>
                        <li>Basic network safety</li>
                        <li>Office productivity training</li>
                    </ul>
                </article>
                <div class="text-center col-span-full py-5">
                    <p class="text-xl text-slate-600">No extension activities available at the moment.</p>
                </div>
            </div>
        </section>
    </Layout>
</template>