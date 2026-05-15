<script setup>
import Layout from '@/Layouts/Layout.vue';
import News from './News/News.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import Topcit from '@/Images/Carousel/topcit.jpg';
import Research from '@/Images/Carousel/research.jpg';
import Pitch from '@/Images/Carousel/pitch.jpg';

const images = ref([
    {
        id: 'slide1',
        src: Topcit,
    },
    {
        id: 'slide2',
        src: Research,
    },
    {
        id: 'slide3',
        src: Pitch,
    },
]);

const current = ref(0);
let autoSlideTimer = null;

const nextSlide = () => {
    current.value = (current.value + 1) % images.value.length;
};

onMounted(() => {
    autoSlideTimer = setInterval(nextSlide, 4000);
});

onUnmounted(() => {
    if (autoSlideTimer) {
        clearInterval(autoSlideTimer);
    }
});



</script>

<template>
    <Layout>
        <!-- Section 1: Hero Carousel -->
        <section class="relative">
            <div class="relative w-full overflow-hidden min-h-[280px] h-[620px] ">
                <div class="relative h-full">
                    <div v-for="(image, index) in images" :key="image.id"
                        class="absolute inset-0 transition-transform duration-700 ease-in-out"
                        :style="{ transform: `translateX(${(index - current) * 100}%)` }">
                        <img :src="image.src" class="w-full h-full object-cover" :alt="`ICS Campus ${index + 1}`" loading="eager" />
                    </div>
                </div>

                <div class="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
                <div class="absolute inset-0 flex flex-col justify-center items-start text-white px-10">
                    <h1 class="text-4xl md:text-6xl font-bold mb-12">INSTITUTE OF COMPUTER STUDIES</h1>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
                        <router-link to="/About/Vision-Mission"
                            class="card bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                            <div class="card-body p-2 sm:p-6  text-center flex justify-center items-center">
                                <h3 class="card-title text-white text-lg font-semibold sm:mb-2">About Us</h3>
                                <p class="text-white/80 text-sm mb-4 hidden sm:block">Learn about the institute's
                                    mission, and vision</p>
                                <div class="flex justify-center hidden sm:flex">
                                    <span class="text-white text-xl">→</span>
                                </div>
                            </div>
                        </router-link>
                        <router-link to="/Academics/BSCS"
                            class="card bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                            <div class="card-body p-2 sm:p-6 sm:mb-2 text-center flex justify-center items-center">
                                <h3 class="card-title text-white text-lg font-semibold sm:mb-2">Academics</h3>
                                <p class="text-white/80 text-sm mb-4 hidden sm:block">take a tour on our academic
                                    programs</p>
                                <div class="flex justify-center hidden sm:flex">
                                    <span class="text-white text-xl">→</span>
                                </div>
                            </div>
                        </router-link>
                        <router-link to="/About/Contact"
                            class="card bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                            <div class="card-body p-2 sm:p-6 sm:mb-2 text-center flex justify-center items-center">
                                <h3 class="card-title text-white text-lg font-semibold sm:mb-2">Contact</h3>
                                <p class="text-white/80 text-sm mb-4 hidden sm:block">Get in touch with our institute
                                </p>
                                <div class="flex justify-center hidden sm:flex">
                                    <span class="text-white text-xl">→</span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>

            </div>
        </section>

        <!--Section 2: News and Announcements-->
        <News v-if="1 == 0" />

        <!-- Section 3: Curriculum -->
        <section class="py-16">
            <div class="container mx-auto px-4 dark:text-white">
                <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Curriculum</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div class="card bg-white shadow-lg" data-aos="zoom-in" data-aos-duration="1000">
                        <div class="card-body text-center">
                            <h3 class="card-title text-xl mb-4 text-black">Bachelor of Science in Computer Science</h3>
                            <p class="text-gray-600 mb-6">The BSCS curriculum focuses on computing theories, software
                                development, algorithms, databases, networking, systems analysis, and emerging
                                technologies. It develops competencies in programming, software engineering, web
                                development, information management, analytics, and research through practical and
                                project-based learning.</p>
                            <a href="/public/curriculum/bscs-curriculum.pdf" download
                                class="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded">Download
                                Curriculum</a>
                        </div>
                    </div>
                    <div class="card bg-white shadow-lg" data-aos="zoom-in" data-aos-duration="1000">
                        <div class="card-body text-center">
                            <h3 class="card-title text-xl mb-4 text-black">Bachelor in Library and Information Science
                            </h3>
                            <p class="text-gray-600 mb-6">The BLIS curriculum focuses on the organization, management,
                                preservation, and delivery of information resources in libraries and information
                                centers. It develops competencies in cataloging, digital libraries, information systems,
                                records management, research, and library services.</p>
                            <a href="/public/curriculum/blis-curriculum.pdf" download
                                class="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded">Download
                                Curriculum</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
</template>