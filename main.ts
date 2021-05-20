input.onButtonPressed(Button.A, function () {
    counter += 1
    if (counter >= 10) {
        counter += 0 - counter
    }
    basic.showNumber(counter)
})
let counter = 0
counter = 0
basic.showNumber(counter)
basic.forever(function () {
	
})
