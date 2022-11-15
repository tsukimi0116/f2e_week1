import React from 'react';
import Question from '@/components/home/step2/question';

export default () => (
  <section className="w-full h-screen bg-secondary pt-10">
    <div className="w-1/2 h-36 pt-3 m-auto bg-75 bg-bg-talking bg-center bg-no-repeat text-primary text-center text-6xl font-bold">
      你是否也有以下困擾
    </div>
    <Question />
  </section>
);
