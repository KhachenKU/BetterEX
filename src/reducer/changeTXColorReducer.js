const changeTXColorReducer = (state = "#ffffff", action) => {
    switch (action.type) {
        case 'CHANGEPRIMARY':
            return "#ffffff"
        case 'CHANGESECONDARY':
            return "#ffffff"
        case 'CHANGESUCCESS':
            return "#ffffff"
        case 'CHANGEDANGER':
            return "#ffffff"
        case 'CHANGEWARNING':
            return "#000000"
        case 'CHANGEINFO':
            return "#ffffff"
        case 'CHANGELIGHT':
            return "#000000"
        case 'CHANGEDARK':
            return "#ffffff"
        default:
            return state
    }
}

export default changeTXColorReducer;