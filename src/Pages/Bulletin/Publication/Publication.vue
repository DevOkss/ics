<script setup>
import Breadcrum from '@/Components/Breadcrum.vue';
import DropdownHeadingTwo from '@/Components/DropdownHeading/DropdownHeadingTwo.vue';
import Layout from '@/Layouts/Layout.vue';
import { ref } from 'vue';

const publications = ref([
  {
    id: 1,
    title: 'AI-Based Student Performance Analytics',
    date: '2026-04-10',
    author: 'Dr. Maria Santos',
    abstract: 'A study on using machine learning to predict student performance and recommend personalized learning paths.',
    access: 'https://example.com/research/ai-student-analytics',
  },
  {
    id: 2,
    title: 'Cybersecurity Framework for Campus Networks',
    date: '2026-03-26',
    author: 'Prof. James Lee',
    abstract: 'Design and implementation of a layered cybersecurity framework tailored for academic networks and labs.',
    access: 'https://example.com/research/campus-cybersecurity',
  },
  {
    id: 3,
    title: 'Digital Library Systems in Modern Education',
    date: '2026-02-18',
    author: 'Dr. Anna Cruz',
    abstract: 'An exploration of digital library technologies and their impact on library science education.',
    access: 'https://example.com/research/digital-library-systems',
  },
]);

const selectedPublication = ref(null);
const showModal = ref(false);

const openPublication = (publication) => {
  selectedPublication.value = publication;
  showModal.value = true;
};

const closePublication = () => {
  showModal.value = false;
  selectedPublication.value = null;
};
</script>

<template>
  <Layout>

    <DropdownHeadingTwo group="Bulletin" title="Research Publications" description="Explore recent research from our faculty and students, complete with abstracts and access links." />

     <div class="mt-2 px-5">
            <Breadcrum :path="{data: {path_name: 'Alumni', label: 'Research Publications'}}" class="mt-5"/>
       </div>
       
    <section class="container mx-auto px-5 py-5">
      <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <article v-for="publication in publications" :key="publication.id" class="rounded-4xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
          <div class="p-6 flex h-full flex-col gap-4">
            <div>
              <p class="text-sm uppercase tracking-[0.2em] text-slate-500">Published {{ new Date(publication.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}</p>
              <h2 class="mt-3 text-2xl font-semibold text-slate-900">{{ publication.title }}</h2>
            </div>
            <div class="text-slate-600">
              <p class="text-sm font-semibold text-slate-800">Author</p>
              <p>{{ publication.author }}</p>
            </div>
            <div class="mt-auto">
              <button @click="openPublication(publication)" class="btn btn-primary w-full">View Details</button>
            </div>
          </div>
        </article>
      </div>
    </section>

    <div class="modal" :class="{ 'modal-open': showModal }">
      <div class="modal-box max-w-3xl">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-4 top-4" @click="closePublication">✕</button>
        <div v-if="selectedPublication">
          <p class="text-sm uppercase tracking-[0.2em] text-slate-500">{{ new Date(selectedPublication.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}</p>
          <h3 class="text-3xl font-semibold text-slate-900 mt-2">{{ selectedPublication.title }}</h3>
          <p class="mt-3 text-sm text-slate-500">Author: {{ selectedPublication.author }}</p>
          <div class="mt-6 space-y-4 text-slate-700">
            <div>
              <p class="font-semibold">Abstract</p>
              <p class="mt-2 leading-relaxed">{{ selectedPublication.abstract }}</p>
            </div>
            <div>
              <p class="font-semibold">Access Link</p>
              <a :href="selectedPublication.access" target="_blank" rel="noreferrer" class="text-blue-600 hover:text-blue-800 break-words">{{ selectedPublication.access }}</a>
            </div>
          </div>
        </div>
        <div class="modal-action">
          <button class="btn btn-secondary" @click="closePublication">Close</button>
        </div>
      </div>
    </div>
  </Layout>
</template>