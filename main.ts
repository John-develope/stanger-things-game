namespace SpriteKind {
    export const Eleven = SpriteKind.create()
    export const Mike = SpriteKind.create()
    export const Npc = SpriteKind.create()
    export const DkOwen = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("Mapel street. >", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Mike, assets.tile`tile8`, function (sprite, location) {
    Eleven.x += -10
    Micke.x += -10
    tiles.setTilemap(tilemap`level2`)
    effects.starField.startScreenEffect()
})
scene.onOverlapTile(SpriteKind.Mike, assets.tile`tile9`, function (sprite, location) {
    Eleven.x += -10
    Micke.x += -10
    tiles.setTilemap(tilemap`level1`)
    effects.starField.endScreenEffect()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Mike, function (sprite, otherSprite) {
    Micke.follow(Eleven)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.DkOwen, function (sprite, otherSprite) {
    game.showLongText("Go home kids you shold not be here.", DialogLayout.Bottom)
    pause(2000)
    tiles.setTilemap(tilemap`level1`)
})
let Micke: Sprite = null
let Eleven: Sprite = null
let Dk_owen = sprites.create(img`
    . . . . . f f f f . . . . . 
    . . . . f 1 1 1 1 f . . . . 
    . . . f 1 d d d d 1 f . . . 
    . . . f d d d d d d f . . . 
    . . f d d f d d f d d f . . 
    . . f d d f d d f d d f . . 
    . . . f d d d d d d f . . . 
    . . . . f d d d d f . . . . 
    . . . f f f 1 1 f f f . . . 
    . . f 1 1 b f f b 1 1 f . . 
    . . f 1 1 b f f b 1 1 f . . 
    . f 1 1 1 b f f b 1 1 1 f . 
    f d d f 1 1 f f 1 1 f d d f 
    f d d f 1 1 b b 1 1 f d d f 
    . f f 1 1 1 f f 1 1 1 f f . 
    . . f b b b b b b b b f . . 
    . . f b b b f f b b b f . . 
    . . f b b b f f b b b f . . 
    . . . f f f . . f f f . . . 
    `, SpriteKind.DkOwen)
Eleven = sprites.create(img`
    ....ffff................
    ...feeeef...............
    ..feddddef..............
    ..fddddddf..............
    .fddfddfddf.............
    .fddfddfddf.............
    ..fddddddf..............
    ...fddddf...............
    ..fffddfff..............
    .f881ff188f.............
    fddf8118fddf............
    fddf8338fddf............
    .ff883388ff.............
    .f33333333f.............
    ..fddffddf..............
    ..f11ff11f..............
    ...ff..ff...............
    `, SpriteKind.Player)
Micke = sprites.create(img`
    . . . . f f f f f f . . . . 
    . . . f e e e e e e f . . . 
    . . f e e e e e e e e f . . 
    . . f e e e e e e e e f . . 
    . f e e e d e e e e e e f . 
    . f e e d f d d f d e e f . 
    . . f d d f d d f d d f . . 
    . . . f d d d d d d f . . . 
    . . f f f d d d d f f f . . 
    . f d d 4 f f f f 4 d d f . 
    f d d f 6 4 1 1 4 6 f d d f 
    f d d f 6 d 2 2 d 6 f d d f 
    . f f 6 d d 1 1 d d 6 f f . 
    . . f d d d b b d d d f . . 
    . . f b b b f f b b b f . . 
    . . f e e e f f e e e f . . 
    . . . f f f . . f f f . . . 
    `, SpriteKind.Mike)
controller.moveSprite(Eleven)
scene.setBackgroundColor(13)
Eleven.setFlag(SpriteFlag.StayInScreen, true)
tiles.setTilemap(tilemap`level1`)
Eleven.setPosition(28, 273)
Micke.setPosition(160, 296)
scene.cameraFollowSprite(Eleven)
info.setLife(5)
forever(function () {
    for (let index = 0; index < 4; index++) {
        music.playMelody("C E G B C5 B G E ", 199)
    }
    music.playMelody("C E G B D E G B ", 199)
    for (let index = 0; index < 3; index++) {
        music.playMelody("E - E G B C5 B G ", 199)
    }
    music.playMelody("E - E G B D E G ", 199)
    music.playMelody("B C E G B C5 B G ", 199)
    music.playMelody("E C E G B C5 B G ", 199)
})
