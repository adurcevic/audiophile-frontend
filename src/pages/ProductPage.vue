<script setup>
import TheHeader from '../components/layout/TheHeader.vue';
import TheSection from '../components/layout/TheSection.vue';
import TheMain from '../components/layout/TheMain.vue';
import TheFooter from '../components/layout/TheFooter.vue';
import BaseCard from '../components/ui/BaseCard.vue';
import NavCard from '../components/navigation/NavCard.vue';
import BaseGrid from '../components/ui/BaseGrid.vue';
import BaseBtn from '../components/ui/BaseBtn.vue';
import CartBtn from '../components/cart/CartBtn.vue';
import ProductFeatures from '../components/product/ProductFeatures.vue';
import ProductGallery from '../components/product/ProductGallery.vue';
import RelatedCard from '../components/product/RelatedCard.vue';
import FadeTransition from '../components/transitions/FadeTransition.vue';
import CheckIcon from '../components/icons/CheckIcon.vue';
import { useCartStore } from '../stores/CartStore';
import { useRoute, useRouter } from 'vue-router';
import { secondaryNavData, bestGearData } from '../data/data';
import { productsData } from '../data/productsMock';
import { ref, onBeforeMount, onUnmounted, watch, computed } from 'vue';
import { animateOnScroll } from '../utilis/functions';

const store = useCartStore();
const { cartItems } = store;
const { addItemToCart } = store;
const router = useRouter();
const route = useRoute();
const productData = ref(null);
const quantity = ref(1);
const isAddedToCart = ref(false);
const productFeatures = ref(null);
const productGallery = ref(null);

const btnText = computed(() =>
  isAddedToCart.value ? 'Added to cart' : 'Add to cart'
);

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
  isAddedToCart.value = true;
  setTimeout(() => {
    isAddedToCart.value = false;
  }, 1500);
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

const listenerFn = () => {
  animateOnScroll([
    productFeatures.value.rootRef,
    productGallery.value.rootRef,
  ]);
};

onBeforeMount(() => {
  initProductPage();
  window.addEventListener('scroll', listenerFn);
});
onUnmounted(() => window.removeEventListener('scroll', listenerFn));
</script>
<template lang="">
  <TheHeader />
  <TheMain>
    <TheSection>
      <div class="btnReturn">
        <BaseBtn @btn-action="goBack" isReturn>Go Back</BaseBtn>
      </div>
      <FadeTransition appear>
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
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }),
          }"
          :isProductPage="true"
          :is-new="productData.new"
        >
          <div class="btnPositioner">
            <CartBtn
              :addQuantity="quantity"
              @incrementQty="increaseQuantity"
              @decrementQty="decreaseQuantity"
            />
            <FadeTransition>
              <BaseBtn
                :key="btnText"
                @btn-action="
                  addToCart({
                    id: productData.id,
                    productName: productData.shortTitle,
                    price: productData.price,
                    quantity,
                    cartImg: productData.cartImg,
                  })
                "
                :disabled="isAddedToCart"
                >{{ btnText }}
                <CheckIcon
                  v-if="isAddedToCart"
                  :style="{ marginLeft: '4px' }"
                />
              </BaseBtn>
            </FadeTransition>
          </div>
        </BaseCard>
      </FadeTransition>
    </TheSection>
    <TheSection>
      <ProductFeatures
        class="hiddenElementDown animationStartPosition"
        ref="productFeatures"
        :key="productData.productFeatures"
        :text="productData.productFeatures"
        :boxContent="productData.setContent"
      />
    </TheSection>
    <TheSection>
      <ProductGallery
        :key="productData.id"
        class="hiddenElementDown animationStartPosition"
        ref="productGallery"
        :galleryImgs="productData.galleryImages"
      />
    </TheSection>
    <TheSection title="You may also like">
      <BaseGrid>
        <RelatedCard :related-products="productData.relatedProducts" />
      </BaseGrid>
    </TheSection>
    <TheSection>
      <BaseGrid>
        <NavCard
          v-for="{ title, path, imgSrc } in secondaryNavData"
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
