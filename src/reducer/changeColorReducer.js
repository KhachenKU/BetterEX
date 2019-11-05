const changeBGColorReducer = ( state = "secondary", action) => {
    switch ( action.type ){
        case 'CHANGEPRIMARY' :
            return "primary"
        case 'CHANGESECONDARY' :
            return "secondary"
        case 'CHANGESUCCESS' :
            return "success"
        case 'CHANGEDANGER' :
            return "danger"
        case 'CHANGEWARNING' :
            return "warning"
        case 'CHANGEINFO' :
            return "info"
        case 'CHANGELIGHT' :
            return "light"
        case 'CHANGEDARK' :
            return "dark"
        default :
            return state
    }
}

export default changeBGColorReducer;