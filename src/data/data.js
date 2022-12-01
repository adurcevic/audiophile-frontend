export const secondaryNavData = [
  {
    title: 'Headphones',
    path: { name: 'headphones' },
    imgSrc: '/src//assets/nav/image-headphones.webp',
  },
  {
    title: 'Speakers',
    path: { name: 'speakers' },
    imgSrc: '/src/assets/nav/image-speakers.webp',
  },
  {
    title: 'Earphones',
    path: { name: 'earphones' },
    imgSrc: '/src/assets/nav/image-earphones.webp',
  },
];

export const navData = [
  { name: 'Home', path: { name: 'home' } },
  { name: 'Headphones', path: { name: 'headphones' } },
  { name: 'Speakers', path: { name: 'speakers' } },
  { name: 'Earphones', path: { name: 'earphones' } },
];

export const bestGearData = {
  text: 'Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.',
  imgMobile: '/src/assets/best-gear/image-best-gear-mobile.webp',
  imgTablet: '/src/assets/best-gear/image-best-gear-tablet.webp',
  imgDesktop: '/src/assets/best-gear/image-best-gear-desktop.webp',
  imgAlt: 'Guy wearing headphones and enjoying music',
};

export const footerData = {
  text: "Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.",
  copyright: 'Copyright 2021. All Rights Reserved',
};

export const billingFormData = [
  { id: 'fullName', type: 'text', label: 'Name', placeholder: 'Alexei Ward' },
  {
    id: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'alexei@mail.com',
  },
  {
    id: 'phoneNumber',
    type: 'text',
    label: ' Phone Number',
    placeholder: '+12025550136',
  },
];

export const shippingFormData = [
  {
    id: 'address',
    type: 'text',
    label: 'Address',
    placeholder: '1137 Williams Avenue',
    wholeRow: true,
  },
  { id: 'zipCode', type: 'text', label: 'Zip Code', placeholder: '10001' },
  { id: 'city', type: 'text', label: 'City', placeholder: 'New York' },
  {
    id: 'country',
    type: 'text',
    label: 'Country',
    placeholder: 'United States',
  },
];

export const paymentFormData = [
  {
    id: 'eMoney',
    type: 'radio',
    label: 'e-Money',
    value: 'eMoney',
    name: 'payment',
    fnValue: true,
  },
  {
    id: 'cash',
    type: 'radio',
    label: 'Cash on Delivery',
    value: 'cash',
    name: 'payment',
    fnValue: false,
  },
];

export const emoneyPaymentData = [
  {
    id: 'eMoneyNumber',
    type: 'text',
    label: 'e-Money Number',
    placeholder: '238521993',
  },
  {
    id: 'eMoneyPin',
    type: 'text',
    label: 'e-Money PIN',
    placeholder: '6891',
  },
];
