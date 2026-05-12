<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'BSCS Program', href: '#' },
  { label: 'BLIS Program', href: '#' },
  { label: 'Full-Time Faculty', href: '#' },
  { label: 'News & Updates', href: '#' },
  { label: 'Vision-Mission', href: '#' },
  { label: 'Alumni', href: '#' },
]

const contactInfo = [
  {
    label: 'Address',
    value: 'Gomez St, Maloro, Tangub City',
    icon: `<svg class="w-4 h-4 flex-shrink-0" style="fill:#f5c518" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>`,
  },
  {
    label: 'Email',
    value: 'ics@gadtc.edu.ph',
    icon: `<svg class="w-4 h-4 flex-shrink-0" style="fill:#f5c518" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
  },
  {
    label: 'Phone',
    value: '+63 9683022435',
    icon: `<svg class="w-4 h-4 flex-shrink-0" style="fill:#f5c518" viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`,
  },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61562380613444',
    icon: `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  },
];
</script>

<template>
  <footer class="text-white" style="background-color: #5c0000;">

    <!-- Main Footer Grid -->
    <div class="container mx-auto px-6 lg:px-10 pt-12 pb-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        <!-- Col 1: Institute Info -->
        <div class="flex flex-col gap-4">
          <h3 class="text-xs font-bold uppercase tracking-widest border-b border-white/20 pb-3" style="color: #f5c518;">
            Institute of Computer Studies
          </h3>
          <address class="text-sm text-white/70 not-italic leading-relaxed">
            Tangub City Global College<br />
            Gomez St., Maloro<br />
            Tangub City, Misamis Occidental
          </address>
        </div>

        <!-- Col 2: Quick Links -->
        <div class="flex flex-col gap-4">
          <h3 class="text-xs font-bold uppercase tracking-widest border-b border-white/20 pb-3" style="color: #f5c518;">
            Quick Links
          </h3>
          <ul class="menu menu-sm p-0 gap-0.5">
            <li v-for="link in quickLinks" :key="link.label">
              <a
                :href="link.href"
                class="text-white/70 hover:text-white hover:bg-white/10 text-sm py-1.5 px-2 rounded-md transition-colors"
              >
                <span class="w-1.5 h-1.5 rounded-full inline-block mr-2 flex-shrink-0" style="background-color: #f5c518;"></span>
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Col 3: Contact + Social -->
        <div class="flex flex-col gap-4">
          <h3 class="text-xs font-bold uppercase tracking-widest border-b border-white/20 pb-3" style="color: #f5c518;">
            Contact Us
          </h3>
          <ul class="flex flex-col gap-3">
            <li v-for="contact in contactInfo" :key="contact.label" class="flex items-start gap-3 text-sm text-white/70">
              <span class="mt-0.5 flex-shrink-0" v-html="contact.icon"></span>
              <span>{{ contact.value }}</span>
            </li>
          </ul>

          <h3 class="text-xs font-bold uppercase tracking-widest border-b border-white/20 pb-3 mt-2" style="color: #f5c518;">
            Follow Us
          </h3>
          <div class="flex gap-2 flex-wrap">
            <a
              v-for="social in socialLinks"
              target="_blank"
              :key="social.label"
              :href="social.href"
              :title="social.label"
              class="btn btn-circle btn-sm bg-white/10 border border-white/20 text-white hover:text-white transition-colors"
              style="--btn-hover-bg: #f5c518; --btn-hover-color: #5c0000;"
              @mouseover="e => e.currentTarget.style.backgroundColor = '#f5c518'"
              @mouseleave="e => e.currentTarget.style.backgroundColor = ''"
            >
              <span v-html="social.icon"></span>
            </a>
          </div>
        </div>

        <!-- Col 4: Logo -->
        <div class="flex flex-col items-center justify-start gap-4">
          <h3 class="text-xs font-bold uppercase tracking-widest border-b border-white/20 pb-3 w-full text-center" style="color: #f5c518;">
            &nbsp;
          </h3>
          <div class="avatar placeholder">
            <div
              class="w-20 h-20 rounded-full ring ring-white/25 ring-offset-0 flex items-center justify-center text-xl font-extrabold text-white"
              style="background-color: rgba(255,255,255,0.12);"
            >
              <img src="/Images/ics.png" alt="ICS">
            </div>
          </div>
          <div class="text-center text-white/55 text-xs leading-relaxed">
            Institute of Computer Studies<br />
            Tangub City Global College
          </div>
          <!-- Seal / secondary logo -->
          <div class="avatar placeholder mt-1">
            <div
              class="w-20 h-20 rounded-full ring ring-white/20 ring-offset-0 flex items-center justify-center"
              style="background-color: rgba(255,255,255,0.08);"
            >
              <img src="/Images/tcgc.jpg" alt="TCGC">
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-white/10 mx-6 lg:mx-10"></div>

    <!-- Copyright Bar -->
    <div class="container mx-auto px-6 lg:px-10 py-5">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
        <p>&copy; {{ currentYear }} Institute of Computer Studies, Tangub City Global College. All rights reserved.</p>
        <p>Developed by Christopher Casipong</p>
      </div>
    </div>

  </footer>
</template>

