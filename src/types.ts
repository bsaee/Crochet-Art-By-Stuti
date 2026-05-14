export enum Category {
  NEWLY_LAUNCHED = 'newly-launched',
  HAIR_ACCESSORIES = 'hair-accessories',
  BAGS = 'bags',
  KEYCHAINS = 'keychains',
  OTHERS = 'others'
}

export interface Product {
  id: string;
  name: string;
  price: number;
  /** One or more categories. Always stored as an array. */
  categories: Category[];
  description: string;
  size: string;
  images: string[];
  createdAt: number;
}
