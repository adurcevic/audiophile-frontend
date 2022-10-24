<script setup>
import TheHeader from '../components/layout/TheHeader.vue';
import TheMain from '../components/layout/TheMain.vue';
import TheSection from '../components/layout/TheSection.vue';
import PageLanding from '../components/ui/PageLanding.vue';
import TheFooter from '../components/layout/TheFooter.vue';
import BaseCard from '../components/ui/BaseCard.vue';
import BaseGrid from '../components/ui/BaseGrid.vue';
import NavCard from '../components/navigation/NavCard.vue';
import { bestGearData, navData, productsData } from '../data/data';
import { useRoute } from 'vue-router';
import { watch, ref, onBeforeMount } from 'vue';

const route = useRoute();
const param = ref(route.params.productsName);
const products = ref(null);

const initProductsPage = () => {
  param.value = route.params.productsName;
  productsData.forEach((product) => {
    if (product[param.value]) {
      products.value = product[param.value];
    }
  });
};

watch(route, () => {
  initProductsPage();
});

onBeforeMount(() => initProductsPage());
</script>
<template lang="">
  <TheHeader />
  <TheMain>
    <PageLanding :title="param" />
    <TheSection>
      <div :class="$style.products__wrapper" v-if="products">
        <BaseCard
          v-for="item in products"
          :cardTitle="item.title"
          :cardText="item.description"
          :imgMobile="item.imgMobile"
          :imgTablet="item.imgTablet"
          :isProductsPage="true"
          :imgAlt="`${item.title} image`"
        />
      </div>
    </TheSection>
    <TheSection>
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
      <BaseCard
        cardTitle="Bringing you the "
        emphasizedWord="best "
        restOfTitle="audio gear"
        :cardText="bestGearData.text"
        :imgMobile="bestGearData.imgMobile"
        :imgTablet="bestGearData.imgTablet"
        :imgDesktop="bestGearData.imgDesktop"
        :imgAlt="bestGearData.imgAlt"
      />
    </TheSection>
  </TheMain>
  <TheFooter />
</template>
<style lang="css" module>
.products__wrapper {
  display: grid;
  gap: 64px;
}

@media (min-width: 901px) {
  .products__wrapper {
    gap: 98px;
    padding-bottom: 48px;
  }
}
</style>
