<script setup>

import Breadcrum from '@/Components/Breadcrum.vue';
import DropdownHeadingOne from '@/Components/DropdownHeading/DropdownHeadingOne.vue';
import Profile from '@/Components/Profile.vue';
import Layout from '@/Layouts/Layout.vue';

const fulltimeFaculty = [
    {
        name: 'Carin Z. Cabatingan, MST-CS',
        position: 'Dean',
        course_taught: 'Professional Courses',
        imageUrl: '/Images/faculty/full-time/carin.png',
    },
    {
        name: 'Jamaica N. Abing',
        position: 'Executive Assistant',
        course_taught: 'Administrative Support',
        imageUrl: '/Images/faculty/full-time/jam.png',
    },
    {
        name: 'Manuel C. Cabido, MSCS',
        position: 'Full-Time Instructor',
        course_taught: 'Professional Courses',
        imageUrl: '/Images/faculty/full-time/cabido.png',
    },
    {
        name: 'Janziel B. Selatona, MSIT (CAR)',
        position: 'Program Head',
        course_taught: 'Professional Courses',
        imageUrl: '/Images/faculty/full-time/janziel.png',
    },
    {
        name: 'Erwin E. Lacpao, ECE',
        position: 'Full-Time Instructor',
        course_taught: 'General Education and Professional Courses',
        imageUrl: '/Images/faculty/full-time/erwin.png',
    },
    {
        name: 'Jenieffer T. Tia, MBA, MM-ITM',
        position: 'Full-Time Instructor',
        course_taught: 'General Education and Professional Courses',
        imageUrl: '/Images/faculty/full-time/tia.png',
    },
    {
        name: 'Danica Ave R. Magbanua',
        position: 'Full-Time Instructor',
        course_taught: 'Professional Courses',
        imageUrl: '/Images/faculty/full-time/danica.png',
    },
    {
        name: 'Arthur C. Tagalog',
        position: 'Full-Time Instructor',
        course_taught: 'Professional Courses',
        imageUrl: '/Images/faculty/full-time/arthur.png',
    },
    {
        name: 'Christopher Casipong',
        position: 'Full-Time Instructor',
        course_taught: 'Professional Courses',
        imageUrl: '/Images/faculty/full-time/okss.png',
    },
    {
        name: 'Maria Rhaiza Buenafe',
        position: 'Full-Time Instructor',
        course_taught: 'Professional Courses',
        imageUrl: '/Images/faculty/full-time/rhaiza.png',
    },
    {
        name: 'Jessel L. Zapanta',
        position: 'Full-Time Instructor',
        course_taught: 'Professional Courses',
        imageUrl: '/Images/faculty/full-time/jessel.png',
    },
    // Add more faculty members here
];

</script>

<template>
    <Layout>

        <DropdownHeadingOne  group="People" title="Full-Time Faculty" class="mb-8" />
        
        <div class="px-5">
            <Breadcrum :path="{data: {path_name: 'People', label: 'Full-Time Faculty'}}" class="mt-5"/>
        </div>

        <section class=" grid max-w-8xl place-items-center gap-6 px-10 py-5 sm:grid-cols-2 lg:grid-cols-3">
        
            <Profile v-for="faculty in fulltimeFaculty" :key="faculty.name" :name="faculty.name" :position="faculty.position" :imageUrl="faculty.imageUrl" :course_taught="faculty.course_taught" data-aos="zoom-in" data-aos-duration="1000"/>

        </section>
    </Layout>
</template>