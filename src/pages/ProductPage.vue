<script setup>
import TheHeader from '../components/layout/TheHeader.vue';
import TheSection from '../components/layout/TheSection.vue';
import TheMain from '../components/layout/TheMain.vue';
import TheFooter from '../components/layout/TheFooter.vue';
import BaseCard from '../components/ui/BaseCard.vue';
import NavCard from '../components/navigation/NavCard.vue';
import BaseGrid from '../components/ui/BaseGrid.vue';
import BaseBtn from '../components/ui/BaseBtn.vue';
import CartBtn from '../components/ui/CartBtn.vue';
import ProductFeatures from '../components/ui/ProductFeatures.vue';
import ProductGallery from '../components/ui/ProductGallery.vue';
import RelatedCard from '../components/ui/RelatedCard.vue';
import { useRoute } from 'vue-router';
import { productsData, navData, bestGearData } from '../data/data';
import { ref, onBeforeMount, watch } from 'vue';

const route = useRoute();
const productData = ref(null);

const initProductPage = () => {
  const routeName = route.path.replace('/', '').split('/').shift();
  const productType =
    routeName === 'speakers' ? routeName.slice(0, -1) : routeName;
  const productName = route.params.productName;

  productsData.forEach((product) => {
    if (product[routeName]) {
      productData.value = product[routeName].find((item) => {
        const shapedTitle = item.title
          .toLowerCase()
          .replaceAll(' ', '')
          .replace(productType, '');

        return (
          shapedTitle === productName ||
          shapedTitle === `${productName}wireless`
        );
      });
    }
  });
};

watch(route, () => {
  initProductPage();
});

onBeforeMount(() => initProductPage());
</script>
<template lang="">
  <TheHeader />
  <TheMain>
    <TheSection>
      <transition
        :enter-active-class="$style.page_enter"
        :leave-active-class="$style.page_leave"
        mode="out-in"
        appear
      >
        <BaseCard
          :key="productData.id"
          :cardTitle="productData.title"
          :cardText="productData.description"
          :imgMobile="productData.productImages.productMobileImg"
          :imgTablet="productData.productImages.productTabletImg"
          :imgDesktop="productData.productImages.productDesktopImg"
          :imgAlt="`${productData.title} image`"
          :isProductPage="true"
          :is-new="productData.new"
          :price="
            productData.price.toLocaleString('en-GB', {
              style: 'currency',
              currency: 'EUR',
            })
          "
        >
          <div :class="$style.btn__positioner">
            <CartBtn />
            <BaseBtn>Add Product</BaseBtn>
          </div>
        </BaseCard>
      </transition>
    </TheSection>
    <TheSection>
      <ProductFeatures
        :text="productData.productFeatures"
        :boxContent="productData.setContent"
      />
    </TheSection>
    <TheSection>
      <ProductGallery :galleryImgs="productData.galleryImages" />
    </TheSection>
    <TheSection title="You may also like">
      <BaseGrid>
        <RelatedCard :related-products="productData.relatedProducts" />
      </BaseGrid>
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
.btn__positioner {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.page_enter {
  animation: fade 0.3s ease-out;
}
.page_leave {
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
