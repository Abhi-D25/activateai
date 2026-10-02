# Privacy and Data Retention

This document explains exactly what data the Call Copilot processes, which third-party vendors are involved, and what each vendor retains. This is an honest accounting - no overclaiming.

## Design Principles

The Call Copilot is **ephemeral by design**:

- No audio is recorded or stored
- No transcripts are saved to any database
- No call content is written to localStorage, IndexedDB, or cookies
- No server logs contain transcript text
- No analytics track call content
- Everything lives in browser memory and is wiped when the call ends or the tab closes

## Vendors Used

### 1. Deepgram (Speech-to-Text)

**What it does:** Converts audio from your microphone and the call tab into text in real-time.

**Data flow:** Audio streams directly from your browser to Deepgram's servers via WebSocket. Transcription results stream back. Audio never touches our server.

**Retention policy with `mip_opt_out=true`:**
> "Data from opted-out requests is retained only for the duration necessary to process the request."

Source: [Deepgram Model Improvement Partnership Program](https://developers.deepgram.com/docs/the-deepgram-model-improvement-partnership-program)

We automatically add `mip_opt_out=true` to all API requests. With this setting:
- Audio is processed in real-time and not stored after the response is returned
- Transcripts are not stored by Deepgram
- Data is not used for model training

**What Deepgram still retains:**
- Usage metadata (timestamps, duration, model used) for billing
- Request logs for operational purposes

**Docs referenced:**
- https://developers.deepgram.com/docs/the-deepgram-model-improvement-partnership-program
- https://developers.deepgram.com/docs/live-streaming-audio
- https://deepgram.com/privacy

### 2. Anthropic Claude (LLM for Suggestions) - Optional

**What it does:** When an API key is provided, Claude can generate more contextual suggestions based on the conversation. Without a key, the copilot uses deterministic rule-based suggestions instead.

**Data flow:** If enabled, transcript snippets are sent to Claude's API to generate suggestions. No audio is sent.

**Standard API retention:**
Anthropic's standard commercial API has data retention. Per their documentation:
> "Under a ZDR [Zero Data Retention] arrangement, Anthropic does not store customer prompts or responses at rest after the API response is returned."

However, ZDR is **not self-service**. You must contact Anthropic sales to enable it for your organization.

Source: [Anthropic API and Data Retention](https://platform.claude.com/docs/en/manage-claude/api-and-data-retention)

**What this means in practice:**
- Standard API: Anthropic may retain prompts and responses for up to 30 days for safety monitoring
- Data is not used for model training on commercial plans
- For true zero retention, you must request ZDR from Anthropic sales

**Recommendation for Abhi:**
If client privacy is critical, either:
1. Don't use the LLM features (rule-based suggestions work without any API key)
2. Contact Anthropic sales to enable ZDR for your organization
3. Use the LLM only for calls where the client has consented

**Docs referenced:**
- https://platform.claude.com/docs/en/manage-claude/api-and-data-retention
- https://privacy.claude.com/en/articles/8956058-i-have-a-zero-data-retention-agreement-with-anthropic-what-products-does-it-apply-to

## What We Control

### Browser-side (this app):

- **No storage:** We do not use localStorage, IndexedDB, cookies, or any other persistent browser storage for call content
- **Memory only:** All transcript data exists only in React state and is garbage-collected when the component unmounts or the tab closes
- **No analytics:** We do not send call content to any analytics service
- **End Call button:** Immediately stops all audio streams and WebSocket connections, and wipes all state

### Server-side:

- **Token endpoint only:** Our only server route (`/api/token`) generates short-lived credentials. It does not log or store any call content.
- **No database:** There is no database in this application
- **No logging of content:** Environment is configured to not log request bodies

## Audio Capture Details

Audio is captured using standard browser APIs:

1. **Microphone:** `navigator.mediaDevices.getUserMedia({ audio: true })`
2. **Tab audio:** `navigator.mediaDevices.getDisplayMedia({ audio: true })` with tab sharing

The audio streams are piped directly to Deepgram's WebSocket. They are not:
- Recorded to disk
- Sent to any other endpoint
- Buffered beyond what's needed for real-time streaming

## Verification Steps

To verify this implementation:

1. **Network tab:** Watch the Network tab in Chrome DevTools during a call. You'll see WebSocket traffic to `api.deepgram.com` only (plus optionally `api.anthropic.com` if LLM is enabled).

2. **Application tab:** Check localStorage, IndexedDB, and cookies before/after a call. No call content is stored.

3. **Source code:** This codebase is the complete implementation. Search for any database connections, localStorage usage, or logging - you won't find any for call content.

## Limitations and Honest Disclosures

1. **Deepgram usage logs:** While audio and transcripts are not retained, Deepgram does keep usage metadata for billing. This includes timestamps and duration but not content.

2. **Anthropic without ZDR:** Standard API usage may be retained up to 30 days by Anthropic for safety monitoring. If this is unacceptable, don't enable LLM features or contact Anthropic for ZDR.

3. **Browser security:** We cannot prevent someone from using browser extensions or screen recording software to capture the copilot screen. This is outside our control.

4. **ISP/network visibility:** WebSocket traffic to Deepgram uses TLS encryption, but metadata (that you're connecting to Deepgram) is visible to network observers.

5. **Memory vs. "truly zero":** Data in browser memory is not cryptographically secure. A determined attacker with access to the machine could potentially dump memory. This is true of any browser application.

## Summary

| Data Type | Stored by Us | Stored by Deepgram | Stored by Anthropic |
|-----------|--------------|-------------------|---------------------|
| Audio | No | No (with mip_opt_out) | N/A |
| Transcripts | No | No (with mip_opt_out) | Up to 30 days (standard), None (with ZDR) |
| Usage metadata | No | Yes | Yes |
| Call content in prompts | No | N/A | Up to 30 days (standard), None (with ZDR) |

---

*Last updated: October 2026*
*Vendor docs checked: October 2, 2026*
