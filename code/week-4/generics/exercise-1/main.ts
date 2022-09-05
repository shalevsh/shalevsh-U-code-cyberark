function sum<Type>(val: Type): number {
    if (Array.isArray(val)) {
        let sum = 0;
        val.forEach(elem => sum += getNumValue(elem));
        return sum;
    } else if (typeof val === 'string' || typeof val === 'number') {
        return getNumValue(val);
    } else {
        return 0;
    }
}

function getNumValue(val: string | number): number {
    if (typeof val === 'string') {
        const num = parseInt(val);
        return !isNaN(num) ? num : 0;
    } else {
        return val;
    }
}

console.log(sum("23"));
console.log(sum("Tomer"));
console.log(sum(44));
console.log(sum(["test", 22, 55, "block", "9"]));
console.log(sum([23, 433, 11]));