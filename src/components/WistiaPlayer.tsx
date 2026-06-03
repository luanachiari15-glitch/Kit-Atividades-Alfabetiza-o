import React, { useEffect } from 'react';

export default function WistiaPlayer() {
  useEffect(() => {
    // Add player.js script
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/player.js';
    script1.async = true;
    document.body.appendChild(script1);

    // Add specific embed script for the media-id
    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/embed/9v42woahfg.js';
    script2.async = true;
    script2.type = 'module';
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className="w-full max-w-[340px] sm:max-w-[360px] mx-auto my-6">
      <div 
        dangerouslySetInnerHTML={{
          __html: `
            <style>
              wistia-player[media-id='9v42woahfg']:not(:defined) { 
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/9v42woahfg/swatch'); 
                display: block; 
                filter: blur(5px); 
                padding-top: 177.78%; 
              }
            </style> 
            <wistia-player media-id="9v42woahfg" aspect="0.5625"></wistia-player>
          `
        }}
      />
    </div>
  );
}
