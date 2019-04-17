# `infer-types`

Returns the exported inferred types from TypeScript.

This is a tool to test that the types you expect TypeScript to infer are correct - this is meant to be used in snapshot or plain tests.

## Install

```
npm install --save-dev infer-types
```

## Usage

Let's say you have the following file:

```ts
// ./test-file.ts

function apply<T, R>(arg: T, fn: (arg: T) => R) {
  return fn(arg);
}

// apply is a generic function, and we'd like to know that a user that will use
// it, will get type safety and code completion, so no `any` will pop out.
//
// Let's make some test cases:

apply(10, /** @export number => number */ x => x + 1);
apply(10, /** @export number => string */ x => String(x));
apply("hello", /** @export string => number */ x => x.length);

type User = { name: string };
const user: User = { name: "Gal" };

apply(user, /** @export string => number */ x => x.name);
```

And in our testing framework of choice:

```ts
import { getTypes } from "infer-types";

test("infers correctly", () => {
  expect(getTypes("./test-file.ts")).toEqual({
    "number => number": "(x: number) => number",
    "number => string": "(x: number) => string",
    "string => number": "(x: string) => number",
    "User => string": "(x: User) => string"
  });
});
```
