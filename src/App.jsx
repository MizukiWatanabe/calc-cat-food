import { CalcGohanA } from './components/CalcGohanA';
import './index.css';

export default function App() {
  return (
    <div className="App bg-orange-300 py-12">
      <div className="container mx-auto w-5/6 lg:w-2/5 py-6 bg-white rounded-xl">
        <h1 className="text-center font-bold text-xl  mb-4">
          猫のご飯残量計算
        </h1>
        <CalcGohanA />
        {/* <h2>一日の給餌量(カリカリの量)</h2>
        <input type="number" placeholder="g単位で入力してください" />
        <h2>残りのご飯の重さ</h2>
        <input type="number" placeholder="g単位で入力してください" />
        <h2>ご飯の重さ</h2>
        <input type="number" placeholder="g単位で入力してください" />
        <h2>購入日</h2>
        <input type="date" />
        <div>
          xday =(一袋でまかなえる日数 全量2000g / 一日の量40g )
          -買った日から今日までの日数
          <br />
          残りのご飯の日数=(御飯のフルの量/一日の量で日数が出る)ー買った日からの日数
        </div> */}
      </div>
    </div>
  );
}
