import { News } from "@models/News";

export default interface CarouselItem {
  bigContent: News,
  smallContent: News[]
}