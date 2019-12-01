import { DEVICE_POSITION, START_GAME, END_GAME, LOAD_GAME, QUEUE_UPDATE } from './actionTypes'

export const logDevicePosition = content => ({
    type: DEVICE_POSITION,
    payload: {
        x: content.x,
        y: content.y
    }
})

export const startGame = () => ({
    type: START_GAME
})

export const endGame = () => ({
    type: END_GAME
})

export const loadGame = (newGame) => ({
    type: LOAD_GAME,
    payload: {
        game: newGame || null
    }
})

export const updateQueue = (newPlace) => ({
    type: QUEUE_UPDATE,
    payload: {
        placeInLine: newPlace || -1
    }
})