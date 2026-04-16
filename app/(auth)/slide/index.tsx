import { View, FlatList, Dimensions, Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Slide } from "@/app/components/auth/slide/slide";
import { slides } from "@/src/data-slides/slides";
import { useRouter } from 'expo-router';
import { Pagination } from "@/app/components/auth/slide/pagination";

const { width } = Dimensions.get('window');

export default function Onboarding() {
  const [index, setIndex] = useState(0);
  const isLastSlide = index === slides.length - 1;
  const router = useRouter();

  return (
    <SafeAreaView style={styles.screen}>

      <View style={styles.headerContainer}>
        <Text style={styles.logoText}>ZentScope</Text>
        {!isLastSlide && (<Pressable style={styles.skipButton} onPress={() => router.replace("/start-page")}>
          <Text style={styles.skipButtonText}>skip</Text>
        </Pressable>)}
      </View>

      <FlatList
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        keyExtractor={(_, index) => index.toString()}

        onMomentumScrollEnd={(e) => {
          const screenWidth = e.nativeEvent.layoutMeasurement.width;
          const offset = e.nativeEvent.contentOffset.x;
          const i = Math.round(offset / screenWidth);

          setIndex(i);
        }}

        renderItem={({ item }) => (
          <View style={styles.slideContainer}>

            <Slide item={item} />
          </View>
        )}
      />

      {isLastSlide && (<Pressable style={styles.startButton} onPress={() => router.replace("/start-page")}>
        <Text style={styles.startButtonText}>Get Started</Text>
      </Pressable>)}

      <View style={styles.paginationContainer}>
        <Pagination index={index} />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fefefe"
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  logoText: {
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
  skipButtonText: {
    fontSize: 18,
  },
  slideContainer: {
    width,
  },
  startButton: {
    width: "80%",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#3e7bfe",
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginTop: 25


  },
  startButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    alignItems: "center"
  },
  paginationContainer: {
    alignItems: "center",
    backgroundColor: "#fefefe",
    marginTop: 25
  },
})
