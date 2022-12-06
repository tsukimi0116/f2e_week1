import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Title from '@/components/home/title';
import Question from '@/components/home/step2/question';

export default () => {
  const section2Ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section2Effect = gsap.timeline({
        scrollTrigger: {
          trigger: '.section2',
          start: 'top 0%',
          end: '+=1000',
          scrub: 1,
        },
      });

      section2Effect.to('.section2-Title', { opacity: 1 })
        .fromTo('.question1', { opacity: 0, translateX: -200 }, { opacity: 1, translateX: 0 })
        .to('.question2', { opacity: 1 })
        .fromTo('.question3', { opacity: 0, translateX: 200 }, { opacity: 1, translateX: 0 })
        .to(['.section2-Title', '.question1', '.question2', '.question3'], { opacity: 0 });

      return () => ctx.revert();
    });
  }, [section2Ref]);
  return (
    <section ref={section2Ref} className="section2 w-full h-2vh bg-secondary relative">
      <Title className="section2-Title" title="你是否也有以下困擾">
        <Question />
      </Title>
    </section>
  );
};
