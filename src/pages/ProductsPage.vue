<script setup>
import TheHeader from '@/components/layout/TheHeader.vue';
import TheMain from '@/components/layout/TheMain.vue';
import TheSection from '@/components/layout/TheSection.vue';
import PageLanding from '@/components/ui/PageLanding.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
import BaseCard from '@/components/ui/BaseCard.vue';
import BaseGrid from '@/components/ui/BaseGrid.vue';
import NavCard from '@/components/navigation/NavCard.vue';
import FadeTransition from '@/components/ui/FadeTransition.vue';
import { bestGearData, navData, productsData } from '@/data/data';
import { useRoute } from 'vue-router';
import { watch, ref, onBeforeMount } from 'vue';

const route = useRoute();
const productType = ref('');
const products = ref(null);

const initProductsPage = () => {
  const routeName = route.fullPath.replace('/', '');
  productType.value = routeName;
  productsData.forEach((product) => {
    if (product[routeName]) {
      products.value = product[routeName];
    }
  });
};

const shapeLinkPath = (title) => {
  const productName = title.toLowerCase();
  if (productName.includes('wireless')) {
    return productName.split(' ')[0];
  }

  return productName.split(' ').slice(0, -1).join('');
};

watch(route, () => {
  initProductsPage();
});

onBeforeMount(() => initProductsPage());
</script>
<template lang="">
  <TheHeader />
  <TheMain>
    <PageLanding :title="productType" />
    <TheSection>
      <FadeTransition appear>
        <div :key="products" :class="$style.productsWrapper" v-if="products">
          <BaseCard
            v-for="item in products"
            :key="item.id"
            :cardData="{
              title: item.title,
              text: item.description,
              imgMobile: item.images.imgMobile,
              imgTablet: item.images.imgTablet,
              imgAlt: `${item.title} image`,
            }"
            :isProductsPage="true"
            :isNew="item.new"
          >
            <BaseLink
              :path="`${productType.toLowerCase()}/${shapeLinkPath(
                item.title
              )}`"
              >See Product</BaseLink
            >
          </BaseCard>
        </div>
      </FadeTransition>
    </TheSection>
    <TheSection>
      <BaseGrid>
        <NavCard
          v-for="{ title, path, imgSrc } in navData"
          :key="title"
          :title="title"
          :path="path"
          :imgSrc="imgSrc"
        />
      </BaseGrid>
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
<style lang="css" module>
.productsWrapper {
  display: grid;
  gap: 64px;
}

@media (min-width: 901px) {
  .productsWrapper {
    gap: 98px;
    padding-bottom: 48px;
  }
}
</style>
