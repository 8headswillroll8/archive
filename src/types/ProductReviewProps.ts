export interface ProductReviewProps {
  reviews: {
    id: string;
    username: string;
    rating: number;
    description: string;
  }[];
}
