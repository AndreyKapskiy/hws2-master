const initState = {
    themeId: 1,
}

type InitStateType = {
    themeId: number
}

export const themeReducer = (state: InitStateType = initState, action: ChangeThemeIdActionType): InitStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {
                ...state, themeId: action.id
            }
        default:
            return state
    }
}

type ChangeThemeIdActionType = {
    type: 'SET_THEME_ID'
    id: number
}

export const changeThemeId = (id: number): ChangeThemeIdActionType => ({ type: 'SET_THEME_ID', id }) // fix any
