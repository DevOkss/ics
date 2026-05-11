<script setup>
import Breadcrum from '@/Components/Breadcrum.vue';
import DropdownHeadingOne from '@/Components/DropdownHeading/DropdownHeadingOne.vue';
import Layout from '@/Layouts/Layout.vue';
import { ref } from 'vue';
const downloadLink = '/curriculum/bscs.pdf';
const latestRevision = '2024';
const lastUpdated = 'May 2, 2026';

const curriculumDescription = 'A comprehensive curriculum designed to build strong foundational skills in computer science, computational thinking, programming, and systems design.';
const specializationPoints = [
  'Software Engineering and Application Development',
  'Data Science and Artificial Intelligence',
  'Network Systems and Cybersecurity',
  'Multimedia and Game Development',
];

const curriculumYears = [
  {
    year: 'Year 1',
    semesters: [
      {
        name: 'First Semester',
        courses: [
          { code: 'CS101', lecUnits: 2, labUnits: 1, title: 'Introduction to Computing', description: 'Fundamentals of computers, programming logic, and problem solving.' },
          { code: 'MATH101', lecUnits: 3, labUnits: 0, title: 'College Algebra', description: 'Algebraic techniques used in science and engineering.' },
        ],
      },
      {
        name: 'Summer',
        courses: [
          { code: 'ENG101', lecUnits: 3, labUnits: 0, title: 'English Communication', description: 'Writing, speaking, and reading for academic success.' },
        ],
      },
      {
        name: 'Second Semester',
        courses: [
          { code: 'CS102', lecUnits: 3, labUnits: 1, title: 'Programming Fundamentals', description: 'Introduction to programming using structured design techniques.' },
          { code: 'MATH102', lecUnits: 3, labUnits: 0, title: 'Trigonometry', description: 'Trigonometric functions and applications.' },
        ],
      },
    ],
    electives: [
      { code: 'ITE101', lecUnits: 2, labUnits: 1, title: 'Web Development Basics', description: 'Introduction to HTML, CSS, and basic web design concepts.' },
      { code: 'CS105', lecUnits: 2, labUnits: 1, title: 'Introduction to Robotics', description: 'Fundamentals of robotics and basic automation systems.' },
    ],
  },
  {
    year: 'Year 2',
    semesters: [
      {
        name: 'First Semester',
        courses: [
          { code: 'CS201', lecUnits: 2, labUnits: 1, title: 'Data Structures', description: 'Organizing and manipulating data using standard structures.' },
          { code: 'CS202', lecUnits: 3, labUnits: 0, title: 'Discrete Mathematics', description: 'Mathematics for computer science and logical reasoning.' },
        ],
      },
      {
        name: 'Summer',
        courses: [
          { code: 'PSY101', lecUnits: 3, labUnits: 0, title: 'Psychology', description: 'Understanding human behavior and interaction in technology.' },
        ],
      },
      {
        name: 'Second Semester',
        courses: [
          { code: 'CS203', lecUnits: 3, labUnits: 1, title: 'Object-Oriented Programming', description: 'Principles of OOP and application development.' },
          { code: 'STAT101', lecUnits: 3, labUnits: 0, title: 'Statistics', description: 'Statistical methods for data analysis.' },
        ],
      },
    ],
    electives: [
      { code: 'CS210', lecUnits: 2, labUnits: 1, title: 'Mobile App Development', description: 'Building mobile applications for Android and iOS platforms.' },
      { code: 'CS215', lecUnits: 2, labUnits: 1, title: 'Database Systems', description: 'Introduction to relational databases and SQL.' },
    ],
  },
  {
    year: 'Year 3',
    semesters: [
      {
        name: 'First Semester',
        courses: [
          { code: 'CS301', lecUnits: 2, labUnits: 1, title: 'Algorithms', description: 'Design and analysis of algorithms for efficiency and correctness.' },
          { code: 'CS302', lecUnits: 2, labUnits: 1, title: 'Computer Organization', description: 'Internal structure and operation of computer systems.' },
        ],
      },
      {
        name: 'Summer',
        courses: [
          { code: 'COMM101', lecUnits: 3, labUnits: 0, title: 'Professional Communication', description: 'Communication skills for professional and technical contexts.' },
        ],
      },
      {
        name: 'Second Semester',
        courses: [
          { code: 'CS303', lecUnits: 3, labUnits: 1, title: 'Software Engineering', description: 'Software development lifecycle, requirements, and quality assurance.' },
          { code: 'CS304', lecUnits: 2, labUnits: 1, title: 'Operating Systems', description: 'Design and management of modern operating systems.' },
        ],
      },
    ],
    electives: [
      { code: 'CS320', lecUnits: 2, labUnits: 1, title: 'Artificial Intelligence', description: 'Basic AI concepts and problem-solving techniques.' },
      { code: 'CS325', lecUnits: 2, labUnits: 1, title: 'Network Security', description: 'Security principles for networked systems.' },
    ],
  },
  {
    year: 'Year 4',
    semesters: [
      {
        name: 'First Semester',
        courses: [
          { code: 'CS401', lecUnits: 2, labUnits: 1, title: 'Capstone Project I', description: 'Project planning, research, and proposal development.' },
          { code: 'CS402', lecUnits: 3, labUnits: 0, title: 'Computer Networks', description: 'Network protocols, architecture, and communication systems.' },
        ],
      },
      {
        name: 'Summer',
        courses: [
          { code: 'ETH101', lecUnits: 3, labUnits: 0, title: 'Ethics in Computing', description: 'Ethical issues and professional responsibility in technology.' },
        ],
      },
      {
        name: 'Second Semester',
        courses: [
          { code: 'CS403', lecUnits: 3, labUnits: 1, title: 'Capstone Project II', description: 'Final project implementation, testing, and presentation.' },
          { code: 'CS404', lecUnits: 3, labUnits: 0, title: 'Emerging Technologies', description: 'Study of current trends in technology and innovation.' },
        ],
      },
    ],
    electives: [
      { code: 'CS430', lecUnits: 2, labUnits: 1, title: 'Cloud Computing', description: 'Fundamentals of cloud services and deployment models.' },
      { code: 'CS435', lecUnits: 3, labUnits: 0, title: 'Human-Computer Interaction', description: 'Designing user-centered interfaces and experiences.' },
    ],
  },
];

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};
</script>

<template>
    <Layout>
        
        <DropdownHeadingOne group="Academics" title="Bachelor of Science in Computer Science" />

        <section class="container mx-auto px-4 py-8">

            <!-- Bread Crumb -->
                <Breadcrum :path="{data: {path_name: 'Academics', label: 'BSCS'}}"/>

            <div class="grid gap-6 ">
                <div class="space-y-6">
                    <div class=" border-gray-200">
                        <p class="text-sm uppercase tracking-[0.2em] text-gray-500">Latest Revision</p>
                        <p class="text-3xl font-semibold text-black mt-2">Year {{ latestRevision }}</p>
                    </div>

                    <div class="rounded-3xl bg-white/90 p-6 border border-gray-200">
                        <h2 class="text-2xl font-semibold mb-4">Curriculum Design Principle</h2>
                        <p class="text-gray-700 leading-relaxed">{{ curriculumDescription }}</p>
                    </div>

                    <div class="rounded-3xl bg-white/90 p-6 border border-gray-200">
                        <h2 class="text-2xl font-semibold mb-4">Specialization</h2>
                        <ul class="list-disc list-inside space-y-2 text-gray-700">
                            <li v-for="special in specializationPoints" :key="special">{{ special }}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="mt-6 flex items-center justify-between">
                <div>
                    <div class="text-4xl font-bold mb-2">Curriculum</div>
                    <p class="text-sm text-gray-500">Last updated: {{ lastUpdated }}</p>
                </div>
                <a :href="downloadLink" class="px-4 py-2 bg-red-800 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">Download</a>

            </div>

            <div class="mt-4 space-y-12">
                <div v-for="year in curriculumYears" :key="year.year" class="rounded-3xl bg-white p-6 border border-gray-200 shadow-sm">
                    <h3 class="text-2xl font-semibold mb-4">{{ year.year }}</h3>

                    <div v-for="group in year.semesters" :key="group.name" class="space-y-4 mb-8">
                        <p class="text-sm font-semibold uppercase tracking-[0.16em] text-slate-600">{{ group.name }}</p>
                        <div class="overflow-x-auto">
                            <table class="min-w-full text-left border-separate border-spacing-y-3">
                                <thead>
                                    <tr class="bg-slate-100 text-sm uppercase text-slate-600">
                                        <th class="px-4 py-3">Code</th>
                                        <th class="px-4 py-3">Title</th>
                                        <th class="px-4 py-3">Description</th>
                                        <th colspan="2" class="px-4 py-3 text-center">Units</th>
                                    </tr>
                                    <tr class="bg-slate-100 text-sm uppercase text-slate-600">
                                        <th class="px-4 py-3"></th>
                                        <th class="px-4 py-3"></th>
                                        <th class="px-4 py-3"></th>
                                        <th class="px-4 py-3 text-center border-r border-slate-300">Lec</th>
                                        <th class="px-4 py-3 text-center">Lab</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="course in group.courses" :key="course.code" class="bg-white odd:bg-slate-50">
                                        <td class="px-4 py-4 align-top font-semibold text-slate-800">{{ course.code }}</td>
                                        <td class="px-4 py-4 text-slate-800">{{ course.title }}</td>
                                        <td class="px-4 py-4 text-slate-600">{{ course.description }}</td>
                                        <td class="px-4 py-4 text-center font-semibold text-slate-800 border-r border-slate-300">{{ course.lecUnits }}</td>
                                        <td class="px-4 py-4 text-center font-semibold text-slate-800">{{ course.labUnits }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <details class="group rounded-3xl border border-slate-200 bg-slate-50">
                        <summary class="flex cursor-pointer items-center justify-between px-5 py-4 text-lg font-semibold text-slate-800 transition-colors duration-200 hover:bg-slate-100">
                            Elective Courses
                            <span class="transition-transform duration-200 group-open:rotate-180">⌄</span>
                        </summary>
                        <div class="px-5 pb-5 pt-2">
                            <div class="overflow-x-auto">
                                <table class="min-w-full text-left">
                                    <thead>
                                        <tr class="border-b border-slate-200 bg-white text-sm uppercase text-slate-600">
                                            <th class="px-4 py-3">Code</th>
                                            <th class="px-4 py-3">Title</th>
                                            <th class="px-4 py-3">Description</th>
                                            <th colspan="2" class="px-4 py-3 text-center">Units</th>
                                        </tr>
                                        <tr class="border-b border-slate-200 bg-white text-sm uppercase text-slate-600">
                                            <th class="px-4 py-3"></th>
                                            <th class="px-4 py-3"></th>
                                            <th class="px-4 py-3"></th>
                                            <th class="px-4 py-3 text-center border-r border-slate-300">Lec</th>
                                            <th class="px-4 py-3 text-center">Lab</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="elective in year.electives" :key="elective.code" class="border-b border-slate-200 last:border-b-0 bg-slate-50">
                                            <td class="px-4 py-3 text-sm font-semibold text-slate-800">{{ elective.code }}</td>
                                            <td class="px-4 py-3 text-sm text-slate-800">{{ elective.title }}</td>
                                            <td class="px-4 py-3 text-sm text-slate-600">{{ elective.description }}</td>
                                            <td class="px-4 py-3 text-sm text-center font-semibold text-slate-800 border-r border-slate-300">{{ elective.lecUnits }}</td>
                                            <td class="px-4 py-3 text-sm text-center font-semibold text-slate-800">{{ elective.labUnits }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    </Layout>
</template>