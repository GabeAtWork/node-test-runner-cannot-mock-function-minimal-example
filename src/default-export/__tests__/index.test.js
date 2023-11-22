import { describe, it, mock } from "node:test";
import myFunctions from "../add";
import assert from "node:assert";

describe("main() – default", () => {
  describe("Given a mocked add function", () => {
    mock.method(myFunctions, "add", () => 2);

    // ✅ Passes
    it("should return what the mock returns", () => {
      assert.equal(myFunctions.add(), 2);
    });
  });
});
