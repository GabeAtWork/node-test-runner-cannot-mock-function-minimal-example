import { describe, it, mock } from "node:test";
import { add } from "../add.js";
import { main } from "../index.js";
import assert from "node:assert";

describe("main() – single import", () => {
  describe("Given a mocked add function", () => {
    mock.fn(add, () => 2);

    // ❌ AssertionError [ERR_ASSERTION]: 3 == 2
    // The function hasn't been mocked
    it("should return what the mock returns", () => {
      assert.equal(main(), 2);
    });
  });
});
