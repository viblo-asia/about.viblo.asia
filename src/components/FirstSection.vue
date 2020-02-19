<template>
  <section id="first-section"
    class="relative near-full-height">
    <div id="brand" class="flex flex-col absolute">
      <img src="../assets/logo.svg" alt="Viblo Logo" id="logo" class="mb-3">
      <div class="text-center select-auto"><strong>Free</strong> service for technical knowledge <strong>sharing</strong></div>
    </div>
    <img src="../assets/viblo-pattern-art.svg" alt="Viblo" id="viblo-pattern" class="absolute bottom-0 right-0 opacity-25 blend-screen select-none">
  </section>
</template>

<style lang="scss" scoped>
  #first-section {
    background-image: radial-gradient(#003dbd, #01001e);

    #brand {
      left: 50%;
      top: 32%;
      transform: translateX(-50%);
      color: #7acaff;
      z-index: 2;
    }
  }

  .near-full-height {
    height: 90vh;
  }

  @media (max-width: 800px) {
    .near-full-height {
      height: 45vh;
    }
  }
</style>
