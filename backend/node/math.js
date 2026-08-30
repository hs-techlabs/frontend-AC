export const sum =(a,b)=>a+b;
export const dif=(a,b)=>a-b;
export const mul=(a,b)=>a*b;
export const mod=(a,b)=>a%b;
export const g=9.8;
export const pi=3.14;

// module.exports.sum = (a, b) => a + b;
// module.exports.dif = (a, b) => a - b;
// module.exports.mul = (a, b) => a * b;
// module.exports.div = (a, b) => a / b;
// module.exports.mod = (a, b) => a % b;
// module.exports.power = (a, b) => a ** b;


// // Constants
// module.exports.g = 9.8;
// module.exports.pi = Math.PI;
// module.exports.e = Math.E;
// module.exports.phi = (1 + Math.sqrt(5)) / 2;


// // Square
// module.exports.squareArea = (a) => a ** 2;
// module.exports.squarePerimeter = (a) => 4 * a;


// // Rectangle
// module.exports.rectangleArea = (l, w) => l * w;
// module.exports.rectanglePerimeter = (l, w) => 2 * (l + w);


// // Triangle
// module.exports.triangleArea = (b, h) => 0.5 * b * h;
// module.exports.trianglePerimeter = (a, b, c) => a + b + c;


// // Equilateral Triangle
// module.exports.equilateralTriangleArea =
//     (a) => (Math.sqrt(3) / 4) * a ** 2;


// // Circle
// module.exports.circleArea = (r) => Math.PI * r ** 2;
// module.exports.circleCircumference = (r) => 2 * Math.PI * r;


// // Cube
// module.exports.cubeVolume = (a) => a ** 3;
// module.exports.cubeSurfaceArea = (a) => 6 * a ** 2;


// // Cuboid
// module.exports.cuboidVolume = (l, w, h) => l * w * h;
// module.exports.cuboidSurfaceArea =
//     (l, w, h) => 2 * (l * w + w * h + h * l);


// // Cylinder
// module.exports.cylinderVolume =
//     (r, h) => Math.PI * r ** 2 * h;

// module.exports.cylinderSurfaceArea =
//     (r, h) => 2 * Math.PI * r * (r + h);


// // Cone
// module.exports.coneVolume =
//     (r, h) => (1 / 3) * Math.PI * r ** 2 * h;

// module.exports.coneCurvedSurfaceArea =
//     (r, l) => Math.PI * r * l;

// module.exports.coneTotalSurfaceArea =
//     (r, l) => Math.PI * r * (r + l);


// // Sphere
// module.exports.sphereVolume =
//     (r) => (4 / 3) * Math.PI * r ** 3;

// module.exports.sphereSurfaceArea =
//     (r) => 4 * Math.PI * r ** 2;


// // Hemisphere
// module.exports.hemisphereVolume =
//     (r) => (2 / 3) * Math.PI * r ** 3;

// module.exports.hemisphereCurvedSurfaceArea =
//     (r) => 2 * Math.PI * r ** 2;

// module.exports.hemisphereTotalSurfaceArea =
//     (r) => 3 * Math.PI * r ** 2;


// // Pythagoras
// module.exports.hypotenuse =
//     (a, b) => Math.sqrt(a ** 2 + b ** 2);


// // Percentage
// module.exports.percentage =
//     (value, total) => (value / total) * 100;

// module.exports.percentageOf =
//     (percent, value) => (percent / 100) * value;

// module.exports.percentageIncrease =
//     (oldValue, newValue) =>
//         ((newValue - oldValue) / oldValue) * 100;

// module.exports.percentageDecrease =
//     (oldValue, newValue) =>
//         ((oldValue - newValue) / oldValue) * 100;


// // Average
// module.exports.average =
//     (a, b) => (a + b) / 2;

// module.exports.average3 =
//     (a, b, c) => (a + b + c) / 3;


// // Speed, Distance, Time
// module.exports.speed =
//     (distance, time) => distance / time;

// module.exports.distance =
//     (speed, time) => speed * time;

// module.exports.time =
//     (distance, speed) => distance / speed;


// // Profit & Loss
// module.exports.profit =
//     (sp, cp) => sp - cp;

// module.exports.loss =
//     (cp, sp) => cp - sp;

// module.exports.profitPercentage =
//     (profit, cp) => (profit / cp) * 100;

// module.exports.lossPercentage =
//     (loss, cp) => (loss / cp) * 100;


// // Simple Interest
// module.exports.simpleInterest =
//     (p, r, t) => (p * r * t) / 100;

// module.exports.simpleAmount =
//     (p, si) => p + si;


// // Compound Interest
// module.exports.compoundAmount =
//     (p, r, n, t) =>
//         p * (1 + r / (100 * n)) ** (n * t);

// module.exports.compoundInterest =
//     (p, r, n, t) =>
//         module.exports.compoundAmount(p, r, n, t) - p;


// // Physics
// module.exports.force =
//     (m, a) => m * a;

// module.exports.weight =
//     (m) => m * module.exports.g;

// module.exports.work =
//     (force, distance) => force * distance;

// module.exports.physicsPower =
//     (work, time) => work / time;

// module.exports.kineticEnergy =
//     (m, v) => 0.5 * m * v ** 2;

// module.exports.potentialEnergy =
//     (m, h) => m * module.exports.g * h;

// module.exports.momentum =
//     (m, v) => m * v;


// // Trigonometry
// module.exports.sin =
//     (angle) => Math.sin(angle);

// module.exports.cos =
//     (angle) => Math.cos(angle);

// module.exports.tan =
//     (angle) => Math.tan(angle);

// module.exports.cot =
//     (angle) => 1 / Math.tan(angle);

// module.exports.sec =
//     (angle) => 1 / Math.cos(angle);

// module.exports.cosec =
//     (angle) => 1 / Math.sin(angle);


// // Logarithms
// module.exports.ln =
//     (x) => Math.log(x);

// module.exports.log10 =
//     (x) => Math.log10(x);

// module.exports.log2 =
//     (x) => Math.log2(x);


// // Basic Math
// module.exports.abs =
//     (x) => Math.abs(x);

// module.exports.ceil =
//     (x) => Math.ceil(x);

// module.exports.floor =
//     (x) => Math.floor(x);

// module.exports.round =
//     (x) => Math.round(x);

// module.exports.sqrt =
//     (x) => Math.sqrt(x);

// module.exports.cbrt =
//     (x) => Math.cbrt(x);

// module.exports.pow =
//     (x, y) => Math.pow(x, y);

// module.exports.max =
//     (...numbers) => Math.max(...numbers);

// module.exports.min =
//     (...numbers) => Math.min(...numbers);


// // Factorial
// module.exports.factorial = (n) => {
//     if (n <= 1) return 1;
//     return n * module.exports.factorial(n - 1);
// };


// // Permutation
// module.exports.permutation =
//     (n, r) => module.exports.factorial(n) /
//               module.exports.factorial(n - r);


// // Combination
// module.exports.combination =
//     (n, r) =>
//         module.exports.factorial(n) /
//         (module.exports.factorial(r) *
//          module.exports.factorial(n - r));


// // Coordinate Geometry
// module.exports.pointDistance =
//     (x1, y1, x2, y2) =>
//         Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

// module.exports.slope =
//     (x1, y1, x2, y2) =>
//         (y2 - y1) / (x2 - x1);

// module.exports.midpointX =
//     (x1, x2) => (x1 + x2) / 2;

// module.exports.midpointY =
//     (y1, y2) => (y1 + y2) / 2;


// // Temperature
// module.exports.celsiusToFahrenheit =
//     (c) => (c * 9 / 5) + 32;

// module.exports.fahrenheitToCelsius =
//     (f) => (f - 32) * 5 / 9;

// module.exports.celsiusToKelvin =
//     (c) => c + 273.15;

// module.exports.kelvinToCelsius =
//     (k) => k - 273.15;


// // Degree / Radian
// module.exports.degreeToRadian =
//     (degree) => degree * (Math.PI / 180);

// module.exports.radianToDegree =
//     (radian) => radian * (180 / Math.PI);