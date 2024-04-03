// "use client";
// import { fromJSON } from "postcss";
// import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
// import React, { FC, useState } from "react";
// interface ImageSliderProps {
//   Images: { Images: string[]; Color: string }[];
// }
// const ImageSlider: FC<ImageSliderProps> = ({ Images }: ImageSliderProps) => {
//   let [selectedColor, setSelectedColor] = useState<{
//     Images: string[];
//     Color: string;
//   }>(Images[0]);
//   return (
//     <div className="w-screen h-[100vh]">
//       <Splide
//         aria-label="My Favorite Images"
//         options={{
//           type: "loop",
//           perPage: 1,
//           arrows: true,
//           gap: 0,
//           pagination: false,
//           drag: "free",
//         }}
//       >
//         {selectedColor.Images.map((e, i) => {
//           return (
//             <SplideSlide key={e}>
//               {/* <img src={e} alt="" className="w-full h-full object-fill" /> */}
//             </SplideSlide>
//           );
//         })}
//       </Splide>
//     </div>
//   );
// };

// export default ImageSlider;
