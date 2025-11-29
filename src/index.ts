import { BunRuntime } from "@effect/platform-bun";
import { Effect } from "effect";

const program = Effect.gen(function* () {
  yield* Effect.log("this will be interesting soon I think");
});

BunRuntime.runMain(program);
