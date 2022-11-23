import React from 'react';

export default () => (
  <nav className="fixed flex items-center z-50">
    <input id="menu-control" className="peer hidden" type="checkbox" />
    <ul className="relative h-screen bg-navBg w-32 -left-32  bg-no-repeat text-navFont text-center flex-col items-center transition-all duration-300 peer-checked:translate-x-32">
      <li className="my-10 ml-6 pt-16 bg-menu-info bg-menu-size bg-no-repeat bg-top hover:bg-menu-info-h">
        關卡資訊
      </li>
      <li className="mt-10 ml-6 pt-16 bg-menu-list bg-menu-size bg-no-repeat bg-top hover:bg-menu-list-h">
        作品列表
      </li>
      <li className="mt-10 ml-6 pt-16 bg-menu-strategy bg-menu-size bg-no-repeat bg-top hover:bg-menu-strategy-h">
        攻略資源
      </li>
      <li className="mt-10 ml-6 pt-16 bg-menu-job bg-menu-size bg-no-repeat bg-top hover:bg-menu-job-h">
        求職專區
      </li>
      <div className="bg-nav-close-btn w-16 inline-block" />
    </ul>
    <article className="relative -left-32 w-5 h-screen bg-nav-bg bg-cover bg-right transition-all duration-300 peer-checked:translate-x-32" />
    <label htmlFor="menu-control" className="relative w-16 h-16 -ml-px bg-nav-open-btn bg-cover peer-checked:bg-nav-close-btn -left-32 transition-all duration-300 hover:bg-nav-open-btn-h peer-checked:translate-x-32 peer-checked:hover:bg-nav-close-btn-h" />
  </nav>
);
