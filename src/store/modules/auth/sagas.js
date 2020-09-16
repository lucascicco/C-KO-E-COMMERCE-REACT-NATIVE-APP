import { Alert } from 'react-native'
import { takeLatest , call, put, all } from 'redux-saga/effects';
import { signInSuccess, signFailure, signUpSuccess} from './actions';
import { NavigationActions } from 'react-navigation';

import api from '../../../services/api';

export function* signIn({ payload }){
    try{
        const { email, password } = payload;

        const response = yield call(api.post, 'login', {
            email,
            password
        });

        const { token , user } = response.data;
        
        console.log(response.data)

        api.defaults.headers.Authorization = `Bearer ${token}`

        yield put(signInSuccess(token, user))
    }catch(e){

        Alert.alert(
        'Falha no login', 
        'Houve um erro no login, verifique seus dados.'
        );
        
        console.log(e)
        yield put(signFailure())
    };
}

export function* signUp({ payload }){
    try{
        const { email, password, name } = payload   

        const response = yield call(api.post, 'users', {
            name,
            email,
            password
        })
        
        const { token , user } = response.data;
        
        api.defaults.headers.Authorization = `Bearer ${token}`

        yield put(signUpSuccess(token, user))

        
        NavigationActions.navigate('FirstAcess')

    }catch(err){
        Alert.alert(
            'Falha no cadastro', 
            'Houve um erro no cadastro, verfique seus dados.'
            );

        yield put(signFailure())
    }
      
}

export function setToken({ payload }){
    if(!payload) return;
    
    const { token } = payload.auth;

    if(token){
        api.defaults.headers.Authorization = `Bearer ${token}`
    }
}


export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
])