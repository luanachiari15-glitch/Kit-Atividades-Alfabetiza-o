import { useEffect, useRef } from 'react';

export default function WistiaPlayer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Check if Wistia base scripts are already in the head. If not, add them dynamically.
    const script1Id = 'wistia-player-base-script';
    const script2Id = 'wistia-player-embed-script';

    if (!document.getElementById(script1Id)) {
      const script1 = document.createElement('script');
      script1.id = script1Id;
      script1.src = 'https://fast.wistia.com/player.js';
      script1.async = true;
      document.head.appendChild(script1);
    }

    if (!document.getElementById(script2Id)) {
      const script2 = document.createElement('script');
      script2.id = script2Id;
      script2.src = 'https://fast.wistia.com/embed/s2ni44xfbi.js';
      script2.async = true;
      script2.type = 'module';
      document.head.appendChild(script2);
    }
  }, []);

  return (
    <div className="w-full max-w-[340px] sm:max-w-[380px] mx-auto relative group">
      {/* Decorative Outer Ambient Glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 rounded-[32px] blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      
      {/* Phone Case Bezel Wrapper */}
      <div 
        ref={containerRef} 
        className="relative bg-black rounded-[28px] overflow-hidden shadow-2xl border-[6px] border-slate-950 p-1 flex flex-col aspect-[9/16]"
        id="wistia-player-wrapper"
      >
        {/* Dynamic camera punch-hole styling decoration for realism */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-slate-950 rounded-full z-30 flex items-center justify-center">
          <div className="w-2.5 h-2.5 bg-slate-900 rounded-full border border-slate-800"></div>
        </div>

        {/* Outer background element fallback with aspect ratio fit */}
        <div className="w-full h-full rounded-[20px] overflow-hidden bg-slate-950 relative z-20">
          <div 
            className="w-full h-full"
            dangerouslySetInnerHTML={{
              __html: `
                <style>
                  wistia-player[media-id='s2ni44xfbi']:not(:defined) { 
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/s2ni44xfbi/swatch'); 
                    display: block; 
                    filter: blur(5px); 
                    padding-top: 177.78%; 
                  }
                  wistia-player {
                    border-radius: 20px !important;
                    overflow: hidden !important;
                  }
                </style> 
                <wistia-player 
                  media-id="s2ni44xfbi" 
                  aspect="0.5625" 
                  style="width: 100%; height: 100%; display: block;"
                ></wistia-player>
              `
            }}
          />
        </div>
      </div>

      {/* Helper label below the smartphone-bezel */}
      <div className="mt-3.5 bg-slate-100 border border-slate-200/60 rounded-xl py-2 px-3 text-center max-w-[280px] mx-auto shadow-sm select-none">
        <p className="text-slate-600 text-[11px] font-extrabold flex items-center justify-center gap-1.5">
          <span>🔊</span>
          <span>Toque no player acima para ativar o som</span>
        </p>
      </div>
    </div>
  );
}
