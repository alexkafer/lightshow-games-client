
export const getPosition = store => ({ 
        x: store.position.x, 
        y: store.position.y
});

export const getGame = store => ({
        currentGame: store.game.currentGame,
        inGame: store.game.inGame,
        placeInLine: store.game.placeInLine
})

