import SectionTitle from "../../../components/Common/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Reviews.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  console.log(reviews);

  return (
    <section className="testimonal padding px-2 md:px-4">
      <SectionTitle section_title="Valuable Reviews" />
      <div className="container">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((val, index) => (
              <SwiperSlide key={index}>
                <div className="items shadow bg-[#fcfcfc]">
                  <div className="box flex">
                    <div className="img">
                      <img src={val.reviewer_image} alt="" />
                      <span className="i text-xl p-3 rounded-full">
                        <FaQuoteLeft />
                      </span>
                      {/* <i className="fa fa-quote-left icon"></i> */}
                    </div>
                    <div className="name">
                      <h2 className="text-xl font-bold">{val.reviewer_name}</h2>
                      <span>{val.reviewer_role}</span>
                    </div>
                  </div>
                  <p>{val.review}</p>
                </div>
              </SwiperSlide>
            ))}
          </div>
          {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
