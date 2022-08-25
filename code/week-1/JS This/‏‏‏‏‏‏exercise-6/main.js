const coffeeShop = {
    beans: 40,

    drinkRequirements: {
        latte: 10,
        americano: 5,
        doubleShot: 15,
        frenchPress: 12,
    },

    makeDrink: function (drinkType) {
        // TODO: Finish this method
        const drinkOptions = this.drinkRequirements;
        const beansConsumption = drinkOptions[drinkType];
        if (!beansConsumption) {
            console.log("Sorry, we don't make" + drinkType);
        } else {
            this.beans >= beansConsumption
                ? (this.beans -= beansConsumption)
                : console.log("Sorry, we're all out of beans");
        }
    },
};
coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
//should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");
//should alert/console "Sorry, we're all out of beans"
