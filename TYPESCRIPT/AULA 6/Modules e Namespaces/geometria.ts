
namespace Geometria {
    export function areaRetangulo(base: number, altura: number): number {
        return base * altura;
    }

    export function perimetroRetangulo(base: number, altura: number): number {
        return 2 * (base + altura);
    }
}

console.log(Geometria.areaRetangulo(5, 3)); // Output: 15
console.log(Geometria.perimetroRetangulo(5, 3)); // Output: 16