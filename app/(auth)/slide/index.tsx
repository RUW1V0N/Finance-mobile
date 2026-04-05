import { View, FlatList, Dimensions, Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Slide } from "@/app/components/slide/slide";
import { slides } from "@/src/data-slides/slides";
import { useRouter } from 'expo-router';
import { Pagination } from "@/app/components/slide/pagination"

const { width } = Dimensions.get('window');

export default function Onboarding() {
  const [index, setIndex] = useState(0);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      
      <View style={styles.headerContainer}>
        <Text style={styles.title}>ZentScope</Text>
        <Pressable style={styles.skipButton} onPress={() => router.replace("/start-page")}>
          <Text style={styles.skip}>skip</Text>
        </Pressable>
      </View>

      <FlatList
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}

        onMomentumScrollEnd={(e) => {
          const screenWidth = e.nativeEvent.layoutMeasurement.width;
          const offset = e.nativeEvent.contentOffset.x;
          const i = Math.round(offset / screenWidth);

          setIndex(i);

          if (isLastSlide && i === slides.length - 1) {
            router.replace('/start-page');
          }

          if (i === slides.length - 1) {
            setIsLastSlide(true);
          } else {
            setIsLastSlide(false);
          }
        }}

        renderItem={({ item }) => (
          <View style={{ width }}>

            <Slide item={item} />
          </View>
        )}
      />

      <View style={styles.pagination}>
        <Pagination index={index} />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  title: {
    fontSize: 35,
    fontWeight: "700",
    lineHeight: 40,
    textAlign: "center",
    color: "#3e7bfe",
  },
  skipButton: {
    backgroundColor: "transparent",
    padding: 10
  },
  skip: {
    alignItems: "center",
    fontSize: 18,
  },
  pagination: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#fff"
  },
})