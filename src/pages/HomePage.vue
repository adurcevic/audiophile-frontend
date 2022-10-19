<script setup>
import TheHeader from '../components/layout/TheHeader.vue';
import PageLanding from '../components/ui/PageLanding.vue';
import LandingContent from '../components/ui/LandingContent.vue';
import TheMain from '../components/layout/TheMain.vue';
import TheSection from '../components/layout/TheSection.vue';
import SecondaryNav from '../components/navigation/SecondaryNav.vue';
</script>
<template>
  <the-header> </the-header>
  <the-main>
    <page-landing>
      <landing-content></landing-content>
    </page-landing>
    <the-section>
      <secondary-nav></secondary-nav>
    </the-section>
  </the-main>
</template>
<style lang="css" module></style>
