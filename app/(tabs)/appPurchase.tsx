import Pagination from "@/components/navigation/pagination";
import SliderItem from "@/components/SliderItem";
import WavePink from "@/components/WavePink";
import { ImageSlider } from "@/data/SliderData";
import { LinearGradient } from "expo-linear-gradient";
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const AppPurchase = ({ navigation }: any) => {
  const handleButtonTryNow = () => {
    navigation.navigate("paypal");
    console.log("Success App Purchase");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textFinal}>Final</Text>
      <FlatList
        data={ImageSlider}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
      <View style={styles.parents}>
        <View style={{ width: "45%", height: 200 }}>
          <Text style={styles.titleImageParents}>Step 1</Text>
          <Image
            style={styles.imageParents}
            source={require("@/assets/images/anh_nam.png")}
          />
        </View>
        <View style={{ width: "45%", height: 200 }}>
          <Text style={styles.titleImageParents}>Step 2</Text>
          <Image
            style={styles.imageParents}
            source={require("@/assets/images/anh_nu1.png")}
          />
        </View>
      </View>
      <View
        style={{
          elevation: 5, // Độ nâng của nút
          shadowColor: "#000",
          shadowOffset: { width: 5, height: 5 }, // Định vị bóng
          shadowOpacity: 0.5, // Độ mờ của bóng
          shadowRadius: 3, // Bán kính của bóng
        }}
      >
        <LinearGradient
          colors={["rgba(220, 144, 182, 1)", "rgba(67, 141, 226, 1)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            width: 300,
            marginHorizontal: "auto",
            marginTop: 40,
            borderRadius: 10,
          }}
        >
          <Button
            title="Try Now"
            color={"#fff"}
            onPress={() => handleButtonTryNow()}
          />
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textFinal: {
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 20,
  },
  parents: {
    width: "100%",
    marginTop: 18,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  titleImageParents: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 24.38,
  },
  imageParents: {
    width: "100%",
    height: 180,
    objectFit: "cover",
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 8,
  },
  shadowButton: {
    borderRadius: 10,
    padding: 15,
    elevation: 5, // Độ nâng của nút
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 5 }, // Định vị bóng
    shadowOpacity: 0.5, // Độ mờ của bóng
    shadowRadius: 3, // Bán kính của bóng
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default AppPurchase;
