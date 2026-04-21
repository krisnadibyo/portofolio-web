"use client";

import type { Dispatch, SetStateAction } from "react";

export type TweaksState = {
  palette: "midnight" | "aurora" | "dusk";
  motionIntensity: "normal" | "reduced" | "off";
  cursorGlow: boolean;
};

export function Tweaks({
  tweaks,
  setTweaks,
  open,
  onClose,
}: {
  tweaks: TweaksState;
  setTweaks: Dispatch<SetStateAction<TweaksState>>;
  open: boolean;
  onClose: () => void;
}) {
  const update = (patch: Partial<TweaksState>) => {
    setTweaks((prev) => ({ ...prev, ...patch }));
  };

  return (
    <div className={"tweaks" + (open ? " open" : "")}>
      <h4>
        <span>Tweaks</span>
        <button className="close" onClick={onClose} aria-label="Close tweaks">
          ×
        </button>
      </h4>

      <div className="tweak-row">
        <label>Palette</label>
        <div className="tweak-seg">
          {(["midnight", "aurora", "dusk"] as const).map((p) => (
            <button
              key={p}
              className={tweaks.palette === p ? "on" : ""}
              onClick={() => update({ palette: p })}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="tweak-row">
        <label>Motion</label>
        <div className="tweak-seg">
          {(["normal", "reduced", "off"] as const).map((m) => (
            <button
              key={m}
              className={tweaks.motionIntensity === m ? "on" : ""}
              onClick={() => update({ motionIntensity: m })}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className="tweak-row">
        <label>Cursor glow</label>
        <div className="tweak-seg">
          <button
            className={tweaks.cursorGlow ? "on" : ""}
            onClick={() => update({ cursorGlow: true })}
          >
            on
          </button>
          <button
            className={!tweaks.cursorGlow ? "on" : ""}
            onClick={() => update({ cursorGlow: false })}
          >
            off
          </button>
        </div>
      </div>
    </div>
  );
}
