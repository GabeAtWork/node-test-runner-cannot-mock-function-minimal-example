import { describe, it, mock } from "node:test";
import * as myFunctions from "../add.js";
import { main } from "../index.js";
import assert from "node:assert";

describe("main() – star import", () => {
  describe("Given a mocked add function", () => {
    // ❌ TypeError [Error]: The argument 'methodName' must be a method. Received undefined
    mock.method(myFunctions, "add", () => 2);

    it("should return what the mock returns", () => {
      assert.equal(main(), 2);
    });
  });
});
