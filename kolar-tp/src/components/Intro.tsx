
import profile from '../assets/profile.jpg';

export default function Intro() {
  return (
    <div className="text-center">
      <img
        src={profile}
        alt="Profile"
        className="w-32 h-32 rounded-full border-2 border-green-500 mx-auto mb-4 shadow-lg hover:scale-105 transition-transform"
      />
      <h1 className="text-2xl md:text-3xl font-bold">Abdulbasit Muhyideen</h1>
      <p className="mt-2 text-lg text-green-400">Backend Developer | Node.js | Express | MongoDB</p>
      <p className="mt-4 max-w-sm mx-auto">
        Passionate about building reliable backend systems and APIs. Love solving problems and exploring tech.
      </p>
    </div>
  );
}

