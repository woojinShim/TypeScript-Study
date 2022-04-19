{
    type CoffeeCup = {
      shots: number;
      hasMilk?: boolean;
      hasSugar?: boolean;
    };
  
    interface CoffeeMaker {
      makeCoffee(shots: number): CoffeeCup;
    }
  
    class CoffeeMachine implements CoffeeMaker {
      private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
      private coffeeBeans: number = 0; // instance (object) level
  
      constructor(coffeeBeans: number) {
        this.coffeeBeans = coffeeBeans;
      }
  
      static makeMachine(coffeeBeans: number): CoffeeMachine {
        return new CoffeeMachine(coffeeBeans);
      }
  
      fillCoffeeBeans(beans: number) {
        if (beans < 0) {
          throw new Error('value for beans should be greater than 0');
        }
        this.coffeeBeans += beans;
      }
  
      clean() {
        console.log('cleaning the machine...🧼');
      }
  
      private grindBeans(shots: number) {
        console.log(`grinding beans for ${shots}`);
        if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
          throw new Error('Not enough coffee beans!');
        }
        this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      }
  
      private preheat(): void {
        console.log('heating up... 🔥');
      }
  
      private extract(shots: number): CoffeeCup {
        console.log(`Pulling ${shots} shots... ☕️`);
        return {
          shots,
          hasMilk: false,
        };
      }
  
      makeCoffee(shots: number): CoffeeCup {
        this.grindBeans(shots);
        this.preheat();
        return this.extract(shots);
      }
    }
  
    class CheapMilkSteamer {
        private steamMilk(): void {
            console.log('Steaming milk')
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }{
        type CoffeeCup = {
          shots: number;
          hasMilk?: boolean;
          hasSugar?: boolean;
        };
      
        interface MilkFrother {
          makeMilk(cup: CoffeeCup): CoffeeCup;
        }
      
        interface SugarSource {
          addSugar(cup: CoffeeCup): CoffeeCup;
        }
      
        class CheapMilkSteamer implements MilkFrother {
          makeMilk(cup: CoffeeCup): CoffeeCup {
            console.log(`Steaming some milk🥛...`);
            return {
              ...cup,
              hasMilk: true,
            };
          }
        }
      
        class FancyMilkSteamer implements MilkFrother {
          makeMilk(cup: CoffeeCup): CoffeeCup {
            console.log(`Fancy!!!! Steaming some milk🥛...`);
            return {
              ...cup,
              hasMilk: true,
            };
          }
        }
      
        class AutomaticSugarMixer implements SugarSource {
          addSugar(cuppa: CoffeeCup): CoffeeCup {
            console.log(`Adding sugar...`);
            return {
              ...cuppa,
              hasSugar: true,
            };
          }
        }
      
        interface CoffeeMaker {
          makeCoffee(shots: number): CoffeeCup;
        }
      
        class CoffeeMachine implements CoffeeMaker {
          private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
          private coffeeBeans: number = 0; // instance (object) level
      
          constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
          }
      
          static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
          }
      
          fillCoffeeBeans(beans: number) {
            if (beans < 0) {
              throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
          }
      
          clean() {
            console.log('cleaning the machine...🧼');
          }
      
          private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
              throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
          }
      
          private preheat(): void {
            console.log('heating up... 🔥');
          }
      
          private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots... ☕️`);
            return {
              shots,
              hasMilk: false,
            };
          }
      
          makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
          }
        }
      
        class CaffeLatteMachine extends CoffeeMachine {
          constructor(beans: number, public readonly serialNumber: string) {
            super(beans);
          }
          private steamMilk(): void {
            console.log('Steaming some milk... 🥛');
          }
          makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
              ...coffee,
              hasMilk: true,
            };
          }
        }
      
        class SweetCoffeeMaker extends CoffeeMachine {
          makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return {
              ...coffee,
              hasSugar: true,
            };
          }
        }
      
        class SweetCaffeLatteMachine extends CoffeeMachine {
          constructor(
            beans: number,
            private sugar: SugarSource,
            private milk: MilkFrother,
          ) {
            super(beans);
          }
          makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            const milkCoffee = this.milk.makeMilk(coffee);
            return this.sugar.addSugar(milkCoffee);
          }
        }
        const machine = new SweetCaffeLatteMachine(
          32,
          new AutomaticSugarMixer(),
          new FancyMilkSteamer()
        );
        machine.makeCoffee(2);
      }
      

    class AutomaticSugarMixer {
        private getSugar() {
            console.log('Getting some sugar from candy');
            return true;
        }

        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return 
        }
    }

    class CaffeLatteMachine extends CoffeeMachine {
      constructor(beans: number, public readonly serialNumber: string, private milkFother: CheapMilkSteamer) {
        super(beans);
      }
      private steamMilk(): void {
        console.log('Steaming some milk... 🥛');
      }
      makeCoffee(shots: number): CoffeeCup {
        const coffee = super.makeCoffee(shots);
        this.steamMilk();
        return {
          ...coffee,
          hasMilk: true,
        };
      }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return {
                ...coffee,
                hasSugar: true,
            }
        }
    }

    class SweetCoffeeLatteMachine extends CoffeeMachine {
        getSuger() {
            console.log('Getting some sugar');
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.getSuger();
            return {
                ...coffee,
                hasSugar: true,
            }
        }
    }

    const machines: CoffeeMaker[] = [
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(14),
        new CoffeeMachine(12),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
    ];
    machines.forEach(machine => {
        console.log('---------------------------');
        machine.makeCoffee(1);
        machine.makeCoffee
    })

  
    const machine = new CoffeeMachine(23);
    const latteMachine = new CaffeLatteMachine(23, 'SSSS');
    const coffee = latteMachine.makeCoffee(1);
    console.log(coffee);
    console.log(latteMachine.serialNumber);
  }
  