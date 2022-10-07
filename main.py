def on_received_number(receivedNumber):
    global speed, light_change
    if 1 == receivedNumber:
        bitbot.go(BBDirection.FORWARD, speed)
    if 2 == receivedNumber:
        bitbot.stop(BBStopMode.COAST)
    if 3 == receivedNumber:
        bitbot.go(BBDirection.REVERSE, speed)
    if 4 == receivedNumber:
        bitbot.stop(BBStopMode.COAST)
    if receivedNumber == 5:
        bitbot.rotate(BBRobotDirection.LEFT, 40)
    if receivedNumber == 6:
        bitbot.stop(BBStopMode.COAST)
    if receivedNumber == 7:
        bitbot.rotate(BBRobotDirection.RIGHT, 40)
    if receivedNumber == 8:
        bitbot.stop(BBStopMode.COAST)
    if receivedNumber == 9:
        speed += 10
        light_change = 1
    if receivedNumber == 10:
        speed += -10
        light_change = 1
    if receivedNumber == 11:
        speed = 50
        light_change = 1
    if speed > 100:
        speed = 0
    if speed < 0:
        speed = 100
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    global speed, light_change
    debug = 0
    bitbot.stop(BBStopMode.BRAKE)
    if debug == 1:
        speed += 10
        light_change = 1
        if speed > 100:
            speed = 0
        if speed < 0:
            speed = 100
input.on_button_pressed(Button.A, on_button_pressed_a)

light_change = 0
speed = 0
radio.set_group(140)
speed = 50
light_change = 1

def on_forever():
    global light_change
    if light_change == 1:
        light_change = 0
        if speed == 0:
            basic.show_leds("""
                # # # # #
                                # . . . #
                                # . . . #
                                # . . . #
                                # # # # #
            """)
        if speed == 10:
            basic.show_leds("""
                . . # . .
                                . . # . .
                                . . # . .
                                . . # . .
                                . . # . .
            """)
        if speed == 20:
            basic.show_leds("""
                # # # # #
                                . . . . #
                                # # # # #
                                # . . . .
                                # # # # #
            """)
        if speed == 30:
            basic.show_leds("""
                # # # # #
                                . . . . #
                                # # # # #
                                . . . . #
                                # # # # #
            """)
        if speed == 40:
            basic.show_leds("""
                # . . . #
                                # . . . #
                                # # # # #
                                . . . . #
                                . . . . #
            """)
        if speed == 50:
            basic.show_leds("""
                # # # # #
                                # . . . .
                                # # # # #
                                . . . . #
                                # # # # #
            """)
        if speed == 60:
            basic.show_leds("""
                # # # # #
                                # . . . .
                                # # # # #
                                # . . . #
                                # # # # #
            """)
        if speed == 70:
            basic.show_leds("""
                # # # # #
                                . . . . #
                                . . . . #
                                . . . . #
                                . . . . #
            """)
        if speed == 80:
            basic.show_leds("""
                # # # # #
                                # . . . #
                                # # # # #
                                # . . . #
                                # # # # #
            """)
        if speed == 90:
            basic.show_leds("""
                # # # # #
                                # . . . #
                                # # # # #
                                . . . . #
                                # # # # #
            """)
        if speed == 100:
            basic.show_leds("""
                # . # # #
                                # . # . #
                                # . # . #
                                # . # . #
                                # . # # #
            """)
basic.forever(on_forever)
