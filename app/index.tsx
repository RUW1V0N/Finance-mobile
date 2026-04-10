import { useRouter} from 'expo-router';
import { useEffect } from 'react';
import * as SecureStore from "expo-secure-store";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useDispatch} from 'react-redux';
import { setToken } from '@/src/store/authSlice';

export default function Main(){
    const router = useRouter();
    const dispatch  = useDispatch();

    useEffect(()=>{
        const checkAuth = async ()=>{
            const token = await SecureStore.getItemAsync('access_token');
            const onboarding = await AsyncStorage.getItem('onboardingShown')

            if(!onboarding) {
                router.replace('/(auth)/welcome');
                return;
            }
            
            if (token) {
                dispatch(setToken(token));
                router.replace('/(tabs)/home');
                return;
            }

            router.replace('/(auth)/login')
        };

        checkAuth();
    },[]);

    return null;
}