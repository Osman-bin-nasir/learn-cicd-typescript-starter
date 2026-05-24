import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns null if no header", () => {
    const result = getAPIKey({});
    expect(result).toBeNull();
  });

  test("returns API key when valid", () => {
    const result = getAPIKey({
      authorization: "ApiKey 12345",
    });

    expect(result).toBe("12345");
  });
});