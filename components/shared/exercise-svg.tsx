"use client";

import type { Exercise } from "@/data/exercises";

interface ExerciseSVGProps {
  exercise: Exercise;
  className?: string;
}

interface SvgProps {
  readonly from: string;
  readonly to: string;
  readonly gId: string;
  readonly bgId: string;
}

const SW = 7;

function Base({ children, from, to, gId, bgId }: SvgProps & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gId} x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
        <radialGradient id={bgId} cx="50%" cy="50%" r="50%">
          <stop stopColor={from} stopOpacity="0.14" />
          <stop offset="1" stopColor={to} stopOpacity="0.04" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="90" fill={`url(#${bgId})`} />
      {children}
    </svg>
  );
}

/* 1 ─ Wake-up Stretch: lying on back, knees pulled to chest */
function WakeUpStretch({ gId, bgId, from, to }: SvgProps) {
  const g = `url(#${gId})`;
  return (
    <Base gId={gId} bgId={bgId} from={from} to={to}>
      {/* head */}
      <circle cx="40" cy="100" r="13" stroke={g} strokeWidth={SW} />
      {/* torso horizontal */}
      <line x1="53" y1="100" x2="120" y2="100" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* upper leg 1 (curves up toward chest) */}
      <path d="M120 95 Q108 65 79 66" stroke={g} strokeWidth={SW} strokeLinecap="round" fill="none" />
      {/* lower leg 1 */}
      <path d="M79 66 Q62 68 57 80" stroke={g} strokeWidth={SW} strokeLinecap="round" fill="none" />
      {/* upper leg 2 (slightly offset) */}
      <path d="M120 105 Q110 75 82 76" stroke={g} strokeWidth={SW} strokeLinecap="round" fill="none" />
      {/* lower leg 2 */}
      <path d="M82 76 Q65 79 61 90" stroke={g} strokeWidth={SW} strokeLinecap="round" fill="none" />
      {/* arm reaching toward knees */}
      <path d="M88 97 Q75 82 64 78" stroke={g} strokeWidth={SW} strokeLinecap="round" fill="none" />
    </Base>
  );
}

/* 2 ─ Morning Yoga: downward dog (inverted V) */
function MorningYoga({ gId, bgId, from, to }: SvgProps) {
  const g = `url(#${gId})`;
  return (
    <Base gId={gId} bgId={bgId} from={from} to={to}>
      {/* left arm (hand to shoulder) */}
      <line x1="40" y1="158" x2="68" y2="88" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* head hanging between arms */}
      <circle cx="52" cy="108" r="12" stroke={g} strokeWidth={SW} />
      {/* spine (shoulder to hips at top) */}
      <line x1="68" y1="88" x2="112" y2="50" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* right thigh (hips to knee) */}
      <line x1="112" y1="50" x2="155" y2="90" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* right lower leg (knee to foot) */}
      <line x1="155" y1="90" x2="162" y2="158" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* ground */}
      <line x1="28" y1="158" x2="172" y2="158" stroke={g} strokeWidth={SW} strokeLinecap="round" strokeOpacity="0.25" />
    </Base>
  );
}

/* 3 ─ Office Neck: seated in chair, head tilted */
function OfficeNeck({ gId, bgId, from, to }: SvgProps) {
  const g = `url(#${gId})`;
  return (
    <Base gId={gId} bgId={bgId} from={from} to={to}>
      {/* chair seat */}
      <line x1="55" y1="138" x2="148" y2="138" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* chair back */}
      <line x1="68" y1="138" x2="68" y2="80" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* chair legs */}
      <line x1="55" y1="138" x2="52" y2="162" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      <line x1="148" y1="138" x2="151" y2="162" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* torso */}
      <line x1="100" y1="138" x2="100" y2="90" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* neck angled */}
      <line x1="100" y1="89" x2="108" y2="81" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* head tilted right */}
      <circle cx="112" cy="74" r="13" stroke={g} strokeWidth={SW} />
      {/* right arm raised to neck */}
      <line x1="100" y1="108" x2="128" y2="85" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      <line x1="128" y1="85" x2="120" y2="78" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* left arm resting down */}
      <line x1="100" y1="108" x2="76" y2="128" stroke={g} strokeWidth={SW} strokeLinecap="round" />
    </Base>
  );
}

/* 4 ─ Lunchtime Walk: mid-stride pose */
function LunchtimeWalk({ gId, bgId, from, to }: SvgProps) {
  const g = `url(#${gId})`;
  return (
    <Base gId={gId} bgId={bgId} from={from} to={to}>
      {/* head */}
      <circle cx="100" cy="44" r="13" stroke={g} strokeWidth={SW} />
      {/* torso */}
      <line x1="100" y1="57" x2="100" y2="110" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* left leg forward */}
      <line x1="100" y1="110" x2="80" y2="148" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      <line x1="80" y1="148" x2="72" y2="172" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* right leg back */}
      <line x1="100" y1="110" x2="120" y2="146" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      <line x1="120" y1="146" x2="130" y2="168" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* right arm forward */}
      <line x1="100" y1="78" x2="78" y2="108" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      <line x1="78" y1="108" x2="68" y2="122" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* left arm back */}
      <line x1="100" y1="78" x2="122" y2="102" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      <line x1="122" y1="102" x2="130" y2="115" stroke={g} strokeWidth={SW} strokeLinecap="round" />
    </Base>
  );
}

/* 5 ─ Desk Squats: squat position, arms forward */
function DeskSquats({ gId, bgId, from, to }: SvgProps) {
  const g = `url(#${gId})`;
  return (
    <Base gId={gId} bgId={bgId} from={from} to={to}>
      {/* head */}
      <circle cx="100" cy="40" r="13" stroke={g} strokeWidth={SW} />
      {/* torso (slight forward lean) */}
      <line x1="100" y1="53" x2="97" y2="108" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* left thigh */}
      <line x1="97" y1="108" x2="73" y2="142" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* left lower leg (vertical) */}
      <line x1="73" y1="142" x2="71" y2="168" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* right thigh */}
      <line x1="97" y1="108" x2="123" y2="142" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* right lower leg */}
      <line x1="123" y1="142" x2="126" y2="168" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* left arm extended forward */}
      <line x1="100" y1="72" x2="64" y2="84" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      <line x1="64" y1="84" x2="42" y2="81" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* right arm extended forward */}
      <line x1="100" y1="72" x2="136" y2="84" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      <line x1="136" y1="84" x2="158" y2="81" stroke={g} strokeWidth={SW} strokeLinecap="round" />
    </Base>
  );
}

/* 6 ─ Cardio Burst: jumping jacks / star jump */
function CardioBurst({ gId, bgId, from, to }: SvgProps) {
  const g = `url(#${gId})`;
  return (
    <Base gId={gId} bgId={bgId} from={from} to={to}>
      {/* head */}
      <circle cx="100" cy="34" r="13" stroke={g} strokeWidth={SW} />
      {/* torso */}
      <line x1="100" y1="47" x2="100" y2="120" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* left arm up-left diagonal */}
      <line x1="100" y1="72" x2="60" y2="40" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* right arm up-right diagonal */}
      <line x1="100" y1="72" x2="140" y2="40" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* left leg spread */}
      <line x1="100" y1="120" x2="60" y2="162" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* right leg spread */}
      <line x1="100" y1="120" x2="140" y2="162" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* hands (small circles) */}
      <circle cx="58" cy="38" r="5" fill={from} fillOpacity="0.5" />
      <circle cx="142" cy="38" r="5" fill={to} fillOpacity="0.5" />
    </Base>
  );
}

/* 7 ─ Evening Workout: push-up position */
function EveningWorkout({ gId, bgId, from, to }: SvgProps) {
  const g = `url(#${gId})`;
  return (
    <Base gId={gId} bgId={bgId} from={from} to={to}>
      {/* head */}
      <circle cx="155" cy="64" r="12" stroke={g} strokeWidth={SW} />
      {/* neck */}
      <line x1="143" y1="72" x2="136" y2="78" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* body horizontal */}
      <line x1="136" y1="78" x2="50" y2="108" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* right arm (near head, bent at elbow) */}
      <line x1="130" y1="82" x2="142" y2="100" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      <line x1="142" y1="100" x2="150" y2="112" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* left arm (farther, bent at elbow) */}
      <line x1="88" y1="96" x2="96" y2="112" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      <line x1="96" y1="112" x2="102" y2="120" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* legs/feet */}
      <line x1="50" y1="108" x2="42" y2="122" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* ground */}
      <line x1="30" y1="122" x2="170" y2="122" stroke={g} strokeWidth={SW} strokeLinecap="round" strokeOpacity="0.25" />
    </Base>
  );
}

/* 8 ─ Evening Cooldown: child's pose */
function EveningCooldown({ gId, bgId, from, to }: SvgProps) {
  const g = `url(#${gId})`;
  return (
    <Base gId={gId} bgId={bgId} from={from} to={to}>
      {/* arms extended forward on ground */}
      <line x1="40" y1="102" x2="95" y2="102" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* head bowed near arms */}
      <circle cx="54" cy="91" r="11" stroke={g} strokeWidth={SW} />
      {/* back/torso arching from arm-root to hips */}
      <path d="M95 100 Q122 86 142 90" stroke={g} strokeWidth={SW} strokeLinecap="round" fill="none" />
      {/* hips sitting back */}
      <line x1="142" y1="90" x2="150" y2="118" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* lower legs / heels */}
      <line x1="150" y1="118" x2="160" y2="115" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* ground */}
      <line x1="28" y1="122" x2="172" y2="122" stroke={g} strokeWidth={SW} strokeLinecap="round" strokeOpacity="0.25" />
    </Base>
  );
}

/* 9 ─ Active Desk Break: incline push-off against desk */
function ActiveBreak({ gId, bgId, from, to }: SvgProps) {
  const g = `url(#${gId})`;
  return (
    <Base gId={gId} bgId={bgId} from={from} to={to}>
      {/* desk surface */}
      <line x1="22" y1="95" x2="142" y2="95" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* desk legs */}
      <line x1="28" y1="95" x2="28" y2="130" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      <line x1="136" y1="95" x2="136" y2="130" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* person — incline push-off: body diagonal, hands on desk */}
      {/* head */}
      <circle cx="50" cy="80" r="12" stroke={g} strokeWidth={SW} />
      {/* upper arm (left, near head) */}
      <line x1="60" y1="88" x2="75" y2="95" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* upper arm right */}
      <line x1="60" y1="88" x2="100" y2="95" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* torso diagonal */}
      <line x1="60" y1="88" x2="155" y2="138" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* legs */}
      <line x1="155" y1="138" x2="158" y2="165" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      <line x1="155" y1="138" x2="168" y2="162" stroke={g} strokeWidth={SW} strokeLinecap="round" />
      {/* ground */}
      <line x1="28" y1="168" x2="172" y2="168" stroke={g} strokeWidth={SW} strokeLinecap="round" strokeOpacity="0.25" />
    </Base>
  );
}

const SVG_MAP: Record<string, (p: SvgProps) => React.ReactElement> = {
  "wake-up-stretch": WakeUpStretch,
  "morning-yoga": MorningYoga,
  "office-neck": OfficeNeck,
  "lunch-walk": LunchtimeWalk,
  "desk-squats": DeskSquats,
  "cardio-burst": CardioBurst,
  "evening-workout": EveningWorkout,
  "evening-cooldown": EveningCooldown,
  "active-break": ActiveBreak,
};

export function ExerciseSVG({ exercise, className }: ExerciseSVGProps) {
  const safe = exercise.id.replace(/-/g, "_");
  const gId = `eg_${safe}`;
  const bgId = `eb_${safe}`;
  const SVGComponent = SVG_MAP[exercise.id];

  if (!SVGComponent) {
    return (
      <div className={`flex items-center justify-center text-5xl ${className ?? ""}`}>
        {exercise.emoji}
      </div>
    );
  }

  return (
    <div className={className}>
      <SVGComponent from={exercise.gradientFrom} to={exercise.gradientTo} gId={gId} bgId={bgId} />
    </div>
  );
}
