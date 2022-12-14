import React from 'react';
import Image from 'next/image';
import Question1 from '@/main/question_1.png';
import Question2 from '@/main/question_2.png';
import Question3 from '@/main/question_3.png';

export default () => (
  <ul className="flex justify-center items-center mt-10 font-bold text-3xl text-center text-titleColor">
    <li className="question1 w-1/4 h-110">
      羨慕別人的酷酷網頁動畫?
      <Image src={Question1} alt="" />
    </li>

    <li className="question2 w-1/4 h-110 mx-5 opacity-0">
      滿足不了同事的許願?
      <Image src={Question2} alt="" />
    </li>

    <li className="question3 w-1/4 h-110 opacity-0">
      動畫技能樹太雜無從下手?
      <Image src={Question3} alt="" />
    </li>
  </ul>
);
