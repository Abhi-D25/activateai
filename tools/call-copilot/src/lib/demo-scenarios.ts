/**
 * ActivateAI Call Copilot - Demo Scenarios
 * 
 * Realistic sample discovery call transcripts for testing the copilot
 * without a live call. Each scenario exercises different leak types
 * and at least one objection.
 */

import { DemoScenario } from '../types';

/**
 * Scenario 1: Plumbing Company
 * 
 * Exercises: Front-end leak (missed calls), after-hours leak
 * Objection: "I need to think about it"
 * Expected tier: Get Covered $199
 */
export const PLUMBER_SCENARIO: DemoScenario = {
  id: 'plumber',
  name: 'Mike\'s Plumbing',
  description: 'Solo plumber missing calls while on jobs. Front-end leak with "think about it" objection.',
  businessType: 'Home Services - Plumbing',
  expectedLeaks: ['front_end', 'after_hours'],
  expectedTier: 'GET_COVERED',
  transcript: [
    { speaker: 'abhi', text: 'Hey Mike, thanks for jumping on. This is a free technical checkup. About 20 minutes. My only job today is to find where time or money is slipping through in the business. No sales pitch at the start. Cool?', delayMs: 3000 },
    { speaker: 'prospect', text: 'Yeah sure, sounds good. I got about half an hour before my next job.', delayMs: 2000 },
    { speaker: 'abhi', text: 'Perfect. I\'ll ask five quick questions, we\'ll name the biggest leak in your words, and if there\'s a clear fix I\'ll show you two flat monthly options. Sound good?', delayMs: 2500 },
    { speaker: 'prospect', text: 'Alright, let\'s do it.', delayMs: 1500 },
    { speaker: 'abhi', text: 'Great. First one. When a new lead comes in, what happens next? Who grabs it, and how fast?', delayMs: 2500 },
    { speaker: 'prospect', text: 'Well it\'s just me, so if I\'m under a sink or in someone\'s crawl space, I\'m not picking up. Sometimes I see like three missed calls when I come up for air. My wife helps sometimes but she\'s got her own job.', delayMs: 4000 },
    { speaker: 'abhi', text: 'Got it. Roughly how many new leads a week would you say? And of those, how many actually become a booked job?', delayMs: 2500 },
    { speaker: 'prospect', text: 'On a good week maybe 8 or 10 calls from new customers. I book maybe 4 of them. The others, who knows, they probably called somebody else who picked up.', delayMs: 3500 },
    { speaker: 'abhi', text: 'Makes sense. And what\'s a typical job worth for you?', delayMs: 2000 },
    { speaker: 'prospect', text: 'Depends. A drain clearing is like 150, water heater swap is 400 to 500. Average across everything, probably like 300, maybe 350 bucks.', delayMs: 3000 },
    { speaker: 'abhi', text: 'Got it, around 350. Next question. After someone doesn\'t answer or says later, how do you follow up? Is that written down somewhere, or does it live in your head?', delayMs: 3000 },
    { speaker: 'prospect', text: 'Ha, it lives in my head. Which means it doesn\'t happen. If they don\'t pick up my callback, I figure they already got someone else.', delayMs: 2500 },
    { speaker: 'abhi', text: 'Any sense of how many warm leads went quiet in the last month?', delayMs: 2000 },
    { speaker: 'prospect', text: 'I don\'t know, maybe 5 or 6? Hard to say.', delayMs: 2000 },
    { speaker: 'abhi', text: 'Fair enough. What work eats the most of your week that isn\'t selling or delivering? Scheduling, reminders, quotes, paperwork?', delayMs: 2500 },
    { speaker: 'prospect', text: 'Quotes probably. Writing them up at night after a long day. But the calls thing is the real problem.', delayMs: 2500 },
    { speaker: 'abhi', text: 'Totally. What tools do you use day to day? Phone, texts, email, CRM, booking?', delayMs: 2000 },
    { speaker: 'prospect', text: 'Just my phone and Google Calendar. I tried a CRM once but it was too complicated.', delayMs: 2500 },
    { speaker: 'abhi', text: 'Got it. Last one. What happens when someone calls or messages after you close, or while you\'re with a customer?', delayMs: 2500 },
    { speaker: 'prospect', text: 'They get voicemail. Some leave a message, some don\'t. I try to call back next morning but by then they\'ve usually found someone.', delayMs: 3000 },
    { speaker: 'abhi', text: 'About how many of those a week?', delayMs: 1500 },
    { speaker: 'prospect', text: 'After hours? Maybe 4 or 5. Plus the ones during the day when I can\'t pick up.', delayMs: 2500 },
    { speaker: 'abhi', text: 'Here\'s what I\'m hearing. The biggest leak is missed calls while you\'re on jobs. You said about 8 to 10 new customer calls a week, you book maybe 4, and the rest probably called someone who picked up. At 350 per job, if even 4 of those slip each month, that\'s roughly 1400 a month. Does that feel low, high, or about right?', delayMs: 5000 },
    { speaker: 'prospect', text: 'Yeah that sounds about right. Maybe even a little low some months.', delayMs: 2000 },
    { speaker: 'abhi', text: 'So we\'re talking about something like 1400 a month tied to missed calls. Fair?', delayMs: 2000 },
    { speaker: 'prospect', text: 'Yeah fair.', delayMs: 1500 },
    { speaker: 'abhi', text: 'Okay. Two ways we can fix this. Both are a flat monthly price. No per-session nickel-and-diming. Get Covered starts at 199 a month. We cover the leak we just named so it stops bleeding while you keep running the business. Either way, the guarantee is simple: If the problem we agree to fix isn\'t fixed by the date we set, we keep working on it free, and your monthly plan doesn\'t start until it\'s fixed. That date assumes we get the logins and answers we need from you. If we\'re waiting on you, it moves.', delayMs: 6000 },
    { speaker: 'prospect', text: 'What exactly would that do though?', delayMs: 2000 },
    { speaker: 'abhi', text: 'We\'d set up something that answers when you can\'t. Takes their info, their preferred time, texts you right away. Your number stays the same, calls just forward when you miss them. Then you or your wife confirms the time when you\'re free.', delayMs: 3500 },
    { speaker: 'prospect', text: 'Hmm. I need to think about it. Let me talk to my wife.', delayMs: 2500 },
    { speaker: 'abhi', text: 'Totally fair. What\'s your main concern? What are you afraid might happen if we start?', delayMs: 2500 },
    { speaker: 'prospect', text: 'I guess I\'m worried customers will think it\'s weird if a robot answers. My customers are mostly older folks.', delayMs: 3000 },
    { speaker: 'abhi', text: 'That\'s a real concern. Here\'s how we handle it: the greeting says it\'s an automated assistant for your business, and if anyone asks for a person, it takes their info and you call back. In testing, most people don\'t mind if they get a callback in a few minutes versus waiting on hold. Would you want to test that yourself before committing?', delayMs: 4000 },
    { speaker: 'prospect', text: 'I mean, I guess a test couldn\'t hurt.', delayMs: 2000 },
    { speaker: 'abhi', text: 'Before you pay anything, we run test calls together and you check that it works the way you want. If it doesn\'t pass your checks by the date we set, you don\'t pay. Let\'s pick a start date while we\'re here so this doesn\'t sit in limbo. What day next week works to kick off?', delayMs: 4000 },
    { speaker: 'prospect', text: 'Uh, Tuesday I guess? I\'m lighter on Tuesdays.', delayMs: 2000 },
    { speaker: 'abhi', text: 'Locked. We start Tuesday. I\'ll send a short recap of the leak we named, the plan you picked, that start date, and the written guarantee.', delayMs: 3000 }
  ]
};

/**
 * Scenario 2: Restaurant
 * 
 * Exercises: Time leak (busywork), front-end leak (reservations)
 * Objection: "Someone quoted me $97"
 * Expected tier: Get Covered Plus $349 (multi-step flow)
 */
export const RESTAURANT_SCENARIO: DemoScenario = {
  id: 'restaurant',
  name: 'Rosa\'s Kitchen',
  description: 'Family restaurant with reservation chaos and busywork. Time leak with price objection.',
  businessType: 'Restaurant',
  expectedLeaks: ['time', 'front_end'],
  expectedTier: 'GET_COVERED_PLUS',
  transcript: [
    { speaker: 'abhi', text: 'Hey Rosa, thanks for jumping on. This is a free technical checkup. About 20 minutes. My only job today is to find where time or money is slipping through in the business. No sales pitch at the start. Cool?', delayMs: 3000 },
    { speaker: 'prospect', text: 'Okay yes, but I only have fifteen minutes. We open at five.', delayMs: 2000 },
    { speaker: 'abhi', text: 'Perfect, we\'ll keep it tight. First question: when someone wants to book a table, what happens?', delayMs: 2500 },
    { speaker: 'prospect', text: 'They call, we write it in the book. Or they message on Facebook sometimes, my daughter checks that. Sometimes people just walk in.', delayMs: 3000 },
    { speaker: 'abhi', text: 'Got it. About how many reservation calls a week?', delayMs: 2000 },
    { speaker: 'prospect', text: 'Maybe 30? More on weekends. Friday Saturday we are crazy.', delayMs: 2000 },
    { speaker: 'abhi', text: 'And how many of those end up actually coming in?', delayMs: 1500 },
    { speaker: 'prospect', text: 'Most of them. But we get no-shows, maybe 4 or 5 a week. And sometimes people show up but we have no record. It is very frustrating.', delayMs: 3000 },
    { speaker: 'abhi', text: 'What\'s a typical table worth, on an average night?', delayMs: 2000 },
    { speaker: 'prospect', text: 'For dinner, maybe 80 dollars for a table of two, 150 for four. Let\'s say average 100.', delayMs: 2500 },
    { speaker: 'abhi', text: 'Got it. After someone makes a reservation, do they get a reminder before they come?', delayMs: 2000 },
    { speaker: 'prospect', text: 'No, we don\'t have time for that. We tried calling people but it takes forever.', delayMs: 2500 },
    { speaker: 'abhi', text: 'Makes sense. What work eats the most of your week that isn\'t cooking or serving?', delayMs: 2500 },
    { speaker: 'prospect', text: 'The phone. The phone never stops. And checking messages. And my daughter has to check Facebook, Instagram, the website form. It is three places. We miss things.', delayMs: 3500 },
    { speaker: 'abhi', text: 'How many hours a week would you say that phone and message checking eats?', delayMs: 2000 },
    { speaker: 'prospect', text: 'Between me and Maria, maybe 10 hours? And we are not fast. We should be cooking, not on the phone.', delayMs: 3000 },
    { speaker: 'abhi', text: 'What would you say an hour of your time in the kitchen is worth? What you\'d pay someone to cover?', delayMs: 2000 },
    { speaker: 'prospect', text: 'A good cook is 25 an hour. For me, my experience, maybe 35 or 40.', delayMs: 2500 },
    { speaker: 'abhi', text: 'Let\'s say 35. What tools do you use? Phone, any software?', delayMs: 2000 },
    { speaker: 'prospect', text: 'Phone, the paper book, Instagram, Facebook, email, and the point of sale system for orders.', delayMs: 2500 },
    { speaker: 'abhi', text: 'Where do you re-type the same info between those?', delayMs: 1500 },
    { speaker: 'prospect', text: 'Everywhere! Someone messages on Facebook, we write it in the book. Someone calls, we write it in the book. Nothing talks to each other.', delayMs: 3000 },
    { speaker: 'abhi', text: 'Here\'s what I\'m hearing. Two things leaking. First, the no-shows: 4 to 5 a week at 100 a table is 400 to 500 a week, call it 1600 a month. Second, the phone and message time: 10 hours a week at 35 an hour is about 1500 a month. Together that\'s over 3000 a month. Sound right?', delayMs: 5000 },
    { speaker: 'prospect', text: 'Yes, that sounds about right. We feel it every month.', delayMs: 2000 },
    { speaker: 'abhi', text: 'So we\'re talking about something like 3000 a month tied to no-shows and busywork. Fair?', delayMs: 2000 },
    { speaker: 'prospect', text: 'Fair, yes.', delayMs: 1500 },
    { speaker: 'abhi', text: 'Okay. Two ways we can fix this. Get Covered Plus is 349 a month. It handles both: reservations come in from calls, Facebook, Instagram into one place, guests get a reminder text, and you get a list instead of checking three apps. The guarantee: if it isn\'t fixed by the date we set, we keep working on it free, and your plan doesn\'t start until it\'s fixed.', delayMs: 5000 },
    { speaker: 'prospect', text: 'That is more than I expected. Someone showed me something for 97 dollars.', delayMs: 2500 },
    { speaker: 'abhi', text: 'Could be a fair deal. Before you compare: what is it fixing, what\'s included, and who fixes it when it breaks? You said the leak is about 3000 a month. Ours is 349 a month flat. No setup fee, you don\'t pay until it passes checks you sign off on. Ask the other one: is there a per-message charge, does it handle Facebook and Instagram, and what does a busy month cost?', delayMs: 5000 },
    { speaker: 'prospect', text: 'I don\'t remember what it included. It was very quick on the phone.', delayMs: 2500 },
    { speaker: 'abhi', text: 'No problem. I won\'t drop the price, but if you want to start smaller, we can fix just the no-shows first with reminders. That\'s Get Covered at 199. Would you rather tackle both, or start with one?', delayMs: 3500 },
    { speaker: 'prospect', text: 'Let\'s do both. If it actually fixes the phone problem, 349 is nothing.', delayMs: 2500 },
    { speaker: 'abhi', text: 'Great. Let\'s pick a start date. What day works to kick off?', delayMs: 2000 },
    { speaker: 'prospect', text: 'Monday? After the weekend rush.', delayMs: 1500 },
    { speaker: 'abhi', text: 'Locked: we start Monday. I\'ll send the recap. About 30 days after the fix is live, we\'ll send you a short recap showing what it caught, in your numbers.', delayMs: 3000 }
  ]
};

export const DEMO_SCENARIOS: DemoScenario[] = [
  PLUMBER_SCENARIO,
  RESTAURANT_SCENARIO
];

export function getScenarioById(id: string): DemoScenario | undefined {
  return DEMO_SCENARIOS.find(s => s.id === id);
}
