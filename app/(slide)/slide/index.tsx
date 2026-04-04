import { View, FlatList, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Slide } from "@/app/components/slide/slide";
import { slides } from "@/src/data-slides/slides";
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function Onboarding() {
  const [index, setIndex] = useState(0);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff"}}>
      
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
            
            <Slide item={item}  index={index}/>
          </View>
        )}
      />

    </SafeAreaView>
  );
}