import React from 'react';
import Image from 'next/image';
import IcMenuInfo from '@/ic/ic_menu_info.png';
import IcMenuList from '@/ic/ic_menu_list.png';
import IcMenuStrategy from '@/ic/ic_menu_strategy.png';
import IcMenuJob from '@/ic/ic_menu_job.png';

export default () => (
  <section className="fixed h-screen bg-nav-bg w-40 bg-right bg-no-repeat bg-cover text-navFont flex-col items-center text-center">
    <div className="my-10">
      <Image className="m-auto" src={IcMenuInfo} alt="" width={60} />
      關卡資訊
    </div>
    <div className="mt-10">
      <Image className="m-auto" src={IcMenuList} alt="" width={60} />
      作品列表
    </div>
    <div className="mt-10">
      <Image className="m-auto" src={IcMenuStrategy} alt="" width={60} />
      攻略資源
    </div>
    <div className="mt-10">
      <Image className="m-auto" src={IcMenuJob} alt="" width={60} />
      求職專區
    </div>
    <div className="bg-nav-close-btn w-16 inline-block" />
  </section>
);
