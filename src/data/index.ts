export interface ProductImage {
  light: string;
  dark: string;
}

export interface ProductData {
  name: string;
  description: string;
  images: ProductImage;
  isNew?: boolean;
}

const dummy: ProductData[] = [
  {
    name: 'MacBook Pro 13"',
    description: 'Power.Moves.',
    images: {
      light: 'macbook-pro-light.jpg',
      dark: 'macbook-pro-dark.jpg',
    },
    isNew: true,
  },
  {
    name: 'iPhone 11 Pro',
    description: 'Pro cameras.\nPro display.\nPro performance.',
    images: {
      light: 'iphone-pro-light.jpg',
      dark: 'iphone-pro-dark.jpg',
    },
  },
];

export default dummy;
