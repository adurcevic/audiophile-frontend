<script setup>
import TheHeader from '@/components/layout/TheHeader.vue';
import PageLanding from '@/components/ui/PageLanding.vue';
import LandingContent from '@/components/ui/LandingContent.vue';
import TheMain from '@/components/layout/TheMain.vue';
import TheSection from '@/components/layout/TheSection.vue';
import BaseGrid from '@/components/ui/BaseGrid.vue';
import FeaturedSpeaker from '@/components/products-home/FeaturedSpeaker.vue';
import FeaturedProducts from '@/components/products-home/FeaturedProducts.vue';
import NavCard from '@/components/navigation/NavCard.vue';
import FeaturedEarphones from '@/components/products-home/FeaturedEarphones.vue';
import BaseCard from '@/components/ui/BaseCard.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
import { navData, bestGearData } from '@/data/data';
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
          v-for="{ title, path, imgSrc } in navData"
          :title="title"
          :path="path"
          :imgSrc="imgSrc"
        />
      </BaseGrid>
    </TheSection>
    <TheSection>
      <FeaturedProducts>
        <FeaturedSpeaker />
      </FeaturedProducts>
      <FeaturedProducts />
      <FeaturedProducts>
        <FeaturedEarphones />
      </FeaturedProducts>
    </TheSection>
    <TheSection>
      <BaseCard
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
