import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
  updateAccountSuccess,
  updateLocationSuccess,
  updatePersonalDataSuccess,
  addFavoriteItem,
  removeFavoriteItem,
} from './actions';

import api from '~/services/api';

export function* UpdateAccountSaga({ payload, navigation }) {
  try {
    const { name, email, password, oldPassword } = payload;

    const response = yield call(api.put, 'users', {
      name,
      email,
      oldPassword,
      password,
    });

    const { user } = response.data;

    yield put(updateAccountSuccess(user));

    navigation.goBack();
  } catch (e) {
    Alert.alert(
      'Falha ao atualizar',
      'Houve um erro ao atualizar seus dados, verifique seus dados.'
    );
  }
}

export function* CreateLocationSaga({ payload, navigation }) {
  try {
    const {
      street,
      city,
      country,
      neighborhood,
      postcode,
      state,
      street_number,
    } = payload.data;

    const response = yield call(api.post, 'location', {
      street,
      city,
      country,
      neighborhood,
      postcode,
      state,
      street_number,
    });

    yield put(updateLocationSuccess(response.data));

    if (navigation.page === 'goBack') {
      navigation.navigation.goBack();
    } else {
      navigation.navigation(navigation.page);
    }
  } catch (err) {
    Alert.alert(
      'Falha ao registrar',
      'Houve um erro no registro da localização, verfique seus dados.'
    );
  }
}

export function* UpdateLocationSaga({ payload, navigation }) {
  try {
    const {
      street,
      city,
      country,
      neighborhood,
      postcode,
      state,
      street_number,
    } = payload.data;

    const response = yield call(api.put, 'location', {
      street,
      city,
      country,
      neighborhood,
      postcode,
      state,
      street_number,
    });

    yield put(updateLocationSuccess(response.data));

    navigation.goBack();
  } catch (err) {
    Alert.alert(
      'Falha ao atualizar',
      'Houve um erro na atualização da localização, verfique seus dados.'
    );
  }
}

export function* CreatePersonalSaga({ payload, navigation }) {
  try {
    const {
      birthday,
      gender,
      cellphone,
      profession,
      identification,
    } = payload.data;

    const response = yield call(api.post, 'personal_data', {
      birthday,
      gender,
      cellphone,
      profession,
      identification,
    });

    yield put(updatePersonalDataSuccess(response.data));

    if (navigation.page === 'goBack') {
      navigation.navigation.goBack();
    } else {
      navigation.navigation.navigate(navigation.page, navigation.params);
    }
  } catch (err) {
    Alert.alert(
      'Falha ao registrar',
      'Houve um erro no registro das informações, verifique seus dados.'
    );
  }
}

export function* UpdatePersonalSaga({ payload, navigation }) {
  try {
    const {
      birthday,
      gender,
      cellphone,
      profession,
      identification,
    } = payload.data;

    const response = yield call(api.put, 'personal_data', {
      birthday,
      gender,
      cellphone,
      profession,
      identification,
    });

    yield put(updatePersonalDataSuccess(response.data));

    navigation.goBack();
  } catch (err) {
    Alert.alert(
      'Falha ao atualizar',
      'Houve um erro na atualização das informações, verfique seus dados.'
    );
  }
}

export function* FavoriteSaga({ payload }) {
  try {
    const { itemNumber, favorite } = payload;

    if (favorite) {
      yield call(api.put, 'Add_favoriteitem', {
        item: itemNumber,
      });

      yield put(addFavoriteItem(itemNumber));
    } else {
      yield call(api.put, 'Remove_favoriteitem', {
        item: itemNumber,
      });

      yield put(removeFavoriteItem(itemNumber));
    }
  } catch (err) {
    console.log('Favorite Error Saga');
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', UpdateAccountSaga),
  takeLatest('@user/CREATE_LOCATION_REQUEST', CreateLocationSaga),
  takeLatest('@user/CREATE_PERSONAL_REQUEST', CreatePersonalSaga),
  takeLatest('@user/UPDATE_LOCATION_REQUEST', UpdateLocationSaga),
  takeLatest('@user/UPDATE_PERSONAL_REQUEST', UpdatePersonalSaga),
  takeLatest('@user/REQUEST_FAVORITE_ITEM', FavoriteSaga),
]);
