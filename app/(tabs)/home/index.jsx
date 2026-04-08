import * as SecureStore from "expo-secure-store";
import { useDispatch } from "react-redux";
import { logout } from "@/src/store/authSlice";
import { useRouter } from "expo-router";
import { Pressable, View, Text } from "react-native";

export default function Home(){
    const router = useRouter();
    const dispatch = useDispatch();

    const handleLogout = async() => {
        await SecureStore.deleteItemAsync('access_token');
        dispatch(logout());
        router.replace('/(auth)/login');
    };

    return(
        <View style={{flex:1}}>
            <Text>Welcome to Home!</Text>
            <Pressable style={{width: 100, height: 50, padding: 15}} onPress={handleLogout}>
                <Text>Logout</Text>
            </Pressable>
        </View>
    )
}