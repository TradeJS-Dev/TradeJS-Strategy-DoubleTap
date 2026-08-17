# @tradejs/strategy-double-tap

TradeJS strategy plugin providing `DoubleTap`.

## Strategy overview

`DoubleTap` detects double bottoms and double tops from replayable pivots,
validates tap similarity, spacing, symmetry, and pattern height, and trades the
neckline through breakout, close-acceptance, or retest entries. Stops and
targets come from the pattern's own geometry.

## Install

```bash
yarn add @tradejs/strategy-double-tap
```

Register the package in `tradejs.config.ts`:

```ts
import { defineConfig } from "@tradejs/core/config";

export default defineConfig({
  strategies: ["@tradejs/strategy-double-tap"],
});
```

The package exports `strategyEntries` for the TradeJS plugin loader together
with its strategy definitions, manifests, default configs, and public AI/ML
adapters. Strategy implementation changes are released from this repository,
independently of the TradeJS engine.

## Development

```bash
yarn install --immutable
yarn checks
```

Publishing is triggered by a GitHub release and delegated to the pinned
`TradeJS-Workflows@v1` reusable workflow.

Keywords: ai, claude, codex.
