class Multimedia {
    #views = 0;

    constructor(titol, durada) {
        this.titol = titol;
        this.durada = durada;
    }

    play() {
        console.log(`Reproduint ${this.titol}`)
        this.#views += 1
    }

    getViews() {
        return this.#views
    }

    #calcularCostServer() {
        return this.durada * 0.01

    }
}

class Pelicula extends Multimedia {
     constructor(titol, durada, any, preuFix) {
        super(titol, durada)
        this.any = any
        this.preuFix = preuFix
    }

    calcularRoyalties() {
        return this.getViews() * this.preuFix
    }
}

class Serie extends Multimedia {
    constructor(titol, durada, numCapitols) {
        super(titol, durada)
        this.numCapitols = numCapitols
    }

    play() {
        super.play()
        console.log (`Marató de ${this.titol} iniciada.`)
    }

    calcularRoyalties() {
        return this.getViews() * this.numCapitols * 0.05
    }
}

class User {
    constructor(myList = []) {
        this.myList = myList
    }

    afegirALlista(item) {
        this.myList.push (item)
    }

    tempsTotalConsumit() {
        let total = 0
        for (const item of this.myList) {
            total += item.durada
        }
        return total / 60
    }
}