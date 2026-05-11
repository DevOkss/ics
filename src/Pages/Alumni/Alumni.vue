<script setup>
import Breadcrum from '@/Components/Breadcrum.vue';
import DropdownHeadingTwo from '@/Components/DropdownHeading/DropdownHeadingTwo.vue';
import Layout from '@/Layouts/Layout.vue';
</script>

<template>
    <Layout>
        <DropdownHeadingTwo group="Alumni" title="Alumni Relations" description="Our alumni are the heart of our community, and we are dedicated to fostering lifelong connections. Explore our alumni relations programs, events, and resources designed to support your continued success and engagement with the Institute of Computer Studies." />

        <div class="mt-2 px-5">
            <Breadcrum :path="{data: {path_name: 'Alumni', label: 'Alumni Relations'}}" class="mt-5"/>
       </div>

        <section class="container mx-auto px-5 py-5">
            <div class="grid gap-8 lg:grid-cols-3">
                <div class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
                    <h2 class="text-2xl font-semibold text-slate-900 mb-4">Alumni Stories</h2>
                    <p class="text-slate-600 leading-relaxed mb-6">
                        Discover how our graduates are shaping industries, building startups, and making a positive impact worldwide.
                    </p>
                    <ul class="space-y-4 text-slate-700">
                        <li class="flex gap-3">
                            <span class="text-blue-600 mt-1">•</span>
                            <span>Success stories from technology and research careers.</span>
                        </li>
                        <li class="flex gap-3">
                            <span class="text-blue-600 mt-1">•</span>
                            <span>Professional achievements and community contributions.</span>
                        </li>
                        <li class="flex gap-3">
                            <span class="text-blue-600 mt-1">•</span>
                            <span>Alumni-led innovation and entrepreneurship.</span>
                        </li>
                    </ul>
                </div>
                <div class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
                    <h2 class="text-2xl font-semibold text-slate-900 mb-4">Events & Reunions</h2>
                    <p class="text-slate-600 leading-relaxed mb-6">
                        Join upcoming alumni events, networking nights, and annual reunions designed to strengthen connections and inspire collaboration.
                    </p>
                    <div class="space-y-4 text-slate-700">
                        <div class="rounded-3xl bg-slate-50 p-4">
                            <p class="font-semibold text-slate-900">Alumni Homecoming</p>
                            <p class="text-sm text-slate-500">June 12, 2026</p>
                        </div>
                        <div class="rounded-3xl bg-slate-50 p-4">
                            <p class="font-semibold text-slate-900">Industry Speaker Series</p>
                            <p class="text-sm text-slate-500">July 8, 2026</p>
                        </div>
                        <div class="rounded-3xl bg-slate-50 p-4">
                            <p class="font-semibold text-slate-900">Mentorship Meet-Up</p>
                            <p class="text-sm text-slate-500">August 15, 2026</p>
                        </div>
                    </div>
                </div>
                <div class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
                    <h2 class="text-2xl font-semibold text-slate-900 mb-4">Alumni Support</h2>
                    <p class="text-slate-600 leading-relaxed mb-6">
                        Access career resources, mentorship, and community support to help you navigate your professional journey after graduation.
                    </p>
                    <ul class="space-y-4 text-slate-700">
                        <li class="flex gap-3">
                            <span class="text-green-600 mt-1">•</span>
                            <span>Career coaching and job referrals.</span>
                        </li>
                        <li class="flex gap-3">
                            <span class="text-green-600 mt-1">•</span>
                            <span>Mentorship matching with current students.</span>
                        </li>
                        <li class="flex gap-3">
                            <span class="text-green-600 mt-1">•</span>
                            <span>Alumni community updates and newsletters.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="bg-slate-100 py-16">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-semibold text-slate-900 text-center mb-12">Featured Alumni</h2>
                <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    <div class="rounded-[2rem] bg-white p-6 text-center shadow-sm border border-slate-200">
                        <div class="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-slate-900 text-white text-2xl font-bold">AS</div>
                        <h3 class="text-xl font-semibold text-slate-900">Ariel Santos</h3>
                        <p class="text-slate-500 mt-2">Software Architect</p>
                    </div>
                    <div class="rounded-[2rem] bg-white p-6 text-center shadow-sm border border-slate-200">
                        <div class="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-slate-900 text-white text-2xl font-bold">JR</div>
                        <h3 class="text-xl font-semibold text-slate-900">Jose Reyes</h3>
                        <p class="text-slate-500 mt-2">AI Research Lead</p>
                    </div>
                    <div class="rounded-[2rem] bg-white p-6 text-center shadow-sm border border-slate-200">
                        <div class="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-slate-900 text-white text-2xl font-bold">LT</div>
                        <h3 class="text-xl font-semibold text-slate-900">Liza Torres</h3>
                        <p class="text-slate-500 mt-2">Product Manager</p>
                    </div>
                    <div class="rounded-[2rem] bg-white p-6 text-center shadow-sm border border-slate-200">
                        <div class="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-slate-900 text-white text-2xl font-bold">RM</div>
                        <h3 class="text-xl font-semibold text-slate-900">Ryan Mendoza</h3>
                        <p class="text-slate-500 mt-2">Entrepreneur</p>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
</template>