import React, { useEffect } from 'react';
import useToogle from '../hooks/useToggle';
import TitleLayout from './titleLayout';

export default function UseToogleComponent() {
  const [value, setValue, toggle] = useToogle(false);

  return (
    <TitleLayout title="useToggle">
      <div>useToggle Value is {value.toString()}</div>
      <div className="grid grid-rows-1 grid-flow-col gap-4">
        <button
          className="border border-blue-200 p-[10px] rounded-[4px]"
          onClick={() => setValue()}
        >
          setValue
        </button>

        <button
          className="border border-blue-200 p-[10px] rounded-[4px]"
          onClick={() => toggle(!value)}
        >
          toggle
        </button>
      </div>
    </TitleLayout>
  );
}
