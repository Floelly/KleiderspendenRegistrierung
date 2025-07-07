import { describe } from "vitest";

describe('Test environment up and running', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });
  it.fails('should fail', () => {
    expect(false).toBe(true);
  });
});