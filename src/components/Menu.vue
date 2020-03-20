<template>
  <div id="links">
    <nav id="menu"
      class="flex items-center justify-between flex-wrap p-4 fixed z-50 w-full transition-all duration-500 ease-in-out"
      :class="{ 'bg-transparent': (headerShow && !showMenu), 'bg-navbar shadow-xl': (!headerShow || showMenu) }"
    >
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <!-- logo -->
        <svg viewBox="0 0 321.74 107.65" xmlns="http://www.w3.org/2000/svg"
          class="fill-current h-7 w-24 mr-2 transition-opacity duration-500 ease-in-out"
          :class="{ 'opacity-0': headerShow }"
        >
          <!-- letter V -->
          <polygon class="cls-1" points="36.74 88.28 49.78 88.28 86.36 0.08 73.25 0 53.4 47.86 32.89 47.86 13.1 0 0 0 36.74 88.28"/>
          <!-- letter I -->
          <rect class="cls-1" x="91.28" y="0.71" width="12.24" height="88.28"/>
          <!-- letter B -->
          <path class="cls-1" d="M161.8,41.65a25.39,25.39,0,0,0,5-5.88,20.75,20.75,0,0,0,2.71-10.65,24.33,24.33,0,0,0-1.87-9.43A22.33,22.33,0,0,0,156.07,3.84,38.1,38.1,0,0,0,139.94.71H116.81V89H142a59.8,59.8,0,0,0,11.05-.81A30.62,30.62,0,0,0,163.63,84h0c7.06-4.44,10.63-11.54,10.63-21.11C174.26,53.12,170.07,46,161.8,41.65ZM151.38,35a18.64,18.64,0,0,1-6.46,1.86,30.8,30.8,0,0,1-3.43.26l-12.44,0v-25h9.38c1.7,0,3.2,0,4.41.11a29.29,29.29,0,0,1,4.37.68,12.59,12.59,0,0,1,7,3.8h0a11.7,11.7,0,0,1,3,8C157.23,29.57,155.31,32.91,151.38,35ZM129.05,48.57h12.62c1.52,0,2.88.11,4.07.22a27.07,27.07,0,0,1,7.54,1.6c5.88,2.42,8.74,6.51,8.74,12.52,0,6.33-2.54,10.46-7.78,12.66A24.43,24.43,0,0,1,147,77.31l-4,.22-14,0Z"/>
          <!-- letter L -->
          <polygon class="cls-1" points="195.45 0.71 183.21 0.71 183.21 88.99 230.35 88.99 230.35 77.59 195.45 77.59 195.45 0.71"/>
          <!-- letter O -->
          <path class="cls-1" d="M308.11,13.12a46.21,46.21,0,0,0-64.36.13,43.49,43.49,0,0,0-13.4,32c0,12.17,4.62,22.76,13.75,31.46a46,46,0,0,0,64-.12,42.69,42.69,0,0,0,13.69-31.78A42.63,42.63,0,0,0,308.11,13.12ZM276,78.25a32.6,32.6,0,0,1-23.5-9.72,31.46,31.46,0,0,1-10-23.24,33,33,0,0,1,9.76-23.87,32.22,32.22,0,0,1,23.74-10,32.6,32.6,0,0,1,23.7,9.86A32.34,32.34,0,0,1,309.6,45a31.85,31.85,0,0,1-10,23.52A32.68,32.68,0,0,1,276,78.25Z"/>
          <!-- the underline -->
          <rect class="cls-1" x="5.24" y="96.58" width="75.88" height="11.07"/>
        </svg>
      </div>
      <div class="block xl:hidden">
        <button class="btn-menu flex items-center px-3 py-2 border rounded text-teal-200 border-blue-200 hover:text-white hover:border-white" @click="showMenu = !showMenu">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div id="menu-items" class="w-full xl:block flex-grow xl:flex xl:items-center xl:w-auto xl:text-right" :class="{ hidden: !showMenu }">
        <div class="text-sm xl:flex-grow font-bold text-white">
          <a
            v-for="(item, index) in dataMenu"
            :key="index"
            :href="`#${item.code}`"
            class="menu-item block mt-4 xl:inline-block xl:mt-0 text-blue-200 hover:text-white mr-4 uppercase text-md"
          >
            {{ item.title }}
          </a>
        </div>
      </div>
    </nav>
    <a
      id="to-top"
      title="Quay về đầu trang"
      href="javascript:void(0)"
      :class="{ 'invisible': headerShow }"
      class=" transition transition-duration-150 ease-in-out fixed rounded-full w-10 h-10 leading-10 text-center font-bold text-white fill-current z-50 bg-blue-500 shadow-xl"
      @click="scrollTo"
    >
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Chevron_up" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
        <path d="M15.484,12.452c-0.436,0.446-1.043,0.481-1.576,0L10,8.705l-3.908,3.747c-0.533,0.481-1.141,0.446-1.574,0  c-0.436-0.445-0.408-1.197,0-1.615c0.406-0.418,4.695-4.502,4.695-4.502C9.43,6.112,9.715,6,10,6s0.57,0.112,0.789,0.335  c0,0,4.287,4.084,4.695,4.502C15.893,11.255,15.92,12.007,15.484,12.452z"/>
      </svg>
    </a>
  </div>
</template>

<script>
import EventBus from '@/includes/event-bus'
import scrollSpy from 'simple-scrollspy'
import menuItems from '@/data/menu-items'

export default {
  methods: {
    scrollTo (el = 'app') {
      document.getElementById(el).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    }
  },

  data () {
    return {
      showMenu: false,
      dataMenu: menuItems,
      headerShow: true
    }
  },

  mounted () {
    EventBus.$on('header-show', status => {
      this.headerShow = status
    })

    scrollSpy(this.$el, {
      menuActiveTarget: 'a.menu-item',
      offset: 100
    })
  }
}
</script>

<style lang="scss">
  #to-top {
    right: 2rem;
    bottom: 2rem;
  }

  #menu-items a {
    color: #71ace3;
    line-height: normal;
  }

  .bg-navbar {
    background-color: #081566;
  }

  .transition-opacity {
    transition-property: opacity;
  }
</style>
