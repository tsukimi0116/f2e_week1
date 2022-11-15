import React from 'react';
import Image from 'next/image';
import LogoText from '@/logo/logo_text.png';
import CharacterF2e from '@/character/character_f2e.gif';
import CharacterUi from '@/character/character_ui.gif';
import CharacterTeam from '@/character/character_team.gif';
import Road from '@/main/road.png';
import Decorate1 from '@/bg/bg_decorate_01.png';
import Decorate5 from '@/bg/bg_decorate_05.png';

export default () => (
  <section className="w-full h-full bg-secondary ">
    <div className="w-full h-full bg-start-bg bg-no-repeat bg-contain bg-bottom z-20 relative">
      <Image src={LogoText} height={236} className="pt-11 m-auto" alt="" />
      <div className="w-72 h-14  m-auto text-title text-center font-bold text-white rounded-full bg-titleColor tracking-wider">互動式網頁設計</div>
      <div className="flex justify-center item-center mt-14 w-screen">
        <div className="text-center text-2xl text-nav font-bold">
          <span className="text-primary">前端工程師</span>
          <div className="rounded-full text-white bg-primary w-32 h-10 leading-40">
            <i className="icon-ic_users mr-3" />
            920
          </div>
        </div>

        <div className="text-center text-2xl text-nav font-bold mx-64">
          <span className="text-primary">UI設計師</span>
          <div className="rounded-full text-white bg-primary w-32 h-10 leading-40">
            <i className="icon-ic_users mr-3" />
            110
          </div>
        </div>

        <div className="text-center text-2xl text-nav font-bold">
          <span className="text-primary">團體組</span>
          <div className="rounded-full text-white bg-primary w-32 h-10 leading-40">
            <i className="icon-ic_users mr-3" />
            41
          </div>
        </div>

      </div>

      <div className="flex justify-center items-center pl-8 mt-9 relative w-full">
        <Image src={CharacterF2e} alt="" className="z-10 h-110 w-1/6" />
        <Image src={CharacterUi} alt="" className="z-10 mx-14 h-110 w-1/6" />
        <Image src={CharacterTeam} alt="" className="z-10 h-110 w-1/6" />
        <Image src={Road} alt="" className="w-3/5 m-auto absolute bottom-0 z-0" />
      </div>

      <div className="bg-ready-frame inline-block w-72 h-28 bg-no-repeat bg-contain absolute top-1/2 right-0" />
    </div>
    <Image src={Decorate1} alt="" className="absolute bottom-1/3 left-1/8 m-0 w-1/5 z-0" />
    <Image src={Decorate5} alt="" className="absolute bottom-1/3  w-1/5 right-1/8 z-0" />

  </section>
);
