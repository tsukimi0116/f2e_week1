import React from 'react';
import Image from 'next/image';
import BtnJoinHand from '@/btn/btn_joinHand.gif';
import SmallLogo from '@/logo/logo.png';

export default () => (
  <>
    <Image src={SmallLogo} alt="" className="small-logo top-5 left-10 w-52 h-36 fixed z-40 opacity-0" />
    <article className="w-20 h-20 z-40 fixed top-6 right-6 bg-btn-user bg-no-repeat bg-contain hover:bg-btn-user-h" />
    <article className="w-64 h-40 fixed bottom-8 left-10 z-40 bg-map-bg" />
    <article className="w-14 h-30 fixed bottom-20 right-11 z-40 text-primary font-bold text-center text-2xl">
      JOIN
      <Image src={BtnJoinHand} alt="" className="" />
    </article>
    <article className="w-24 h-12 fixed bottom-4 right-4 z-40 bg-btn-join bg-no-repeat bg-contain hover:bg-btn-join-h" />
  </>
);
