import * as React from 'react';

type Props = {
  title: string;
  desc?: string;
  children: React.ReactNode;
};

export default function Title(props: Props) {
  const { title, desc, children } = props;
  return (
    <div className="border border-gray rounded-4 p-5">
      <h2 className="py-4 font-bold text-center border-b-2 border-indigo-200">
        {title}
      </h2>
      <p className="py-2 font-bold text-center border-b-1 border-indigo-200">
        {desc}
      </p>
      <div>{children}</div>
    </div>
  );
}
