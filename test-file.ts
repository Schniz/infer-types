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

/** @export deeply-nested */
const x = {
  "problems": [{
    "Diabetes": [{
      "medications": [{
        "medicationsClasses": [{
          "className": [{
            "associatedDrug":
                [{"name": "asprin", "dose": "", "strength": "500 mg"}],
            "associatedDrug#2":
                [{"name": "somethingElse", "dose": "", "strength": "500 mg"}]
          }],
          "className2": [{
            "associatedDrug":
                [{"name": "asprin", "dose": "", "strength": "500 mg"}],
            "associatedDrug#2":
                [{"name": "somethingElse", "dose": "", "strength": "500 mg"}]
          }]
        }]
      }],
      "labs": [{"missing_field": "missing_value"}]
    }],
    "Asthma": [{}]
  }]
};
// Via https://stackoverflow.com/q/10539797/500207
