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
              <p className={styles.textTop}>
                Changes Start
                <br />
                from Small Steps
              </p>
              <p className={styles.textBottom}>
                작은 변화가 가져오는 큰 변화의 흐름에
                <br />
                선두에 선 삼성전자는 책임을 다하며 나아가겠습니다.
              </p>
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
              <p className={styles.textTop}>
                글로벌 IT 리더, 삼성전자
                <br />
                우리는 끊임없이
                <br />새 길을 여는 개척자입니다
              </p>
              <p className={styles.textBottom}>
                혁신성과 지속가능성을 동시에 갖춘 제품을
                <br />
                세상에 선보여 고객에게 더 나은 미래를 선물하겠습니다.
              </p>
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
              <p className={styles.textTop}>
                지속가능한
                <br />
                미래를 위한 삼성전자의 여정,
                <br />
                그리고 새로운 미래 창조
              </p>
              <p className={styles.textBottom}>
                변화는 한 순간에 일어나지 않습니다.
                <br />
                매일의 작은 실천이 모여 지속가능한 삶을 이루는 것,
                <br />
                이것이 우리의 지속가능성입니다.
              </p>
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
