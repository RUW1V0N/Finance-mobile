import { View, StyleSheet } from "react-native";
import {slides} from "@/src/data-slides/slides"

type Props = {
    index: number;
};

const points = slides.length;

export const Pagination = ({index}: Props) => {
    return (
        <View style = {styles.points}>
            {slides.map((_, i) => (
                <View key={i} style={[
                    styles.dot, 
                    {backgroundColor: i === index ? '#3B82F6' : '#D1D5DB'}, 
                    {width: i === index ? 15 : 10}]}/>
            ))}
        </View>
    );
};

const styles=StyleSheet.create({
    points:{
        flexDirection: "row",
    },
    dot:{
        width: 10,
        height: 10,
        borderRadius: 6,
        margin: 6
    }
})