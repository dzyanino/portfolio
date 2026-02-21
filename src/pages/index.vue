<template>
  <div>
    <Header />

    <UMain>
      <Meteor :count="30" class="z-0" />
      <Hero />
      <About id="about" />
      <Skills id="skills" />
      <Contact id="contact" />
    </UMain>

    <USeparator type="solid" class="h-px" />

    <Footer id="footer" />
  </div>
</template>
