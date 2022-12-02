<script setup>
import NavBar from '../navigation/NavBar.vue';
import LogoLink from '..//ui/LogoLink.vue';
import SocialLinks from '../ui/SocialLinks.vue';
import { footerData } from '../../data/data';

const { text, copyright } = footerData;
</script>
<template lang="">
  <footer :class="$style.footer">
    <div :class="$style.footerInner">
      <div :class="$style.footerHeader">
        <LogoLink isFooter />
        <nav-bar isFooter />
      </div>
      <div :class="$style.footerContent">
        <p :class="$style.text">
          {{ text }}
        </p>
        <p :class="$style.copyright">
          {{ copyright }}
        </p>
        <SocialLinks />
      </div>
    </div>
  </footer>
</template>
<style lang="css" module>
.footer {
  width: 100%;
  background-color: var(--bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.footerInner {
  position: relative;
  padding: 72px 0;
  margin-left: 12px;
  margin-right: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
}

.footerInner::before {
  content: '';
  height: 4px;
  width: 100px;
  position: absolute;
  top: 0;
  background-color: var(--color-primary);
}

.footerHeader {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
}

.footerContent {
  display: grid;
  place-items: center;
  gap: 24px;
}

.text {
  color: var(--text-secondary);
  font-size: 1.4rem;
  text-align: center;
  line-height: 1.7;
}

.copyright {
  color: var(--text-secondary);
  font-size: 1.4rem;
  text-align: center;
}

@media (min-width: 375px) {
  .footerInner {
    margin-left: 32px;
    margin-right: 32px;
  }
}

@media (min-width: 500px) {
  .footerHeader {
    align-items: start;
  }

  .footerInner::before {
    left: 0;
  }
  .footerContent {
    grid-template-columns: 1.4fr 0.6fr;
    justify-items: start;
  }

  .text {
    grid-column-start: span 2;
    text-align: start;
  }

  .copyright {
    text-align: start;
    font-weight: 600;
    font-size: 1.6rem;
  }
}

@media (min-width: 733px) {
  .footerHeader {
    flex-direction: row;
    justify-content: space-between;
  }
}

@media (min-width: 1009px) {
  .footerInner {
    max-width: 1200px;
  }
  .footerHeader {
    flex-direction: row;
    justify-content: space-between;
  }

  .footerContent {
    grid-template-columns: repeat(2, 1fr);
    justify-items: start;
  }

  .text {
    grid-column-start: span 1;
  }
}
</style>
