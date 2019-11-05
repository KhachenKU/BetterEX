const changeCodeColorReducer = ( state = "#6C757D", action) => {
    switch ( action.type ){
        case 'CHANGEPRIMARY' :
            return "#007BFF"
        case 'CHANGESECONDARY' :
            return "#6C757D"
        case 'CHANGESUCCESS' :
            return "#28A745"
        case 'CHANGEDANGER' :
            return "#DC3545"
        case 'CHANGEWARNING' :
            return "#FFC107"
        case 'CHANGEINFO' :
            return "#17A2B8"
        case 'CHANGELIGHT' :
            return "#F8F9FA"
        case 'CHANGEDARK' :
            return "#343A40"
        default :
            return state
    }
}

export default changeCodeColorReducer;