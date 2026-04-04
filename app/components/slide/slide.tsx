import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Pagination } from "@/app/components/pagination"
import { useRouter } from 'expo-router';
import {styles} from "./styles"


type SlideItem = {
  title: string;
  subtitle: string;
  image: any;
};

type Props = {
  item: SlideItem;
  index: number;
};

export const Slide = ({item, index}: Props) =>{
  const router = useRouter();
  return(
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.title}>ZentScope</Text>
      <Pressable style={styles.skipButton} onPress={() => router.replace("/start-page")}>
        <Text style={styles.skip}>skip</Text>
      </Pressable>
      </View>
      
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>

      <View style={styles.pagination}>
        <Pagination index={index} />
      </View>

    </View>
  );
};