import { expect, test } from "vitest";
import { splitInputIntoNumemoArray } from "./numemoFormat";

test(" 1 => ['1']", () => {
  expect(splitInputIntoNumemoArray("1")).toStrictEqual(["1"]);
});

