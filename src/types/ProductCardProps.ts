export interface ProductCardProps {
  title: string;
  price: number;
  discountedPrice: number;
  image: {
    url: string;
    alt: string;
  };
  rating: number;
  tags: string[];
  review: {
    id: string;
    username: string;
    rating: number;
    description: string;
  }[];
}
