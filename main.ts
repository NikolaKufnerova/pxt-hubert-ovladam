radio.setFrequencyBand(72)
radio.setTransmitPower(5)
radio.setGroup(73)
radio.setTransmitSerialNumber(true)

type Protocol = {
    x: number; //smer
    y: number; //rychlost
}

let message: string

basic.forever(function () {
    let directionValue = input.acceleration(Dimension.X)
    let speedValue = input.acceleration(Dimension.Y)

    let dataToSend: Protocol = {
        x: directionValue,
        y: speedValue
    }

    let messageParts = [dataToSend.x, dataToSend.y]
    message = messageParts.join(";") + ";"
    radio.sendString(message)

    basic.pause(100)
    basic.showLeds(`
        . # # . .
        . # # # .
        . # # # #
        . # . . .
        . # . . .
    `)
})
