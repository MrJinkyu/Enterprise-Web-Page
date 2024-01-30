import React from "react";
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
import { GrPrevious, GrNext, GrLinkDown } from "react-icons/gr";

export default function Slider() {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0} // 슬라이드 사이 여백
        slidesPerView={1} // 한 슬라이드에 보여줄 갯수
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        autoplay={{ delay: 6000 }} // 자동 슬라이드
        loop={{ loop: true }}
        speed={2000}
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
          <video
            src="videos/video1.mp4"
            className={styles.slideItem}
            autoPlay
            muted
            loop
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
          <img
            src="images/image1.jpg"
            alt="회사"
            className={styles.slideItem}
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
          <img
            src="images/image2.avif"
            alt="노트북"
            className={styles.slideItem}
          />
        </SwiperSlide>
        <div className="button-prev-slide">
          <GrPrevious className={styles.prevBtn} />
        </div>
        <div className="button-next-slide">
          <GrNext className={styles.nextBtn} />
        </div>
        <GrLinkDown className={styles.bottomBtn} />
      </Swiper>
    </div>
  );
}
