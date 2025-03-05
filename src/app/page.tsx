'use client'

import Image from "next/image";
import { useState } from "react";

function BoardSquare() {
  const [value, setValue] = useState(null);
  function handleClick(){
    console.log('click');
    setValue('R');
  }
  return <button className="boardSquare" onClick={handleClick}>{value}</button>
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        CHECKERS
        <div className="board">
          <div className="boardRow">
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          </div>
          <div className="boardRow">
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          </div>
          <div className="boardRow">
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          </div>
          <div className="boardRow">
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          </div>
          <div className="boardRow">
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          </div>
          <div className="boardRow">
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          </div>
          <div className="boardRow">
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          </div>
          <div className="boardRow">
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          <BoardSquare />
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
