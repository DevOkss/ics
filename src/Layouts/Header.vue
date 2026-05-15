<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
import ICS from '@/Images/ics.png';
import TCGC from '@/Images/tcgc.jpg';

const mobileOpen = ref(false);
const route = useRoute();

</script>


<template>
  <div class="sticky top-0 z-50 shadow-lg">
    <!-- Main Navbar -->
    <div class="navbar min-h-[68px] px-4 lg:px-8" style="background-color: #800000;">
      <div class="navbar-start">
        <!-- Brand -->
        <RouterLink :to="{name: 'home'}" class="flex items-center gap-3">
          <!-- Logo 1: ICS Initials -->
          <div class="avatar placeholder">
            <div class="w-11 rounded-full bg-white text-maroon ring ring-white/30 ring-offset-0">
              <img :src="TCGC" alt="TCGC">
            </div>
          </div>
          <!-- Logo 2: Computer Icon -->
          <div class="avatar placeholder">
            <div class="w-11 rounded-full bg-white/15 ring ring-white/30 ring-offset-0 ">
              <img :src="ICS" alt="ICS">
            </div>
          </div>
          <!-- Title -->
          <div class="hidden sm:flex flex-col leading-tight">
            <span class="text-white/60 text-xs font-normal tracking-wide">TANGUB CITY GLOBAL COLLEGE</span>
            <span class="text-white text-sm font-bold tracking-tight">Institute of Computer Studies</span>
          </div>
        </RouterLink>
      </div>

      <!-- Desktop Nav (center/end) -->
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal gap-0.5 p-0">
          <!-- Home -->
          <li>
            <RouterLink
              :to="{name: 'home'}"
              class="text-white/90 hover:bg-white/15 hover:text-white rounded-lg text-sm font-medium px-3 py-2" :class="{'bg-white/15 text-white': route.name === 'home'}"
            >
              Home
            </RouterLink>
          </li>

          <!-- Academics Dropdown -->
          <li class="dropdown dropdown-bottom dropdown-end">
            <div
              tabindex="0"
              role="button"
              class="text-white/90 hover:bg-white/15 hover:text-white rounded-lg text-sm font-medium px-3 py-2 flex items-center gap-1 cursor-pointer" :class="{'bg-white/15 text-white': route.name === 'bscs' || route.name === 'blis'}"
            >
              Academics
              <svg class="w-3 h-3 opacity-75" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                <path d="M1 1l4 4 4-4"/>
              </svg>
            </div>
            <ul tabindex="0" class="dropdown-content menu bg-red-800 text-white z-1 w-64 p-2 shadow-xl mt-1">
              <li><RouterLink :to="{name: 'bscs'}" class="text-sm hover:text-white/50">Bachelor of Science in Computer Science</RouterLink></li>
              <li><RouterLink :to="{name: 'blis'}" class="text-sm hover:text-white/50">Bachelor in Library and Information Science</RouterLink></li>
            </ul>
          </li>

          <!-- People Dropdown -->
          <li class="dropdown  dropdown-bottom dropdown-end">
            <div
              tabindex="0"
              role="button"
              class="text-white/90 hover:bg-white/15 hover:text-white rounded-lg text-sm font-medium px-3 py-2 flex items-center gap-1 cursor-pointer" :class="{'bg-white/15 text-white': route.name === 'full-time' || route.name === 'part-time' || route.name === 'org-struct'}"
            >
              People
              <svg class="w-3 h-3 opacity-75" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                <path d="M1 1l4 4 4-4"/>
              </svg>
            </div>
            <ul tabindex="0" class="dropdown-content menu bg-red-800 text-white z-1 w-52 p-2 shadow-xl mt-1">
              <li><RouterLink :to="{name: 'full-time'}" class="text-sm hover:text-white/50">Full-Time Faculty</RouterLink></li>
              <li><RouterLink :to="{name: 'part-time'}" class="text-sm hover:text-white/50">Part-Time Faculty</RouterLink></li>
              <li><RouterLink :to="{name: 'org-struct'}" class="text-sm hover:text-white/50">Organizational Structure</RouterLink></li>
            </ul>
          </li>

          <!-- Bulletin Dropdown -->
          <li class="dropdown  dropdown-bottom dropdown-end">
            <div
              tabindex="0"
              role="button"
              class="text-white/90 hover:bg-white/15 hover:text-white rounded-lg text-sm font-medium px-3 py-2 flex items-center gap-1 cursor-pointer" :class="{'bg-white/15 text-white': route.name === 'news' || route.name === 'publication' || route.name === 'extension'}"
            >
              Bulletin
              <svg class="w-3 h-3 opacity-75" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                <path d="M1 1l4 4 4-4"/>
              </svg>
            </div>
            <ul tabindex="0" class="dropdown-content menu bg-red-800 text-white z-1 w-56 p-2 shadow-xl mt-1">
              <li><RouterLink :to="{name: 'news'}" class="text-sm hover:text-white/50">News</RouterLink></li>
              <li><RouterLink :to="{name: 'publication'}" class="text-sm hover:text-white/50">Publication</RouterLink></li>
              <li><RouterLink :to="{name: 'extension'}" class="text-sm hover:text-white/50">Extension and Public Service</RouterLink></li>
            </ul>
          </li>

          <!-- About Dropdown -->
          <li class="dropdown  dropdown-bottom dropdown-end">
            <div
              tabindex="0"
              role="button"
              class="text-white/90 hover:bg-white/15 hover:text-white rounded-lg text-sm font-medium px-3 py-2 flex items-center gap-1 cursor-pointer" :class="{'bg-white/15 text-white': route.name === 'vision-mission' || route.name === 'contact'}"
            >
              About
              <svg class="w-3 h-3 opacity-75" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                <path d="M1 1l4 4 4-4"/>
              </svg>
            </div>
            <ul tabindex="0" class="dropdown-content menu bg-red-800 text-white z-1 w-44 p-2 shadow-xl mt-1">
              <li><RouterLink :to="{name: 'vision-mission'}" class="text-sm hover:text-white/50">VGMO</RouterLink></li>
              <li><RouterLink :to="{name: 'contact'}" class="text-sm hover:text-white/50">Contact Us</RouterLink></li>
            </ul>
          </li>

          <!-- Alumni -->
          <li>
            <RouterLink :to="{name: 'alumni'}"
              class="text-white/90 hover:bg-white/15 hover:text-white rounded-lg text-sm font-medium px-3 py-2"
              :class="{'bg-white/15 text-white': route.name === 'alumni'}"
            >
              Alumni
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Mobile Hamburger -->
      <div class="navbar-end lg:hidden">
        <button
          class="btn btn-ghost btn-sm text-white hover:bg-white/15"
          @click="mobileOpen = !mobileOpen"
          :aria-expanded="mobileOpen"
          aria-label="Toggle navigation"
        >
          <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileOpen" class="lg:hidden" style="background-color: #5c0000;">
        <ul class="menu menu-sm w-full p-3 gap-0.5">
          <li>
            <RouterLink :to="{name: 'home'}" class="text-white/90 hover:bg-white/15 hover:text-white font-medium" :class="{'bg-white/15 text-white': route.name === 'home'}">Home</RouterLink>
          </li>

          <li>
            <details>
              <summary class="text-white/90 hover:bg-white/15 hover:text-white font-medium">Academics</summary>
              <ul class="bg-white/10 rounded-lg mt-1">
                <li><RouterLink :to="{name: 'bscs'}" class="text-white/80 hover:text-white text-sm">Bachelor of Science in Computer Science</RouterLink></li>
                <li><RouterLink :to="{name: 'blis'}" class="text-white/80 hover:text-white text-sm">Bachelor in Library and Information Science</RouterLink></li>
              </ul>
            </details>
          </li>

          <li>
            <details>
              <summary class="text-white/90 hover:bg-white/15 hover:text-white font-medium" :class="{'bg-white/15 text-white': route.name === 'full-time' || route.name === 'part-time' || route.name === 'org-struct'}">People</summary>
              <ul class="bg-white/10 rounded-lg mt-1">
                <li><RouterLink :to="{name: 'full-time'}" class="text-white/80 hover:text-white text-sm">Full-Time Faculty</RouterLink></li>
                <li><RouterLink :to="{name: 'part-time'}" class="text-white/80 hover:text-white text-sm">Part-Time Faculty</RouterLink></li>
                <li><RouterLink :to="{name: 'org-struct'}" class="text-white/80 hover:text-white text-sm">Organizational Structure</RouterLink></li>
              </ul>
            </details>
          </li>

          <li>
            <details>
              <summary class="text-white/90 hover:bg-white/15 hover:text-white font-medium" :class="{'bg-white/15 text-white': route.name === 'news' || route.name === 'publication' || route.name === 'extension'}">Bulletin</summary>
              <ul class="bg-white/10 rounded-lg mt-1">
                <li><RouterLink :to="{name: 'news'}" class="text-white/80 hover:text-white text-sm">News</RouterLink></li>
                <li><RouterLink :to="{name: 'publication'}" class="text-white/80 hover:text-white text-sm">Publication</RouterLink></li>
                <li><RouterLink :to="{name: 'extension'}" class="text-white/80 hover:text-white text-sm">Extension and Public Service</RouterLink></li>
              </ul>
            </details>
          </li>

          <li>
            <details>
              <summary class="text-white/90 hover:bg-white/15 hover:text-white font-medium" :class="{'bg-white/15 text-white': route.name === 'vision-mission' || route.name === 'contact'}">About</summary>
              <ul class="bg-white/10 rounded-lg mt-1">
                <li><RouterLink :to="{name: 'vision-mission'}" class="text-white/80 hover:text-white text-sm">VGMO</RouterLink></li>
                <li><RouterLink :to="{name: 'contact'}" class="text-white/80 hover:text-white text-sm">Contact Us</RouterLink></li>
              </ul>
            </details>
          </li>

          <li>
            <RouterLink :to="{name: 'alumni'}" class="text-white/90 hover:bg-white/15 hover:text-white font-medium" :class="{'bg-white/15 text-white': route.name === 'alumni'}">Alumni</RouterLink>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

