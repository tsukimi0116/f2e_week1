import React from 'react';
import Image from 'next/image';
import LogoText from '@/logo/logo_text.png';
import Decorate1 from '@/bg/bg_decorate_01.png';
import Decorate5 from '@/bg/bg_decorate_05.png';
import Attendance from '@/components/home/step1/attendance';

export default () => (
  <section className="w-full h-screen bg-secondary">
    <article className="w-full h-full bg-start-bg bg-no-repeat bg-contain bg-bottom z-20 relative">
      <Image src={LogoText} height={236} className="pt-11 m-auto" alt="" />
      <h1 className="w-72 h-14  m-auto text-title text-center font-bold text-white rounded-full bg-titleColor tracking-wider">互動式網頁設計</h1>
      <Attendance />
    </article>
    <Image src={Decorate1} alt="" className="absolute bottom-1/3 left-1/8 m-0 w-1/5 z-0" />
    <Image src={Decorate5} alt="" className="absolute bottom-1/3  w-1/5 right-1/8 z-0" />
  </section>
);
