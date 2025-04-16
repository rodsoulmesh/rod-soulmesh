import './App.css';

export default function RodSoulMeshHome() {
  return (
    <div className="min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center px-4"
      style={{ backgroundImage: 'url("/rod-soulmesh-final-background-correct.jpg")' }}>

      {/* Symbol Roda */}
      <img src="/rod-symbol-transparent.png" alt="Rod Symbol" className="w-28 md:w-36 mb-4 animate-pulse" />

      {/* Napis ROD - SOULMESH */}
      <h1 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-green-400 via-teal-300 to-purple-500 bg-clip-text text-transparent drop-shadow-md">
        ROD - SOULMESH
      </h1>

      {/* Runy boczne */}
      <div className="flex justify-between w-full max-w-4xl mt-10">
        <img src="/runa-raido-transparent.png" alt="Raido" className="w-20 md:w-24 animate-fade-in-left" />
        <img src="/runa-othala-final-transparent.png" alt="Othala" className="w-20 md:w-24 animate-fade-in-right" />
      </div>

      {/* Przyciski logowania i rejestracji */}
      <div className="mt-16 flex flex-col items-center gap-4">
        <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-xl shadow-lg font-semibold">
          Log In
        </button>
        <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl shadow-lg font-semibold">
          Register
        </button>
      </div>

      <footer className="mt-20 text-sm text-gray-300">© 2025 Rod-SoulMesh Portal</footer>
    </div>
  );
}
