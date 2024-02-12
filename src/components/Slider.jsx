import React, { useRef } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./Slider.module.css";
// import { GrFormPreviousLink, GrFormNextLink, GrLinkDown } from "react-icons/gr";
import {
  CgArrowLongLeft,
  CgArrowLongRight,
  CgArrowLongDown,
} from "react-icons/cg";

export default function Slider() {
  const progressCircle = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
  };
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        autoplay={{ delay: 5000 }}
        loop={{ loop: true }}
        speed={1300}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        <SwiperSlide>
          <div className={styles.slideItemBox1}>
            <div className={styles.text}>
              <span className={styles.textTop}>글로벌 IT 리더, 삼성전자</span>
              <span className={styles.textBottom}>
                인재와 기술을 바탕으로 최고의 제품과 서비스를 창출
              </span>
            </div>
            <img
              src="images/image1.png"
              alt="회사"
              className={styles.slideItem}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slideItemBox2}>
            <div className={styles.text}>
              <span className={styles.textTop}>
                우리는 끊임없이 새로운 길을 여는
              </span>
              <span className={styles.textBottom}>개척자입니다</span>
            </div>
            <video
              src="videos/video1.mp4"
              className={styles.slideItem}
              autoPlay
              muted
              loop
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slideItemBox3}>
            <div className={styles.text}>
              <span className={styles.textTop}>새로운 미래 창조</span>
              <span className={styles.textBottom}>
                삼성전자의 새로운 미래의 창조와 더 나은 세상을 향한 열정
              </span>
            </div>
            <video
              src="videos/video2.mp4"
              className={styles.slideItem}
              autoPlay
              muted
              loop
            />
          </div>
        </SwiperSlide>
        <div className={styles.slideBtnBox}>
          <div className="button-prev-slide">
            {/* <GrFormPreviousLink className={styles.prevBtn} /> */}
            <CgArrowLongLeft className={styles.prevBtn} />
          </div>
          <div className="button-next-slide">
            {/* <GrFormNextLink className={styles.nextBtn} /> */}
            <CgArrowLongRight className={styles.nextBtn} />
          </div>
          <div className={styles.autoplayProgress} slot="container-end">
            <svg
              viewBox="0 0 48 48"
              ref={progressCircle}
              className={styles.progressCircle}
            >
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
          </div>
        </div>
        {/* <GrLinkDown
          className={styles.bottomBtn}
          onClick={() =>
            window.scrollTo({
              top: window.innerHeight, // 현재 화면의 세로 높이인 100vh
              behavior: "smooth", // 부드럽게 스크롤
            })
          }
        /> */}
        <CgArrowLongDown
          className={styles.bottomBtn}
          onClick={() =>
            window.scrollTo({
              top: window.innerHeight, // 현재 화면의 세로 높이인 100vh
              behavior: "smooth", // 부드럽게 스크롤
            })
          }
        />
      </Swiper>
    </div>
  );
}
