/**
 * Copy for /how-it-works. Numbers in `SPECS` and `STATS` describe the mobile
 * app as of September 5, 2026 — update them when the app's tone engine changes.
 */

export const JUMP_LINKS = [
  { href: "#moments", label: "The moments" },
  { href: "#names", label: "Why it names patterns" },
  { href: "#typing", label: "While you type" },
  { href: "#send", label: "When you tap Send" },
  { href: "#privacy", label: "Your privacy" },
  { href: "#compare", label: "Compared" },
] as const;

export const MOMENTS = [
  {
    title: "Late again.",
    scene:
      "They’re 40 minutes late and you’re typing “I’m taking you to court.” The strip flags it before you finish the sentence.",
    why: "You can still send it. Now it’s a choice, not a reflex.",
  },
  {
    title: "The money text.",
    scene:
      "You’ve asked about the dentist bill three times. Draft four starts with “You never…”. The app names the pattern (blaming) and shows a version that asks for the money without the jab.",
    why: "Because the point is getting paid, not getting even.",
  },
  {
    title: "11:47 pm.",
    scene:
      "The message that feels great at midnight is the one that gets read aloud in mediation. On a red draft, Hold until morning parks it and reminds you at 8 AM.",
    why: "If it’s true, it’ll still be true in the morning.",
  },
  {
    title: "They twist everything.",
    scene:
      "Your calm message is evidence too. Every message is locked the moment it’s sent, timestamped, and exportable with a verification code.",
    why: "Sounding reasonable stops being a favor to them and starts being a record for you.",
  },
] as const;

export const CATEGORIES = [
  { name: "Accusations", label: "blaming", floor: false },
  { name: "Generalizations", label: "an overgeneralization", floor: false },
  { name: "Demands", label: "demanding", floor: false },
  { name: "Dismissiveness", label: "dismissive", floor: false },
  { name: "Heated language", label: "heated", floor: false },
  { name: "Passive-aggressive", label: "passive-aggressive", floor: false },
  { name: "Mind reading", label: "assuming their intent", floor: false },
  { name: "Catastrophizing", label: "catastrophizing", floor: false },
  { name: "Insults", label: "insulting", floor: true },
  { name: "Threats", label: "threatening", floor: true },
  { name: "Parental alienation", label: "undermining the other parent", floor: true },
  { name: "Gaslighting", label: "dismissing their experience", floor: true },
  { name: "Coercive control", label: "controlling", floor: true },
  { name: "Emotional blackmail", label: "pressuring", floor: true },
  { name: "Boundary violations", label: "overstepping", floor: true },
] as const;

export const STRIP_FACTS = [
  "It only speaks up for strong hits: one line per pattern, plus one concrete suggestion.",
  "It never blocks and never rewrites. It shows you what you wrote and lets you decide.",
  "Patterns have context rules, so “I’ll call my lawyer about the paperwork” passes and “One more late payment and I’ll call my lawyer” doesn’t.",
] as const;

export type SendStep = {
  n: string;
  tone: "teal" | "blue";
  where: string;
  title: string;
  body: string;
};

export const SEND_STEPS: SendStep[] = [
  {
    n: "1",
    tone: "teal",
    where: "Your phone",
    title: "Reads the whole draft",
    body: "Tone, emotion, how much “you” versus “I”, whether a request sounds like an order. The same 156 patterns, now weighed in context.",
  },
  {
    n: "2",
    tone: "teal",
    where: "Your phone",
    title: "Sets the safety floor",
    body: "Threats, insults, alienation, gaslighting, control, blackmail and boundary violations are decided here. The AI can add a warning. It can never remove one.",
  },
  {
    n: "3",
    tone: "blue",
    where: "Cloud AI",
    title: "Reads it, if it needs to",
    body: "Only the draft, the patterns your phone found, and the one message you’re replying to. Never the thread. Never in Private Mode.",
  },
  {
    n: "4",
    tone: "blue",
    where: "Cloud AI",
    title: "Explains and rewrites",
    body: "Every flagged phrase quoted word for word with a plain reason, plus two rewrites: Softer and More direct. Anything it can’t quote from your draft is thrown away.",
  },
  {
    n: "5",
    tone: "teal",
    where: "You",
    title: "Choose",
    body: "Use a rewrite, edit, send as written, or hold until morning. If the cloud is slow or you’re offline, your phone’s result stands and you can still send.",
  },
];

export const SENT_ITEMS = [
  "The draft, as written",
  "The patterns your phone already found",
  "How many attachments and what kind, never the files",
  "The one message you’re replying to, only for a direct reply",
] as const;

export const NOT_SENT_ITEMS = [
  "The rest of the conversation, ever",
  "Drafts you deleted or edited before sending",
  "Your Insights, or anything about your co-parent",
  "Anything at all in Private Mode, offline, or in a thread that isn’t with your co-parent",
] as const;

export const ALWAYS_LOCAL = [
  "Threads with anyone who isn’t your co-parent",
  "Anything a family member writes",
  "Notes on schedule-change requests",
  "And our server refuses cloud analysis for family accounts even if an app asks",
] as const;

export const STORED_ROWS = [
  { item: "Your draft while you type", stored: "Never", sees: "Nothing" },
  {
    item: "Rewrites you were offered, and whether you used one",
    stored: "Never",
    sees: "Nothing",
  },
  {
    item: "The sent message’s color and flagged phrases",
    stored: "Yes, with that message",
    sees: "The color, and can open the analysis",
  },
  { item: "Your Insights", stored: "Yes, under your account only", sees: "Nothing" },
  {
    item: "Your thumbs-down on an analysis",
    stored: "Yes, under your account only",
    sees: "Nothing",
  },
] as const;

export const STATS = [
  { n: "156", label: "hand-written patterns in 15 named categories" },
  { n: "160", label: "hand-labeled test messages it must get right before a change ships" },
  {
    n: "25",
    label: "“same message, different punctuation” checks that must give the same answer",
  },
  { n: "0", label: "drafts or rewrites saved, anywhere" },
] as const;

export const LIMIT_ITEMS = [
  "No single accuracy number. It would hide the failures that matter: a missed threat and a wrongly flagged school note are not the same mistake.",
  "It’s guidance, not judgment. It will sometimes flag something you meant kindly and miss something you didn’t. That’s why it explains itself, never blocks, and always lets you send as written.",
  "The AI is a third-party model we don’t train. We fence it in: a fixed answer format, a quote-it-or-drop-it rule, the safety floor, and context rules we wrote ourselves.",
] as const;

export const VENDORS = [
  {
    name: "OurFamilyWizard",
    feature: "ToneMeter and Writing Assistant",
    quotes: [
      "ToneMeter flags “statements that may be perceived as emotionally charged” with “red colored bars just below your message draft.” It is “an optional add-on to your OurFamilyWizard subscription.”",
      "Writing Assistant rewrites in “five tone options: considerate, casual, neutral, direct, or professional” on “the Essentials plan or above.”",
    ],
    gaps: "named patterns beyond “emotionally charged”; a reason for each phrase; a rule limiting what the AI may change; a privacy switch; offline behavior.",
  },
  {
    name: "TalkingParents",
    feature: "Sentiment Scanner and Writing Assist",
    quotes: [
      "“Scan your message’s sentiment before sending it to understand how it may be received.”",
      "“Get rewrite suggestions using structured, proven communication methods.” Listed as a feature of the Ultimate plan.",
    ],
    gaps: "what it detects; whether phrases are explained; where the analysis runs; a privacy switch.",
  },
  {
    name: "AppClose",
    feature: "Co-Parent Assist",
    quotes: [
      "“Reviews your draft messages in real time and offers optional suggestions to improve clarity, soften wording that may be perceived as escalatory, and maintain a more neutral tone.”",
      "Reviews for language that “may come across as accusatory, emotional, or confrontational.”",
    ],
    gaps: "named patterns; a reason for each phrase; which plan includes it; where the analysis runs.",
  },
  {
    name: "Custody X Change",
    feature: "Hostility monitor",
    quotes: [
      "“If you type negative words into a message, the app will alert you so you can reassess.”",
      "“If you choose to send the hostile words anyway, they’ll be called out and bolded when either parent creates a message report.”",
    ],
    gaps: "any explanation, rewrite, or reading of context. The mechanism described is negative words.",
  },
] as const;

export const ASK_ITEMS = [
  {
    q: "Does it name the pattern, or just flash red?",
    a: "15 named patterns, including coercive control, alienation, gaslighting and emotional blackmail.",
  },
  {
    q: "Does it quote the phrase and say why?",
    a: "Every flag names the exact words and gives a one-line reason. If the AI can’t quote your draft, its finding is dropped.",
  },
  {
    q: "Can it help you be firm, not just nice?",
    a: "Two rewrites: Softer and More direct. Boundaries survive.",
  },
  {
    q: "Can the AI talk itself out of a threat?",
    a: "No. Seven categories are decided on your phone, and the AI can only add to that.",
  },
  {
    q: "Can you turn the cloud off and keep the safety net?",
    a: "Yes. Private Mode, plus four things that never leave the phone regardless.",
  },
  {
    q: "Does the other parent have to pay to get it?",
    a: "No. The on-phone check and a daily allowance of AI checks are free for both parents.",
  },
] as const;

export const SPECS = [
  {
    k: "Pattern library",
    v: "162 patterns: 156 warning across 15 categories, 6 constructive (used to recognize repair, never to warn)",
  },
  {
    k: "Strip timing",
    v: "300 ms after the last keystroke; shows patterns at severity 0.7+ on a 0 to 1 scale, one per category",
  },
  {
    k: "Safety floor",
    v: "Insults, threats, parental alienation, gaslighting, coercive control, emotional blackmail, boundary violations at severity 0.8+; the rule score is a floor the model cannot lower",
  },
  {
    k: "Cloud model",
    v: "Google Gemini on Vertex AI, called through our own Cloud Function; fixed JSON answer format, temperature 0.2",
  },
  {
    k: "Time limit",
    v: "9 seconds at Send, two attempts; then the on-phone result stands and you can send",
  },
  {
    k: "Quote rule",
    v: "Any flagged phrase that isn’t a word-for-word quote of the draft is discarded before you see it",
  },
  {
    k: "Rewrites",
    v: "Softer: keeps the need, leads with an I-statement and a collaborative ask. More direct: states the need and expectation without threats, sarcasm, insults or blame. Server-checked, 1 to 2,000 characters, never an echo, never stored",
  },
  {
    k: "Context rules",
    v: "Tit-for-tat only on a direct reply; escalation needs at least two rises across at least three analyzed messages; relational labels suppressed without a reply; a prior red never carries forward",
  },
  {
    k: "Free allowance",
    v: "Up to 20 cloud checks per day for drafts the phone didn’t flag, plus 3 lifetime full previews",
  },
  {
    k: "Private Mode",
    v: "Settings → General → Private Mode, off by default; result tagged rules-only, no allowance used, no Premium prompts in those threads",
  },
  {
    k: "Always on the phone",
    v: "Non-co-parent threads, family-member senders, schedule-change notes; the server rejects cloud analysis for family accounts",
  },
  {
    k: "Feedback",
    v: "Thumbs-down nudges color thresholds for that pair by at most 0.10 after at least five pieces of feedback, stored under your own account",
  },
  {
    k: "Test set",
    v: "106 hand-labeled gold cases (10 of them ranges), 54 conversation cases including six false-positive traps, 25 invariance groups; run automatically on every change",
  },
  {
    k: "What isn’t published",
    v: "A single accuracy or F1 number. Launch was judged slice by slice",
  },
] as const;
