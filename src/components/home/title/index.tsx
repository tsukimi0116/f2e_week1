import React from 'react';

type Props = {
    title: string,
    description?:string,
    children?: JSX.Element,
    className:string
}

export default ({
  title, description, children, className,
}:Props) => {
  const sectionCustomClassName = `${className} w-full h-screen pt-10 fixed top-0 opacity-0`;
  return (
    <section className={sectionCustomClassName}>
      <h1 className="w-1/2 h-36 pt-3 m-auto bg-100 bg-bg-talking bg-center bg-no-repeat text-primary text-center text-6xl font-bold">
        {title}
      </h1>
      <p className="text-2xl text-center text-SecondaryDark font-bold">
        {description}
      </p>
      {children}
    </section>
  );
};
