import React from 'react';

export default () => (
  <nav className="fixed flex items-center z-50">
    <ul className="h-screen bg-navBg w-32 bg-no-repeat text-navFont text-center flex-col items-center">
      <li className="my-10 ml-6 pt-16 bg-menu-info bg-menu-size bg-no-repeat bg-top">
        關卡資訊
      </li>
      <li className="mt-10 ml-6 pt-16 bg-menu-list bg-menu-size bg-no-repeat bg-top">
        作品列表
      </li>
      <li className="mt-10 ml-6 pt-16 bg-menu-strategy bg-menu-size bg-no-repeat bg-top">
        攻略資源
      </li>
      <li className="mt-10 ml-6 pt-16 bg-menu-job bg-menu-size bg-no-repeat bg-top">
        求職專區
      </li>
      <div className="bg-nav-close-btn w-16 inline-block" />
    </ul>
    <article className="w-5 h-screen bg-nav-bg bg-cover bg-right" />
    <article className="w-16 h-16 bg-nav-close-btn hover:bg-nav-close-btn-h bg-cover -ml-px" />
  </nav>
);
