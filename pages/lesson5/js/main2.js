function log(e){
    console.log(e)
}

function petya() {
    this.name = "Petya"
    this.showName = () => {
        log(this.name)
    }
}

function lilya() {
    this.name = "Lilya"
    this.showName = function(param) {
        log(this.name)
        log(param)
    }
}

let l = new lilya()



l.showName.bind(petya)()
l.showName.call(petya, "par")


class Trans {
    move(){log("Move in Trans")}
}

class Car extends Trans {
    move(){log("Move in Car")}
}

new Car().move()