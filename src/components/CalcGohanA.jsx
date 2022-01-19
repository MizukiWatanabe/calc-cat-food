import { useRef, useState } from 'react';
import { InputTitle } from './InputTitle';
import { InputLabel } from './InputLabel';
import { AnswerBlock } from './AnswerBlock';

export const CalcGohanA = () => {
  const inputRefObjectA = useRef(null);
  const inputRefObjectB = useRef(null);
  const start = 0;
  const [text, setText] = useState(start);
  const [valueShow, setValueShow] = useState(false);

  const handleClick = () => {
    let keisan = inputRefObjectA.current.value / inputRefObjectB.current.value;
    const setaaa = Math.trunc(keisan);
    setText(setaaa);
    setValueShow(true);
  };

  return (
    <div className="grid grid-cols-12">
      <form className="col-start-3 col-span-8">
        <div className="text-center">
          <InputTitle title=" 残りのご飯の重さからおよその残りの日数を計算する" />
          <InputLabel label="ご飯の現在の重さ(g)">
            <input
              className="border border-gray-400 rounded-sm"
              ref={inputRefObjectA}
              type="number"
              placeholder="g単位で入力してください"
              id="a"
              defaultValue="2000"
              min="1"
              max="20000"
              maxLength="5"
              width="24"
            />
            g
          </InputLabel>
        </div>
        <div className="text-center">
          <InputLabel label="一日の給餌量(g)">
            <input
              className="border border-gray-400 rounded-sm"
              ref={inputRefObjectB}
              type="number"
              placeholder="g単位で入力してください"
              id="b"
              defaultValue="55"
              min="1"
              max="1000"
              maxLength="4"
              width="24"
            />
            g
          </InputLabel>
        </div>
        <div className="text-center mt-5">
          <button
            className="border text-white p-2 bg-blue-500 rounded-md"
            onClick={handleClick}
            type="button"
          >
            計算する
          </button>
        </div>
        {valueShow ? <AnswerBlock text={text} /> : ''}
      </form>
    </div>
  );
};
