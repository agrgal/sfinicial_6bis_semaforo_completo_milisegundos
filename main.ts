function encender () {
    if (ts <= tG) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P3, 0)
        pins.digitalWritePin(DigitalPin.P4, 0)
    } else if (ts > tG && ts <= tG + tY) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        // CONSIGUE PARPADEO
        pins.digitalWritePin(DigitalPin.P3, ts / cadencia % 2)
        pins.digitalWritePin(DigitalPin.P4, 0)
    } else if (ts > tG + tY && ts <= totalTiempos) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P3, 0)
        pins.digitalWritePin(DigitalPin.P4, 1)
    }
}
let ts = 0
let cadencia = 0
let totalTiempos = 0
let tY = 0
let tG = 0
led.enable(false)
tG = 5 * 1000
tY = 2 * 1000
let tR = 5 * 1000
totalTiempos = tR + (tY + tG)
let offset = 0
cadencia = 200
basic.forever(function () {
    ts = control.millis() % totalTiempos + offset
    encender()
})
