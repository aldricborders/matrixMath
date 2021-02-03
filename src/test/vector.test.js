const { makeVector3D } = require("../vector");

describe("Create a Vector3D", () => {
    test("with default parameters", () => {
        let testVector = makeVector3D();

        expect(testVector[0]).toBe(0);
        expect(testVector[1]).toBe(0);
        expect(testVector[2]).toBe(0);

        expect(testVector.length).toBe(3);
    });
  });