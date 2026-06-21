"use client";

import { useRef } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import css from "./Carousel.module.css";

const team = [
  { id: 1, name: "John Smith", position: "CEO", image: "/team/john.webp" },
  {
    id: 2,
    name: "Emma Wilson",
    position: "Designer",
    image: "/team/emma.webp",
  },
  {
    id: 3,
    name: "Mike Brown",
    position: "Developer",
    image: "/team/mike.webp",
  },
  { id: 4, name: "Anna Lee", position: "Marketing", image: "/team/anna.webp" },
];

export default function Carousel() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className={css.section}>
      <div className={css.controls}>
        <button ref={prevRef} className={css.arrow}>
          ←
        </button>

        <button ref={nextRef} className={css.arrow}>
          →
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        loop
        speed={600}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper: SwiperType) => {
          // важно для refs
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        {team.map((member) => (
          <SwiperSlide key={member.id}>
            <article className={css.card}>
              <Image
                src={member.image}
                alt={member.name}
                fill
                priority={member.id === 1}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={css.image}
              />

              <div className={css.overlay} />

              <div className={css.info}>
                <h3 className={css.name}>{member.name}</h3>
                <p className={css.position}>{member.position}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
