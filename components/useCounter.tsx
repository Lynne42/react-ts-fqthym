import React, { useEffect } from 'react';
import TitleLayout from './titleLayout';
import useCounter from '../hooks/useCounter';

export default function UseBooleanComponent() {
  const { count, increment, decrement, reset, setCount } = useCounter(0);

  return (
    <TitleLayout title="useCounter" desc="当前数据，添加，减少，重置">
      <div className="border border-gray m-2 p-1 rounded-4">
        current count is {count.toString()}
      </div>
      <div className="grid grid-rows-1 grid-flow-col gap-4">
        <button
          className="border border-blue-200 p-5 rounded-[4px]"
          onClick={increment}
        >
          +
        </button>
        <button
          className="border border-blue-200 p-5 rounded-[4px]"
          onClick={decrement}
        >
          -
        </button>
        <button
          className="border border-blue-200 p-5 rounded-[4px]"
          onClick={reset}
        >
          reset
        </button>
      </div>
    </TitleLayout>
  );
}
