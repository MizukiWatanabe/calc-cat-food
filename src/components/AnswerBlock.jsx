export const AnswerBlock = ({ text }) => {
  const TextCase = () => {
    if (0 < text && text <= 10) {
      return (
        <p className="my-4 text-center">
          残り10日分を下回っています。
          <br />
          早めにご飯を注文しましょう。
        </p>
      );
    } else if (11 < text && text <= 14) {
      return (
        <p className="my-4 text-center">
          残り14日分を下回っています。
          <br />
          そろそろご飯を注文しましょう。
        </p>
      );
    } else {
      return <p className="my-4 text-center">十分な残量があるようです。</p>;
    }
  };

  return (
    <div className="mt-6">
      <p id="c" className="text-center font-bold">
        結果：
        <span className={` ${0 < text && text <= 10 && 'text-red-400'}`}>
          残り約{text}日分
        </span>
      </p>
      {TextCase()}
    </div>
  );
};
