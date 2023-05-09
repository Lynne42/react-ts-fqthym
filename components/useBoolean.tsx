import React, { useEffect } from 'react';
import TitleLayout from './titleLayout';
import useBoolean from '../hooks/useBoolean';

export default function UseBooleanComponent() {
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);

  return (
    <TitleLayout title="useBoolean">
      <div>Value is {value.toString()}</div>
      <div className="grid grid-rows-1 grid-flow-col gap-4">
        <button
          className="border border-blue-200 p-[10px] rounded-[4px]"
          onClick={setTrue}
        >
          setTrue
        </button>
        <button
          className="border border-blue-200 p-[10px] rounded-[4px]"
          onClick={setFalse}
        >
          setFalse
        </button>
        <button
          className="border border-blue-200 p-[10px] rounded-[4px]"
          onClick={toggle}
        >
          toggle
        </button>
      </div>
    </TitleLayout>
  );
}
