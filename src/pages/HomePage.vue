<script setup>
import TheHeader from '../components/layout/TheHeader.vue';
import PageLanding from '../components/landing/PageLanding.vue';
import LandingContent from '../components/landing/LandingContent.vue';
import TheMain from '../components/layout/TheMain.vue';
import TheSection from '../components/layout/TheSection.vue';
import BaseGrid from '../components/ui/BaseGrid.vue';
import FeaturedContainer from '../components/products-home/FeaturedContainer.vue';
import FeaturedProductA from '../components/products-home/FeaturedProductA.vue';
import FeaturedProductB from '../components/products-home/FeaturedProductB.vue';
import FeaturedProductC from '../components/products-home/FeaturedProductC.vue';
import NavCard from '../components/navigation/NavCard.vue';
import BaseCard from '../components/ui/BaseCard.vue';
import TheFooter from '../components/layout/TheFooter.vue';
import { secondaryNavData, bestGearData } from '../data/data';
import { animateOnScroll } from '../utilis/functions';
import { ref, onMounted, onUnmounted } from 'vue';

const featuredProductA = ref(null);
const featuredProductB = ref(null);
const featuredProductC = ref(null);
const aboutAudiophile = ref(null);

const listenerFn = () => {
  animateOnScroll([
    featuredProductA.value.productRef,
    featuredProductB.value.productRef,
    featuredProductC.value.productRef,
    aboutAudiophile.value.rootRef,
  ]);
};

onMounted(() => window.addEventListener('scroll', listenerFn));
onUnmounted(() => window.removeEventListener('scroll', listenerFn));
</script>
<template>
  <TheHeader />
  <TheMain>
    <PageLanding>
      <LandingContent />
    </PageLanding>
    <TheSection isHomePage>
      <BaseGrid>
        <NavCard
          v-for="{ title, path, imgSrc } in secondaryNavData"
          :title="title"
          :path="path"
          :imgSrc="imgSrc"
        />
      </BaseGrid>
    </TheSection>
    <TheSection isFeaturedProducts>
      <FeaturedContainer
        class="hiddenElementLeft animationStartPosition"
        ref="featuredProductA"
      >
        <FeaturedProductA />
      </FeaturedContainer>
      <FeaturedContainer
        class="hiddenElementRight animationStartPosition"
        ref="featuredProductB"
      >
        <FeaturedProductB />
      </FeaturedContainer>
      <FeaturedContainer
        class="hiddenElementLeft animationStartPosition"
        ref="featuredProductC"
      >
        <FeaturedProductC />
      </FeaturedContainer>
    </TheSection>
    <TheSection>
      <BaseCard
        class="hiddenElementDown animationStartPosition"
        ref="aboutAudiophile"
        :cardData="{
          title: 'Bringing you the ',
          emphasizedWord: 'best ',
          restOfTitle: 'audio gear',
          text: bestGearData.text,
          imgMobile: bestGearData.imgMobile,
          imgTablet: bestGearData.imgTablet,
          imgDesktop: bestGearData.imgDesktop,
          imgAlt: bestGearData.imgAlt,
        }"
      />
    </TheSection>
  </TheMain>
  <TheFooter />
</template>
<style lang=""></style>
