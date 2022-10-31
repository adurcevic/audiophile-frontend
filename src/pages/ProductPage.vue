<script setup>
import TheHeader from '@/components/layout/TheHeader.vue';
import TheSection from '@/components/layout/TheSection.vue';
import TheMain from '@/components/layout/TheMain.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
import BaseCard from '@/components/ui/BaseCard.vue';
import NavCard from '@/components/navigation/NavCard.vue';
import BaseGrid from '@/components/ui/BaseGrid.vue';
import BaseBtn from '@/components/ui/BaseBtn.vue';
import CartBtn from '@/components/ui/CartBtn.vue';
import ProductFeatures from '@/components/ui/ProductFeatures.vue';
import ProductGallery from '@/components/ui/ProductGallery.vue';
import RelatedCard from '@/components/ui/RelatedCard.vue';
import { useCartStore } from '@/stores/CartStore';
import { useRoute, useRouter } from 'vue-router';
import { productsData, navData, bestGearData } from '@/data/data';
import { ref, onBeforeMount, watch } from 'vue';

const store = useCartStore();
const { cartItems } = store;
const { addItemToCart } = store;
const router = useRouter();
const route = useRoute();
const productData = ref(null);
const quantity = ref(1);

const increaseQuantity = () => {
  if (quantity.value === 99) return;

  quantity.value++;
};

const decreaseQuantity = () => {
  if (quantity.value === 1) return;

  quantity.value--;
};

const resetQuantity = () => {
  quantity.value = 1;
};

const addToCart = (product) => {
  addItemToCart(product);
  resetQuantity();
};

const goBack = () => router.go(-1);

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
      <div :class="[$style.btnPositioner, $style.return]">
        <BaseBtn @btn-action="goBack" isReturn>Go Back</BaseBtn>
      </div>
      <transition
        :enter-active-class="$style.pageEnter"
        :leave-active-class="$style.pageLeave"
        mode="out-in"
        appear
      >
        <BaseCard
          :key="productData.id"
          :cardData="{
            title: productData.title,
            text: productData.description,
            imgMobile: productData.productImages.productMobileImg,
            imgTablet: productData.productImages.productTabletImg,
            imgDesktop: productData.productImages.productDesktopImg,
            imgAlt: `${productData.title} image`,
            price: productData.price.toLocaleString('en-GB', {
              style: 'currency',
              currency: 'EUR',
            }),
          }"
          :isProductPage="true"
          :is-new="productData.new"
        >
          <div :class="$style.btn__positioner">
            <CartBtn
              :addQuantity="quantity"
              @incrementQty="increaseQuantity"
              @decrementQty="decreaseQuantity"
            />
            <BaseBtn
              @btn-action="
                addToCart({
                  id: productData.id,
                  productName: productData.shortTitle,
                  price: productData.price,
                  quantity,
                  cartImg: productData.cartImg,
                })
              "
              >Add Product</BaseBtn
            >
          </div>
        </BaseCard>
      </transition>
    </TheSection>
    <TheSection>
      <transition
        :enter-active-class="$style.pageEnter"
        :leave-active-class="$style.pageLeave"
        mode="out-in"
        appear
      >
        <ProductFeatures
          :key="productData.productFeatures"
          :text="productData.productFeatures"
          :boxContent="productData.setContent"
        />
      </transition>
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
.btn__positioner {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.return {
  margin-bottom: 48px;
}

.pageEnter {
  composes: fadeEnter from '@/main.module.css';
}
.pageLeave {
  composes: fadeLeave from '@/main.module.css';
}
</style>
