{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    class CoffeeMaker {
        static BEANS_GRAMM_PER_SHOT: number = 7 // class level
        coffeeBeans: number = 0; // instance (object) level

        constructor(coffeeBeans: number) {
             this.coffeeBeans = coffeeBeans;
        }

        makeCoffee(shots: number): CoffeeCup {
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans !');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMilk: false,
            };
        }
    }
    const maker = new CoffeeMaker(32);
    console.log(maker)
    const asdf = new CoffeeMaker(12);
    console.log(asdf)
}