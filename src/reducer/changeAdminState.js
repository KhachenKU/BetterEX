const changeAdminState = (state = false, action) => {
    switch (action.type) {
        case 'CHANGEADMINSTATELOGIN':
            return true
        case 'CHANGEADMINSTATELOGOUT':
            return false
        default:
            return state
    }
}

export default changeAdminState;