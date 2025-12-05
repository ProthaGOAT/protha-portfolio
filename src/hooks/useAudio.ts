import * as Tone from 'tone';
import { useCallback, useEffect, useRef } from 'react';

export const useAudio = () => {
  const synth = useRef<Tone.PolySynth | null>(null);
  const isReady = useRef(false);

  useEffect(() => {
    synth.current = new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: "triangle" },
      envelope: { attack: 0.05, decay: 0.1, sustain: 0.3, release: 1 }
    }).toDestination();
    synth.current.volume.value = -8;
    return () => { synth.current?.dispose(); };
  }, []);

  const playNote = useCallback(async (note: string) => {
    if (!isReady.current) { await Tone.start(); isReady.current = true; }
    synth.current?.triggerAttackRelease(note, "8n");
  }, []);

  return { playNote };
};