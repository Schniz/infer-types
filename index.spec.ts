import * as Infer from './index';
import * as path from 'path';

test("exports types", () => {
  const filepath = path.resolve(__dirname, "test-file.ts");
  const types = Infer.getTypes(filepath);
  expect(types).toEqual({
    "returns-string": "() => string",
    "returns Promise<string>": "() => Promise<string>",
    "number": "number",
    "generic inferred function": "(x: string) => number",
    "generic inferred argument": "string",
    "generic inferred function custom": "(x: User) => string",
    "generic inferred argument custom": "User",
    "deeply-nested": "{ \"problems\": { \"Diabetes\": { \"medications\": { \"medicationsClasses\": { \"className\": { \"associatedDrug\": { \"name\": string; \"dose\": string; \"strength\": string; }[]; \"associatedDrug#2\": { \"name\": string; \"dose\": string; \"strength\": string; }[]; }[]; \"className2\": { \"associatedDrug\": { \"name\": string; \"dose\": string; \"strength\": string; }[]; \"associatedDrug#2\": { \"name\": string; \"dose\": string; \"strength\": string; }[]; }[]; }[]; }[]; \"labs\": { \"missing_field\": string; }[]; }[]; \"Asthma\": {}[]; }[]; }",
  })
});
