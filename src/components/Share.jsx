import { TwitterShareButton, TwitterIcon } from 'react-share';

export const Share = ({ resultDay, resultText }) => {
  let shareText = `残り:約${resultDay}日分 - ${resultText} | ${document.title}`;
  return (
    <TwitterShareButton
      className="flex items-center"
      url={location.href}
      title={shareText}
    >
      <TwitterIcon size={32} round={true} className="mr-2" />
      結果をツイート
    </TwitterShareButton>
  );
};
