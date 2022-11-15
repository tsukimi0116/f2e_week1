import React from 'react';
import Image from 'next/image';
import IcMenuInfo from '@/ic/ic_menu_info.png';
import IcMenuList from '@/ic/ic_menu_list.png';
import IcMenuStrategy from '@/ic/ic_menu_strategy.png';
import IcMenuJob from '@/ic/ic_menu_job.png';

export default () => (
  <div className="fixed flex items-center">
    <section className="h-screen bg-navBg w-32 bg-no-repeat text-navFont flex-col items-center">
      <div className="my-10 ml-12">
        <Image src={IcMenuInfo} alt="" width={60} />
        關卡資訊
      </div>
      <div className="mt-10 ml-12">
        <Image src={IcMenuList} alt="" width={60} />
        作品列表
      </div>
      <div className="mt-10 ml-12">
        <Image src={IcMenuStrategy} alt="" width={60} />
        攻略資源
      </div>
      <div className="mt-10 ml-12">
        <Image src={IcMenuJob} alt="" width={60} />
        求職專區
      </div>
      <div className="bg-nav-close-btn w-16 inline-block" />
    </section>
    <div className="w-5 h-screen bg-nav-bg bg-cover bg-right" />
    <div className="w-16 h-16 bg-nav-close-btn hover:bg-nav-close-btn-h bg-cover -ml-px" />
  </div>
);
