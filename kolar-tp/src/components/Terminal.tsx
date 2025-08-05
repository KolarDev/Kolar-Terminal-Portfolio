import { useRef, useState } from 'react';
import { ReactTerminal } from 'react-terminal';
import Typewriter from 'typewriter-effect';

export default function CustomTerminal() {
  const terminalRef = useRef<unknown>(null); // ref to control terminal output
  const [typedOutput, setTypedOutput] = useState('');
  const [activeTyping, setActiveTyping] = useState(false);

  const runTypewriter = (text: string) => {
    setActiveTyping(true);
    setTypedOutput(''); // Clear before typing
    let finalText = '';

    const interval = setInterval(() => {
      finalText += text[finalText.length];
      setTypedOutput(finalText);
      if (finalText.length >= text.length) {
        clearInterval(interval);
        setActiveTyping(false);
        // push final text into terminal manually
        terminalRef.current?.pushToStdout(text);
      }
    }, 20);
  };

  const commands = {
    help: () => {
      runTypewriter('Available commands: help, about, projects, resume');
      return '';
    },
    about: () => {
      runTypewriter('Backend developer passionate about scalable systems and clean APIs.');
      return '';
    },
    projects: () => {
      runTypewriter('1. Fintech API\n2. ToDo App\n3. Event Manager');
      return '';
    },
    resume: () => {
      runTypewriter('Download resume at: /resume.pdf');
      return '';
    },
    clear: () => {
      terminalRef.current?.clearStdout();
      return '';
    },
  };

  return (
    <div className="text-green-400 text-sm mb-4 font-mono bg-black p-4 rounded border border-green-600 w-full h-full">
      <ReactTerminal
        ref={terminalRef}
        prompt="guest@portfolio:~$"
        commands={commands}
        theme={{
          background: 'black',
          promptSymbolColor: '#22c55e',
          commandColor: '#22c55e',
          outputColor: '#22c55e',
          errorOutputColor: '#f87171',
        }}
        welcomeMessage="Welcome to Abdulbasit's terminal portfolio! Type `help` to begin."
        showControlBar={false}
        hideTopBar={true}
        allowTabs={false}
        autoFocus
      />

      {activeTyping && (
        <div className="whitespace-pre-wrap mt-2">
          <Typewriter
            options={{
              strings: [typedOutput],
              autoStart: true,
              delay: 20,
              cursor: '_',
            }}
          />
        </div>
      )}
    </div>
  );
}


// import { ReactTerminal } from 'react-terminal';
// import Typewriter from 'typewriter-effect';

// export default function Terminal() {
//   const commands = {
//     help: 'Available commands: help, about, projects, resume',
//     about: 'Backend developer passionate about scalable systems and clean APIs.',
//     projects: '1. Fintech API\n2. ToDo App\n3. Event Manager',
//     resume: 'Download resume at: /resume.pdf',
//   };

//   return (
//     <div className="w-full h-full flex flex-col items-start justify-start text-sm text-green-400">
//       <div className="mb-4">
//         <Typewriter
//           options={{
//             delay: 30,
//             cursor: '.',
//           }}
//           onInit={(typewriter) => {
//             typewriter
//               .typeString("Welcome to Abdulbasit's terminal portfolio! Type `help` to begin.")
//               .start();
//           }}
//         />
//       </div>

//       <div className="w-full h-full">
//         <ReactTerminal
//           commands={commands}
//           prompt="guest@portfolio:~$"
//           showControlBar={false}
//           theme="custom"
//           welcomeMessage={''}
//           className="text-sm"
//           themes={{
//             custom: {
//               themeBGColor: '#000000',
//               themeToolbarColor: '#000000',
//               themeColor: '#34D399', // Tailwind green-400
//               themePromptColor: '#34D399',
//             },
//           }}
//         />
//       </div>
//     </div>
//   );
// }
