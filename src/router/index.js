import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/Home/Home.vue';
import Bscs from '@/Pages/Academics/BSCS/Bscs.vue';
import Blis from '@/Pages/Academics/BLIS/Blis.vue';
import Parttime from '@/Pages/People/Parttime/Parttime.vue';
import Fulltime from '@/Pages/People/Fulltime/Fulltime.vue';
import News from '@/Pages/Bulletin/News/News.vue';
import Publication from '@/Pages/Bulletin/Publication/Publication.vue';
import Extension from '@/Pages/Bulletin/Extension/Extension.vue';
import VisionMision from '@/Pages/About/VIsionMission/VisionMision.vue';
import Contact from '@/Pages/About/Contact/Contact.vue';
import Alumni from '@/Pages/Alumni/Alumni.vue';
import OrganizationalStructure from '@/Pages/People/Organizational/OrganizationalStructure.vue';

const routes = [
  {
    path: "/",
    name:"home",
    component: Home
  },
  {
    path: "/Academics/BSCS",
    name:"bscs",
    component: Bscs
  },
  {
    path: "/Academics/BLIS",
    name:"blis",
    component: Blis
  },
  {
    path: "/People/Part-Time",
    name:"part-time",
    component: Parttime
  },
  {
    path: "/People/Full-Time",
    name:"full-time",
    component: Fulltime
  },
  {
    path: "/People/Organizational-Structure",
    name:"org-struct",
    component: OrganizationalStructure
  },
  {
    path: "/Bulletin/News",
    name:"news",
    component: News
  },
  {
    path: "/Bulletin/Publication",
    name:"publication",
    component: Publication
  },
  {
    path: "/Bulletin/Extension",
    name:"extension",
    component: Extension
  },
  {
    path: "/About/Vision-Mission",
    name:"vision-mission",
    component: VisionMision
  },
  {
    path: "/About/Contact",
    name:"contact",
    component: Contact
  },
  {
    path: "/Alumni",
    name:"alumni",
    component: Alumni
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
