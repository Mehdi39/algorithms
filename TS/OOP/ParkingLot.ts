interface Parking {
    carSpace: number;
    bikeSpace: number;
    carFee: number;
    bikeFee: number;
    carSpaceEmpty: boolean;
    bikeSpaceEmpty: boolean;
}

class ParkingLot {
    carSpace: number;
    bikeSpace: number;
    carFee: number;
    bikeFee: number;
    carSpaceEmpty: boolean;
    bikeSpaceEmpty: boolean;
    
    constructor (parking: Parking) {
        this.carSpace = parking.carSpace
        this.carFee = parking.carFee
        this.carSpaceEmpty = parking.carSpaceEmpty
        this.bikeSpace = parking.bikeSpace
        this.bikeFee = parking.bikeFee
        this.bikeSpaceEmpty = parking.bikeSpaceEmpty
    }

    public print() {
        console.log(`
            car_space: ${this.carSpace}
            car_fee: ${this.carFee}
            car_space_empty: ${this.carSpaceEmpty}
        `)
    }

    public newCar() {
        if (this.carSpace === 0) {
            console.log("FULL")
        } else {
            this.carSpace--
        }
    }

    public leaveCar() {
        if (this.carSpace >= 15) {
            
        }
    }
}

const parking = {
    carSpace: 15,
    bikeSpace: 15,
    carFee: 60,
    bikeFee: 20,
    carSpaceEmpty: true,
    bikeSpaceEmpty: true,
}

const myParkingLot = new ParkingLot(parking)

while (myParkingLot.carSpace) {
    console.log(myParkingLot.carSpace)
    myParkingLot.newCar()
}
myParkingLot.newCar()

console.log(myParkingLot)
