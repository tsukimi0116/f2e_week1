import React from 'react';

export default () => (
  <ul className="attendance flex justify-between item-center mt-14 mx-auto w-1/3">
    <li className="text-center text-2xl text-nav font-bold">
      <h1 className="text-primary">前端工程師</h1>
      <article className="rounded-full text-white bg-primary w-32 h-10 leading-40">
        <i className="icon-ic_users mr-3" />
        920
      </article>
    </li>

    <li className="text-center text-2xl text-nav font-bold">
      <h1 className="text-primary">UI設計師</h1>
      <article className="rounded-full text-white bg-primary w-32 h-10 leading-40">
        <i className="icon-ic_users mr-3" />
        110
      </article>
    </li>

    <li className="text-center text-2xl text-nav font-bold">
      <h1 className="text-primary">團體組</h1>
      <article className="rounded-full text-white bg-primary w-32 h-10 leading-40">
        <i className="icon-ic_users mr-3" />
        41
      </article>
    </li>
  </ul>
);
