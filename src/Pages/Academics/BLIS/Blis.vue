<script setup>
import Breadcrum from '@/Components/Breadcrum.vue';
import DropdownHeadingOne from '@/Components/DropdownHeading/DropdownHeadingOne.vue';
import Layout from '@/Layouts/Layout.vue';

const downloadLink = '/public/curriculum/blis-curriculum.pdf';
const latestRevision = '2026';
const lastUpdated = 'May 15, 2026';

const curriculumDescription = 'The BLIS curriculum focuses on the organization, management, preservation, and delivery of information resources in libraries and information centers. It develops competencies in cataloging, digital libraries, information systems, records management, research, and library services.';

const specializationPoints = [
  'Academic Librarianship',
  'School Librarianship',
  'Public Librarianship',
  'Special Librarianship',
  'Digital Libraries',
  'Cataloging and Classification',
  'Records and Archives Management',
  'Information Literacy Services',
];

const curriculumYears = [
  {
    year: 'First Year',
    semesters: [
      {
        name: 'First Semester',
        courses: [
          {
            code: 'LIS 111',
            lecUnits: 3,
            labUnits: '',
            title: 'Introduction to Library and Information Science',
            preReq: '',
          },
          {
            code: 'ICT 111',
            lecUnits: 2,
            labUnits: 3,
            title: 'Information Processing and Handling in Libraries and Information Centers',
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
            code: 'GEE LITERA',
            lecUnits: 2,
            labUnits: 3,
            title: 'Living in the IT Era',
            preReq: '',
          },
          {
            code: 'GE PurCom',
            lecUnits: 3,
            labUnits: '',
            title: 'Purposive Communication',
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
          {
            code: 'Path-Fit 1',
            lecUnits: 2,
            labUnits: '',
            title: 'Movement Competency Training',
            preReq: '',
          },
        ],
      },

      {
        name: 'Second Semester',
        courses: [
          {
            code: 'LIS 122',
            lecUnits: 3,
            labUnits: '',
            title: 'Collection Management of Information Resources',
            preReq: 'LIS 111',
          },
          {
            code: 'LIS 123',
            lecUnits: 3,
            labUnits: '',
            title: 'Information Resources and Services I',
            preReq: 'LIS 111',
          },
          {
            code: 'SpT 111',
            lecUnits: 3,
            labUnits: '',
            title: 'School/Academic Librarianship',
            preReq: '',
          },
          {
            code: 'ICT 122',
            lecUnits: 2,
            labUnits: 3,
            title: 'Web Technologies in Libraries and Information Centers',
            preReq: 'ICT 111',
          },
          {
            code: 'GE ConWor',
            lecUnits: 3,
            labUnits: '',
            title: 'The Contemporary World',
            preReq: '',
          },
          {
            code: 'GE ArtApp',
            lecUnits: 3,
            labUnits: '',
            title: 'Art Appreciation',
            preReq: '',
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
            code: 'LIS 214',
            lecUnits: 3,
            labUnits: '',
            title: 'Information Resources and Services II',
            preReq: 'LIS 123',
          },
          {
            code: 'LIS 215',
            lecUnits: 3,
            labUnits: '',
            title: 'Organization of Information Resources I',
            preReq: 'LIS 122',
          },
          {
            code: 'ICT 213',
            lecUnits: 2,
            labUnits: 3,
            title: 'Digital Libraries and Resources',
            preReq: 'ICT 122',
          },
          {
            code: 'SpT 212',
            lecUnits: 3,
            labUnits: '',
            title: 'Special/Public Librarianship',
            preReq: '',
          },
          {
            code: 'SpT 213',
            lecUnits: 3,
            labUnits: '',
            title: 'Preservation of Information Resources',
            preReq: '',
          },
        ],
      },

      {
        name: 'Second Semester',
        courses: [
          {
            code: 'LIS 226',
            lecUnits: 3,
            labUnits: '',
            title: 'Organization of Information Resources II',
            preReq: 'LIS 215',
          },
          {
            code: 'LIS 227',
            lecUnits: 3,
            labUnits: '',
            title: 'Indexing and Abstracting',
            preReq: 'LIS 215',
          },
          {
            code: 'Spt 224',
            lecUnits: 3,
            labUnits: '',
            title: 'Philosophies and Principles of Teaching',
            preReq: '',
          },
          {
            code: 'SpT 225',
            lecUnits: 3,
            labUnits: '',
            title: 'Educational Technology',
            preReq: '',
          },
          {
            code: 'ICT 224',
            lecUnits: 2,
            labUnits: 3,
            title: 'Programming Fundamentals',
            preReq: '',
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
            code: 'LIS 318',
            lecUnits: 3,
            labUnits: '',
            title: 'Management of Libraries and Information Centers',
            preReq: 'LIS 226, LIS 227',
          },
          {
            code: 'LIS 319',
            lecUnits: 3,
            labUnits: '',
            title: 'Information Literacy',
            preReq: 'LIS 227',
          },
          {
            code: 'LIS 310',
            lecUnits: 3,
            labUnits: '',
            title: 'Library Materials for Children and Young Adult',
            preReq: 'LIS 122',
          },
          {
            code: 'LIS 311',
            lecUnits: 3,
            labUnits: '',
            title: 'Introduction to Records Management and Archives',
            preReq: '',
          },
          {
            code: 'ICT 315',
            lecUnits: 2,
            labUnits: 3,
            title: 'Systems Analysis and Design in Libraries and Information Centers',
            preReq: 'ICT 224',
          },
        ],
      },

      {
        name: 'Second Semester',
        courses: [
          {
            code: 'GE USelf',
            lecUnits: 3,
            labUnits: '',
            title: 'Understanding the Self',
            preReq: '',
          },
          {
            code: 'ICT 326',
            lecUnits: 2,
            labUnits: 3,
            title: 'Database Design for Libraries',
            preReq: 'ICT 315',
          },
          {
            code: 'LIS 322',
            lecUnits: 3,
            labUnits: '',
            title: 'LIS Research I',
            preReq: '3rd year, 2nd Sem Standing',
          },
          {
            code: 'PEC 322',
            lecUnits: 3,
            labUnits: '',
            title: 'Metadata and Bibliographic Control',
            preReq: 'PEC 311',
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
            code: 'LibPr 411',
            lecUnits: '',
            labUnits: '',
            title: 'Library Practice I (School/Academic Library)',
            preReq: 'LIS 322',
          },
          {
            code: 'LIS 413',
            lecUnits: 3,
            labUnits: '',
            title: 'LIS Research II (Thesis Writing)',
            preReq: 'LIS 322',
          },
          {
            code: 'PEC 411',
            lecUnits: 3,
            labUnits: '',
            title: 'Professional Enhancement Course I',
            preReq: 'PEC 322',
          },
        ],
      },

      {
        name: 'Second Semester',
        courses: [
          {
            code: 'PEC 422',
            lecUnits: 2,
            labUnits: 3,
            title: 'Professional Enhancement Course II',
            preReq: 'PEC 411',
          },
          {
            code: 'LibPr 422',
            lecUnits: '',
            labUnits: '',
            title: 'Library Practice II (Special/Public Library)',
            preReq: 'LibPr 411',
          },
        ],
      },
    ],
  },
];

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

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
</script>

<template>
  <Layout>

    <DropdownHeadingOne group="Academics" title="Bachelor in Library and Information Science" />

    <section class="container mx-auto px-4 py-8">

      <!-- Bread Crumb -->
      <Breadcrum :path="{ data: { path_name: 'Academics', label: 'BLIS' } }" />

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
    </section>
  </Layout>
</template>