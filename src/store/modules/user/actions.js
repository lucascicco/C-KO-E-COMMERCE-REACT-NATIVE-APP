// ACCOUNT ACTIONS
export function updateAccountRequest(data, navigation) {
  // SAGA
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
    navigation,
  };
}
export function updateAccountSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

// LOCATION ACTIONS
export function createLocationRequest(data, navigation, page) {
  // SAGA
  return {
    type: '@user/CREATE_LOCATION_REQUEST',
    payload: { data },
    navigation: { navigation, page },
  };
}

export function updateLocationRequest(data, navigation) {
  // SAGA
  return {
    type: '@user/UPDATE_LOCATION_REQUEST',
    payload: { data },
    navigation,
  };
}

export function updateLocationSuccess(location) {
  return {
    type: '@user/UPDATE_LOCATION_SUCCESS',
    payload: { location },
  };
}

// PERSONAL DATA ACTIONS
export function createPersonalDataRequest(data, navigation, page, params = {}) {
  // SAGA
  return {
    type: '@user/CREATE_PERSONAL_REQUEST',
    payload: { data },
    navigation: { navigation, page, params },
  };
}

export function updatePersonalDataRequest(data, navigation) {
  // SAGA
  return {
    type: '@user/UPDATE_PERSONAL_REQUEST',
    payload: { data },
    navigation,
  };
}

export function updatePersonalDataSuccess(personalInfo) {
  return {
    type: '@user/UPDATE_PERSONAL_SUCCESS',
    payload: { personalInfo },
  };
}

// ADD FAVORITE ACTIONS
export function RequestFavoriteItems(itemNumber, favorite) {
  // SAGA
  return {
    type: '@user/REQUEST_FAVORITE_ITEM',
    payload: { itemNumber, favorite },
  };
}

export function addFavoriteItem(itemNumber) {
  // SAGA
  return {
    type: '@user/ADD_FAVORITE_ITEM',
    payload: { itemNumber },
  };
}

export function removeFavoriteItem(itemNumber) {
  // SAGA
  return {
    type: '@user/REMOVE_FAVORITE_ITEM',
    payload: { itemNumber },
  };
}

export function addAvatarPicture(avatar) {
  // SAGA
  return {
    type: '@user/ADD_AVATAR_IMAGE',
    payload: { avatar },
  };
}
