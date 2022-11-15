import React from 'react';
import Image from 'next/image';
import CharacterF2e from '@/character/character_f2e.gif';
import CharacterUi from '@/character/character_ui.gif';
import CharacterTeam from '@/character/character_team.gif';
import Road from '@/main/road.png';

export default () => (
  <>
    <div className="fixed z-50 bottom-0 flex justify-center items-center pl-8 mt-9 w-full">
      <Image src={CharacterF2e} alt="" className="z-10 h-110 w-1/6" />
      <Image src={CharacterUi} alt="" className="z-10 mx-14 h-110 w-1/6" />
      <Image src={CharacterTeam} alt="" className="z-10 h-110 w-1/6" />
      <Image src={Road} alt="" className="w-3/5 m-auto absolute bottom-0 z-0" />
    </div>
    <div className="bg-ready-frame inline-block w-72 h-28 bg-no-repeat bg-contain absolute top-1/2 right-0 z-50" />
  </>
);
