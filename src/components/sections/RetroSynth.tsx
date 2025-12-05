import { useState } from 'react';
import { useAudio } from '../../hooks/useAudio';

const RetroSynth = () => {
  const { playNote } = useAudio();
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const handlePress = (note: string, displayNote: string) => {
    setActiveKey(displayNote);
    playNote(note);
    // Release visual state after a short delay
    setTimeout(() => setActiveKey(null), 200);
  };

  // Helper to render a white key
  const WhiteKey = ({ id, note, path, xText }: { id: string, note: string, path: string, xText: number }) => (
    <g 
      className={`synth-key white cursor-pointer ${activeKey === id ? 'active' : ''}`}
      onMouseDown={() => handlePress(note, id)}
    >
      <path d={path} className="base" stroke="black" strokeWidth="1" />
      <text x={xText} y="75" fontSize="10" className="key-letter select-none pointer-events-none font-mono">{id}</text>
    </g>
  );

  // Helper to render a black key
  const BlackKey = ({ id, note, path }: { id: string, note: string, path: string }) => (
    <g 
      className={`synth-key black cursor-pointer ${activeKey === id ? 'active' : ''}`}
      onMouseDown={() => handlePress(note, id)}
    >
      <path d={path} className="base" stroke="black" strokeWidth="1" />
    </g>
  );

  return (
    <div className="mt-12 select-none">
      <svg width="100%" height="100%" viewBox="0 0 270 156" className="max-w-[400px] drop-shadow-2xl">
        {/* Base Chassis */}
        <rect class="synth-base" x="0" y="0" width="270" height="156" rx="12" />
        
        {/* LCD Screen Area */}
        <g transform="translate(24, 12)">
            <rect className="lcd-bg" x="0" y="0" width="220" height="40" rx="4" />
            {/* Screen Content - Custom Text */}
            <g transform="translate(10, 26)">
                <text className="lcd-highlight font-mono text-sm tracking-[0.2em]" x="10">OP-1 :: PRO OS</text>
            </g>
            {/* Active Note Indicator on Screen */}
            <g transform="translate(180, 26)">
                <text className="lcd-highlight font-mono text-sm font-bold" x="0">{activeKey || "--"}</text>
            </g>
        </g>

        {/* Keyboard Container */}
        <g transform="translate(24, 60)">
          <rect className="synth-keys-backdrop" x="1" y="1" width="220" height="88" rx="4" />
          
          {/* WHITE KEYS (Paths extracted from your source) */}
          <WhiteKey id="C3" note="C4" xText="10" path="M1 5C1 2.79 2.79 1 5 1H23V83C23 84.1 22.1 85 21 85H3C1.9 85 1 84.1 1 83V5Z" />
          <WhiteKey id="D3" note="D4" xText="32" path="M23 1H45V83C45 84.1 44.1 85 43 85H25C23.9 85 23 84.1 23 83V1Z" />
          <WhiteKey id="E3" note="E4" xText="54" path="M45 1H67V83C67 84.1 66.1 85 65 85H47C45.9 85 45 84.1 45 83V1Z" />
          <WhiteKey id="F3" note="F4" xText="76" path="M67 1H89V83C89 84.1 88.1 85 87 85H69C67.9 85 67 84.1 67 83V1Z" />
          <WhiteKey id="G3" note="G4" xText="98" path="M89 1H111V83C111 84.1 110.1 85 109 85H91C89.9 85 89 84.1 89 83V1Z" />
          <WhiteKey id="A3" note="A4" xText="120" path="M111 1H133V83C133 84.1 132.1 85 131 85H113C111.9 85 111 84.1 111 83V1Z" />
          <WhiteKey id="B3" note="B4" xText="142" path="M133 1H155V83C155 84.1 154.1 85 153 85H135C133.9 85 133 84.1 133 83V1Z" />
          <WhiteKey id="C4" note="C5" xText="164" path="M155 1H177V83C177 84.1 176.1 85 175 85H157C155.9 85 155 84.1 155 83V1Z" />
          <WhiteKey id="D4" note="D5" xText="186" path="M177 1H199V83C199 84.1 198.1 85 197 85H179C177.9 85 177 84.1 177 83V1Z" />
          <WhiteKey id="E4" note="E5" xText="208" path="M199 1H217C219.2 1 221 2.79 221 5V83C221 84.1 220.1 85 219 85H201C199.9 85 199 84.1 199 83V1Z" />

          {/* BLACK KEYS (Paths extracted from your source) */}
          <BlackKey id="C#3" note="C#4" path="M18 1H28V49C28 50.1 27.1 51 26 51H20C18.9 51 18 50.1 18 49V1Z" />
          <BlackKey id="D#3" note="D#4" path="M40 1H50V49C50 50.1 49.1 51 48 51H42C40.9 51 40 50.1 40 49V1Z" />
          <BlackKey id="F#3" note="F#4" path="M84 1H94V49C94 50.1 93.1 51 92 51H86C84.9 51 84 50.1 84 49V1Z" />
          <BlackKey id="G#3" note="G#4" path="M106 1H116V49C116 50.1 115.1 51 114 51H108C106.9 51 106 50.1 106 49V1Z" />
          <BlackKey id="A#3" note="A#4" path="M128 1H138V49C138 50.1 137.1 51 136 51H130C128.9 51 128 50.1 128 49V1Z" />
          <BlackKey id="C#4" note="C#5" path="M172 1H182V49C182 50.1 181.1 51 180 51H174C172.9 51 172 50.1 172 49V1Z" />
          <BlackKey id="D#4" note="D#5" path="M194 1H204V49C204 50.1 203.1 51 202 51H196C194.9 51 194 50.1 194 49V1Z" />
        </g>
      </svg>
    </div>
  );
};

export default RetroSynth;