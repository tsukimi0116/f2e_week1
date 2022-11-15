import React from 'react';
import Image from 'next/image';
import Question1 from '@/main/question_1.png';
import Question2 from '@/main/question_2.png';
import Question3 from '@/main/question_3.png';

export default () => (
  <section className="w-full h-screen bg-secondary pt-10">
    <div className="w-1/2 h-36 pt-3 m-auto bg-75 bg-bg-talking bg-center bg-no-repeat text-primary text-center text-6xl font-bold">
      你是否也有以下困擾
    </div>

    <div className="flex justify-center items-center mt-10 font-bold text-3xl text-center text-titleColor">
      <div className="w-1/4 h-110">
        羨慕別人的酷酷網頁動畫?
        <Image src={Question1} alt="" />
      </div>

      <div className="w-1/4 h-110 mx-5">
        滿足不了同事的許願?
        <Image src={Question2} alt="" />
      </div>

      <div className="w-1/4 h-110">
        動畫技能樹太雜無從下手?
        <Image src={Question3} alt="" />
      </div>
    </div>
  </section>
);
