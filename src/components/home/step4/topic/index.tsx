import React from 'react';

const brownTagCSS:string = 'py-1 px-6 text-SecondaryDark text-2xl border-solid border-4 rounded-full border-SecondaryDark';
const brownButtonCSS:string = 'block py-2 px-6 rounded-full bg-SecondaryDark text-white text-xl';
const titleCSS:string = 'text-titleColor text-6xl';
const descriptionCSS:string = 'text-primary text-5xl';

export default () => (
  <article className="font-bold">
    <dl className="w-1/2 m-auto">
      <dt className={titleCSS}>WEEK1</dt>
      <dd className={descriptionCSS}>The F2E 活動網站設計</dd>
      <span className={brownTagCSS}>Parallax Scrolling</span>
      <span className={brownTagCSS}>#版塊設計</span>
      <button className={brownButtonCSS}>查看關卡細節</button>
    </dl>

    <dl className="w-1/2 m-auto text-right">
      <dt className={titleCSS}>WEEK2</dt>
      <dd className={descriptionCSS}>今晚，我想來點點簽</dd>
      <span className={brownTagCSS}>Canvas</span>
      <span className={brownTagCSS}>#凱鈿行動科技</span>
      <button className={brownButtonCSS}>查看關卡細節</button>
    </dl>

    <dl className="w-1/2 m-auto">
      <dt className={titleCSS}>WEEK3</dt>
      <dd className={descriptionCSS}>Scrum 新手村</dd>
      <span className={brownTagCSS}>JS draggable</span>
      <span className={brownTagCSS}>#鈦坦科技</span>
      <button className={brownButtonCSS}>查看關卡細節</button>
    </dl>
  </article>
);
