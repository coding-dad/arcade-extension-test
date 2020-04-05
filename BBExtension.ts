/**
* Cool text extensions
*/
//% color=190 weight=100 icon="\uf1aa" block="Supertext Blocks"
namespace SuperText {
    /**
    * Write text content
    */
    //% block="Center Text $text with color $color"
    export function centerText(text: string, color?: number) {
        game.onPaint(function () {
            screen.printCenter(text, scene.screenHeight() / 2, color || 255)
        })
    }
}