# ActivateAI Call Copilot

A live sales call assistant for discovery calls. Walks you through the approved script, calculates leaks in real-time, surfaces the right response at the right time, and helps you close with confidence.

## Quick Start

### Demo Mode (No API Keys Required)

```bash
cd tools/call-copilot
npm install
npm run dev
```

Open http://localhost:3001 and click one of the demo scenarios. Demo mode replays a sample discovery call transcript through the exact same pipeline, so you can validate the experience without a live call.

### Live Mode

1. Copy `.env.example` to `.env.local` and fill in your API keys
2. Run `npm run dev`
3. Open http://localhost:3001
4. Grant microphone and tab sharing permissions when prompted
5. Start your Google Meet call in another tab

## Features

- **Live transcription** - Real-time speech-to-text from your mic and the call tab
- **Script guidance** - Shows where you are in the 5-step script (Open, Ask, Name the leak, Offer, Book)
- **Question tracking** - Highlights which of the 5 required questions you've asked
- **Leak calculators** - Auto-fills from what it hears, you can edit anytime
- **Tier recommendations** - Suggests Get Covered, Plus, or Full Fix based on the 1/5 rule
- **Objection detection** - Surfaces battlecard responses when it hears common objections
- **Steering hints** - Gentle nudges when the call drifts off topic
- **Post-call summary** - Generates scope recap and 30-day template with copy buttons
- **Ephemeral by design** - Nothing is saved; everything is wiped when you close

## Architecture

```
Browser                          Cloud Services
+------------------+             +------------------+
|                  |   audio     |                  |
|  Microphone  ----+------------>|    Deepgram      |
|                  |             |  (speech-to-text)|
|  Tab Audio   ----+------------>|                  |
|  (Meet call)     |             +--------+---------+
|                  |                      |
|  +------------+  |<---------------------+ transcripts
|  | Call       |  |
|  | Copilot UI |  |   prompts   +------------------+
|  |            |  +------------>|    Anthropic     |
|  +------------+  |             |    (optional)    |
|        |         |<------------+                  |
|        v         |  suggestions+------------------+
|  React State     |
|  (memory only)   |
+------------------+

Token Minting:
Browser --> /api/token --> Deepgram credentials
            (protected by COPILOT_ACCESS_KEY)
```

### Key Files

```
src/
  lib/
    knowledge.ts      # Script, questions, objections, tier rules
    calculator.ts     # Leak calculation formulas
    extractor.ts      # Deterministic number/phrase extraction
    suggestions.ts    # Rule-based suggestion engine
    demo-scenarios.ts # Sample call transcripts
  components/
    LiveCopilot.tsx   # Main call interface
    LeakCalculator.tsx
    PostCallView.tsx
  app/
    api/token/route.ts # Token minting for Deepgram
```

### Data Flow

1. Audio from mic and tab streams directly to Deepgram via WebSocket
2. Transcripts arrive in real-time and are stored in React state (memory only)
3. Extractor pulls numbers and detects objections from transcript text
4. Suggestion engine generates contextual prompts based on script position
5. Calculator computes leaks and tier recommendations
6. On "End Call", post-call view appears; on close, all state is wiped

## Audio Capture on macOS

The copilot captures two audio sources:

1. **Your microphone** - via `getUserMedia({ audio: true })`
2. **Tab audio (the prospect)** - via `getDisplayMedia({ audio: true })` with tab sharing

### Required Permissions

When you start a live call, Chrome will prompt for:

1. **Microphone access** - Click "Allow"
2. **Share a tab** - Select the Google Meet tab and check "Share tab audio"

### macOS System Preferences

In System Preferences > Security & Privacy > Privacy:

- **Microphone**: Chrome must be enabled
- **Screen Recording**: Chrome must be enabled (for tab audio)

### If Tab Audio Doesn't Work

The `getDisplayMedia` API with audio is Chrome-only and can be finicky. Alternatives:

1. **Chrome extension with tabCapture** - More reliable but requires installing an extension
2. **Virtual audio device (BlackHole)** - Route all system audio through a virtual device that the browser can capture
3. **External mixer** - Hardware solution for professional setups

For demo purposes and most calls, the built-in approach works. Document any issues and we can add extension support if needed.

## Environment Variables

```bash
# Required for live mode
DEEPGRAM_API_KEY=your_key_here

# Required for live mode - protects the token endpoint
COPILOT_ACCESS_KEY=your_shared_secret

# Optional - enables LLM-powered suggestions
ANTHROPIC_API_KEY=your_key_here
```

Generate a secure access key:
```bash
openssl rand -hex 32
```

## Demo Mode vs Live Mode

| Feature | Demo Mode | Live Mode |
|---------|-----------|-----------|
| Transcription | Replayed from sample | Real-time from Deepgram |
| API keys needed | None | DEEPGRAM + ACCESS_KEY |
| Audio permissions | None | Mic + Tab sharing |
| Speed control | Yes (0.5x to 4x) | N/A |
| Use case | Training, testing | Actual calls |

## Checklist: What Only Abhi Can Do

### One-time Setup

- [ ] Create Deepgram account at https://console.deepgram.com/
- [ ] Get Deepgram API key (free tier has generous limits)
- [ ] In Deepgram settings, note: we automatically add `mip_opt_out=true` for privacy
- [ ] (Optional) Create Anthropic account at https://console.anthropic.com/
- [ ] (Optional) If you need zero retention with Anthropic, contact their sales
- [ ] Generate a COPILOT_ACCESS_KEY: `openssl rand -hex 32`
- [ ] Set up `.env.local` with all keys

### Before Each Call

- [ ] Open http://localhost:3001 (or deployed URL)
- [ ] Click "Start Live Call"
- [ ] Grant microphone permission when prompted
- [ ] When tab sharing dialog appears, select the Google Meet tab
- [ ] Check "Share tab audio"
- [ ] Start the call in Meet

### macOS Permissions (First Time)

- [ ] System Preferences > Security & Privacy > Privacy > Microphone > Enable Chrome
- [ ] System Preferences > Security & Privacy > Privacy > Screen Recording > Enable Chrome

## Running Tests

```bash
npm test
```

Tests cover:
- Leak calculators (using mock cases from the price ladder)
- Tier recommendation logic (1/5 rule, all tier rules)
- No-em-dash check (style requirement)

## Development

```bash
npm run dev      # Start dev server on port 3001
npm run build    # Production build
npm run lint     # ESLint + em-dash check
npm test         # Run all tests
```

## Privacy

See [PRIVACY.md](./PRIVACY.md) for a detailed accounting of:
- What data is processed
- Which vendors are involved
- What each vendor retains
- Honest limitations and disclosures

**Key point:** This is ephemeral by design. No audio recording, no transcript storage, no database, no localStorage. Everything is in memory and wiped on close.

## Decisions Made (For Abhi's Review)

Since nobody was available to answer questions, I made these calls:

1. **STT vendor: Deepgram** - Chose over AssemblyAI because:
   - `mip_opt_out=true` is a simple query parameter for zero model training
   - Clear documentation that opted-out data is retained only during processing
   - Good latency and reasonable pricing

2. **LLM as optional** - The copilot works fully without Claude. Rule-based suggestions cover 90% of cases. LLM is only useful for more nuanced steering.

3. **Tab audio capture** - Used browser-native `getDisplayMedia` rather than requiring an extension. May be less reliable but zero install required.

4. **Founding prices default on** - The toggle defaults to founding prices since we're in the founding window.

5. **No external integrations** - Per requirements, no Notion/Airtable/Granola integrations in this app. Just copy buttons for the summaries.

---

*Built for ActivateAI M27 milestone. Target: Oct 8, 2026.*
