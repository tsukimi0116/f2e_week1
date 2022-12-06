import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Title from '@/components/home/title';
import Group from '@/components/home/step3/group';

export default () => {
  const section3Ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section2Effect = gsap.timeline({
        scrollTrigger: {
          trigger: '.section3',
          start: 'top 0%',
          end: '+=1000',
          scrub: 1,
        },
      });

      section2Effect.to('.section3-Title', { opacity: 1 })
        .to('.group', { opacity: 1 });

      return () => ctx.revert();
    });
  }, []);
  return (
    <section ref={section3Ref} className="section3 w-full h-2vh bg-secondary relative">
      <Title className="section3-Title" title="本屆主題：互動式網頁設計" description="以下兩個角色進行攜手合作">
        <Group />
      </Title>
    </section>

  );
};
