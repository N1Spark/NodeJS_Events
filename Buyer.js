class Buyer{
    #_name;
    #_email;
    constructor(name, email, emitter){
        this.#_name = name;
        this.#_email = email;
        emitter.on('sales', (amount) => {
            this.SaleNotice(amount);
        });
    }
    SaleNotice(percent){
        return console.log(`${this.#_name} ${this.#_email}. Sale: ${percent}%`)
    }
    ToString(){
        return `Name: ${this.#_name} Email: ${this.#_email}`;
    }
}

export {Buyer}