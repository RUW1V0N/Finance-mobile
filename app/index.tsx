import { useRouter} from 'expo-router';
import { useEffect } from 'react';
import * as SecureStore from "expo-secure-store";

import { useDispatch} from 'react-redux';
import { setToken } from '@/src/store/authSlice';

export default function Main(){
    const router = useRouter();
    const dispatch  = useDispatch();

    useEffect(()=>{
        const checkAuth = async ()=>{
            const token = await SecureStore.getItemAsync('access_token');

            if (token) {
                dispatch(setToken(token));
                router.replace('/(tabs)/home')
            };

            router.replace('/(auth)/start-page')
        };

        checkAuth();
    },[]);

    return null;
}