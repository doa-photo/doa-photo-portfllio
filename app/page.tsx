import React from "react";
import { Carousel } from "@material-tailwind/react";

export default function CrewPortfolioSlides() {
  return (
    <div className="h-screen w-full bg-black flex items-center justify-center">
      <Carousel
        className="rounded-xl w-full max-w-4xl"
        autoplay={true}
        loop={true}
        transition={{ duration: 1 }}
      >
        <div className="relative">
          <img
            src="/crew1.jpg"
            alt="Crew 1"
            className="h-[80vh] w-full object-cover rounded-xl"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-xl">
            <h2 className="text-xl font-semibold">차분하고 전문적인 분위기</h2>
            <p className="text-sm">공항 로비의 조명이 자연스럽게 인물에 녹아든 포트레이트</p>
          </div>
        </div>
        <div className="relative">
          <img
            src="/crew2.jpg"
            alt="Crew 2"
            className="h-[80vh] w-full object-cover rounded-xl"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-xl">
            <h2 className="text-xl font-semibold">밝고 환한 이미지</h2>
            <p className="text-sm">자연광이 잘 드는 게이트 앞에서의 생기있는 순간</p>
          </div>
        </div>
      </Carousel>
      <div className="absolute top-4 left-4 text-white">
        <h1 className="text-3xl font-bold">DOA | Airline Crew Photographer</h1>
        <p className="text-sm text-gray-300">일상 속 찰나의 단정함을 담는 포토그래퍼</p>
      </div>
    </div>
  );
}