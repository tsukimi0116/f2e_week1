import React from 'react';
import Image from 'next/image';
import BtnJoin from '@/btn/btn_join.png';

export default () => (
  <ul className="flex justify-center mt-10 items-center font-bold text-3xl text-center text-titleColor">

    <li className="pt-20 w-1/4 h-110 bg-no-repeat bg-top bg-hand hover:bg-btn-join-hand">
      前端工程師
      <Image className="m-auto" width={103} src={BtnJoin} alt="" />
    </li>

    <li className="pt-20 mx-5 w-1/4 h-110 bg-no-repeat bg-top bg-hand hover:bg-btn-join-hand">
      UI設計師
      <Image className="m-auto" width={103} src={BtnJoin} alt="" />
    </li>

    <li className="pt-20 w-1/4 h-110 bg-no-repeat bg-top bg-hand hover:bg-btn-join-hand">
      團體組(UI+前端)
      <Image className="m-auto" width={103} src={BtnJoin} alt="" />
    </li>
  </ul>
);
