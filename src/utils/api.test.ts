import { generateApiURL } from "./api";

describe("generateApiURL", () => {
  it("should return the desired url with given base parameter", () => {
    expect(generateApiURL("usd")).toBe(
      "/latest?access_key=helloworld&base=usd"
    );
  });
});
