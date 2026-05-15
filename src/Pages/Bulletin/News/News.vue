<script setup>
import Breadcrum from '@/Components/Breadcrum.vue';
import DropdownHeadingTwo from '@/Components/DropdownHeading/DropdownHeadingTwo.vue';
import Layout from '@/Layouts/Layout.vue';
</script>

<template>
    <Layout>

        <DropdownHeadingTwo group="Bulletin" title="News & Announcements"
            description="" />

        <div class="mt-2 px-5">
            <Breadcrum :path="{ data: { path_name: 'Bulletin', label: 'News & Announcements' } }" class="mt-5" />
        </div>

        <section class="container mx-auto px-5 py-5">
            <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                <article class="rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg" v-if="1==0">
                    <div class="overflow-hidden rounded-t-3xl bg-slate-800">
                        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                            alt="Campus event"
                            class="w-full h-52 object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                    <div class="p-6">
                        <div class="flex items-center gap-2 mb-4 text-sm text-slate-500 uppercase tracking-[0.2em]">
                            <span>Announcement</span>
                            <span>•</span>
                            <span>May 2, 2026</span>
                        </div>
                        <h2 class="text-xl font-semibold text-slate-900 mb-3">New Research Lab Opens</h2>
                        <p class="text-slate-600 leading-relaxed">The Institute launched a state-of-the-art research lab
                            dedicated to AI and data science studies.</p>
                    </div>
                </article>

                <div class="text-center col-span-full py-5">
                    <p class="text-xl text-slate-600">No news or announcements available at the moment.</p>
                </div>
                
            </div>
        </section>
    </Layout>
</template>