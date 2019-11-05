const changeUserState = (state = false, action) => {
    switch (action.type) {
        case 'CHANGEUSERSTATELOGIN':
            return true
        case 'CHANGEUSERSTATELOGOUT':
            return false
        default:
            return state
    }
}

export default changeUserState;