const $ = (id) => document.getElementById(id),
  NS = "http://www.w3.org/2000/svg";
const paths = {
  body: '<path d="M-64-81 Q-83-14-74 55 Q-65 102 0 106 Q68 103 75 55 Q83-20 53-84Z"/><path d="M-28-47 Q-42 19-22 66" fill="none" opacity=".3"/>',
  round: '<ellipse rx="94" ry="97"/>',
  head: '<path d="M-66 56 Q-85 19-65-36 L-78-65 -47-59 -52-79 -18-67 Q48-79 70-34 Q87 17 63 60 Q0 85-66 56Z"/>',
  tall: '<path d="M-49 66 Q-76 5-51-76 L-26-69 -15-88 3-73 Q58-80 62-16 L52 66Z"/>',
  beak: '<path d="M-66-22 Q-24-54 28-35 Q65-23 73 20 Q67 48 37 47 L-49 30 Q-73 19-66-22Z"/><path d="M-61 11 Q0 33 68 19 M42-22 Q53-10 51 3" fill="none"/><circle cx="31" cy="-18" r="3" fill="#29332f" stroke="none"/>',
  bigbill:
    '<path d="M-81-29 Q-25-66 65-29 L91 32 Q60 64-72 27Z"/><path d="M-73 9 Q14 31 85 24" fill="none"/>',
  stare:
    '<path d="M-27-10 Q0-18 27-10 L24 14 Q0 30-24 14Z" fill="#faf5d8"/><circle r="8" cy="4" fill="currentColor"/><path d="M-30-13 L29-8" fill="none" stroke-width="6"/>',
  sideeye:
    '<ellipse rx="28" ry="22" fill="#faf5d8"/><circle cx="14" cy="2" r="8" fill="currentColor"/><path d="M-29-13 L29-3" stroke-width="6"/>',
  tiny: '<circle r="25" fill="#fffdf0"/><circle r="4" fill="currentColor"/>',
  sleepy:
    '<path d="M-27-7 Q0 28 27-7Z" fill="#fffdf0"/><circle cy="3" r="6" fill="currentColor"/><path d="M-29-7 L29-7" stroke-width="6"/>',
  wing: '<path d="M-24-70 Q43-40 36 49 L21 72 13 47 4 76 -5 45 -17 66 Q-42 11-24-70Z"/><path d="M-16-29 Q9 6 13 47" fill="none" opacity=".4"/>',
  spread:
    '<path d="M-66 31 Q-40-63 67-42 L41-17 73-16 39 3 59 13 17 22 28 38Z"/>',
  foot: '<path d="M-8-38 L8-38 10 12 38 27 Q43 35 29 34 L4 26 -16 36 Q-28 39-24 29 L-13 16 -40 24 Q-49 22-39 15 L-8 5Z"/>',
  brow: '<path d="M-35-7 L35 7" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"/>',
  blush:
    '<ellipse rx="28" ry="13" stroke="none"/><path d="M-12-5 L-16 5 M1-5 L-3 5 M14-5 L10 5" stroke="#fff" opacity=".5"/>',
  sweat: '<path d="M0-32 Q-34 9-17 24 Q0 39 17 24 Q30 9 0-32Z"/>',
  bubble:
    '<path d="M-65-37 Q-65-55-40-55 H40 Q65-55 65-30 V19 Q65 37 40 37 H-18 L-43 60 -37 37 Q-65 37-65 19Z"/>',
};
const defs = [
  ["body", "Classic bod", "Bodies", "#9da9aa"],
  ["round", "Round fellow", "Bodies", "#aab6b4"],
  ["head", "Bedhead", "Heads", "#aab6b4"],
  ["tall", "Long thinker", "Heads", "#aab6b4"],
  ["stare", "The stare", "Eyes", "#252e2b"],
  ["sideeye", "Side judgment", "Eyes", "#252e2b"],
  ["tiny", "No thoughts", "Eyes", "#252e2b"],
  ["sleepy", "Monday eyes", "Eyes", "#252e2b"],
  ["beak", "Signature bill", "Beaks", "#c5bd97"],
  ["bigbill", "Big business", "Beaks", "#c5bd97"],
  ["wing", "Folded wing", "Wings", "#839496"],
  ["spread", "Jazz hands", "Wings", "#839496"],
  ["foot", "Bird foot", "Feet", "#8e9280"],
  ["brow", "Disapproval", "Extras", "#29332f"],
  ["blush", "A little shy", "Extras", "#e9958b"],
  ["sweat", "Under pressure", "Extras", "#82c5d5"],
  ["bubble", "Speechless", "Extras", "#fffdf1"],
];

Object.assign(paths, {
  pear: '<path d="M-35-88 Q35-107 48-52 Q57-20 84 34 Q114 112 0 108 Q-110 107-85 39 Q-55-16-35-88Z"/><path d="M-35 14 Q-47 53-27 72" fill="none" opacity=".3"/>',
  bean: '<path d="M-39-96 Q34-116 56-60 Q31-21 69 19 Q102 103 19 111 Q-66 117-77 44 Q-91-32-39-96Z"/>',
  longbody:
    '<path d="M-40-110 Q0-136 40-110 Q60-56 48 106 Q0 130-48 106 Q-60-56-40-110Z"/><path d="M-19-70 Q-32 3-20 66" fill="none" opacity=".3"/>',
  squarehead:
    '<path d="M-72-48 Q-74-67-51-67 H49 Q72-67 72-46 V49 Q72 69 50 69 H-49 Q-72 69-72 49Z"/>',
  fluffyhead:
    '<path d="M-65 49 L-84 22 -69 6 -88-12 -65-22 -72-49 -44-44 -36-76 -12-57 7-81 20-58 48-70 49-45 75-42 66-17 86 1 68 19 77 47 48 54 Q0 83-65 49Z"/>',
  flathead:
    '<path d="M-83-25 L-61-47 -32-41 -16-55 3-42 Q79-54 89-6 Q96 49 7 52 Q-90 54-83-25Z"/>',
  wideeye:
    '<ellipse rx="27" ry="32" fill="#fffbed"/><circle cy="1" r="6" fill="currentColor"/><path d="M-24-39 Q0-47 24-39" fill="none"/>',
  angryeye:
    '<path d="M-28-16 L28 3 Q20 32-17 19Z" fill="#faf5d8"/><circle cy="7" cx="2" r="7" fill="currentColor"/><path d="M-32-18 L31 4" fill="none" stroke-width="7"/>',
  closedeye:
    '<path d="M-28 3 Q0 24 28 3 M-16 13 L-21 21 M0 18 V27 M16 13 L21 21" fill="none" stroke="currentColor" stroke-width="4"/>',
  sparkleeye:
    '<ellipse rx="27" ry="29" fill="#fffbed"/><circle r="19" fill="currentColor"/><path d="M-5-16 L-2-8 6-5 -2-2 -5 6 -8-2 -16-5 -8-8Z" fill="white" stroke="none"/><circle cx="9" cy="11" r="4" fill="white" stroke="none"/>',
  eyeroll:
    '<ellipse rx="27" ry="24" fill="#faf5d8"/><circle cy="-13" r="8" fill="currentColor"/><path d="M-24 11 Q0 20 24 11" fill="none" stroke-width="4"/>',
  spiraleye:
    '<circle r="26" fill="#fffbed"/><path d="M0 0 Q4-4 6 0 Q8 8 0 10 Q-11 11-12 0 Q-12-15 2-16 Q18-16 19 0 Q19 20 0 21" fill="none" stroke="currentColor" stroke-width="3.5"/>',
  hearteye:
    '<path d="M0 25 Q-34 3-21-16 Q-9-28 0-12 Q9-28 21-16 Q34 3 0 25Z"/><circle cx="-12" cy="-11" r="4" fill="white" stroke="none"/>',
  puppyeye:
    '<ellipse rx="27" ry="28" fill="#fffbed"/><circle cy="4" r="16" fill="currentColor"/><circle cx="-5" cy="-2" r="5" fill="white" stroke="none"/><circle cx="6" cy="10" r="2.5" fill="white" stroke="none"/><path d="M-18 22 Q0 31 18 22" fill="none" stroke="#82c5d5" stroke-width="4"/>',
  stubbybill:
    '<path d="M-40-25 Q0-44 36-21 L43 18 Q18 40-35 22Z"/><path d="M-34 9 Q1 22 38 12" fill="none"/><circle cx="18" cy="-12" r="3" fill="#29332f"/>',
  longbill:
    '<path d="M-96-18 Q-59-50 51-27 Q87-24 102 18 Q66 41-90 20Z"/><path d="M-89 9 Q7 27 96 16" fill="none"/><circle cx="51" cy="-12" r="3" fill="#29332f"/>',
  hookbill:
    '<path d="M-66-25 Q2-56 59-22 Q85 5 62 56 L43 31 Q-16 39-62 20Z"/><path d="M-58 10 Q-5 26 45 14 L62 56" fill="none"/><circle cx="31" cy="-16" r="3" fill="#29332f"/>',
  openbill:
    '<path d="M-58 8 Q0 26 56 18 Q60 36 52 44 Q0 50-54 32Z" fill="#6e3434"/><ellipse cx="6" cy="38" rx="22" ry="7" fill="#d9715c" stroke="none"/><path d="M-54 30 Q0 46 52 42 Q58 58 38 66 L-44 54 Q-62 44-54 30Z"/><path d="M-66-22 Q-24-54 28-35 Q65-23 73 14 Q66 24 54 20 Q0 16-58 8 Q-72 0-66-22Z"/><path d="M42-22 Q53-10 51 3" fill="none"/><circle cx="31" cy="-18" r="3" fill="#29332f" stroke="none"/>',
  smilebill:
    '<path d="M-66-22 Q-24-54 28-35 Q65-23 73 20 Q67 48 37 47 L-49 30 Q-73 19-66-22Z"/><path d="M-54 4 Q0 22 58 4 Q8 50-54 4Z" fill="#6e3434"/><path d="M-50 7 Q0 23 54 7 Q2 30-50 7Z" fill="white" stroke-width="2"/><path d="M-22 15 V21 M0 17 V24 M22 15 V21" fill="none" stroke-width="2"/><ellipse cx="-56" cy="18" rx="9" ry="5" fill="#e9958b" stroke="none"/><ellipse cx="62" cy="18" rx="9" ry="5" fill="#e9958b" stroke="none"/><circle cx="31" cy="-18" r="3" fill="#29332f" stroke="none"/>',
  whistlebill:
    '<path d="M-20 10 L51 3 Q52 10 45 14Z" fill="#6e3434"/><path d="M-36 10 L45 14 Q46 28 26 32 Q0 36-35 22 Q-41 16-36 10Z"/><path d="M-40-25 Q0-44 36-21 Q55-4 51 3 L-36 10 Q-46-6-40-25Z"/><circle cx="14" cy="-14" r="3" fill="#29332f" stroke="none"/><path d="M75-10 V-36 Q85-32 84-22" fill="none" stroke-width="4"/><circle cx="69" cy="-10" r="6.5" fill="#29332f"/><path d="M92-50 V-80 L108-85 V-56" fill="none" stroke-width="4"/><circle cx="86" cy="-50" r="6.5" fill="#29332f"/><circle cx="102" cy="-56" r="6.5" fill="#29332f"/>',
  upwing:
    '<path d="M-22 65 Q-54 4-35-75 Q-26-94-17-63 L-9-91 Q3-101 5-65 L17-88 Q29-93 27-56 L39-65 Q53-64 37-18 L14 63Z"/><path d="M-15-32 L-6 35 M8-30 L2 36" fill="none" opacity=".4"/>',
  tinywing: '<path d="M-22-28 Q20-38 34-2 L24 26 15 10 7 31 -3 10 -16 22Z"/>',
  pointwing:
    '<path d="M-53 31 Q-65-11-32-26 L71-23 Q91-17 69-9 L12 4 34 16 Q42 32 20 28 L-4 20 7 38 Q-4 48-25 27Z"/>',
  webfoot: '<path d="M-8-40 H8 L11 3 45 32 10 23 0 40 -14 24 -43 32 -11 3Z"/>',
  tiptoe:
    '<path d="M-8-48 H8 L7 7 30 39 Q30 48 18 41 L-1 22 -13 42 Q-23 47-22 35 L-10 10Z"/>',
  stomp:
    '<path d="M-13-35 H13 V7 Q48 3 51 25 Q53 38 30 36 H-35 Q-53 33-43 20 L-13 4Z"/><path d="M23 21 L29 35 M5 23 L9 36" fill="none"/>',
  heart: '<path d="M0 27 Q-48-2-25-23 Q-9-34 0-15 Q13-35 29-20 Q48 0 0 27Z"/>',
  star: '<path d="M0-36 L10-10 37-9 16 8 22 35 0 20 -24 35 -16 8 -38-9 -11-10Z"/>',
  tear: '<path d="M0-31 Q-29 10-18 24 Q0 40 18 24 Q29 10 0-31Z"/><path d="M-10 10 Q-16 19-8 23" fill="none" stroke="white"/>',
  cloud:
    '<path d="M2 4 L-9 26 H1 L-5 46 L14 18 H4 L11 4Z" fill="#f6c94c"/><path d="M-40 10 Q-54 10-53-4 Q-52-17-38-17 Q-35-34-17-33 Q-5-45 11-37 Q29-42 35-24 Q51-22 51-6 Q50 10 36 10Z"/><path d="M-30-6 Q-24-14-14-12" fill="none" stroke="white" stroke-width="3" opacity=".5"/>',
  anger:
    '<path d="M-18-36 Q0-25 18-36 M-18 36 Q0 25 18 36 M-36-18 Q-25 0-36 18 M36-18 Q25 0 36 18" fill="none" stroke-width="15" stroke-linecap="round"/><path d="M-18-36 Q0-25 18-36 M-18 36 Q0 25 18 36 M-36-18 Q-25 0-36 18 M36-18 Q25 0 36 18" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>',
  crown:
    '<path d="M-43-28 L-24-9 0-37 24-9 43-28 33 30 H-33Z"/><path d="M-32 17 H32" fill="none"/><circle cy="4" r="5" fill="#ee8660"/>',
  glasses:
    '<circle cx="-33" r="26" fill="none" stroke="currentColor" stroke-width="6"/><circle cx="33" r="26" fill="none" stroke="currentColor" stroke-width="6"/><path d="M-7-4 Q0-12 7-4 M-60-5 H-74 M60-5 H74" fill="none" stroke="currentColor" stroke-width="6"/>',
  partyhat:
    '<path d="M0-52 L34 34 Q0 46-34 34Z"/><path d="M-15-8 Q0-3 15-8 M-25 16 Q0 23 25 16" fill="none" stroke="#fffbed" stroke-width="5"/><circle cy="-56" r="9" fill="#fffbed"/>',
  mug: '<path d="M24-10 Q48-12 46 8 Q44 26 22 22" fill="none" stroke-width="13"/><path d="M24-10 Q48-12 46 8 Q44 26 22 22" fill="none" stroke="currentColor" stroke-width="6"/><path d="M-30-24 H30 L26 28 Q25 36 16 36 H-16 Q-25 36-26 28Z"/><ellipse cy="-24" rx="30" ry="6" fill="#6b4a36"/><path d="M-10-38 Q-18-47-10-55 Q-2-63-10-72 M10-38 Q2-47 10-55 Q18-63 10-72" fill="none" stroke-width="4" opacity=".45"/>',
  fish: '<path d="M-8-14 Q2-32 16-12Z"/><path d="M-48 0 Q-20-24 18-12 L44-28 Q38 0 44 28 L18 12 Q-20 24-48 0Z"/><path d="M-16-12 Q-9 0-16 12" fill="none"/><circle cx="-31" cy="-4" r="4" fill="#252e2b" stroke="none"/>',
  necktie:
    '<path d="M-7-32 L-15 30 0 47 15 30 7-32Z"/><path d="M-11-46 H11 L7-32 H-7Z"/><path d="M-9-6 L8-18 M-12 16 L11 2" fill="none" stroke="#fffbed" stroke-width="3" opacity=".7"/>',
  lanyard:
    '<path d="M-32-62 L-4-4 M32-62 L4-4" fill="none" stroke-width="11"/><path d="M-32-62 L-4-4 M32-62 L4-4" fill="none" stroke="currentColor" stroke-width="5"/><rect x="-6" y="-6" width="12" height="12" rx="2" fill="#a5a5b4"/><rect x="-24" y="6" width="48" height="58" rx="4" fill="#fffbed"/><rect x="-16" y="14" width="13" height="15" rx="2" fill="#b6a5ec" stroke-width="2"/><path d="M3 18 H16 M3 25 H12 M-16 40 H16 M-16 49 H8" fill="none" stroke-width="3"/>',
  headset:
    '<path d="M-74 0 Q-74-84 0-84 Q74-84 74 0" fill="none" stroke-width="13"/><path d="M-74 0 Q-74-84 0-84 Q74-84 74 0" fill="none" stroke="currentColor" stroke-width="6"/><path d="M-78 22 Q-74 54-40 60" fill="none" stroke-width="5"/><ellipse cx="-36" cy="60" rx="8" ry="6" fill="#29332f"/><rect x="-90" y="-16" width="24" height="40" rx="10"/><rect x="66" y="-16" width="24" height="40" rx="10"/>',
  beanie:
    '<path d="M-58 8 Q-60-56 0-58 Q60-56 58 8Z"/><circle cy="-62" r="13" fill="#fffbed"/><path d="M-64 4 H64 Q67 18 62 28 H-62 Q-67 18-64 4Z"/><path d="M-44 7 V25 M-22 7 V26 M0 7 V26 M22 7 V26 M44 7 V25" fill="none" opacity=".35"/>',
  cap: '<path d="M-82 36 Q-90-28-26-55 Q-70-30-57 26Z"/><path d="M-57 26 Q-70-30-26-55 Q16-58 38-37 Q50-18 47 9 Q-8 8-57 26Z" fill="#f4f3ee"/><ellipse cx="-24" cy="-57" rx="9" ry="4.5"/><path d="M-57 26 Q10 4 47 9 Q78 12 88 30 Q89 39 78 39 Q30 53-57 26Z"/>',
  boba: '<path d="M6-30 L20-74" fill="none" stroke-width="12"/><path d="M6-30 L20-74" fill="none" stroke="#d9d2c3" stroke-width="6"/><path d="M-26-30 H26 L20 46 Q19 52 13 52 H-13 Q-19 52-20 46Z" fill="#fffbed"/><path d="M-25-18 H25 L20 46 Q19 52 13 52 H-13 Q-19 52-20 46Z" stroke="none"/><path d="M-26-30 H26 L20 46 Q19 52 13 52 H-13 Q-19 52-20 46Z" fill="none"/><g fill="#3b2a2a" stroke="none"><circle cx="-11" cy="42" r="5"/><circle cx="1" cy="44" r="5"/><circle cx="12" cy="41" r="5"/><circle cx="-6" cy="33" r="5"/><circle cx="7" cy="32" r="5"/><circle cx="-14" cy="30" r="4.5"/></g><path d="M-30-32 H30" fill="none" stroke-width="6"/><path d="M-17-10 L-13 36" fill="none" stroke="white" stroke-width="3" opacity=".5"/>',
  propeller:
    '<path d="M0-58 Q-59.74 -56 -58 10 L-38.7 10 Q-39.861 -56 0-58Z" fill="#f4a3a3"/><path d="M0-58 Q-39.861 -56 -38.7 10 L-19.3 10 Q-19.879 -56 0-58Z" fill="#f7c59f"/><path d="M0-58 Q-19.879 -56 -19.3 10 L0 10 Q0 -56 0-58Z" fill="#f6e3a1"/><path d="M0-58 Q0 -56 0 10 L19.3 10 Q19.879 -56 0-58Z" fill="#b8e0b0"/><path d="M0-58 Q19.879 -56 19.3 10 L38.7 10 Q39.861 -56 0-58Z" fill="#a9cdee"/><path d="M0-58 Q39.861 -56 38.7 10 L58 10 Q59.74 -56 0-58Z" fill="#c9b3f0"/><path d="M-62 4 H62 Q65 14 60 20 H-60 Q-65 14-62 4Z"/><path d="M0-58 V-72" fill="none" stroke-width="4"/><ellipse cx="-20" cy="-76" rx="20" ry="6"/><ellipse cx="20" cy="-76" rx="20" ry="6"/><circle cy="-75" r="5" fill="#29332f" stroke="none"/>',
  donut:
    '<path d="M-44 0 A44 36 0 1 0 44 0 A44 36 0 1 0-44 0Z M-12 0 A12 9 0 1 1 12 0 A12 9 0 1 1-12 0Z" fill="#d9a86c" fill-rule="evenodd"/><path d="M-38 0 Q-40-26-12-30 Q4-34 18-28 Q40-24 38 0 Q42 14 30 22 Q22 30 8 26 Q-4 32-16 26 Q-34 24-36 12 Q-42 6-38 0Z M-15 0 A15 11 0 1 1 15 0 A15 11 0 1 1-15 0Z" fill-rule="evenodd"/><path d="M-28 -12 l6 -4" stroke="#f4a3a3" stroke-width="4" stroke-linecap="round"/><path d="M-12 -22 l6 3" stroke="#a9cdee" stroke-width="4" stroke-linecap="round"/><path d="M8 -24 l-5 4" stroke="#f6e3a1" stroke-width="4" stroke-linecap="round"/><path d="M24 -16 l6 3" stroke="#b8e0b0" stroke-width="4" stroke-linecap="round"/><path d="M30 2 l2 6" stroke="#c9b3f0" stroke-width="4" stroke-linecap="round"/><path d="M20 16 l-6 3" stroke="#f7c59f" stroke-width="4" stroke-linecap="round"/><path d="M2 20 l6 -2" stroke="#a9cdee" stroke-width="4" stroke-linecap="round"/><path d="M-18 16 l5 4" stroke="#c9b3f0" stroke-width="4" stroke-linecap="round"/><path d="M-30 4 l1 -6" stroke="#b8e0b0" stroke-width="4" stroke-linecap="round"/><path d="M-4 -14 l5 2" stroke="#f7c59f" stroke-width="4" stroke-linecap="round"/>',
  witchhat:
    '<ellipse cy="20" rx="72" ry="12"/><path d="M-38 18 Q-30-20-10-56 Q6-82 34-74 Q12-62 6-40 Q24 0 38 18Z"/><path d="M-37 6 Q0 14 37 6 L38 18 Q0 26-38 18Z" fill="#f17f55"/><rect x="-8" y="6" width="16" height="14" rx="2" fill="none" stroke="#e6c65f" stroke-width="3"/>',
  spider:
    '<path d="M0-96 V-14" fill="none" stroke-width="2"/><path d="M-9 0 Q-26-16-36-4 M-12 6 Q-30 0-40 12 M-11 12 Q-26 18-32 32 M-6 17 Q-14 30-12 42 M9 0 Q26-16 36-4 M12 6 Q30 0 40 12 M11 12 Q26 18 32 32 M6 17 Q14 30 12 42" fill="none" stroke-width="4"/><circle cy="8" r="15"/><circle cy="-10" r="10"/><circle cx="-4" cy="-12" r="2.5" fill="white" stroke="none"/><circle cx="4" cy="-12" r="2.5" fill="white" stroke="none"/>',
  churros:
    '<path d="M-6-4 L-21 -49 M8-4 L24.5 -46" fill="none" stroke-width="18" stroke-linecap="round"/><path d="M-6-4 L-21 -49 M8-4 L24.5 -46" fill="none" stroke="#e0a85a" stroke-width="12" stroke-linecap="round"/><path d="M-9 -6 L-23.2 -48 M-3 -6 L-18 -48.8 M5 -6 L20.8 -46.5 M11 -6 L26.8 -45" fill="none" stroke="#b97f3c" stroke-width="1.8"/><g fill="#fffbed" stroke="none"><circle cx="-10.3" cy="-11.1" r="1.3"/><circle cx="-8.2" cy="-15.9" r="0.9"/><circle cx="-13.8" cy="-20.0" r="1.3"/><circle cx="-15.0" cy="-24.2" r="1.1"/><circle cx="-16.4" cy="-28.2" r="1.1"/><circle cx="-15.5" cy="-33.5" r="0.9"/><circle cx="-17.4" cy="-39.6" r="0.9"/><circle cx="-19.8" cy="-43.6" r="0.9"/><circle cx="12.3" cy="-9.7" r="1.1"/><circle cx="12.7" cy="-15.5" r="1.3"/><circle cx="15.6" cy="-18.9" r="0.9"/><circle cx="15.9" cy="-23.0" r="0.9"/><circle cx="17.7" cy="-27.9" r="0.9"/><circle cx="19.9" cy="-32.5" r="1.1"/><circle cx="20.7" cy="-37.4" r="1.1"/><circle cx="24.6" cy="-40.1" r="1.1"/></g><path d="M24 2 Q40 2 38 16 Q36 26 22 24" fill="none" stroke-width="5"/><path d="M-26-6 H26 L22 34 Q21 40 14 40 H-14 Q-21 40-22 34Z" fill="#fffbed"/><ellipse cy="-6" rx="26" ry="7"/><path d="M-23-3 Q-21 0-21 3 Q-22 8-18 8 Q-14 8-16 3 Q-16 0-14-3Z M-5-3 Q-2 3-3 9 Q-5 16-1 18 Q5 19 4 12 Q3 6 6-3Z M11-3 Q14 1 13 5 Q12 10 15.5 10 Q19 9 17 5 Q16 1 18-3Z" stroke="none"/>',
  sangria:
    '<path d="M-30-30 Q-58-30-56 0 Q-54 26-32 26" fill="none" stroke-width="13" stroke-linecap="round"/><path d="M-30-30 Q-58-30-56 0 Q-54 26-32 26" fill="none" stroke="#e6eeee" stroke-width="7" stroke-linecap="round"/><path d="M-24-46 H22 L34-52 Q30-44 26-38 Q44-8 34 22 Q30 46 14 46 H-14 Q-30 46-34 22 Q-44-8-24-46Z" fill="#e6eeee"/><path d="M29.3-32 Q43-5 34 22 Q30 46 14 46 H-14 Q-30 46-34 22 Q-42.1-2.4-30.5-32 Q0-26 29.3-32Z" stroke="none"/><circle cx="8" cy="8" r="14" fill="#f39a3d" stroke-width="2.5"/><circle cx="8" cy="8" r="10.9" fill="#fbc46d" stroke="none"/><path d="M8 8 L18.9 8.0 M8 8 L15.7 15.7 M8 8 L8.0 18.9 M8 8 L0.3 15.7 M8 8 L-2.9 8.0 M8 8 L0.3 0.3 M8 8 L8.0 -2.9 M8 8 L15.7 0.3" fill="none" stroke="#fde9c2" stroke-width="1.5"/><circle cx="-17" cy="-12" r="9" fill="#f39a3d" stroke-width="2.5"/><circle cx="-17" cy="-12" r="7.0" fill="#fbc46d" stroke="none"/><path d="M-17 -12 L-10.0 -12.0 M-17 -12 L-12.0 -7.0 M-17 -12 L-17.0 -5.0 M-17 -12 L-22.0 -7.0 M-17 -12 L-24.0 -12.0 M-17 -12 L-22.0 -17.0 M-17 -12 L-17.0 -19.0 M-17 -12 L-12.0 -17.0" fill="none" stroke="#fde9c2" stroke-width="1.5"/><g fill="#3c4a8a" stroke-width="2"><circle cx="-14" cy="24" r="5.5"/><circle cx="-2" cy="33" r="5"/><circle cx="23" cy="-16" r="5"/></g><path d="M10-30 Q22-40 28-28 Q18-22 10-30Z" fill="#6fae5a" stroke-width="2"/><path d="M11-30 Q19-31 26-29" fill="none" stroke="#3f7a35" stroke-width="1.5"/><path d="M26-22 Q34 0 27 24" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" opacity=".6"/><path d="M-24-46 H22 L34-52 Q30-44 26-38 Q44-8 34 22 Q30 46 14 46 H-14 Q-30 46-34 22 Q-44-8-24-46Z" fill="none"/><path d="M-15-47.5 A14 14 0 0 1 13-47.5Z" fill="#f39a3d" stroke-width="2.5"/><path d="M-11.8-50.3 A11.2 11.2 0 0 1 9.8-50.3Z" fill="#fbc46d" stroke="none"/><path d="M-1-50.3 L-6.7-54.3 M-1-50.3 L-1-57.3 M-1-50.3 L4.7-54.3" fill="none" stroke="#fde9c2" stroke-width="1.5"/>',
  duck: '<path d="M40-4 Q39 18 28 28 Q14 38-6 36 Q-34 34-36 14 Q-37 4-27 0 Q-31-6-30-15 Q-30-31-14-31 Q2-31 2-15 Q2-6-3 0 Q14 7 27 3 Q35 0 40-4Z"/><path d="M-28-17 Q-45-18-45-11 Q-41-4-26-9Z" fill="#f39a3d"/><circle cx="-17" cy="-20" r="2.8" fill="#29332f" stroke="none"/><path d="M2 12 Q12 26 27 13 Q16 16 2 12Z" fill="#e0b43a" stroke-width="2"/>',
  laptop:
    '<rect x="-34" y="-40" width="68" height="46" rx="4"/><rect x="-28" y="-34" width="56" height="34" rx="2" fill="#a9cdee"/><path d="M-21-25 H9 M-21-17 H17 M-21-9 H3" fill="none" stroke="white" stroke-width="3" stroke-linecap="round"/><path d="M-38 6 H38 L46 18 Q46 22 42 22 H-42 Q-46 22-46 18Z" fill="#c8ccd4"/><path d="M-10 14 H10" fill="none" stroke-width="2.5" stroke-linecap="round"/>',
  balloon:
    '<path d="M0-8 Q-9 10 4 26 Q13 40 2 56" fill="none" stroke-width="2"/><path d="M-4-7 L0-13 L4-7Z"/><ellipse cy="-40" rx="24" ry="28"/><path d="M-13-55 Q-17-47-15-38" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" opacity=".6"/>',
  tote: '<path d="M-18-12 Q-18-44 0-44 Q18-44 18-12" fill="none" stroke-width="9" stroke-linecap="round"/><path d="M-18-12 Q-18-44 0-44 Q18-44 18-12" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M-30-14 H30 L35 38 Q35 42 31 42 H-31 Q-35 42-35 38Z"/><rect x="-12" y="2" width="24" height="24" rx="3" fill="#d5ff3f" stroke-width="2.5"/><circle cy="14" r="7" fill="none" stroke-width="2.5"/><circle cy="14" r="3" fill="#29332f" stroke="none"/>',
});
defs.push(
  ["pear", "Pear pressure", "Bodies", "#aab6b4"],
  ["bean", "Bean counter", "Bodies", "#9da9aa"],
  ["longbody", "Tall order", "Bodies", "#aab6b4"],
  ["squarehead", "Blockhead", "Heads", "#aab6b4"],
  ["fluffyhead", "Static situation", "Heads", "#aab6b4"],
  ["flathead", "Wide thinker", "Heads", "#aab6b4"],
  ["wideeye", "Seen too much", "Eyes", "#252e2b"],
  ["angryeye", "Deeply offended", "Eyes", "#252e2b"],
  ["closedeye", "Offline", "Eyes", "#252e2b"],
  ["sparkleeye", "Suspiciously happy", "Eyes", "#252e2b"],
  ["eyeroll", "Per my last email", "Eyes", "#252e2b"],
  ["spiraleye", "Too many meetings", "Eyes", "#252e2b"],
  ["hearteye", "Weirdly into it", "Eyes", "#e9585f"],
  ["puppyeye", "Deadline extension?", "Eyes", "#252e2b"],
  ["stubbybill", "Small talk", "Beaks", "#c5bd97"],
  ["longbill", "Long story", "Beaks", "#c5bd97"],
  ["hookbill", "The executive", "Beaks", "#c5bd97"],
  ["openbill", "Has opinions", "Beaks", "#c5bd97"],
  ["smilebill", "Forced smile", "Beaks", "#c5bd97"],
  ["whistlebill", "Innocent whistle", "Beaks", "#c5bd97"],
  ["upwing", "I have concerns", "Wings", "#839496"],
  ["tinywing", "Tiny effort", "Wings", "#839496"],
  ["pointwing", "Over there", "Wings", "#839496"],
  ["webfoot", "Puddle patrol", "Feet", "#b1a77f"],
  ["tiptoe", "Sneaky steps", "Feet", "#8e9280"],
  ["stomp", "Big stomp", "Feet", "#8e9280"],
  // Extras continue in groups: feelings, hats, gear, snacks, critters.
  ["heart", "Secret affection", "Extras", "#e9958b"],
  ["star", "Gold star", "Extras", "#e6c65f"],
  ["cloud", "Mood: cloudy", "Extras", "#8a8f9c"],
  ["anger", "Quiet fury", "Extras", "#e0503f"],
  ["crown", "Department head", "Extras", "#e6c65f"],
  ["partyhat", "Mandatory fun", "Extras", "#ac91ff"],
  ["beanie", "Remote worker", "Extras", "#d9715c"],
  ["cap", "Casual Friday", "Extras", "#4a9ee0"],
  ["propeller", "Big ideas", "Extras", "#4a9ee0"],
  ["witchhat", "Resting witch face", "Extras", "#4b3a6b"],
  ["glasses", "Peer reviewer", "Extras", "#29332f"],
  ["necktie", "Business casual", "Extras", "#c94f4f"],
  ["lanyard", "Conference mode", "Extras", "#ac91ff"],
  ["headset", "On mute", "Extras", "#4a4c5a"],
  ["laptop", "Per my last email", "Extras", "#4a4c5a"],
  ["tote", "Conference swag", "Extras", "#f1eee2"],
  ["balloon", "Ship day", "Extras", "#f17f55"],
  ["duck", "Debugging", "Extras", "#f6c94c"],
  ["mug", "Running on fumes", "Extras", "#f1eee2"],
  ["fish", "Lunch break", "Extras", "#7fa7b8"],
  ["boba", "Boba run", "Extras", "#d8b48a"],
  ["donut", "Treat yourself", "Extras", "#f4a3c4"],
  ["churros", "Churro o'clock", "Extras", "#5a3726"],
  ["sangria", "Pitcher perfect", "Extras", "#8e1f3a"],
  ["spider", "Bug in production", "Extras", "#3b3448"],
  // Retired: kept so older saved birds still load; not shown in any tab.
  ["tear", "One single tear", "Retired", "#82c5d5"],
);

let items = [],
  selected = null,
  history = [],
  gesture = null;
const key = "stare-department-v1";
let uid = () => Math.random().toString(36).slice(2);
function make(type, x, y, s = 1, flip = 1) {
  return {
    id: uid(),
    type,
    x,
    y,
    s,
    flip,
    r: 0,
    color: defs.find((d) => d[0] === type)[3],
  };
}
function starter() {
  return [
    make("foot", 260, 471, 0.8),
    make("foot", 343, 471, 0.8, -1),
    make("body", 300, 353, 1.1),
    make("wing", 235, 353, 0.8),
    make("wing", 366, 353, 0.8, -1),
    make("head", 300, 221, 1.2),
    make("beak", 301, 263, 1),
    make("stare", 248, 213, 0.7),
    make("stare", 350, 213, 0.7, -1),
  ];
}
function randomLook() {
  checkpoint();
  const pick = (a) => a[Math.floor(Math.random() * a.length)],
    range = (a, b) => a + Math.random() * (b - a);
  const part = (cat) => pick(defs.filter((d) => d[2] === cat))[0];
  const feather = pick([
    "#aab6b4",
    "#899caa",
    "#b5b29b",
    "#a4ad94",
    "#baa8ba",
    "#91b8b4",
  ]);
  const bill = pick(["#c5bd97", "#d7b478", "#d9aa8c", "#b9bc85"]);
  const next = [];
  function put(type, x, y, scale = 1, flip = 1, color = null, rotation = 0) {
    const i = make(type, x, y, scale, flip);
    if (color) i.color = color;
    i.r = rotation;
    next.push(i);
    return i;
  }
  const foot = part("Feet"),
    wing = part("Wings"),
    eye = part("Eyes");
  const bodyScale = range(0.85, 1.15),
    headScale = range(0.85, 1.15),
    eyeScale = range(0.6, 0.9),
    wingScale = range(0.65, 0.95);
  put(foot, 267, 474, range(0.7, 0.95));
  put(foot, 337, 474, range(0.7, 0.95), -1);
  put(part("Bodies"), 300, 361, bodyScale, 1, feather);
  const wingAngle = range(-25, 25);
  put(wing, 234, 350, wingScale, 1, feather, wingAngle);
  put(wing, 366, 350, wingScale, -1, feather, -wingAngle);
  put(part("Heads"), 300, 218, headScale, 1, feather, range(-7, 7));
  put(part("Beaks"), 300, 260, range(0.8, 1.15), 1, bill);
  put(eye, 255, 211, eyeScale);
  put(eye, 345, 211, eyeScale, -1);
  if (Math.random() < 0.25) put(part("Eyes"), 300, 170, eyeScale * 0.8);
  const extra = pick([
    "blush",
    "sweat",
    "heart",
    "star",
    "cloud",
    "anger",
    "crown",
    "glasses",
    "brow",
    "partyhat",
    "mug",
    "fish",
    "necktie",
    "lanyard",
    "headset",
    "beanie",
    "cap",
    "boba",
    "propeller",
    "donut",
    "witchhat",
    "spider",
    "churros",
    "sangria",
    "duck",
    "laptop",
    "balloon",
    "tote",
  ]);
  if (extra === "crown") put(extra, 300, 123, 0.8);
  else if (extra === "partyhat")
    put(extra, 300, 112, 0.85, 1, null, range(-12, 12));
  else if (extra === "mug") put(extra, 420, 345, 0.7);
  else if (extra === "fish") put(extra, 300, 292, 0.75);
  else if (extra === "necktie") put(extra, 300, 366, 1.05);
  else if (extra === "lanyard") put(extra, 300, 366, 0.85);
  else if (extra === "headset") put(extra, 300, 205, 1);
  else if (extra === "beanie") put(extra, 300, 160, 1.12);
  else if (extra === "cap") put(extra, 300, 152, 1.05);
  else if (extra === "boba") put(extra, 422, 345, 0.85);
  else if (extra === "propeller") put(extra, 300, 160, 1.12);
  else if (extra === "cloud") put(extra, 318, 92, 0.8);
  else if (extra === "donut") put(extra, 424, 350, 0.9);
  else if (extra === "witchhat") put(extra, 300, 128, 1.1);
  else if (extra === "spider") put(extra, 404, 176, 0.9);
  else if (extra === "duck") put(extra, 428, 352, 0.9);
  else if (extra === "laptop") put(extra, 432, 360, 0.8);
  else if (extra === "balloon") put(extra, 420, 326, 0.95);
  else if (extra === "tote") put(extra, 430, 362, 0.85);
  else if (extra === "sangria") put(extra, 438, 345, 0.95);
  else if (extra === "churros") put(extra, 422, 345, 0.85);
  else if (extra === "glasses") put(extra, 300, 211, 1.35);
  else if (extra === "blush") {
    put(extra, 240, 245, 0.6);
    put(extra, 360, 245, 0.6);
  } else if (extra === "brow") {
    put(extra, 253, 184, 0.6);
    put(extra, 347, 184, 0.6, -1);
  } else put(extra, 402, 190, 0.75, 1, null, range(-15, 15));
  items = next;
  selected = null;
  render();
}
$("random").onclick = randomLook;
function checkpoint() {
  history.push(JSON.stringify(items));
  if (history.length > 60) history.shift();
}
function save() {
  try {
    localStorage.setItem(key, JSON.stringify(items));
    $("saveStatus").textContent = "● All stares saved locally";
  } catch {
    $("saveStatus").textContent = "Local storage unavailable";
  }
}
function transform(i) {
  return `translate(${i.x} ${i.y}) rotate(${i.r}) scale(${i.s * i.flip} ${i.s})`;
}
function art(i) {
  return `<g transform="${transform(i)}" color="${i.color}" fill="${i.color}" stroke="#29332f" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">${paths[i.type]}</g>`;
}
function render() {
  const c = $("canvas");
  c.innerHTML = items.map((i) => `<g data-id="${i.id}">${art(i)}</g>`).join("");
  let i = items.find((i) => i.id === selected);
  if (i) {
    const g = c.querySelector(`[data-id="${i.id}"]`);
    let b = g.getBBox();
    c.insertAdjacentHTML(
      "beforeend",
      `<g><rect class="selection" x="${b.x - 8}" y="${b.y - 8}" width="${b.width + 16}" height="${b.height + 16}"/><path d="M${b.x + b.width / 2} ${b.y - 8} v-24" stroke="#df754e"/><circle class="handle rotate" data-handle="rotate" cx="${b.x + b.width / 2}" cy="${b.y - 32}" r="6"/><rect class="handle" data-handle="scale" x="${b.x + b.width + 3}" y="${b.y + b.height + 3}" width="10" height="10"/></g>`,
    );
    $("selectedName").textContent = defs.find((d) => d[0] === i.type)[1];
    $("size").value = i.s * 100;
    $("rotation").value = i.r;
    $("color").value = i.color;
    $("sizeVal").textContent = Math.round(i.s * 100) + "%";
    $("rotVal").textContent = Math.round(i.r) + "°";
  } else {
    $("selectedName").textContent = "Pick a part on your bird";
    $("sizeVal").textContent = "";
    $("rotVal").textContent = "";
  }
  if (i) {
    $("pickHint").textContent = "";
    $("selectedName").classList.remove("nudge");
  }
  // aria-disabled instead of disabled, so taps still reach nudge().
  document
    .querySelectorAll(".inspector input,.tools button")
    .forEach((e) =>
      i
        ? e.removeAttribute("aria-disabled")
        : e.setAttribute("aria-disabled", "true"),
    );
  $("undo").disabled = !history.length;
  save();
}
let cats = ["Eyes", "Beaks", "Heads", "Bodies", "Wings", "Feet", "Extras"];
function library(cat) {
  $("tabs").innerHTML = cats
    .map((c) => `<button class="${c === cat ? "active" : ""}">${c}</button>`)
    .join("");
  $("tabs")
    .querySelectorAll("button")
    .forEach((b) => (b.onclick = () => library(b.textContent)));
  $("parts").innerHTML = defs
    .filter((d) => d[2] === cat)
    .map(
      (d) =>
        `<button class="part" draggable="true" data-type="${d[0]}" title="Add ${d[1]}"><svg viewBox="-110 -115 220 230"><g color="${d[3]}" fill="${d[3]}" stroke="#29332f" stroke-width="3" stroke-linejoin="round">${paths[d[0]]}</g></svg><span>${d[1]}</span></button>`,
    )
    .join("");
  $("parts")
    .querySelectorAll("button")
    .forEach((b) => {
      b.onclick = () => add(b.dataset.type, 300, 300);
      b.ondragstart = (e) =>
        e.dataTransfer.setData("text/plain", b.dataset.type);
    });
}
function add(t, x, y) {
  checkpoint();
  let i = make(t, x, y);
  items.push(i);
  selected = i.id;
  render();
}
function point(e) {
  let p = new DOMPoint(e.clientX, e.clientY);
  return p.matrixTransform($("canvas").getScreenCTM().inverse());
}
$("stage").ondragover = (e) => e.preventDefault();
$("stage").ondrop = (e) => {
  e.preventDefault();
  let t = e.dataTransfer.getData("text/plain");
  if (Object.hasOwn(paths, t)) {
    let p = point(e);
    add(t, p.x, p.y);
  }
};
$("canvas").onpointerdown = (e) => {
  const handle = e.target.dataset.handle,
    id = e.target.closest("[data-id]")?.dataset.id;
  if (!handle) {
    selected = id || null;
    render();
  }
  const i = items.find((i) => i.id === selected);
  if (!i) return;
  checkpoint();
  const p = point(e);
  gesture = {
    id: i.id,
    mode: handle || "move",
    p,
    x: i.x,
    y: i.y,
    s: i.s,
    r: i.r,
    d: Math.hypot(p.x - i.x, p.y - i.y),
    a: Math.atan2(p.y - i.y, p.x - i.x),
  };
  $("canvas").setPointerCapture(e.pointerId);
};
$("canvas").onpointermove = (e) => {
  if (!gesture) return;
  let p = point(e),
    g = gesture,
    i = items.find((i) => i.id === g.id);
  if (g.mode === "move") {
    i.x = Math.max(0, Math.min(600, g.x + p.x - g.p.x));
    i.y = Math.max(0, Math.min(600, g.y + p.y - g.p.y));
  } else if (g.mode === "scale")
    i.s = Math.max(
      0.2,
      Math.min(3, (g.s * Math.hypot(p.x - i.x, p.y - i.y)) / Math.max(1, g.d)),
    );
  else
    i.r =
      ((g.r +
        ((Math.atan2(p.y - i.y, p.x - i.x) - g.a) * 180) / Math.PI +
        540) %
        360) -
      180;
  render();
};
$("canvas").onpointerup = $("canvas").onpointercancel = () => (gesture = null);
let nudgeTimer;
function nudge() {
  const name = $("selectedName");
  name.classList.remove("nudge");
  void name.offsetWidth; // restart the animation on repeat taps
  name.classList.add("nudge");
  $("pickHint").textContent = "Tap a part on your bird first.";
  clearTimeout(nudgeTimer);
  nudgeTimer = setTimeout(() => {
    name.classList.remove("nudge");
    $("pickHint").textContent = "";
  }, 2500);
  // On stacked layouts the bird can be scrolled out of view.
  const r = $("stage").getBoundingClientRect();
  if (r.bottom < 0 || r.top > innerHeight)
    $("stage").scrollIntoView({ block: "center" });
}
for (let id of ["size", "rotation", "color"]) {
  $(id).onpointerdown = (e) => {
    if (!selected) {
      e.preventDefault();
      return nudge();
    }
    checkpoint();
  };
  $(id).onclick = (e) => {
    if (!selected) e.preventDefault(); // stops the colour picker opening
  };
  $(id).onkeydown = (e) => {
    if (!selected) {
      if (e.key !== "Tab") {
        e.preventDefault();
        nudge();
      }
      return;
    }
    if (e.key.startsWith("Arrow")) checkpoint();
  };
  $(id).oninput = () => {
    let i = items.find((i) => i.id === selected);
    if (!i) {
      $(id).value = $(id).defaultValue; // touch drags can still move the thumb
      return nudge();
    }
    i[id === "size" ? "s" : id === "rotation" ? "r" : "color"] =
      id === "color"
        ? $(id).value
        : Number($(id).value) / (id === "size" ? 100 : 1);
    render();
  };
}
function action(a) {
  let n = items.findIndex((i) => i.id === selected);
  if (n < 0) return nudge();
  checkpoint();
  let i = items[n];
  if (a === "delete") {
    items.splice(n, 1);
    selected = null;
  }
  if (a === "duplicate") {
    let j = { ...i, id: uid(), x: i.x + 18, y: i.y + 18 };
    items.push(j);
    selected = j.id;
  }
  if (a === "flip") i.flip *= -1;
  if (a === "front" && n < items.length - 1)
    [items[n], items[n + 1]] = [items[n + 1], items[n]];
  if (a === "back" && n > 0)
    [items[n], items[n - 1]] = [items[n - 1], items[n]];
  if (a === "deselect") selected = null;
  render();
}
document
  .querySelectorAll("[data-action]")
  .forEach((b) => (b.onclick = () => action(b.dataset.action)));
$("undo").onclick = () => {
  if (history.length) {
    items = JSON.parse(history.pop());
    selected = null;
    render();
  }
};
$("clear").onclick = () => {
  checkpoint();
  items = [];
  selected = null;
  render();
};
$("reset").onclick = () => {
  checkpoint();
  items = starter();
  selected = null;
  render();
};
document.onkeydown = (e) => {
  if (e.target.matches("input")) return;
  if ((e.ctrlKey || e.metaKey) && e.key === "z") {
    e.preventDefault();
    $("undo").click();
  }
  if (e.key === "Delete" || e.key === "Backspace") {
    e.preventDefault();
    action("delete");
  }
};
function svgText() {
  return `<svg xmlns="${NS}" width="1200" height="1200" viewBox="0 0 600 600">${items.map(art).join("")}</svg>`;
}
function download(blob, ext) {
  let u = URL.createObjectURL(blob),
    a = document.createElement("a");
  a.href = u;
  a.download = "the-stare-department." + ext;
  a.click();
  setTimeout(() => URL.revokeObjectURL(u), 1000);
}
$("svg").onclick = () =>
  download(new Blob([svgText()], { type: "image/svg+xml" }), "svg");
$("png").onclick = () => {
  let u = URL.createObjectURL(new Blob([svgText()], { type: "image/svg+xml" })),
    im = new Image();
  im.onload = () => {
    let c = document.createElement("canvas");
    c.width = c.height = 1200;
    c.getContext("2d").drawImage(im, 0, 0);
    c.toBlob((b) => {
      if (b) download(b, "png");
      else $("exportStatus").textContent = "Export failed. Please try again.";
    });
    URL.revokeObjectURL(u);
  };
  im.onerror = () => {
    $("exportStatus").textContent = "Export failed. Please try again.";
    URL.revokeObjectURL(u);
  };
  im.src = u;
};
try {
  let raw = JSON.parse(localStorage.getItem(key));
  items =
    Array.isArray(raw) &&
    raw.every(
      (i) =>
        Object.hasOwn(paths, i.type) &&
        /^#[0-9a-f]{6}$/i.test(i.color) &&
        ["x", "y", "s", "r", "flip"].every((k) => Number.isFinite(i[k])) &&
        /^[a-z0-9]+$/.test(i.id),
    )
      ? raw
      : starter();
} catch {
  items = starter();
}
// Eyes used to be saved with an unused beige default; now the colour is the
// pupil, so keep older saved birds looking the same.
for (const i of items)
  if (i.color === "#e4ddae" && defs.find((d) => d[0] === i.type)[2] === "Eyes")
    i.color = "#252e2b";
library("Eyes");
render();
