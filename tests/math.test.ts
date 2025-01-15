import { math } from "@/index";
import { describe, it, expect } from "vitest";

describe("math module", () => {
  it("should add two numbers correctly", () => {
    expect(math.add(2, 3)).toBe(5);
    expect(math.add(-2, -3)).toBe(-5);
    expect(math.add(0, 0)).toBe(0);
  });

  it("should subtract two numbers correctly", () => {
    expect(math.subtract(5, 3)).toBe(2);
    expect(math.subtract(-5, -3)).toBe(-2);
    expect(math.subtract(0, 0)).toBe(0);
  });

  it("should multiply two numbers correctly", () => {
    expect(math.multiply(2, 3)).toBe(6);
    expect(math.multiply(-2, 3)).toBe(-6);
    expect(math.multiply(0, 5)).toBe(0);
  });

  it("should divide two numbers correctly", () => {
    expect(math.divide(6, 3)).toBe(2);
    expect(math.divide(-6, 3)).toBe(-2);
    expect(math.divide(0, 5)).toBe(0);
    expect(math.divide(5, 0)).toBe(Number.POSITIVE_INFINITY);
  });

  it("should calculate the power correctly", () => {
    expect(math.power(2, 3)).toBe(8);
    expect(math.power(5, 0)).toBe(1);
    expect(math.power(2, -2)).toBe(0.25);
  });

  it("should calculate the square root correctly", () => {
    expect(math.sqrt(4)).toBe(2);
    expect(math.sqrt(9)).toBe(3);
    expect(math.sqrt(0)).toBe(0);
    expect(math.sqrt(-1)).toBe(Number.NaN);
  });

  it("should calculate the square correctly", () => {
    expect(math.square(2)).toBe(4);
    expect(math.square(-3)).toBe(9);
    expect(math.square(0)).toBe(0);
  });

  it("should calculate the cube correctly", () => {
    expect(math.cube(2)).toBe(8);
    expect(math.cube(-3)).toBe(-27);
    expect(math.cube(0)).toBe(0);
  });
});
