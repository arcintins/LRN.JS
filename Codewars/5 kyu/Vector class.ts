// https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4/typescript
export class Vector {

  components: number[];
  length: number;

  constructor(components: number[]) {
    this.components = components;
    this.length = components.length;
  }
  
  add(vector: Vector): Vector {
    if (this.length !== vector.length) throw new Error("The Vectors have different lengths.");
    let newComponents: number[] = [];

    for (let i: number = 0; i < this.length; i++){
      newComponents.push(this.components[i] + vector.components[i]);
    }
    return new Vector(newComponents);
  }

  subtract(vector: Vector): Vector {
    if (this.length !== vector.length) throw new Error("The Vectors have different lengths.");
    let newComponents: number[] = [];

    for (let i: number = 0; i < this.length; i++){
      newComponents.push(this.components[i] - vector.components[i]);
    }
    return new Vector(newComponents);
  }

  dot(vector: Vector): number {
    if (this.length !== vector.length) throw new Error("The Vectors have different lengths.");
    return this.components.reduce((sum, el, index) => {
      return sum + el * vector.components[index]
    }, 0)
  }

  norm(): number {
    return Math.sqrt(this.components.reduce((sum, el) => sum + (el ** 2), 0))
  }
  
  equals(vector: Vector): boolean {
    if (this.length !== vector.length) return false;

    for (let i: number = 0; i < this.length; i++){
      if (this.components[i] !== vector.components[i]) return false;
    }
    return true;
  }

  toString(): string{
    return `(${this.components.join(",")})`
  }
  
};