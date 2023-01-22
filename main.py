def encender():
    if ts <= tG:
        pins.digital_write_pin(DigitalPin.P2, 1)
        pins.digital_write_pin(DigitalPin.P3, 0)
        pins.digital_write_pin(DigitalPin.P4, 0)
    elif ts > tG and ts <= tG + tY:
        pins.digital_write_pin(DigitalPin.P2, 0)
        pins.digital_write_pin(DigitalPin.P3, ts % (cadencia * 2) % cadencia)
        pins.digital_write_pin(DigitalPin.P4, 0)
    elif ts > tG + tY and ts <= totalTiempos:
        pins.digital_write_pin(DigitalPin.P2, 0)
        pins.digital_write_pin(DigitalPin.P3, 0)
        pins.digital_write_pin(DigitalPin.P4, 1)
ts = 0
cadencia = 0
totalTiempos = 0
tY = 0
tG = 0
led.enable(False)
tG = 5 * 1000
tY = 2 * 1000
tR = 5 * 1000
totalTiempos = tR + (tY + tG)
offset = 0
cadencia = 200

def on_forever():
    global ts
    ts = control.millis() % totalTiempos + offset
    encender()
basic.forever(on_forever)
