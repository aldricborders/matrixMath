const { makeVector3D } = require("../vector");

describe("Create a Vector3D", () => {
  test("with default parameters", () => {
    let testVector = makeVector3D();

    expect(testVector[0]).toBe(0);
    expect(testVector[1]).toBe(0);
    expect(testVector[2]).toBe(0);

    expect(testVector.length).toBe(3);
  });

  test("with any passed parameters", () => {
    let vectorValues = ([x, y, z] = [
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ]);

    let testVector = makeVector3D(...vectorValues);

    expect(testVector[0]).toBe(x);
    expect(testVector[1]).toBe(y);
    expect(testVector[2]).toBe(z);

    expect(testVector.length).toBe(3);
  });
});
