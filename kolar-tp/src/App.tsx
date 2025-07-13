import Terminal from './components/Terminal';
import Intro from './components/Intro';

export default function App() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-screen bg-black text-green-500 font-mono">
      <div className="w-full md:w-1/2 p-6 flex items-center justify-center border-r border-green-700">
        <Intro /> 
      </div>
      <div className="w-full md:w-1/2 p-6 bg-black border-l border-green-700">
        <Terminal />   
      </div>
    </div>
  );
}
