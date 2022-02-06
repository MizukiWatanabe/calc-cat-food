import { Share } from './Share';

export const AnswerBlock = ({ day }) => {
  const TextCase = () => {
    if (0 < day && day <= 10) {
      return (
        <>
          <p className="my-4 text-center">
            残り10日分を下回っています。
            <br />
            早めにご飯を注文しましょう。
          </p>
          <Share
            resultDay={day}
            resultText="残り14日分を下回っています。
            そろそろご飯を注文しましょう。"
          />
        </>
      );
    } else if (11 < day && day <= 14) {
      return (
        <>
          <p className="my-4 text-center">
            残り14日分を下回っています。
            <br />
            そろそろご飯を注文しましょう。
          </p>
          <Share
            resultDay={day}
            resultText="残り14日分を下回っています。
            そろそろご飯を注文しましょう。"
          />
        </>
      );
    } else {
      return (
        <>
          <p className="my-4 text-center">十分な残量があるようです。</p>
          <Share resultDay={day} resultText="十分な残量があるようです。" />
        </>
      );
    }
  };

  return (
    <div className="mt-6">
      <p className="text-center font-bold">
        結果：
        <span className={` ${0 < day && day <= 10 && 'text-red-400'}`}>
          残り約{day}日分
        </span>
      </p>
      {TextCase()}
    </div>
  );
};
