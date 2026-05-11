<script setup>
import Breadcrum from '@/Components/Breadcrum.vue';
import DropdownHeadingTwo from '@/Components/DropdownHeading/DropdownHeadingTwo.vue';
import Layout from '@/Layouts/Layout.vue';
</script>

<template>
    <Layout>

        <DropdownHeadingTwo group="Bulletin" title="News & Announcements"
            description="Stay informed with the latest news and updates from the Institute of Computer Studies. From groundbreaking research to student achievements, our news section keeps you connected to the vibrant community and exciting developments at ICS." />

        <div class="mt-2 px-5">
            <Breadcrum :path="{ data: { path_name: 'Bulletin', label: 'News & Announcements' } }" class="mt-5" />
        </div>

        <section class="container mx-auto px-5 py-5">
            <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                <article class="rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
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

                <article class="rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
                    <div class="overflow-hidden rounded-t-3xl bg-slate-800">
                        <img src="https://images.unsplash.com/photo-1520212501265-8f2b9d3baab2?auto=format&fit=crop&w=1200&q=80"
                            alt="Student awards"
                            class="w-full h-52 object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                    <div class="p-6">
                        <div class="flex items-center gap-2 mb-4 text-sm text-slate-500 uppercase tracking-[0.2em]">
                            <span>News</span>
                            <span>•</span>
                            <span>April 28, 2026</span>
                        </div>
                        <h2 class="text-xl font-semibold text-slate-900 mb-3">Students Win Innovation Award</h2>
                        <p class="text-slate-600 leading-relaxed">A student team secured first place in a regional
                            software innovation competition.</p>
                    </div>
                </article>

                <article class="rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
                    <div class="overflow-hidden rounded-t-3xl bg-slate-800">
                        <img src="https://images.unsplash.com/photo-1518016626795-1f120a100957?auto=format&fit=crop&w=1200&q=80"
                            alt="Open day"
                            class="w-full h-52 object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                    <div class="p-6">
                        <div class="flex items-center gap-2 mb-4 text-sm text-slate-500 uppercase tracking-[0.2em]">
                            <span>Update</span>
                            <span>•</span>
                            <span>April 20, 2026</span>
                        </div>
                        <h2 class="text-xl font-semibold text-slate-900 mb-3">Open House Schedule</h2>
                        <p class="text-slate-600 leading-relaxed">Join us for an open house event to learn about the
                            programs and meet faculty members.</p>
                    </div>
                </article>

                <article class="rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
                    <div class="overflow-hidden rounded-t-3xl bg-slate-800">
                        <img src="https://images.unsplash.com/photo-1491897554428-130a60dd4757?auto=format&fit=crop&w=1200&q=80"
                            alt="Curriculum update"
                            class="w-full h-52 object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                    <div class="p-6">
                        <div class="flex items-center gap-2 mb-4 text-sm text-slate-500 uppercase tracking-[0.2em]">
                            <span>Announcement</span>
                            <span>•</span>
                            <span>April 15, 2026</span>
                        </div>
                        <h2 class="text-xl font-semibold text-slate-900 mb-3">Curriculum Revision Released</h2>
                        <p class="text-slate-600 leading-relaxed">New course updates are now available for the upcoming
                            academic year.</p>
                    </div>
                </article>

                <article class="rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
                    <div class="overflow-hidden rounded-t-3xl bg-slate-800">
                        <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80"
                            alt="Workshop"
                            class="w-full h-52 object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                    <div class="p-6">
                        <div class="flex items-center gap-2 mb-4 text-sm text-slate-500 uppercase tracking-[0.2em]">
                            <span>News</span>
                            <span>•</span>
                            <span>April 10, 2026</span>
                        </div>
                        <h2 class="text-xl font-semibold text-slate-900 mb-3">Tech Workshop Series</h2>
                        <p class="text-slate-600 leading-relaxed">A new workshop series has been launched for students
                            interested in web development.</p>
                    </div>
                </article>

                <article class="rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
                    <div class="overflow-hidden rounded-t-3xl bg-slate-800">
                        <img src="https://images.unsplash.com/photo-1554774853-a147a98d9fbd?auto=format&fit=crop&w=1200&q=80"
                            alt="Faculty talk"
                            class="w-full h-52 object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                    <div class="p-6">
                        <div class="flex items-center gap-2 mb-4 text-sm text-slate-500 uppercase tracking-[0.2em]">
                            <span>Update</span>
                            <span>•</span>
                            <span>April 5, 2026</span>
                        </div>
                        <h2 class="text-xl font-semibold text-slate-900 mb-3">Guest Lecture Series</h2>
                        <p class="text-slate-600 leading-relaxed">Industry leaders will speak to students on emerging
                            technology trends.</p>
                    </div>
                </article>
            </div>
        </section>
    </Layout>
</template>