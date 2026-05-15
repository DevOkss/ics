<script setup>
import Breadcrum from '@/Components/Breadcrum.vue';
import DropdownHeadingTwo from '@/Components/DropdownHeading/DropdownHeadingTwo.vue';
import Layout from '@/Layouts/Layout.vue';
</script>

<template>
    <Layout>

        <DropdownHeadingTwo group="About" title="Vision, Mission, Goals and Objectives" />

        <div class="mt-2 px-5">
            <Breadcrum :path="{ data: { path_name: 'About', label: 'VGMO' } }" class="mt-5" />
        </div>

        <section class="container mx-auto px-5 py-5">
            <div class="grid gap-8 lg:grid-cols-2 items-center">
                <div class="flex justify-center items-center p-10">
                    <img src="/Images/ics.png" alt="ICS Logo" class="h-80 w-80 object-cover">
                </div>
                <div class="text-center flex justify-center items-center flex-col">
                    <div class="py-2 px-5" data-aos="slide-left" data-aos-duration="1000">
                        <h2 class="text-5xl font-bold text-slate-900 mb-4 uppercase">Vision</h2>
                        <p class="text-slate-600 leading-relaxed mb-6 text-xl">
                            The Institute of Computer Studies is a service-oriented Institute committed in providing
                            quality technology-based education needed to develop globally-competitive and value-laden
                            computer professionals instrumental to unending demands towards community development and
                            nation-building.</p>
                    </div>
                    <div class="py-2 px-5" data-aos="slide-left" data-aos-duration="1000">
                        <h2 class="text-5xl font-bold text-slate-900 mb-4 uppercase">Mission</h2>
                        <p class="text-slate-600 leading-relaxed mb-6">
                            The institute of computer studies shall:
                            Provide and commit to equip individuals with knowledge, skills, and values through effective
                            integration of research and technology-based education that will enable them to contribute
                            to the development of the local and global community they may serve.
                        </p>
                    </div>
                    <div class="py-2 px-5" data-aos="slide-left" data-aos-duration="1000">
                        <h2 class="text-5xl font-bold text-slate-900 mb-4 uppercase">Goals and Objectives</h2>
                        <p class="text-slate-600 leading-relaxed mb-6 text-left">
                            1. Inculcate love of God country, the local and global community;
                            <br>
                            2. Recruit, develop and support professional growth of competent and qualified teaching
                            force and staff of ICS;
                            <br>
                            3. Provide quality technology-based education;
                            <br>
                            4. Maximize the use of the College resources and those of the local government unit in
                            providing adequate facilities adaptable to local and international demands and standards.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
</template>