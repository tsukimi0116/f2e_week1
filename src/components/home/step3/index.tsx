import React from 'react';
import Group from '@/components/home/step3/group';

export default () => (
  <section className="w-full h-screen bg-secondary pt-10">
    <div className="w-1/2 h-36 pt-3 m-auto bg-100 bg-bg-talking bg-center bg-no-repeat text-primary text-center text-6xl font-bold">
      本屆主題：互動式網頁設計
    </div>
    <p className="text-2xl text-center text-SecondaryDark font-bold">以下兩個角色進行攜手合作</p>
    <Group />
  </section>
);
