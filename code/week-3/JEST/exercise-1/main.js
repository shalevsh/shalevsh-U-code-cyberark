class Exercise {
    isEven(n) {
        return n % 2 == 0 ? true : false;
    }
    removeAtLeastOne(arr) {
        let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1;
        arr.splice(0, numItemsToRemove);
        return arr;
    }
    //should return a clean string without these symbols: "!", "#", ".", ",", "'"
    simplify(str) {
        let symbols = ["!", "#", ".", ",", "'"];
        return str
            .split("")
            .filter((c) => symbols.indexOf(c) == -1)
            .join("");
    }

    validate(array){
        const truesArray = array.filter(elem=> elem === true);
        const falsesArray = array.filter(elem=> elem === false);
        if( !truesArray.length &&!falsesArray.length){
            return {error: "Need at least one boolean"}
        }
        return truesArray.length > falsesArray.length ? true : false;
    }
}
module.exports = Exercise;
 