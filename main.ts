input.onButtonPressed(Button.AB, function () {
    a = 0
    b = 1
    contador = 0
})
// Función para leer los valores numéricos y representarlos en un dado.
function show_value (núm: number) {
    if (núm == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (núm == 2) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . .
            . # . . .
            . . . . .
            `)
    } else if (núm == 3) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            . . . . .
            `)
    } else if (núm == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    } else if (núm == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else if (núm == 6) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
    }
}
let value_dice = 0
let contador = 0
let b = 0
let a = 0
a = 1
b = 0
contador = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && (a == 1 && contador < 10)) {
        value_dice = randint(1, 6)
        show_value(value_dice)
        contador += 1
    } else if (contador == 10) {
        basic.pause(5000)
        basic.showIcon(IconNames.Happy)
    }
    if (input.buttonIsPressed(Button.B) && (b == 1 && contador < 10)) {
        value_dice = randint(1, 6)
        show_value(value_dice)
        contador += 1
    } else if (contador == 10) {
        basic.pause(5000)
        basic.showIcon(IconNames.Happy)
    }
})
