import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import LogoText from '@/logo/logo_text.png';
import Decorate1 from '@/bg/bg_decorate_01.png';
import Decorate5 from '@/bg/bg_decorate_05.png';
import RedLight from '@/main/ready_3.png';
import YellowLight from '@/main/ready_2.png';
import GreenLight from '@/main/ready_1.png';
import Attendance from '@/components/home/step1/attendance';

export default () => {
  const sectionRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cloudMove = gsap.timeline({
        scrollTrigger: {
          trigger: '.section2',
          start: 'top 0%',
          end: '+=1200',
          scrub: 1,
        },
      });

      cloudMove
        .to(['.ready-text', '.greenLight', '.yellowLight'], { opacity: 0 })
        .to('.cloudGroup', { scale: 0.8 })
        .to('.yellowLight', { opacity: 1 })
        .to('.cloudGroup', { scale: 0.7 })
        .to('.cloudGroup', { scale: 0.6, opacity: 0 })
        .to(['.greenLight, .go-text'], { opacity: 1 })
        .to(['.traffic-light, .attendance'], { opacity: 0 })
        .to('.main-logo', { opacity: 0 })
        .to('.small-logo', { opacity: 1 });
    });
    return () => ctx.revert();
  }, [sectionRef]);

  return (
    <section ref={sectionRef} className="section1 w-full h-screen bg-secondary fixed">
      <article className="main-logo w-full h-full bg-start-bg bg-no-repeat bg-contain bg-bottom z-20 relative">
        <Image src={LogoText} height={236} className="pt-11 m-auto" alt="" />
        <h1 className="w-72 h-14  m-auto text-title text-center font-bold text-white rounded-full bg-titleColor tracking-wider">互動式網頁設計</h1>
        <Attendance />
      </article>
      <article className="absolute w-full h-full top-0 cloudGroup">
        <Image src={Decorate1} alt="" className="cloud1 absolute bottom-1/3 left-1/8 m-0 w-1/5 z-0" />
        <Image src={Decorate5} alt="" className="cloud2 absolute bottom-1/3  w-1/5 right-1/8 z-0" />
      </article>
      <article className="traffic-light bg-ready-frame inline-block w-72 h-28 bg-no-repeat bg-contain absolute top-1/2 right-0 z-50">
        <h1 className="ready-text text-3xl font-bold text-titleColor absolute -top-10 left-20">Ready?</h1>
        <h1 className="go-text opacity-0 text-3xl font-bold text-titleColor absolute -top-10 left-26">Go!!</h1>
        <Image src={RedLight} alt="" className="redLight absolute w-12 h-12 top-8 left-9" />
        <Image src={YellowLight} alt="" className="yellowLight absolute w-12 h-12 top-8 left-26" />
        <Image src={GreenLight} alt="" className="greenLight absolute w-12 h-12 top-8 left-42" />
      </article>
    </section>
  );
};
