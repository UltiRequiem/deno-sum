import { assertEquals } from "https://deno.land/std@0.224.0/testing/asserts.ts";
import { sum } from "./mod.ts";

Deno.test("Sum numbers.", () => {
  assertEquals(sum(4, 12, 3, 1), 20);

  assertEquals(sum(1, 2, 3, 4), 10);
});
