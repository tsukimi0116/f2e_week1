import React from 'react';

type Props = {
    title: string,
    description?:string,
    children?: JSX.Element,
    className?:string
}

export default ({
  title, description, children, className,
}:Props) => {
  const titleCustomClassName = `${className} w-1/2 h-36 pt-5 m-auto bg-100 bg-bg-talking bg-center bg-no-repeat text-primary text-center text-5xl font-bold opacity-0`;
  const descriptionCustomClassName = `${className} text-2xl text-center text-SecondaryDark font-bold opacity-0`;
  return (
    <section className="w-full h-screen pt-10 fixed top-0">
      <h1 className={titleCustomClassName}>
        {title}
      </h1>
      <p className={descriptionCustomClassName}>
        {description}
      </p>
      {children}
    </section>
  );
};
