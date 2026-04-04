import { Stack } from "expo-router";

export default function SlideLayout(){
    return(
        <Stack screenOptions={{ headerShown: false, animation: 'fade'}}/>
    )
}