import { View, Text, Image } from "react-native";
import {styles} from "./styles"


type SlideItem = {
  title: string;
  subtitle: string;
  image: any;
};

type Props = {
  item: SlideItem;
};

export const Slide = ({item}: Props) =>{
  return(
    <View style={styles.container}>
      
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>

    </View>
  );
};