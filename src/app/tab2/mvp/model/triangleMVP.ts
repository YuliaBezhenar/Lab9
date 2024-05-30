export class TriangleMVP {
    base: number;
    side: number;
    area: number = 0;
    perimetr: number = 0;

    constructor(base: number, side: number) {
        if (base <= 0 || side <= 0) {
            throw new Error('Сторони мають бути > 0');
        }
        if (base >= 2 * side) {  //Сума довжин двох будь-яких сторін трикутника більша за довжину сторони, що залишилася
            throw new Error('Сума довжин бічних сторін має бути більша за довжину основи');
        }
        this.base = base;
        this.side = side;
        this.area = this.getArea();
        this.perimetr = this.getPerimeter();
    }

    getPerimeter(): number {
        return this.perimetr = this.base + (2 * this.side);
    }

    getArea() : number {
        //Висота трикутника
        let height = Math.sqrt(this.side ** 2 - (this.base / 2) ** 2);
        return this.area = (this.base * height) / 2;
    }
}