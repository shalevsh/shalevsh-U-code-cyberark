const Exercise = require("./main");

test("exercise 1", () => {
    const exercise = new Exercise();
    expect(exercise.isEven(6)).toBe(true);
    expect(exercise.isEven(5)).toBe(false);
    expect(exercise.isEven(-6)).toBe(true);
    expect(exercise.isEven(-5)).toBe(false);
    expect(exercise.isEven(0)).toBe(true);
});

test("exercise 2", () => {
    const exercise = new Exercise();
    const arr = [1, 5, 6, 3, 7];
    const originalArrLength = arr.length;
    expect(exercise.removeAtLeastOne(arr).length).toBeLessThan(
        originalArrLength
    );
});

test("exercise 3", () => {
    const exercise = new Exercise();
    const strArray = ["bla", "!bla", "!bla!", "#.#"];
    strArray.map((str) => exercise.simplify(str))
    expect(strArray[0]).toEqual("bla");
    expect(strArray[1]).toEqual("bla"); //not good func this test failed !
    expect(strArray[2]).toEqual("bla");
    expect(strArray[3]).toEqual(""); 
});

 test("exercise 4",()=>{
    const exercise = new Exercise();
    const arr1 = [true,true,true];
    const arr2 = [false,false,true];
    const arr3= [true,"amit",true];
    const arr4= ["s"];
    expect(exercise.validate(arr1)).toBeTruthy();
    expect(exercise.validate(arr2)).not.toBeTruthy();
    expect(exercise.validate(arr3)).toBeTruthy();
    expect(exercise.validate(arr4)).toEqual({error: "Need at least one boolean"});
    
})