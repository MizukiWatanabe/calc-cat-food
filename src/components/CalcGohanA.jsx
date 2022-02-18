/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';

import { useRef, useState } from 'react';
import { InputTitle } from './InputTitle';
import { InputLabel } from './InputLabel';
import { AnswerBlock } from './AnswerBlock';

// import { mq } from '../utils/bp';

export const CalcGohanA = () => {
  const inputRefObjectA = useRef(null);
  const inputRefObjectB = useRef(null);
  const start = 0;
  const [calcDay, setCalcDay] = useState(start);
  const [valueShow, setValueShow] = useState(false);

  const handleClick = () => {
    let calcFood =
      inputRefObjectA.current.value / inputRefObjectB.current.value;

    // 値に0が渡ってきたら計算前に止める
    if (
      inputRefObjectA.current.value < 1 ||
      inputRefObjectB.current.value < 1
    ) {
      // console.log('===============');
      // console.log(valueShow');
      alert('入力欄に0以下の値が入力されています。入力値を修正してください。');
      calcFood = false;
    } else if (calcFood < 1) {
      alert(
        '現在のご飯の量を一日の給餌量が上回っています。入力値を確認してください。'
      );
      // console.log(calcFood);
      calcFood = false;
    } else {
    }

    if (calcFood) {
      // 日数を調整
      const adjustDay = Math.trunc(calcFood);
      setCalcDay(adjustDay);
      setValueShow(true);
    } else if (!Number.isFinite(calcFood)) {
      setValueShow(false);
      // console.log(valueShow, 'false');
      // alert("can't");
    } else {
      // 0/20のとき 0なのに20になる
      // alert('omg');
      setValueShow(false);
    }
  };

  return (
    <div className="grid grid-cols-12">
      <form className="col-start-3 col-span-8 md:col-start-2 md:col-span-10">
        <div className="text-center">
          <InputTitle
            title={`ご飯の現在の残量(g)と一日の給餌量(g)から残日数を計算する`}
          />
          <InputLabel label="ご飯の現在の残量(g)">
            <input
              className="border border-gray-400 rounded-sm"
              ref={inputRefObjectA}
              type="number"
              placeholder="g単位で入力してください"
              defaultValue="2000"
              min="1"
              max="20000"
              maxLength="5"
              width="24"
            />
            <span>g</span>
          </InputLabel>
        </div>
        <div className="text-center">
          <InputLabel label="一日の給餌量(g)">
            <input
              className="border border-gray-400 rounded-sm"
              ref={inputRefObjectB}
              type="number"
              placeholder="g単位で入力してください"
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
        {valueShow ? <AnswerBlock day={calcDay} /> : ''}
      </form>
    </div>
  );
};

// const hotpink = css({
//   color: 'green',
//   [mq[0]]: {
//     color: 'blue',
//   },
//   [mq[1]]: {
//     color: 'hotpink',
//   },
// });
