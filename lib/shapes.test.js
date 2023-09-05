const Shape = require("./shapes");

describe("Shape", () => {
  describe("Triangle", () => {
    it("should create a blue triangle", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });
});

describe("Shape", () => {
  describe("Square", () => {
    it("should create a green square", () => {
      const shape = new Square();
      shape.setColor("green");
      expect(shape.render()).toEqual(
        '<rect x="90" y="40" width="120" height="120" fill="green" />'
      );
    });
  });
});

describe("Shape", () => {
  describe("Circle", () => {
    it("should create a black circle", () => {
      const shape = new Circle();
      shape.setColor("black");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="100" r="80" fill="black" />'
      );
    });
  });
});
