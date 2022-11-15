import React from 'react';
import Image from 'next/image';
import BtnJoin from '@/btn/btn_join.png';

export default () => (
  <div className="flex justify-center mt-10 items-center font-bold text-3xl text-center text-titleColor">

    <div className="relative pt-20 w-1/4 h-110 bg-btn-join-hand bg-no-repeat bg-top bg-hand">
      前端工程師
      <Image className="m-auto" width={103} src={BtnJoin} alt="" />
    </div>

    <div className="w-1/4 h-110 mx-5 pt-20">
      UI設計師
      <Image className="m-auto" width={103} src={BtnJoin} alt="" />
    </div>

    <div className="w-1/4 h-110 pt-20">
      團體組(UI+前端)
      <Image className="m-auto" width={103} src={BtnJoin} alt="" />
    </div>
  </div>
);
