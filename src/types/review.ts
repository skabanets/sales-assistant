import { ReviewType } from "../interfaces-submodule/enums/upwork-feed/review-type.enum";

export interface IReview {
  comment: string | null;
  type: ReviewType;
}
