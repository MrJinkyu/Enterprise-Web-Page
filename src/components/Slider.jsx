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
import { GrFormPreviousLink, GrFormNextLink, GrLinkDown } from "react-icons/gr";

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
          <div className={styles.text}>
            <span className={styles.textTop}>
              Our Journey Towards A Sustainable Future
            </span>
            <span className={styles.textBottom}>
              지속 가능한 미래를 위한 삼성전자
            </span>
          </div>

          <img
            src="images/image1.png"
            alt="회사"
            className={styles.slideItem}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.text}>
            <span className={styles.textTop}>
              삼성전자의 사회적 책임을 다하려는 경영원칙은
            </span>
            <span className={styles.textBottom}>
              글로벌 일류기업으로서 삼성전자가 지켜나갈 약속입니다.
            </span>
          </div>
          <video
            src="videos/video3.mp4"
            className={styles.slideItem}
            autoPlay
            muted
            loop
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.text}>
            <span className={styles.textTop}>
              삼성전자는 고객의 삶을 풍요롭게 만들고
            </span>
            <span className={styles.textBottom}>
              세상을 놀라게 할 새로운 문화를 창조합니다.
            </span>
          </div>
          <video
            src="videos/video5.mp4"
            className={styles.slideItem}
            autoPlay
            muted
            loop
          />
        </SwiperSlide>
        <div className={styles.slideBtnBox}>
          <div className="button-prev-slide">
            <GrFormPreviousLink className={styles.prevBtn} />
          </div>
          <div className="button-next-slide">
            <GrFormNextLink className={styles.nextBtn} />
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
        <GrLinkDown
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
