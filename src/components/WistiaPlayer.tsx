import React, { useEffect, useRef } from 'react';

const WistiaPlayer = React.memo(function WistiaPlayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    // Inject the player elements exactly once on mount, preventing any re-evaluations
    if (initializedRef.current || !containerRef.current) return;
    initializedRef.current = true;

    containerRef.current.innerHTML = `
      <style>
        wistia-player[media-id='9v42woahfg']:not(:defined) { 
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/9v42woahfg/swatch'); 
          display: block; 
          filter: blur(5px); 
          padding-top: 177.78%; 
        }
        /* Make the player card perfectly snug and matching the mobile aspect */
        wistia-player[media-id='9v42woahfg'] {
          border-radius: 1.8rem !important;
          overflow: hidden !important;
          display: block;
          width: 100%;
        }
      </style>
      <wistia-player media-id="9v42woahfg" aspect="0.5625"></wistia-player>
    `;
  }, []);

  return (
    <div id="wistia-video-section" className="w-full max-w-[320px] sm:max-w-[340px] mx-auto my-6">
      {/* Visual representation card / modern phone casing for vertical layout */}
      <div className="relative mx-auto bg-slate-900 p-2 sm:p-2.5 rounded-[2.2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)] border-2 border-slate-800 transition-all duration-300 hover:shadow-orange-500/10">
        
        {/* Notch details for the mobile framing */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-slate-950 rounded-full z-40 flex items-center justify-center gap-1 opacity-90 pointer-events-none">
          <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
          <div className="w-6 h-0.5 bg-slate-850 rounded-full"></div>
        </div>

        {/* Video Wrapper Screen which mounts the player once */}
        <div 
          className="relative w-full aspect-[9/16] rounded-[1.8rem] overflow-hidden bg-slate-950 shadow-inner" 
          ref={containerRef} 
        />
      </div>
    </div>
  );
});

export default WistiaPlayer;

