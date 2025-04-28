function parseCount(value) {
    const result = Number.parseFloat(value);
    if (Number.isNaN(result)) {
      throw new Error('Невалидное значение');
    }
    return result;
  }
  
function validateCount(value) {
    try {
      return parseCount(value);
    } catch (err) {
      return err;
    }
  }
  
  class Triangle {
    /**
     * Создаёт экземпляр треугольника с заданными сторонами.
     * @param {number} a — длина стороны a
     * @param {number} b — длина стороны b
     * @param {number} c — длина стороны c
     * @throws {Error} если треугольник с такими сторонами не существует
     */
    constructor(a, b, c) {
      // Преобразуем вход в числа на всякий случай
      this.a = Number(a);
      this.b = Number(b);
      this.c = Number(c);
  
      // Проверка условия существования треугольника
      if (
        this.a + this.b <= this.c ||
        this.a + this.c <= this.b ||
        this.b + this.c <= this.a
      ) {
        throw new Error('Треугольник с такими сторонами не существует');
      }
    }
  
    /** @returns {number} периметр треугольника */
    get perimeter() {
      return this.a + this.b + this.c;
    }
  
    /** 
     * @returns {number} площадь по формуле Герона, с точностью до трёх знаков после запятой 
     */
    get area() {
      const p = this.perimeter / 2;
      const rawArea = Math.sqrt(
        p * (p - this.a) * (p - this.b) * (p - this.c)
      );
      // toFixed возвращает строку, поэтому приводим к Number, чтобы вернуть числовой тип
      return Number(rawArea.toFixed(3));
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (err) {
      return {
        get perimeter() {
          return 'Ошибка! Треугольник не существует';
        },
        get area() {
          return 'Ошибка! Треугольник не существует';
        }
      };
    }
  }
  

  