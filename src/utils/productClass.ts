export default class Product {
    id: number;
    type: number;
    online: boolean;
    status: boolean;
    name: string;
    address: string;
    brightness: number;
    voltage: number;
    electric: number;
    activePower: number;
    powerFactor: number;
    workTime: number;
    hz: number;
    constructor (id: number, type: number, online: boolean, status: boolean) {
      this.id = id
      this.type = type
      this.online = online
      this.status = status
      this.name = 'HNJS-00' + id
      this.address = '867584903725' + id
      this.brightness = 90
      this.voltage = 234.54
      this.electric = 0.051
      this.activePower = 8.7
      this.powerFactor = 0.783
      this.workTime = 124.45
      this.hz = 49.92
    }
}
