import { defineStrategyPlugin } from "@tradejs/core/config";
import type { StrategyConfig, StrategyRegistryEntry } from "@tradejs/types";
import { config as doubleTapDefaultConfig } from "./DoubleTap/config";
import { DoubleTapStrategyDefinition } from "./DoubleTap/strategy";

export const strategyEntries: StrategyRegistryEntry[] = [
  DoubleTapStrategyDefinition,
];

const defaultConfigs: Record<string, StrategyConfig> = {
  DoubleTap: doubleTapDefaultConfig,
};

export const getBuiltInStrategyDefaultConfig = (
  strategyName: string,
): StrategyConfig | undefined => defaultConfigs[strategyName];

export { DoubleTapStrategyDefinition } from "./DoubleTap/strategy";
export { doubleTapDefaultConfig };
export { doubleTapManifest } from "./DoubleTap/manifest";
export { doubleTapAiAdapter } from "./DoubleTap/adapters/ai";

export default defineStrategyPlugin({ strategyEntries });
