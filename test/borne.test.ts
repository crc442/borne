import { Borne } from '../src';

describe("Borne", () => {
  const borne = new Borne();

  it("works", () => {
    expect(borne.work()).toBe("streaming...⼮⼮");
  });
  
});