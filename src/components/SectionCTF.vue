<template>
  <section id="section-ctf" class="text-center py-16 bg-cover bg-right-top bg-no-repeat bg-white">
    <div class="md:max-w-screen-xl m-auto text-white flex flex-col md:flex-row px-4 relative">
      <div class="ctf-images mb-8 md:max-w-screen-lg">
        <img src="../assets/ctf-image.png" alt="ctf image" />
      </div>
      <div class="ctf-content md:text-right md:w-2/3 md:pl-20 md:absolute md:right-0">
        <div class="logo block mb-8">
          <a href="javascript:void(0)" class="">
            <img src="../assets/ctf-logo.png" alt="ctf logo" class="inline-block" />
          </a>
        </div>
        <div class="title mb-4 text-2xl lg:text-4xl font-bold">
          <h3 class="uppercase">WANT TO CHALLENGE YOUR SKILL?<br />DARE TO FACE HARDCORE PUZZLE?</h3>
        </div>
        <div class="content text-lg lg:text-2xl">
          <p class="mb-4">Refresh your mind after hard-working times?</p>
          <div class="link">
            <a href="javascript:void(0)"
              class="button rounded-full py-2 px-16 inline-block">Go to Viblo CTF</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#section-ctf {
  background-image: url('../assets/ctf-bg.png');
  @media (min-width: 768px) {
    background-size: 70% 100%;
  }
  .ctf-content {
    @media (min-width: 768px) and (max-width: 1024px) {
      right: 1rem;
    }
    .logo {
      transition: all .2s ease-in-out;
    }
    .link .button {
      background-color: #3ec08d;
    }
  }
}
</style>
