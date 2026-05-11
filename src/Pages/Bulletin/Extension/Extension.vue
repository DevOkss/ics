<script setup>
import Breadcrum from '@/Components/Breadcrum.vue';
import DropdownHeadingTwo from '@/Components/DropdownHeading/DropdownHeadingTwo.vue';
import Layout from '@/Layouts/Layout.vue';
</script>

<template>
    <Layout>
        <DropdownHeadingTwo group="Bulletin" title="Extension and Public Services" description="Discover how the Institute of Computer Studies connects with the community through training, outreach, and extension services." />

         <div class="mt-2 px-5">
            <Breadcrum :path="{data: {path_name: 'Bulletin', label: 'Extension and Public Services'}}" class="mt-5"/>
       </div>   

        <section class="container mx-auto px-5 py-5">
            <div class="grid gap-8 lg:grid-cols-3">
                <article class="rounded-4xl border border-slate-200 bg-white p-8 shadow-lg">
                    <h2 class="text-2xl font-semibold text-slate-900 mb-4">Outreach Workshops</h2>
                    <p class="text-slate-600 leading-relaxed mb-6">
                        Hands-on technology workshops for students and community members, covering coding, digital literacy, and career preparation.
                    </p>
                    <ul class="space-y-3 text-slate-700">
                        <li>Intro to web development</li>
                        <li>Basic network safety</li>
                        <li>Office productivity training</li>
                    </ul>
                </article>

                <article class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
                    <h2 class="text-2xl font-semibold text-slate-900 mb-4">Community Partnerships</h2>
                    <p class="text-slate-600 leading-relaxed mb-6">
                        Collaborations with local schools, NGOs, and public organizations to deliver sustainable learning and technical support.
                    </p>
                    <ul class="space-y-3 text-slate-700">
                        <li>School IT mentorship</li>
                        <li>Free training events</li>
                        <li>Community digital hubs</li>
                    </ul>
                </article>

                <article class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
                    <h2 class="text-2xl font-semibold text-slate-900 mb-4">Extension Research</h2>
                    <p class="text-slate-600 leading-relaxed mb-6">
                        Research-driven extension projects that address local challenges through innovation, data, and technology solutions.
                    </p>
                    <ul class="space-y-3 text-slate-700">
                        <li>Smart agriculture initiatives</li>
                        <li>Local enterprise support</li>
                        <li>Health information systems</li>
                    </ul>
                </article>
            </div>

            <div class="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                <article class="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" alt="Community workshop" class="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div class="p-6">
                        <p class="text-sm uppercase tracking-[0.2em] text-slate-500 mb-3">Workshop</p>
                        <h3 class="text-xl font-semibold text-slate-900 mb-3">Girls in Tech Bootcamp</h3>
                        <p class="text-slate-600 leading-relaxed">A mentorship program designed to inspire young women to pursue careers in computing and technology.</p>
                    </div>
                </article>
                <article class="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80" alt="Community training" class="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div class="p-6">
                        <p class="text-sm uppercase tracking-[0.2em] text-slate-500 mb-3">Training</p>
                        <h3 class="text-xl font-semibold text-slate-900 mb-3">Digital Literacy Program</h3>
                        <p class="text-slate-600 leading-relaxed">Free sessions to help community members build essential digital skills and online confidence.</p>
                    </div>
                </article>
                <article class="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1498092659945-5e2b7dd2df76?auto=format&fit=crop&w=1200&q=80" alt="Extension research" class="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div class="p-6">
                        <p class="text-sm uppercase tracking-[0.2em] text-slate-500 mb-3">Project</p>
                        <h3 class="text-xl font-semibold text-slate-900 mb-3">Community Tech Support</h3>
                        <p class="text-slate-600 leading-relaxed">Supporting local organizations with technology solutions, training, and capacity building.</p>
                    </div>
                </article>
            </div>
        </section>
    </Layout>
</template>