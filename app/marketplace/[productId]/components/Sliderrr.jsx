"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Zoom } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/zoom";
import daata from "./daaata";

export default function Page(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const x = props.Images.length;
  let newArray = props.Images;
  const clonedArray = props.Images.map((item) => item);
  const clonedArray2 = clonedArray.map((item) => item);
  const clonedArray3 = props.Images.map((item) => item);
  const clonedArray4 = props.Images.map((item) => item);
  const clonedArray5 = props.Images.map((item) => item);
  newArray = clonedArray2.concat(
    clonedArray.concat(clonedArray3.concat(clonedArray4.concat(clonedArray5))),
  );

  return (
    <div className="">
      <Swiper
        loop={true}
        autoHeight={true}
        spaceBetween={10}
        navigation={false}
        zoom={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Zoom]}
        className="rounded-lg h-[20px] "
      >
        {newArray.map((image, index) => (
          <SwiperSlide key={index}>
            <div className=" w-full h-full">
              <img
                src={image}
                alt="fck my life"
                className="imaaa h-full rounded-md  object-cover w-full "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        autoHeight={false}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbs w-full h-[300px] rounded-md"
      >
        {newArray.map((image, index) => (
          <SwiperSlide
            key={index}
            className="min-h-[100px] h-full rounded-md mt-2"
          >
            <div className="h-full">
              <img
                src={image}
                alt={`Thumbnail ${index}`}
                className="image rounded-md w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
