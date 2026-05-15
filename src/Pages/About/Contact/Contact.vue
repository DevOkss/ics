<script setup>
import Breadcrum from '@/Components/Breadcrum.vue';
import DropdownHeadingTwo from '@/Components/DropdownHeading/DropdownHeadingTwo.vue';
import Layout from '@/Layouts/Layout.vue';
</script>

<template>
    <Layout>
        
        <DropdownHeadingTwo group="About" title="Contact Us" description="" />

       <div class="mt-2 px-5">
            <Breadcrum :path="{data: {path_name: 'About', label: 'Contact Us'}}" class="mt-5"/>
       </div>

        <section class=" mx-auto px-5 py-5">
            <div class="">
                <div>
                    <h2 class="text-3xl font-semibold text-slate-900 mb-6 dark:text-white">Contact & Address</h2>

                    <div class="space-y-8 text-slate-700 dark:text-white">
                        <div>
                            <h3 class="text-2xl font-semibold text-slate-900 mb-3 dark:text-white">Campus Office</h3>
                            <p class="leading-relaxed dark:text-white">
                                Tangub City Global College<br />
                                Gomez St., Maloro<br />
                                Tangub City, Misamis Occidental
                            </p>
                        </div>

                        <div>
                            <h3 class="text-2xl font-semibold text-slate-900 mb-3 dark:text-white">Contact Information</h3>
                            <div class="space-y-4">
                                <div>
                                    <p class="font-semibold text-slate-900 dark:text-white">Phone</p>
                                    <p class="dark:text-white">(+63) 929 262 7522</p>
                                </div>
                                <div>
                                    <p class="font-semibold text-slate-900 dark:text-white">Email</p>
                                    <p class="dark:text-white">instituteofcomputerstudies@gmail.com</p>
                                </div>
                                <div>
                                    <p class="font-semibold text-slate-900 dark:text-white">Office Hours</p>
                                    <p class="dark:text-white">Mon - Fri, 8:00 AM - 5:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
</template>