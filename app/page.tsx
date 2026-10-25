'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [playing, setPlaying] = useState(false);
  const [liked, setLiked] = useState(false);
  const [progress, setProgress] = useState(30);
  const [greeting, setGreeting] = useState('Good afternoon');

  useEffect(() => {
    const h = new Date().getHours();
    setGreeting(h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening');
  }, []);

  const cards = [
    { title: 'Midnight City', artist: 'M83', img: 'https://placehold.co/150x150/00f0ff/03030a?text=MC' },
    { title: 'Neon Glow', artist: 'Glass Waves', img: 'https://placehold.co/150x150/b300ff/03030a?text=NG' },
    { title: 'Floating', artist: 'Air Drift', img: 'https://placehold.co/150x150/ff0090/03030a?text=FL' },
  ];

  return (
    <div className="min-h-screen bg-deep-blue text-white font-sans overflow-hidden select-none flex flex-col">
      {/* Header */}
      <header className="h-16 flex items-center gap-3 px-6 bg-[#03030a]/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
        <span className="text-2xl text-[#00f0ff] drop-shadow-[0_0_10px_rgba(0,240,255,0.6)]">◆</span>
        <h1 className="text-xl font-extrabold tracking-tight">0xm4ngli music</h1>
      </header>

      <div className="flex-1 flex overflow-hidden p-2 pb-0 gap-2">
        {/* Sidebar */}
        <nav className="w-[72px] lg:w-[240px] flex-shrink-0 flex flex-col gap-2 h-full">
          <div className="glass rounded-2xl p-4 flex flex-col gap-4 h-full">
            <a href="#" className="flex items-center gap-3 hover:text-[#00f0ff] transition-colors">
              <i className="fa-solid fa-house text-xl w-6 text-center text-[#00f0ff]" />
              <span className="hidden lg:block font-bold text-sm">Home</span>
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-[#00f0ff] transition-colors">
              <i className="fa-solid fa-magnifying-glass text-xl w-6 text-center" />
              <span className="hidden lg:block font-bold text-sm">Search</span>
            </a>
            <div className="h-px bg-white/10 my-1" />
            <a href="#" className="flex items-center gap-3 hover:text-[#00f0ff] transition-colors">
              <i className="fa-solid fa-book text-xl w-6 text-center" />
              <span className="hidden lg:block font-bold text-sm">Library</span>
            </a>
          </div>
        </nav>

        {/* Main */}
        <main className="flex-1 bg-[#03030a]/60 rounded-3xl overflow-y-auto relative border border-white/5" id="main-view">
          <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-[#0a0a2e] via-[#03030a]/80 to-transparent z-0 pointer-events-none" />

          <div className="relative z-10 px-6 pt-6 pb-28">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2">{greeting}</h1>
            <p className="text-sm text-white/40 mb-10">Neon glowy floating minimal experience</p>

            {/* Top floating grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {[
                { label: 'Liked Songs', img: 'https://placehold.co/80x80/00f0ff/03030a?text=LS' },
                { label: 'Daily Mix', img: 'https://placehold.co/80x80/b300ff/03030a?text=DM' },
                { label: 'Discover Weekly', img: 'https://placehold.co/80x80/ff0090/03030a?text=DW' },
                { label: 'Release Radar', img: 'https://placehold.co/80x80/00f0ff/03030a?text=RR' },
              ].map((item, i) => (
                <a key={i} href="#" className="glass float-slow rounded-2xl p-4 flex items-center gap-4 hover:bg-white/5 transition-all">
                  <img src={item.img} className="w-14 h-14 rounded-xl shadow-[0_0_15px_rgba(0,240,255,0.15)]" alt={item.label} />
                  <span className="font-bold text-sm">{item.label}</span>
                </a>
              ))}
            </div>

            {/* Sections */}
            <div className="mb-8">
              <div className="flex items-end justify-between mb-4"><h2 className="text-2xl font-bold tracking-tight">Made For You</h2></div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {cards.map((c, i) => (
                  <a key={i} href="#" className="glass float-medium rounded-2xl p-4 hover:bg-white/5 transition-all group">
                    <div className="relative mb-3">
                      <img src={c.img} className="w-full aspect-square object-cover rounded-xl shadow-[0_0_20px_rgba(0,240,255,0.1)]" alt={c.title} />
                      <button className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-[#00f0ff] text-[#03030a] flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-[0_0_20px_rgba(0,240,255,0.5)]"><i className="fa-solid fa-play ml-0.5" /></button>
                    </div>
                    <h3 className="font-bold truncate text-white">{c.title}</h3>
                    <p className="text-xs text-white/50 truncate">{c.artist}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Minimal player */}
      <footer className="h-20 bg-[#03030a]/80 backdrop-blur-xl border-t border-white/5 flex items-center justify-between px-6 z-50">
        <div className="w-[30%] flex items-center gap-3">
          <img src="https://placehold.co/56x56/00f0ff/03030a?text=NG" className="w-14 h-14 rounded-xl shadow-[0_0_15px_rgba(0,240,255,0.15)]" alt="Track" />
          <div>
            <a href="#" className="text-white text-sm font-bold hover:text-[#00f0ff]">Midnight City</a>
            <a href="#" className="text-xs text-white/40">M83</a>
          </div>
        </div>
        <div className="max-w-[500px] w-[40%] flex flex-col items-center gap-2">
          <div className="flex items-center gap-4 text-[#00f0ff]/80 text-sm">
            <button onClick={() => setPlaying(!playing)}><i className={playing ? 'fa-solid fa-pause' : 'fa-solid fa-play'} /></button>
            <button><i className="fa-solid fa-backward-step" /></button>
            <button><i className="fa-solid fa-forward-step" /></button>
          </div>
          <div className="w-full flex items-center gap-2 text-[10px] text-white/40">
            <span>1:24</span>
            <input type="range" min={0} max={100} value={progress} onChange={e => setProgress(Number(e.target.value))} className="w-full h-1 bg-white/10 rounded-full appearance-none" style={{ background: `linear-gradient(to right, #00f0ff ${progress}%, #4d4d4d ${progress}%)` }} />
            <span>4:03</span>
          </div>
        </div>
        <div className="w-[30%] flex items-center justify-end gap-2 text-[#00f0ff]/80 text-sm">
          <i className="fa-solid fa-volume-high" />
        </div>
      </footer>
    </div>
  );
}
