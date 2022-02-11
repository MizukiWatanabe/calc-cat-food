import { CalcGohanA } from './components/CalcGohanA';
// import './index.css';

export default function App() {
  return (
    <div className="App bg-orange-300 py-12 h-full">
      <div className="container mx-auto w-5/6 lg:w-2/5 py-6 bg-white rounded-xl">
        <h1 className="text-center font-bold text-xl  mb-4">
          猫のご飯残量計算
        </h1>
        <CalcGohanA />
      </div>
    </div>
  );
}
