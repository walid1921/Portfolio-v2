"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

type ImageSliderProps = {
  data: {
    id: number;
    imgUrl: string;
    category: string;
  }[];
};

export default function MySwiper({ data }: ImageSliderProps) {
  return (
    <div className="w-full h-auto">
      <Swiper
      
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        navigation
        speed={800}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full overflow-hidden h-full">
              <Image
                src={item.imgUrl}
                alt={item.category}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
