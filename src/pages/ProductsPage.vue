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
      <transition
        :enter-active-class="$style.products_enter"
        :leave-active-class="$style.products_leave"
        mode="out-in"
        appear
      >
        <div :key="products" :class="$style.products__wrapper" v-if="products">
          <BaseCard
            v-for="item in products"
            :cardTitle="item.title"
            :cardText="item.description"
            :imgMobile="item.imgMobile"
            :imgTablet="item.imgTablet"
            :isProductsPage="true"
            :imgAlt="`${item.title} image`"
          >
            <BaseLink
              :path="`${productType.toLowerCase()}/${item.title
                .split(' ')
                .slice(0, -1)
                .join('')
                .toLowerCase()}`"
              >See Product</BaseLink
            >
          </BaseCard>
        </div>
      </transition>
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

.products_enter {
  animation: fade 0.3s ease-out;
}
.products_leave {
  animation: fade 0.3s ease-in reverse;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
