class Dog {
        constructor(vardas, spalva, veisle) {
            this.name = vardas;
            this.color = spalva;
            this.breed = veisle;
            this.LovedPerson =[];
            this.speed = 0;
            this.isRunning = false;
            this.maxSpeed = 30;
        }

        introduce() {
            console.log(`Labas mano vardas ${this.name}, mano veisle ${this.breed} gaf gaf gaf`);
        }
        
        addLovedPerson(personName){
        this.LovedPerson.push(personName);
        console.log(this.LovedPerson);

    }
}

export { Dog } 
