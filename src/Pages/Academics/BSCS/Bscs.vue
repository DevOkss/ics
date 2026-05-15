<script setup>
import Breadcrum from '@/Components/Breadcrum.vue';
import DropdownHeadingOne from '@/Components/DropdownHeading/DropdownHeadingOne.vue';
import Layout from '@/Layouts/Layout.vue';
import { ref } from 'vue';
const downloadLink = '/curriculum/bscs-curriculum.pdf';
const latestRevision = '2023';
const lastUpdated = 'May 2, 2023';

const curriculumDescription = 'The BSCS curriculum focuses on computing theories, software development, algorithms, databases, networking, systems analysis, and emerging technologies. It develops competencies in programming, software engineering, web development, information management, analytics, and research through practical and project-based learning.';

const specializationPoints = [
  'Software Engineering',
  'Web Development',
  'Database Systems',
  'Networks and Communications',
  'Business Analytics',
  'Multimedia Systems',
  'Human-Computer Interaction',
  'Modeling and Simulation',
];

const curriculumYears = [
  {
    year: 'First Year',
    semesters: [
      {
        name: 'First Semester',
        courses: [
          {
            code: 'GE PurCom',
            lecUnits: 3,
            labUnits: '',
            title: 'Purposive Communication',
            preReq: '',
          },
          {
            code: 'GE USelf',
            lecUnits: 3,
            labUnits: '',
            title: 'Understanding the Self',
            preReq: '',
          },
          {
            code: 'GE ArtApp',
            lecUnits: 3,
            labUnits: '',
            title: 'Art Appreciation',
            preReq: '',
          },
          {
            code: 'GE ModMat',
            lecUnits: 3,
            labUnits: '',
            title: 'Mathematics in the Modern World',
            preReq: '',
          },
          {
            code: 'CIC 111',
            lecUnits: 2,
            labUnits: 1,
            title: 'Introduction to Computing',
            preReq: '',
          },
          {
            code: 'CIC 112',
            lecUnits: 2,
            labUnits: 1,
            title: 'Computer Programming 1 (Fundamental)',
            preReq: '',
          },
          {
            code: 'PATH-FIT 1',
            lecUnits: 2,
            labUnits: '',
            title: 'Movement Competency Training',
            preReq: '',
          },
          {
            code: 'NSTP 1',
            lecUnits: '(3)',
            labUnits: '',
            title: 'National Service Training Program 1',
            preReq: '',
          },
          {
            code: 'LuxMundi 1',
            lecUnits: '(2)',
            labUnits: '',
            title: 'Spirituality and Values Formation',
            preReq: '',
          },
        ],
      },
      {
        name: 'Second Semester',
        courses: [
          {
            code: 'GE STS',
            lecUnits: 3,
            labUnits: '',
            title: 'Science, Technology and Society',
            preReq: '',
          },
          {
            code: 'GE ConWor',
            lecUnits: 3,
            labUnits: '',
            title: 'The Contemporary World',
            preReq: '',
          },
          {
            code: 'GE RPHis',
            lecUnits: 3,
            labUnits: '',
            title: 'Readings in Philippine History',
            preReq: '',
          },
          {
            code: 'CIC 121',
            lecUnits: 2,
            labUnits: 1,
            title: 'Computer Programming 2 (Intermediate)',
            preReq: 'CIC 112, co-req CIC 122',
          },
          {
            code: 'CIC 122',
            lecUnits: 2,
            labUnits: 1,
            title: 'Data Structures and Algorithms',
            preReq: 'CIC 112, co-req CIC 121',
          },
          {
            code: 'MSC 121',
            lecUnits: 3,
            labUnits: '',
            title: 'Discrete Structures 1',
            preReq: 'GE ModMat',
          },
          {
            code: 'PATH-FIT 2',
            lecUnits: 2,
            labUnits: '',
            title: 'Fitness Training',
            preReq: 'PATH-FIT 1',
          },
          {
            code: 'NSTP 2',
            lecUnits: '(3)',
            labUnits: '',
            title: 'National Service Training Program 2',
            preReq: 'NSTP 1',
          },
          {
            code: 'LuxMundi 2',
            lecUnits: '(2)',
            labUnits: '',
            title: 'Responsible Citizenship and Good Governance',
            preReq: '',
          },
        ],
      },
      {
        name: 'Summer',
        courses: [
          {
            code: 'MSC 131',
            lecUnits: 3,
            labUnits: '',
            title: 'Discrete Structures 2',
            preReq: 'MSC 121',
          },
          {
            code: 'PSC 131',
            lecUnits: 3,
            labUnits: '',
            title: 'Digital Logic Design',
            preReq: 'MSC 121',
          },
          {
            code: 'PSC 132',
            lecUnits: 3,
            labUnits: '',
            title: 'Algorithms and Complexity',
            preReq: 'CIC 122, MSC 121',
          },
        ],
      },
    ],
  },

  {
    year: 'Second Year',
    semesters: [
      {
        name: 'First Semester',
        courses: [
          {
            code: 'GE Ethics',
            lecUnits: 3,
            labUnits: '',
            title: 'Ethics',
            preReq: '',
          },
          {
            code: 'PSC 211',
            lecUnits: 3,
            labUnits: '',
            title: 'Automata Theory & Formal Languages',
            preReq: 'PSC 132',
          },
          {
            code: 'MSC 212',
            lecUnits: 3,
            labUnits: '',
            title: 'Advanced Statistics & Probability, Numerical Methods',
            preReq: '',
          },
          {
            code: 'PSC 212',
            lecUnits: 2,
            labUnits: 1,
            title: 'Programming Languages',
            preReq: 'CIC 122',
          },
          {
            code: 'PSC 213',
            lecUnits: 2,
            labUnits: 1,
            title: 'Object-Oriented Programming',
            preReq: 'CIC 121',
          },
          {
            code: 'CIC 211',
            lecUnits: 2,
            labUnits: 1,
            title: 'Information Management',
            preReq: 'CIC 122',
          },
          {
            code: 'ESC 211',
            lecUnits: 2,
            labUnits: 1,
            title: 'CS Elective 1',
            preReq: '2nd Year',
          },
          {
            code: 'PATH-FIT 3',
            lecUnits: 2,
            labUnits: '',
            title: 'Dance',
            preReq: 'PATH-FIT 2',
          },
          {
            code: 'LuxMundi 3',
            lecUnits: '(2)',
            labUnits: '',
            title: 'Life Skills in the Post Modern Era',
            preReq: '',
          },
        ],
      },
      {
        name: 'Second Semester',
        courses: [
          {
            code: 'GEE LITERA',
            lecUnits: 3,
            labUnits: '',
            title: 'Living in the IT Era',
            preReq: '',
          },
          {
            code: 'MSC 221',
            lecUnits: 3,
            labUnits: '',
            title: 'Calculus 1 with Analytic Geometry',
            preReq: '',
          },
          {
            code: 'CIC 221',
            lecUnits: 2,
            labUnits: 1,
            title: 'Applications Development and Emerging Technologies',
            preReq: 'CIC 121',
          },
          {
            code: 'PSC 221',
            lecUnits: 2,
            labUnits: 1,
            title: 'Software Engineering 1',
            preReq: 'CIC 211, PSC 213',
          },
          {
            code: 'PSC 223',
            lecUnits: 2,
            labUnits: 1,
            title: 'Operating Systems',
            preReq: 'CIC 122',
          },
          {
            code: 'PSC 222',
            lecUnits: 2,
            labUnits: 1,
            title: 'Architecture and Organization',
            preReq: 'PSC 131, CIC 122',
          },
          {
            code: 'ESC 221',
            lecUnits: 2,
            labUnits: 1,
            title: 'CS Elective 2',
            preReq: '2nd Year',
          },
          {
            code: 'PATH-FIT 4',
            lecUnits: 2,
            labUnits: '',
            title: 'Individual & Team Sports',
            preReq: 'PATH-FIT 3',
          },
          {
            code: 'LuxMundi 4',
            lecUnits: '(2)',
            labUnits: '',
            title: 'Professional and Personality Development',
            preReq: '',
          },
        ],
      },
      {
        name: 'Summer',
        courses: [
          {
            code: 'MSC 231',
            lecUnits: 3,
            labUnits: '',
            title: 'Linear Algebra',
            preReq: 'MSC 221',
          },
          {
            code: 'PSC 231',
            lecUnits: 3,
            labUnits: '',
            title: 'Information Assurance and Security',
            preReq: 'CIC 211',
          },
          {
            code: 'ESC 231',
            lecUnits: 3,
            labUnits: '',
            title: 'Research Methodology',
            preReq: 'MSC 212',
          },
        ],
      },
    ],
  },
  {
    year: 'Third Year',
    semesters: [
      {
        name: 'First Semester',
        courses: [
          {
            code: 'GE JRiz',
            lecUnits: 3,
            labUnits: '',
            title: 'The Life and Works of Rizal',
            preReq: '',
          },
          {
            code: 'PSC 311',
            lecUnits: 2,
            labUnits: 1,
            title: 'Software Engineering 2',
            preReq: 'PSC 221',
          },
          {
            code: 'PSC 312',
            lecUnits: 2,
            labUnits: 1,
            title: 'Human Computer Interaction',
            preReq: 'CIC 121',
          },
          {
            code: 'ESC 314',
            lecUnits: 2,
            labUnits: 1,
            title: 'Multimedia Systems',
            preReq: '',
          },
          {
            code: 'ESC 311',
            lecUnits: 3,
            labUnits: '',
            title: 'CS Elective 3',
            preReq: '3rd Year',
          },
          {
            code: 'ESC 312',
            lecUnits: 2,
            labUnits: 1,
            title: 'Compiler Design',
            preReq: 'PSC 212',
          },
          {
            code: 'ESC 313',
            lecUnits: 2,
            labUnits: 1,
            title: 'Web Application Development',
            preReq: 'PSC 213',
          },
        ],
      },
      {
        name: 'Second Semester',
        courses: [
          {
            code: 'GE PPOP',
            lecUnits: 3,
            labUnits: '',
            title: 'Philippine Pop Culture',
            preReq: '',
          },
          {
            code: 'PSC 321',
            lecUnits: 2,
            labUnits: 1,
            title: 'Thesis 1 (Research Project Analysis and Design)',
            preReq: 'PSC 311',
          },
          {
            code: 'PSC 322',
            lecUnits: 2,
            labUnits: 1,
            title: 'Networks and Communications',
            preReq: 'PSC 222',
          },
          {
            code: 'PSC 323',
            lecUnits: 3,
            labUnits: '',
            title: 'Social Issues and Professional Practice',
            preReq: 'PSC 311',
          },
          {
            code: 'ESC 321',
            lecUnits: 2,
            labUnits: 1,
            title: 'CS Elective 4',
            preReq: '3rd Year',
          },
          {
            code: 'ESC 322',
            lecUnits: 2,
            labUnits: 1,
            title: 'Business Analytics',
            preReq: 'MSC 212',
          },
          {
            code: 'ESC 323',
            lecUnits: 2,
            labUnits: 1,
            title: 'Modeling and Simulation',
            preReq: 'MSC 231',
          },
        ],
      },
    ],
  },

  {
    year: 'Fourth Year',
    semesters: [
      {
        name: 'First Semester',
        courses: [
          {
            code: 'GEE GENSOC',
            lecUnits: 3,
            labUnits: '',
            title: 'Gender and Society',
            preReq: '',
          },
          {
            code: 'ESC 411',
            lecUnits: 1,
            labUnits: '',
            title: 'IT Seminars',
            preReq: '4th Year',
          },
          {
            code: 'ESC 412',
            lecUnits: 2,
            labUnits: 1,
            title: 'CS Elective 5',
            preReq: '4th Year',
          },
          {
            code: 'ESC 413',
            lecUnits: 2,
            labUnits: 1,
            title: 'CS Elective 6',
            preReq: '4th Year',
          },
          {
            code: 'PEC 411',
            lecUnits: 3,
            labUnits: '',
            title: 'Professional Enhancement Course',
            preReq: '4th Year',
          },
          {
            code: 'PSC 411',
            lecUnits: 2,
            labUnits: 1,
            title: 'Thesis 2 (Project Implementation)',
            preReq: 'PSC 321',
          },
        ],
      },
      {
        name: 'Second Semester',
        courses: [
          {
            code: 'PSC 421',
            lecUnits: 6,
            labUnits: '',
            title: 'On the Job Training (500 Hours)',
            preReq: '4th Year, Completed 100% of Professional Course',
          },
        ],
      },
    ],
  },
];

const parseUnits = (value) => {
  if (value == null || value === '') return 0;
  const numeric = Number(String(value).replace(/[^\d]/g, ''));
  return Number.isFinite(numeric) ? numeric : 0;
};

const totalUnits = (courses) =>
  courses.reduce(
    (totals, course) => ({
      lec: totals.lec + parseUnits(course.lecUnits),
      lab: totals.lab + parseUnits(course.labUnits),
    }),
    { lec: 0, lab: 0 }
  );

const csProfessionalElectives = [
  { elective: 'System Fundamentals', preReq: 'CIC 111' },
  { elective: 'PC Troubleshooting and Networking', preReq: '2nd Year' },
  { elective: 'Fundamentals of Accounting', preReq: '2nd Year' },
  { elective: 'Mobile Application Development', preReq: 'CIC 112' },
  { elective: 'Computational Science', preReq: '3rd Year' },
  { elective: 'Graphics and Visual Computing', preReq: '3rd Year' },
  { elective: 'Digital Image and Processing', preReq: '3rd Year' },
  { elective: 'Introduction to Data Science', preReq: '3rd Year' },
  { elective: 'Data Mining', preReq: '3rd Year' },
  { elective: 'Intelligent Systems', preReq: 'PSC 132' },
  { elective: 'Parallel and Distributed Computing', preReq: 'PSC 223' },

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
      <Breadcrum :path="{ data: { path_name: 'Academics', label: 'BSCS' } }" />

      <div class="grid gap-6 ">
        <div class="space-y-6">
          <div class=" border-gray-200 px-6 py-2">
            <p class="text-sm uppercase tracking-[0.2em] text-gray-500">Latest Revision</p>
            <p class="text-3xl font-semibold text-black mt-2">Year {{ latestRevision }}</p>
          </div>

          <div class="rounded-3xl bg-white/90 px-6 py-2">
            <h2 class="text-2xl font-semibold mb-4">Curriculum Design Principle</h2>
            <p class="text-gray-700 leading-relaxed">{{ curriculumDescription }}</p>
          </div>

          <div class="rounded-3xl bg-white/90 px-6 py-2">
            <h2 class="text-2xl font-semibold mb-4">Specialization</h2>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
              <li v-for="special in specializationPoints" :key="special">{{ special }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-6 px-6 flex items-center justify-between">
        <div>
          <div class="text-4xl font-bold mb-2">Curriculum</div>
          <p class="text-sm text-gray-500">Last updated: {{ lastUpdated }}</p>
        </div>
        <a :href="downloadLink" target="_blank"
          class="px-4 py-2 bg-red-800 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">Download</a>

      </div>

      <div class="mt-4 space-y-4">
        <div v-for="year in curriculumYears" :key="year.year" class="collapse collapse-arrow border border-gray-200 rounded-3xl bg-white">
          <input type="checkbox" />
          <div class="collapse-title px-6 py-5 text-xl font-semibold text-slate-800">
            {{ year.year }}
          </div>
          <div class="collapse-content px-6 py-5 bg-slate-50">
            <div class="space-y-10">
              <div v-for="group in year.semesters" :key="group.name" class="space-y-4">
                <p class="text-sm font-semibold uppercase tracking-[0.16em] text-slate-600">{{ group.name }}</p>
                <div class="overflow-x-auto">
                  <table class="min-w-full text-left border-separate border-spacing-y-3">
                    <thead>
                      <tr class="bg-slate-100 text-sm uppercase text-slate-600">
                        <th class="px-4 py-3">Code</th>
                        <th class="px-4 py-3">Title</th>
                        <th class="px-4 py-3">Pre-Req</th>
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
                        <td class="px-4 py-3 align-top font-semibold text-slate-800">{{ course.code }}</td>
                        <td class="px-4 py-3 text-slate-800">{{ course.title }}</td>
                        <td class="px-4 py-3 text-slate-700">{{ course.preReq }}</td>
                        <td class="px-4 py-3 text-center font-semibold text-slate-800 border-r border-slate-300">{{ course.lecUnits }}</td>
                        <td class="px-4 py-3 text-center font-semibold text-slate-800">{{ course.labUnits }}</td>
                      </tr>
                      <tr class="bg-slate-100 font-semibold text-slate-800">
                        <td class="px-4 py-3" colspan="3">Total Units</td>
                        <td class="px-4 py-3 text-center border-r border-slate-300">{{ totalUnits(group.courses).lec }}</td>
                        <td class="px-4 py-3 text-center">{{ totalUnits(group.courses).lab }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 flex justify-end">
        <div class="w-full max-w-lg rounded-3xl bg-white border border-gray-200 shadow-sm overflow-hidden">
          <div class="bg-slate-100 px-6 py-4 text-lg text-center font-semibold text-slate-800">Elective Courses</div>
          <div class="overflow-x-auto">
            <table class="min-w-full text-left">
              <thead>
                <tr class="bg-slate-100 text-sm uppercase text-slate-600">
                  <th class="px-4 py-3">CS Professional Electives</th>
                  <th class="px-4 py-3">Pre-Requisite</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in csProfessionalElectives" :key="item.elective" class="bg-white odd:bg-slate-50">
                  <td class="px-4 py-3 text-slate-800">{{ item.elective }}</td>
                  <td class="px-4 py-3 text-slate-700">{{ item.preReq }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>