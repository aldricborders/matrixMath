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
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        let z = Math.floor(Math.random() * 10);

        let testVector = makeVector3D(x, y, z);

        expect(testVector[0]).toBe(x);
        expect(testVector[1]).toBe(y);
        expect(testVector[2]).toBe(z);

        expect(testVector.length).toBe(3);
    });
});