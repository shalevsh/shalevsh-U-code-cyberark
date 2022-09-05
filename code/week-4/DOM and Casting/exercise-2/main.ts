class Numbers<Type> {
    arrayOfNumbers: Type[];

    constructor(numbers: Type[]) {
        this.arrayOfNumbers = numbers;
    }

    addNumber(number: Type){
        this.arrayOfNumbers.push(number);
    }
    
    sum(): number {
        let total = 0;
        this.arrayOfNumbers.forEach(elem => {
            if (typeof elem === 'string' || typeof elem === 'number') {
                total += this.getNumValue(elem)
            }
        });
        return total;
    }
    
    getNumValue(val: string | number): number {
        if (typeof val === 'string') {
            const num: number = parseInt(val);
            return !isNaN(num) ? num : 0;
        } else {
            return val;
        }
    }
}

const numbers1: Numbers<string> = new Numbers<string>(["test", "22"]);
numbers1.addNumber("55");
numbers1.addNumber("block");
numbers1.addNumber("9");

const numbers2: Numbers<number> = new Numbers<number>([23]);
numbers2.addNumber(433);
numbers2.addNumber(11);

console.log(`1: ${numbers1.sum()}`);
console.log(`2: ${numbers2.sum()}`);