//ACCOUNT ACTIONS
export function updateAccountRequest(data){
    return {
        type: '@user/UPDATE_PROFILE_REQUEST',
        payload: { data }
    }
}
export function updateAccountSuccess(profile){
    return {
        type: '@user/UPDATE_PROFILE_SUCCESS',
        payload: { profile }
    }
}

//LOCATION ACTIONS
export function updateLocationRequest(data){
    return {
        type: '@user/UPDATE_LOCATION_REQUEST',
        payload: { data }
    }
}
export function updateLocationSuccess(location){
    return {
        type: '@user/UPDATE_LOCATION_SUCCESS',
        payload: { location }
    }
}

//PERSONAL DATA ACTIONS
export function updatePersonalDataRequest(data){
    return {
        type: '@user/UPDATE_PERSONAL_REQUEST',
        payload: { data }
    }
}
export function updatePersonalDataSuccess(personalInfo){
    return {
        type: '@user/UPDATE_PERSONAL_SUCCESS',
        payload: { personalInfo }
    }
}

//ADD FAVORITE ACTIONS
export function addFavoriteItem(itemNumber){
    return {
        type: '@user/ADD_FAVORITE_ITEM',
        payload: itemNumber
    }
}
export function removeFavoriteItem(itemNumber){
    return {
        type: '@user/REMOVE_FAVORITE_ITEM',
        payload: itemNumber
    }
}






