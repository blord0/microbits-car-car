radio.onReceivedNumber(function (receivedNumber) {
    if (1 == receivedNumber) {
        bitbot.go(BBDirection.Forward, speed)
    }
    if (2 == receivedNumber) {
        bitbot.stop(BBStopMode.Coast)
    }
    if (3 == receivedNumber) {
        bitbot.go(BBDirection.Reverse, speed)
    }
    if (4 == receivedNumber) {
        bitbot.stop(BBStopMode.Coast)
    }
    if (receivedNumber == 5) {
        bitbot.rotate(BBRobotDirection.Left, 40)
    }
    if (receivedNumber == 6) {
        bitbot.stop(BBStopMode.Coast)
    }
    if (receivedNumber == 7) {
        bitbot.rotate(BBRobotDirection.Right, 40)
    }
    if (receivedNumber == 8) {
        bitbot.stop(BBStopMode.Coast)
    }
    if (receivedNumber == 9) {
        speed += 10
        light_change = 1
    }
    if (receivedNumber == 10) {
        speed += -10
        light_change = 1
    }
    if (receivedNumber == 11) {
        speed = 50
        light_change = 1
    }
    if (speed > 100) {
        speed = 0
    }
    if (speed < 0) {
        speed = 100
    }
})
input.onButtonPressed(Button.A, function () {
    bitbot.stop(BBStopMode.Brake)
    if (debug == 1) {
        speed += 10
        light_change = 1
        if (speed > 100) {
            speed = 0
        }
        if (speed < 0) {
            speed = 100
        }
    }
})
input.onButtonPressed(Button.B, function () {
    bitbot.go(BBDirection.Forward, 50)
    if (debug == 1) {
        speed += -10
        light_change = 1
        if (speed > 100) {
            speed = 0
        }
        if (speed < 0) {
            speed = 100
        }
    }
})
let debug = 0
let light_change = 0
let speed = 0
radio.setGroup(140)
speed = 50
light_change = 1
debug = 0
bitbot.setPixelColor(5, 0xFF0000)
bitbot.setPixelColor(11, 0xFF0000)
bitbot.setPixelColor(6, 0xFF0000)
bitbot.setPixelColor(0, 0xFF0000)
bitbot.ledBrightness(1)
basic.forever(function () {
    if (light_change == 1) {
        light_change = 0
        if (speed == 0) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        }
        if (speed == 10) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                `)
        }
        if (speed == 20) {
            basic.showLeds(`
                # # # # #
                . . . . #
                # # # # #
                # . . . .
                # # # # #
                `)
        }
        if (speed == 30) {
            basic.showLeds(`
                # # # # #
                . . . . #
                # # # # #
                . . . . #
                # # # # #
                `)
        }
        if (speed == 40) {
            basic.showLeds(`
                # . . . #
                # . . . #
                # # # # #
                . . . . #
                . . . . #
                `)
        }
        if (speed == 50) {
            basic.showLeds(`
                # # # # #
                # . . . .
                # # # # #
                . . . . #
                # # # # #
                `)
        }
        if (speed == 60) {
            basic.showLeds(`
                # # # # #
                # . . . .
                # # # # #
                # . . . #
                # # # # #
                `)
        }
        if (speed == 70) {
            basic.showLeds(`
                # # # # #
                . . . . #
                . . . . #
                . . . . #
                . . . . #
                `)
        }
        if (speed == 80) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # # # # #
                # . . . #
                # # # # #
                `)
        }
        if (speed == 90) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # # # # #
                . . . . #
                # # # # #
                `)
        }
        if (speed == 100) {
            basic.showLeds(`
                # . # # #
                # . # . #
                # . # . #
                # . # . #
                # . # # #
                `)
        }
    }
})
