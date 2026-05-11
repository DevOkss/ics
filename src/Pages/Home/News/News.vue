<script setup>
import { ref } from 'vue';

    const newsItems = ref([
    {
        id: 1,
        title: 'New Academic Program Launch',
        image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
        date: '2024-05-02',
        description: 'Exciting new academic programs are now available for enrollment.'
    },
    {
        id: 2,
        title: 'Campus Upgrade Completed',
        image: 'https://img.daisyui.com/images/stock/photo-1507003211169-0a1dd7228f2d.webp',
        date: '2024-04-28',
        description: 'Modern facilities and infrastructure improvements completed successfully.'
    },
    {
        id: 3,
        title: 'Research Conference Hosted',
        image: 'https://img.daisyui.com/images/stock/photo-1494790108377-be9c29b29330.webp',
        date: '2024-04-25',
        description: 'Institute hosted a regional research and innovation conference.'
    },
    {
        id: 4,
        title: 'Scholarship Awards Announced',
        image: 'https://img.daisyui.com/images/stock/photo-1506794778202-cad84cf45f1d.webp',
        date: '2024-04-20',
        description: 'Students awarded with merit-based scholarships for academic excellence.'
    },
]);

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
};

</script>

<template>
     <!-- Section 2: News and Announcements -->
        <section class="py-16 bg-gray-100">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-black">News and Announcements</h2>
                <!-- Unified Responsive Layout -->
                <div class="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
                    <div v-for="news in newsItems" :key="news.id" class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow cursor-pointer flex-shrink-0 w-72 md:w-auto">
                        <figure class="h-48 overflow-hidden">
                            <img :src="news.image" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" :alt="news.title" />
                        </figure>
                        <div class="card-body">
                            <h3 class="card-title text-lg text-black">{{ news.title }}</h3>
                            <p class="text-sm text-gray-600">{{ news.description }}</p>
                            <div class="mt-auto">
                                <p class="text-xs text-gray-500">{{ formatDate(news.date) }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center mt-12">  
                    <RouterLink to="/News" class="text-red-900 font-bold  rounded cursor-pointer">
                        View All News
                    </RouterLink>
                </div>
            </div>
        </section>
</template>