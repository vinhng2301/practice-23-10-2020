class Battery {
    constructor(energy) {
        this.energy = energy;
    }

    setEnergy(energy) {
        this.energy = energy;
    };

    getEnergy() {
        return this.energy;
    };

    decreaseEnergy() {
        if (this.energy < 0) {
            this.energy--;
        }
    }
}

class FlashLamp {
    constructor() {
        this.status = status;
        this.battery = battery;
    };

    setBattery(battery) {
        this.battery = battery;
    };

    getBatteryInfo() {
        return this.battery.getEnergy();
    };

    light() {
        if (this.status) {
            alert("On");
        } else {
            alert("Off");
        }
    };

    turnOn() {
        this.status = true;
    };

    turnOff() {
        this.status = false;
    };
}