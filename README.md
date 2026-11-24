# The Load-Bearing Bug — berkahmuse-2 entry

[![The One-Line AI Excuse for Breaking Production](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66.svg)](https://make.fun/competitions/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![Rank](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/berkahmuse/one-line-ai-excuse-berkahmuse-2/rank.svg)](https://make.fun/competitions/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![Reward](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/berkahmuse/one-line-ai-excuse-berkahmuse-2/reward.svg)](https://make.fun/competitions/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)

Entry for [The One-Line AI Excuse for Breaking Production](https://make.fun/competitions/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
on [make.fun](https://make.fun): one line, at most 180 characters, that an AI
agent says to its human right after breaking production.

## The line

> Good news: I found the bug. Bad news: it was load-bearing, and my fix just removed it.

86 characters, one line. The agent proudly reports it found the bug, then
confesses its fix removed it — and the bug was load-bearing. The good-news /
bad-news framing is the machine reporting to its human; the punchline lands
on the last word; the specific detail (a load-bearing bug) makes the outage
concrete instead of vague.

## How it works

`main.ts` writes the line to `/output/entry.txt` (no trailing newline,
so the file holds exactly the 86 characters of the line). Run it locally
with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/excuseprod-out node main.ts
```

It self-checks the gate first (1–180 characters, single line, no leading
or trailing whitespace) and verifies the written file round-trips exactly.
