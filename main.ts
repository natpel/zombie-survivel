scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    scene.cameraShake(6, 2000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ...................f..........
        ...............ff.f4f.........
        ..............fbcf4eef........
        ..............fcfbfef.........
        ...............fbcbfcf..ff....
        ..............f4fbfcccffbf....
        .............f4eefcccccbbf....
        ............f4eefccccccb1f....
        ...........f4eef.fccccb1f.....
        ..........f4eef...fccb1f......
        .........f4eef....fbb1f.......
        ........f4eef....fbb1f........
        .......f4eef.....ffff.........
        ......f4eef...................
        .....f4eef....................
        ......fef.....................
        .......f......................
        ..............................
        ..............................
        `, zombie_survier, 50, 50)
})
info.onCountdownEnd(function () {
    tiles.setCurrentTilemap(tilemap`level4`)
    tiles.placeOnRandomTile(zombie_survier, sprites.dungeon.floorLightMoss)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight3, function (sprite, location) {
    game.over(false, effects.splatter)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.dissolve)
})
let zombie: Sprite = null
let projectile: Sprite = null
let zombie_survier: Sprite = null
tiles.setCurrentTilemap(tilemap`level3`)
zombie_survier = sprites.create(img`
    .........ffffff...............
    .........fddddff..............
    .........f18d81f..............
    .........fdddddf..............
    .........fdddddf..............
    ........99d99d9d9.............
    .....9d999d9dd99d999..........
    .....d999dd9999999d9..........
    .....99.ddd99dd99.dd..........
    .....99.999d99999.99..........
    .....99.9999d9d99.99..........
    .....dd.dd999ddd9.99..........
    .....d9.d999ddd9d.d9..........
    .....99.999999999.9d..........
    .....99.d99999d99.9d..........
    .....99.9d99ddd99.99..........
    .....dd.fdff55fdd.dd..........
    ......d.ddeedeeee.d...........
    ........eeedeeeee.............
    ........ee.....ee.............
    ........ee.....ee.............
    ........ee.....de.............
    ........ed.....ed.............
    ........de.....ee.............
    ........ee.....de.............
    ........ee.....dd.............
    ........ff.....ff.............
    ........ff.....ff.............
    ........fff....fff............
    ........fff....fff............
    `, SpriteKind.Player)
controller.moveSprite(zombie_survier)
zombie_survier.setStayInScreen(true)
scene.cameraFollowSprite(zombie_survier)
tiles.placeOnRandomTile(zombie_survier, sprites.dungeon.floorLightMoss)
info.startCountdown(60)
game.onUpdateInterval(7000, function () {
    for (let index = 0; index < 20; index++) {
        zombie = sprites.create(img`
            ..............................
            ..............................
            .........722222...............
            .........782822...............
            .........772772...............
            .........1f1f77...............
            .........ffff77...............
            ........77979979..............
            .....99979999799999...........
            .....99997999999997...........
            .....99.79999977.77...........
            .....77.99999999.99...........
            .....97.99979999.99...........
            .....99.99977979.97...........
            .....99.99999997.79...........
            .....79.99999999.99...........
            .....97.77888878.99...........
            .....77.78878887.77...........
            ......7.88778788.7............
            ........78....78..............
            ........87....88..............
            ........88....87..............
            ........77....77..............
            ........77....77..............
            ........77....77..............
            ........77....77..............
            ........77....77..............
            ........77....77..............
            .......777...777..............
            .......177...177..............
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(zombie, sprites.dungeon.floorLight5)
        zombie.follow(zombie_survier, 60)
    }
})
