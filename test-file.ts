const returnsString = /** @export returns-string */ function() {
  return "hello";
};

/** @export returns Promise<string> */
const returnsPromiseString = async function() {
  return "hello";
};

/** @export number */
const a: number = 10;

function apply<T, R>(arg: T, fn: (arg: T) => R) {
  return fn(arg);
}

apply(
  "hello",
  /** @export generic inferred function */ (
    /** @export generic inferred argument */ x
  ) => x.length
);

type User = { name: string; };
const user: User = { name: "Gal" };

apply(
  user,
  /** @export generic inferred function custom */ (
    /** @export generic inferred argument custom */ x
  ) => x.name
);
