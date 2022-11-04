export const navData = [
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
  { id: 'zipCode', type: 'number', label: 'Zip Code', placeholder: '10001' },
  { id: 'city', type: 'text', label: 'City', placeholder: 'New York' },
  {
    id: 'country',
    type: 'text',
    label: 'Country',
    placeholder: 'United States',
  },
];

export const productsData = [
  {
    headphones: [
      {
        id: 1,
        title: 'XX99 Mark II Headphones',
        shortTitle: 'XX99 Mark II',
        new: true,
        description:
          'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
        cartImg: 'src/assets/cart/image-xx99-mark-two-cart.webp',
        images: {
          imgMobile:
            'src/assets/headphones/xx99-two-headphones/image-xx99-mark-two-mobile.webp',
          imgTablet:
            'src/assets/headphones/xx99-two-headphones/image-xx99-mark-two-tablet.webp',
        },
        productImages: {
          productMobileImg:
            'src/assets/headphones/xx99-two-headphones/image-xx99-mark-two-product-mobile.webp',
          productTabletImg:
            'src/assets/headphones/xx99-two-headphones/image-xx99-mark-two-product-tablet.webp',
          productDesktopImg:
            'src/assets/headphones/xx99-two-headphones/image-xx99-mark-two-product-desktop.webp',
        },
        galleryImages: {
          firstImg: {
            imgMobile:
              'src/assets/headphones/xx99-two-headphones/gallery/image-1-xx99-mark-two-gallery-mobile.webp',
            imgTablet:
              'src/assets/headphones/xx99-two-headphones/gallery/image-1-xx99-mark-two-gallery-tablet.webp',
            imgDesktop:
              'src/assets/headphones/xx99-two-headphones/gallery/image-1-xx99-mark-two-gallery-desktop.webp',
          },
          secondImg: {
            imgMobile:
              'src/assets/headphones/xx99-two-headphones/gallery/image-2-xx99-mark-two-gallery-mobile.webp',
            imgTablet:
              'src/assets/headphones/xx99-two-headphones/gallery/image-2-xx99-mark-two-gallery-tablet.webp',
            imgDesktop:
              'src/assets/headphones/xx99-two-headphones/gallery/image-2-xx99-mark-two-gallery-desktop.webp',
          },
          thirdImg: {
            imgMobile:
              'src/assets/headphones/xx99-two-headphones/gallery/image-3-xx99-mark-two-gallery-mobile.webp',
            imgTablet:
              'src/assets/headphones/xx99-two-headphones/gallery/image-3-xx99-mark-two-gallery-tablet.webp',
            imgDesktop:
              'src/assets/headphones/xx99-two-headphones/gallery/image-3-xx99-mark-two-gallery-desktop.webp',
          },
        },
        price: 2999,
        productFeatures: [
          'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.',
          'The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.',
        ],
        setContent: [
          { quantity: 1, item: 'Headphone unit' },
          { quantity: 2, item: 'Replacement earcups' },
          { quantity: 1, item: 'User manual' },
          { quantity: 1, item: '3.5mm 5m audio cable' },
          { quantity: 1, item: 'Travel Bag' },
        ],
        relatedProducts: [
          {
            title: 'XX99 Mark I',
            imgMobile:
              'src/assets/related-products/xx99-mark-one/image-xx99-mark-one-related-mobile.webp',
            imgTablet:
              'src/assets/related-products/xx99-mark-one/image-xx99-mark-one-related-tablet.webp',
            imgDesktop:
              'src/assets/related-products/xx99-mark-one/image-xx99-mark-one-related-desktop.webp',
            path: '/headphones/xx99marki',
          },
          {
            title: 'XX59',
            imgMobile:
              'src/assets/related-products/xx59/image-xx59-related-mobile.webp',
            imgTablet:
              'src/assets/related-products/xx59/image-xx59-related-tablet.webp',
            imgDesktop:
              'src/assets/related-products/xx59/image-xx59-related-desktop.webp',
            path: '/headphones/xx59',
          },
          {
            title: 'ZX9 Speaker',
            imgMobile:
              'src/assets/related-products/zx9/image-zx9-related-mobile.webp',
            imgTablet:
              'src/assets/related-products/zx9/image-zx9-related-tablet.webp',
            imgDesktop:
              'src/assets/related-products/zx9/image-zx9-related-desktop.webp',
            path: '/speakers/zx9',
          },
        ],
      },
      {
        id: 2,
        title: 'XX99 Mark I Headphones',
        shortTitle: 'XX99 MarkI',
        description:
          'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
        cartImg: 'src/assets/cart/image-xx99-mark-one-cart.webp',
        images: {
          imgMobile:
            'src/assets/headphones/xx99-one-headphones/image-xx99-mark-one-mobile.webp',
          imgTablet:
            'src/assets/headphones/xx99-one-headphones/image-xx99-mark-one-tablet.webp',
        },
        productImages: {
          productMobileImg:
            'src/assets/headphones/xx99-one-headphones/image-xx99-mark-one-product-mobile.webp',
          productTabletImg:
            'src/assets/headphones/xx99-one-headphones/image-xx99-mark-one-product-tablet.webp',
          productDesktopImg:
            'src/assets/headphones/xx99-one-headphones/image-xx99-mark-one-product-desktop.webp',
        },
        galleryImages: {
          firstImg: {
            imgMobile:
              'src/assets/headphones/xx99-one-headphones/gallery/image-1-xx99-mark-one-gallery-mobile.webp',
            imgTablet:
              'src/assets/headphones/xx99-one-headphones/gallery/image-1-xx99-mark-one-gallery-tablet.webp',
            imgDesktop:
              'src/assets/headphones/xx99-one-headphones/gallery/image-1-xx99-mark-one-gallery-desktop.webp',
          },
          secondImg: {
            imgMobile:
              'src/assets/headphones/xx99-one-headphones/gallery/image-2-xx99-mark-one-gallery-mobile.webp',
            imgTablet:
              'src/assets/headphones/xx99-one-headphones/gallery/image-2-xx99-mark-one-gallery-tablet.webp',
            imgDesktop:
              'src/assets/headphones/xx99-one-headphones/gallery/image-2-xx99-mark-one-gallery-desktop.webp',
          },
          thirdImg: {
            imgMobile:
              'src/assets/headphones/xx99-one-headphones/gallery/image-3-xx99-mark-one-gallery-mobile.webp',
            imgTablet:
              'src/assets/headphones/xx99-one-headphones/gallery/image-3-xx99-mark-one-gallery-tablet.webp',
            imgDesktop:
              'src/assets/headphones/xx99-one-headphones/gallery/image-3-xx99-mark-one-gallery-desktop.webp',
          },
        },
        price: 1750,
        productFeatures: [
          'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz',
          'From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.',
        ],
        setContent: [
          { quantity: 1, item: 'Headphone unit' },
          { quantity: 2, item: 'Replacement earcups' },
          { quantity: 1, item: 'User manual' },
          { quantity: 1, item: '3.5mm 5m audio cable' },
        ],
        relatedProducts: [
          {
            title: 'XX99 Mark II',
            imgMobile:
              'src/assets/related-products/xx99-mark-two/image-xx99-mark-two-related-mobile.webp',
            imgTablet:
              'src/assets/related-products/xx99-mark-two/image-xx99-mark-two-related-tablet.webp',
            imgDesktop:
              'src/assets/related-products/xx99-mark-two/image-xx99-mark-two-related-desktop.webp',
            path: '/headphones/xx99markii',
          },
          {
            title: 'XX59',
            imgMobile:
              'src/assets/related-products/xx59/image-xx59-related-mobile.webp',
            imgTablet:
              'src/assets/related-products/xx59/image-xx59-related-tablet.webp',
            imgDesktop:
              'src/assets/related-products/xx59/image-xx59-related-desktop.webp',
            path: '/headphones/xx59',
          },
          {
            title: 'ZX9 Speaker',
            imgMobile:
              'src/assets/related-products/zx9/image-zx9-related-mobile.webp',
            imgTablet:
              'src/assets/related-products/zx9/image-zx9-related-tablet.webp',
            imgDesktop:
              'src/assets/related-products/zx9/image-zx9-related-desktop.webp',
            path: '/speakers/zx9',
          },
        ],
      },
      {
        id: 3,
        title: 'XX59 Headphones',
        shortTitle: 'XX59',
        description:
          'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
        cartImg: 'src/assets/cart/image-xx59-cart.webp',
        images: {
          imgMobile:
            'src/assets/headphones/xx59-headphones/image-xx59-mobile.webp',
          imgTablet:
            'src/assets/headphones/xx59-headphones/image-xx59-tablet.webp',
        },
        productImages: {
          productMobileImg:
            'src/assets/headphones/xx59-headphones/image-xx59-product-mobile.webp',
          productTabletImg:
            'src/assets/headphones/xx59-headphones/image-xx59-product-tablet.webp',
          productDesktopImg:
            'src/assets/headphones/xx59-headphones/image-xx59-product-desktop.webp',
        },
        galleryImages: {
          firstImg: {
            imgMobile:
              'src/assets/headphones/xx59-headphones/gallery/image-1-xx59-gallery-mobile.webp',
            imgTablet:
              'src/assets/headphones/xx59-headphones/gallery/image-1-xx59-gallery-tablet.webp',
            imgDesktop:
              'src/assets/headphones/xx59-headphones/gallery/image-1-xx59-gallery-desktop.webp',
          },
          secondImg: {
            imgMobile:
              'src/assets/headphones/xx59-headphones/gallery/image-2-xx59-gallery-mobile.webp',
            imgTablet:
              'src/assets/headphones/xx59-headphones/gallery/image-2-xx59-gallery-tablet.webp',
            imgDesktop:
              'src/assets/headphones/xx59-headphones/gallery/image-2-xx59-gallery-desktop.webp',
          },
          thirdImg: {
            imgMobile:
              'src/assets/headphones/xx59-headphones/gallery/image-3-xx59-gallery-mobile.webp',
            imgTablet:
              'src/assets/headphones/xx59-headphones/gallery/image-3-xx59-gallery-tablet.webp',
            imgDesktop:
              'src/assets/headphones/xx59-headphones/gallery/image-3-xx59-gallery-desktop.webp',
          },
        },
        price: 899,
        productFeatures: [
          'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.',
          'From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.',
        ],
        setContent: [
          { quantity: 1, item: 'Headphone unit' },
          { quantity: 2, item: 'Replacement earcups' },
          { quantity: 1, item: 'User manual' },
          { quantity: 1, item: '3.5mm 5m audio cable' },
        ],
        relatedProducts: [
          {
            title: 'XX99 Mark II',
            imgMobile:
              'src/assets/related-products/xx99-mark-two/image-xx99-mark-two-related-mobile.webp',
            imgTablet:
              'src/assets/related-products/xx99-mark-two/image-xx99-mark-two-related-tablet.webp',
            imgDesktop:
              'src/assets/related-products/xx99-mark-two/image-xx99-mark-two-related-desktop.webp',
            path: '/headphones/xx99markii',
          },
          {
            title: 'XX99 Mark I',
            imgMobile:
              'src/assets/related-products/xx99-mark-one/image-xx99-mark-one-related-mobile.webp',
            imgTablet:
              'src/assets/related-products/xx99-mark-one/image-xx99-mark-one-related-tablet.webp',
            imgDesktop:
              'src/assets/related-products/xx99-mark-one/image-xx99-mark-one-related-desktop.webp',
            path: '/headphones/xx99marki',
          },
          {
            title: 'ZX9 Speaker',
            imgMobile:
              'src/assets/related-products/zx9/image-zx9-related-mobile.webp',
            imgTablet:
              'src/assets/related-products/zx9/image-zx9-related-tablet.webp',
            imgDesktop:
              'src/assets/related-products/zx9/image-zx9-related-desktop.webp',
            path: '/speakers/zx9',
          },
        ],
      },
    ],
  },
  {
    speakers: [
      {
        id: 4,
        title: 'ZX9 Speaker',
        shortTitle: 'ZX9',
        new: true,
        description:
          'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
        cartImg: 'src/assets/cart/image-zx9-cart.webp',
        images: {
          imgMobile: 'src/assets/speakers/zx9-speaker/image-zx9-mobile.webp',
          imgTablet: 'src/assets/speakers/zx9-speaker/image-zx9-tablet.webp',
        },
        productImages: {
          productMobileImg:
            'src/assets/speakers/zx9-speaker/image-zx9-product-mobile.webp',
          productTabletImg:
            'src/assets/speakers/zx9-speaker/image-zx9-product-tablet.webp',
          productDesktopImg:
            'src/assets/speakers/zx9-speaker/image-zx9-product-desktop.webp',
        },
        galleryImages: {
          firstImg: {
            imgMobile:
              'src/assets/speakers/zx9-speaker/gallery/image-1-zx9-gallery-mobile.webp',
            imgTablet:
              'src/assets/speakers/zx9-speaker/gallery/image-1-zx9-gallery-tablet.webp',
            imgDesktop:
              'src/assets/speakers/zx9-speaker/gallery/image-1-zx9-gallery-desktop.webp',
          },
          secondImg: {
            imgMobile:
              'src/assets/speakers/zx9-speaker/gallery/image-2-zx9-gallery-mobile.webp',
            imgTablet:
              'src/assets/speakers/zx9-speaker/gallery/image-2-zx9-gallery-tablet.webp',
            imgDesktop:
              'src/assets/speakers/zx9-speaker/gallery/image-2-zx9-gallery-desktop.webp',
          },
          thirdImg: {
            imgMobile:
              'src/assets/speakers/zx9-speaker/gallery/image-3-zx9-gallery-mobile.webp',
            imgTablet:
              'src/assets/speakers/zx9-speaker/gallery/image-3-zx9-gallery-tablet.webp',
            imgDesktop:
              'src/assets/speakers/zx9-speaker/gallery/image-3-zx9-gallery-desktop.webp',
          },
        },
        price: 4500,
        productFeatures: [
          'Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).',
          'Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.',
        ],
        setContent: [
          { quantity: 2, item: 'Speaker unit' },
          { quantity: 2, item: 'Speaker cloth panel' },
          { quantity: 1, item: 'User manual' },
          { quantity: 1, item: '3.5mm 10m audio cable' },
          { quantity: 1, item: '10m optical cable' },
        ],
        relatedProducts: [
          {
            title: 'ZX7 Speaker',
            imgMobile:
              'src/assets/related-products/zx7/image-zx7-related-mobile.webp',
            imgTablet:
              'src/assets/related-products/zx7/image-zx7-related-tablet.webp',
            imgDesktop:
              'src/assets/related-products/zx7/image-zx7-related-desktop.webp',
            path: '/speakers/zx7',
          },
          {
            title: 'XX99 Mark I',
            imgMobile:
              'src/assets/related-products/xx99-mark-one/image-xx99-mark-one-related-mobile.webp',
            imgTablet:
              'src/assets/related-products/xx99-mark-one/image-xx99-mark-one-related-tablet.webp',
            imgDesktop:
              'src/assets/related-products/xx99-mark-one/image-xx99-mark-one-related-desktop.webp',
            path: '/headphones/xx99marki',
          },
          {
            title: 'XX59',
            imgMobile:
              'src/assets/related-products/xx59/image-xx59-related-mobile.webp',
            imgTablet:
              'src/assets/related-products/xx59/image-xx59-related-tablet.webp',
            imgDesktop:
              'src/assets/related-products/xx59/image-xx59-related-desktop.webp',
            path: '/headphones/xx59',
          },
        ],
      },
      {
        id: 5,
        title: 'ZX7 Speaker',
        shortTitle: 'ZX7',
        description:
          'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
        cartImg: 'src/assets/cart/image-zx7-cart.webp',
        images: {
          imgMobile: 'src/assets/speakers/zx7-speaker/image-zx7-mobile.webp',
          imgTablet: 'src/assets/speakers/zx7-speaker/image-zx7-tablet.webp',
        },
        productImages: {
          productMobileImg:
            'src/assets/speakers/zx7-speaker/image-zx7-product-mobile.webp',
          productTabletImg:
            'src/assets/speakers/zx7-speaker/image-zx7-product-tablet.webp',
          productDesktopImg:
            'src/assets/speakers/zx7-speaker/image-zx7-product-desktop.webp',
        },
        galleryImages: {
          firstImg: {
            imgMobile:
              'src/assets/speakers/zx7-speaker/gallery/image-1-zx7-gallery-mobile.webp',
            imgTablet:
              'src/assets/speakers/zx7-speaker/gallery/image-1-zx7-gallery-tablet.webp',
            imgDesktop:
              'src/assets/speakers/zx7-speaker/gallery/image-1-zx7-gallery-desktop.webp',
          },
          secondImg: {
            imgMobile:
              'src/assets/speakers/zx7-speaker/gallery/image-2-zx7-gallery-mobile.webp',
            imgTablet:
              'src/assets/speakers/zx7-speaker/gallery/image-2-zx7-gallery-tablet.webp',
            imgDesktop:
              'src/assets/speakers/zx7-speaker/gallery/image-2-zx7-gallery-desktop.webp',
          },
          thirdImg: {
            imgMobile:
              'src/assets/speakers/zx7-speaker/gallery/image-3-zx7-gallery-mobile.webp',
            imgTablet:
              'src/assets/speakers/zx7-speaker/gallery/image-3-zx7-gallery-tablet.webp',
            imgDesktop:
              'src/assets/speakers/zx7-speaker/gallery/image-3-zx7-gallery-desktop.webp',
          },
        },
        price: 3500,
        productFeatures: [
          'Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.',
          'The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.',
        ],
        setContent: [
          { quantity: 2, item: 'Speaker unit' },
          { quantity: 2, item: 'Speaker cloth panel' },
          { quantity: 1, item: 'User manual' },
          { quantity: 1, item: '3.5mm 7.5m audio cable' },
          { quantity: 1, item: '7.5m optical cable' },
        ],
        relatedProducts: [
          {
            title: 'ZX9 Speaker',
            imgMobile:
              'src/assets/related-products/zx9/image-zx9-related-mobile.webp',
            imgTablet:
              'src/assets/related-products/zx9/image-zx9-related-tablet.webp',
            imgDesktop:
              'src/assets/related-products/zx9/image-zx9-related-desktop.webp',
            path: '/speakers/zx9',
          },
          {
            title: 'XX99 Mark I',
            imgMobile:
              'src/assets/related-products/xx99-mark-one/image-xx99-mark-one-related-mobile.webp',
            imgTablet:
              'src/assets/related-products/xx99-mark-one/image-xx99-mark-one-related-tablet.webp',
            imgDesktop:
              'src/assets/related-products/xx99-mark-one/image-xx99-mark-one-related-desktop.webp',
            path: '/headphones/xx99marki',
          },
          {
            title: 'XX59',
            imgMobile:
              'src/assets/related-products/xx59/image-xx59-related-mobile.webp',
            imgTablet:
              'src/assets/related-products/xx59/image-xx59-related-tablet.webp',
            imgDesktop:
              'src/assets/related-products/xx59/image-xx59-related-desktop.webp',
            path: '/headphones/xx59',
          },
        ],
      },
    ],
  },
  {
    earphones: [
      {
        id: 6,
        title: 'YX1 Wireless Earphones',
        shortTitle: 'YX1',
        new: true,
        description:
          'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
        cartImg: 'src/assets/cart/image-yx1-cart.webp',
        images: {
          imgMobile:
            'src/assets/earphones/yx1-earphones/image-yx1-earphones-mobile.webp',
          imgTablet:
            'src/assets/earphones/yx1-earphones/image-yx1-earphones-tablet.webp',
        },
        productImages: {
          productMobileImg:
            'src/assets/earphones/yx1-earphones/image-yx1-product-mobile.webp',
          productTabletImg:
            'src/assets/earphones/yx1-earphones/image-yx1-product-tablet.webp',
          productDesktopImg:
            'src/assets/earphones/yx1-earphones/image-yx1-product-desktop.webp',
        },
        galleryImages: {
          firstImg: {
            imgMobile:
              'src/assets/earphones/yx1-earphones/gallery/image-1-yx1-gallery-mobile.webp',
            imgTablet:
              'src/assets/earphones/yx1-earphones/gallery/image-1-yx1-gallery-tablet.webp',
            imgDesktop:
              'src/assets/earphones/yx1-earphones/gallery/image-1-yx1-gallery-desktop.webp',
          },
          secondImg: {
            imgMobile:
              'src/assets/earphones/yx1-earphones/gallery/image-2-yx1-gallery-mobile.webp',
            imgTablet:
              'src/assets/earphones/yx1-earphones/gallery/image-2-yx1-gallery-tablet.webp',
            imgDesktop:
              'src/assets/earphones/yx1-earphones/gallery/image-2-yx1-gallery-desktop.webp',
          },
          thirdImg: {
            imgMobile:
              'src/assets/earphones/yx1-earphones/gallery/image-3-yx1-gallery-mobile.webp',
            imgTablet:
              'src/assets/earphones/yx1-earphones/gallery/image-3-yx1-gallery-tablet.webp',
            imgDesktop:
              'src/assets/earphones/yx1-earphones/gallery/image-3-yx1-gallery-desktop.webp',
          },
        },
        price: 599,
        productFeatures: [
          'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.',
          'The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.',
        ],
        setContent: [
          { quantity: 2, item: 'Earphone unit' },
          { quantity: 6, item: 'Multi-size earplugs' },
          { quantity: 1, item: 'User manual' },
          { quantity: 1, item: 'USB-C charging cable' },
          { quantity: 1, item: 'Travel pouch' },
        ],
        relatedProducts: [
          {
            title: 'XX99 Mark I',
            imgMobile:
              'src/assets/related-products/xx99-mark-one/image-xx99-mark-one-related-mobile.webp',
            imgTablet:
              'src/assets/related-products/xx99-mark-one/image-xx99-mark-one-related-tablet.webp',
            imgDesktop:
              'src/assets/related-products/xx99-mark-one/image-xx99-mark-one-related-desktop.webp',
            path: '/headphones/xx99marki',
          },
          {
            title: 'XX59',
            imgMobile:
              'src/assets/related-products/xx59/image-xx59-related-mobile.webp',
            imgTablet:
              'src/assets/related-products/xx59/image-xx59-related-tablet.webp',
            imgDesktop:
              'src/assets/related-products/xx59/image-xx59-related-desktop.webp',
            path: '/headphones/xx59',
          },
          {
            title: 'ZX9 Speaker',
            imgMobile:
              'src/assets/related-products/zx9/image-zx9-related-mobile.webp',
            imgTablet:
              'src/assets/related-products/zx9/image-zx9-related-tablet.webp',
            imgDesktop:
              'src/assets/related-products/zx9/image-zx9-related-desktop.webp',
            path: '/speakers/zx9',
          },
        ],
      },
    ],
  },
];
