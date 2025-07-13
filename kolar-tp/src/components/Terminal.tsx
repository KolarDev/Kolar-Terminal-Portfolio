import { ReactTerminal } from 'react-terminal';

export default function Terminal() {
  const commands = {
    help: 'Available commands: help, about, projects, resume',
    about: 'I am a backend developer passionate about scalable systems.',
    projects: '1. Fintech API  2. ToDo App  3. Event Manager',
    resume: 'Visit /resume.pdf to download my resume.',
  };

  return (
    <ReactTerminal
      prompt="guest@portfolio:~$"
      commands={commands}
      welcomeMessage="Welcome to Abdulbasit's terminal portfolio! Type `help` to begin."
      themes={{
        'custom': {
          themeBGColor: '#000000',
          themeToolbarColor: '#00ff00',
          themeColor: '#00ff00',
          themePromptColor: '#00ff00',
        }
      }}
      theme="custom"
    />
  );
}
