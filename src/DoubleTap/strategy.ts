import { createCostIsolatedStrategyConfigParser } from "@tradejs/strategy-kit/config";
import type { ValidatedStrategyRegistryEntry } from "@tradejs/strategy-kit/config";
import { config as DEFAULT_CONFIG, DoubleTapConfig } from "./config";
import { createDoubleTapCore } from "./core";
import { doubleTapManifest } from "./manifest";

export const DoubleTapStrategyDefinition: ValidatedStrategyRegistryEntry<DoubleTapConfig> =
  {
    defaults: DEFAULT_CONFIG,
    parseConfig: createCostIsolatedStrategyConfigParser({
      strategyName: "DoubleTap",
      defaults: DEFAULT_CONFIG,
    }),
    createCore: createDoubleTapCore,
    manifest: doubleTapManifest,
  };
