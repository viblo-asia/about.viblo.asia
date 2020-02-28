<template>
  <section id="section-service" class="text-center py-16 bg-cover bg-right-top bg-no-repeat">
    <div class="md:max-w-screen-xl m-auto px-4">
      <div class="section-head text-center">
        <h3 class="uppercase text-4xl">Our <span class="font-black">services</span></h3>
      </div>
      <div class="services-list text-white px-4">
        <div class="service-item py-8 flex flex-row items-center" v-for="(service, index) in dataServices" :key="index" :class="service.code">
          <div class="item-images hidden sm:block sm:w-1/3 md:w-1/2" :class="(index + 1) % 2 !== 0 ? '' : 'md:order-last'">
            <div class="images relative">
              <!-- <div class="image"><img :src="service.logo" :alt="service.title" /></div> -->
              <div class="image" v-for="image in service.images" :key="image">
                <img :src="image" :alt="service.title" />
              </div>
            </div>
          </div>
          <div class="item-content w-full sm:w-2/3 md:w-1/2 text-center sm:text-left pl-4 md:pl-0" :class="(index + 1) % 2 === 0 ? 'md:order-first' : 'md:text-right'">
            <div class="logo"><img class="inline-block max-w-lg w-full" :src="service.logo" :alt="service.title" /></div>
            <div class="title mb-4 text-2xl lg:text-4xl font-bold">
              <!-- <h3 class="uppercase">{{ service.title }}</h3> -->
            </div>
            <div class="description text-lg lg:text-2xl mb-4" v-html="service.description"></div>
            <div class="link">
              <a :href="service.link" class="button rounded-full py-2 px-4 sm:px-16 inline-block">Go to {{ service.title }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      dataServices: [
        {
          title: 'Viblo Code',
          code: 'v-code',
          description: '<h4 class="uppercase font-bold title">Learning to code?<br>Preparing for an interview?</h4><p>Or just want to have fun with challenging problems?</p>',
          logo: require('../assets/code-logo.png'),
          link: 'javascript:void(0)',
          images: [
            require('../assets/code-image.png')
            // require('../assets/code-bg.png')
          ]
        },
        {
          title: 'Viblo CTF',
          code: 'v-ctf',
          description: '<h4 class="uppercase font-bold title">WANT TO CHALLENGE YOUR SKILL?<br>DARE TO FACE HARDCORE PUZZLE?</h4><p>Refresh your mind after hard-working times?</p>',
          logo: require('../assets/ctf-logo.png'),
          link: 'javascript:void(0)',
          images: [
            require('../assets/ctf-image.png')
            // require('../assets/ctf-bg.png')
          ]
        },
        {
          title: 'Viblo CV',
          code: 'v-cv',
          description: '<h4 class="uppercase font-bold title">A GOOD CV makes your life EASIER</h4><p>whereas a Bad CV makes it a disaster</p>',
          logo: require('../assets/cv-logo.svg'),
          link: 'javascript:void(0)',
          images: [
            require('../assets/cv-image.png')
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#section-service {
  background: -moz-linear-gradient(top,  rgba(2,0,46,1) 0%, rgba(2,0,46,0) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top,  rgba(2,0,46,1) 0%,rgba(2,0,46,0) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom,  rgba(2,0,46,1) 0%,rgba(2,0,46,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#02002e', endColorstr='#0002002e',GradientType=0 ); /* IE6-9 */

  .service-item {
    .logo {
      transition: all .2s ease-in-out;
    }
    .link .button {
      background-color: #3ec08d;
    }
  }
}
</style>
