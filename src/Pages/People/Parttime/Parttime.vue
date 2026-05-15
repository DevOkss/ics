<script setup>

import Breadcrum from '@/Components/Breadcrum.vue';
import DropdownHeadingOne from '@/Components/DropdownHeading/DropdownHeadingOne.vue';
import Profile from '@/Components/Profile.vue';
import Layout from '@/Layouts/Layout.vue';

const fulltimeFaculty = [
    {
        name: 'Luisander C. Luy, PhDTM',
        position: 'Part-Time Instructor',
        course_taught: 'Professional Courses',
        imageUrl: '/Images/faculty/part-time/luy.png',
    },
    {
        name: 'Etienne Wayne N. Amparado',
        position: 'Part-Time Instructor',
        course_taught: 'Professional Courses',
        imageUrl: '/Images/faculty/part-time/etet.png',
    },
    {
        name: 'Jay Harold B. Reazol, MIT',
        position: 'Part-Time Instructor',
        course_taught: 'Professional Courses',
        imageUrl: '/Images/faculty/part-time/jay.png',
    },
    {
        name: 'Jade Mark Abapo, MAED',
        position: 'Part-Time Instructor',
        course_taught: 'Professional Courses',
        imageUrl: '/Images/faculty/part-time/jade.png',
    },
    {
        name: 'Mildred C. Cabalit',
        position: 'Part-Time Instructor',
        course_taught: 'Professional Courses',
        imageUrl: '/Images/faculty/part-time/mildred.png',
    },
    {
        name: 'Arnel R. Selatona, Jr. MAED',
        position: 'Part-Time Instructor',
        course_taught: 'Professional Courses',
        imageUrl: '/Images/faculty/part-time/arnel.png',
    },
    {
        name: 'Fritzie Ann C. Florida, MBA',
        position: 'Part-Time Instructor',
        course_taught: 'Professional Courses',
        imageUrl: '/Images/faculty/part-time/fritz.png',
    },
    
    // Add more faculty members here
];

</script>

<template>
    <Layout>

        <DropdownHeadingOne  group="People" title="Part-Time Faculty" class="mb-8" />
        
        <div class="px-5">
            <Breadcrum :path="{data: {path_name: 'People', label: 'Part-Time Faculty'}}" class="mt-5"/>
        </div>

        <section class="grid max-w-8xl place-items-center gap-6 px-10 py-5 sm:grid-cols-2 lg:grid-cols-3">
        
            <Profile v-for="faculty in fulltimeFaculty" :key="faculty.name" :name="faculty.name" :position="faculty.position" :imageUrl="faculty.imageUrl" :course_taught="faculty.course_taught" data-aos="zoom-in" data-aos-duration="1000"/>

        </section>
    </Layout>
</template>