import {
  Image,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";

import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { getAvailableLot } from "../firebaseConfig";

import { COLORS, ITEMS, SIZES } from "../theme/theme";

export default function Car() {
  const navigation = useNavigation();

  const [isModalVisible1, setModalVisible1] = useState(false);

  const [available30th, setAvailable30th] = useState(0);

  // Fetching
  const fetchAvailable30thFromFirebase = async () => {
    const datas = await getAvailableLot();
    console.log(datas);
    console.log(setAvailable30th(datas["30"].available));

    try {
    } catch (error) {
      console.error("Error fetching data from Firebase:", error);
    }
  };

  useEffect(() => {
    const fetData = async () => {
      await fetchAvailable30thFromFirebase();
    };
    fetData();
    const unsubscribe = setInterval(fetData, 10 * 1000);
    return () => {
      clearImmediate(unsubscribe);
    };
  }, []);

  const handleButtonClick = () => setModalVisible1(true);
  const handleCloseModal = () => setModalVisible1(false);

  return (
    <View style={ITEMS.container}>
      <SafeAreaView>
        <View style={ITEMS.header}>
          {/* GoBack */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={ITEMS.backButton}
          >
            <ArrowLeftIcon size={SIZES.arrow} color={COLORS.black} />
          </TouchableOpacity>
          <Text style={ITEMS.title}>CAR</Text>
        </View>

        {/* Com 30th */}
        <View>
          <TouchableOpacity onPress={handleButtonClick} style={ITEMS.squareBox}>
            <Image
              style={ITEMS.img}
              source={require("../assets/Photo/com.jpg")}
            />
            <View>
              <Text style={ITEMS.comtitle}>อาคาร30ปี</Text>
              <Text style={ITEMS.comAvailable}>
                Available:
                <Text
                  style={{
                    ...ITEMS.comA,
                    color:
                      available30th <= 3
                        ? COLORS.red
                        : available30th <= 6 && available30th >= 4
                        ? COLORS.yellow
                        : COLORS.green,
                  }}
                >
                  {available30th}
                </Text>
              </Text>
            </View>
          </TouchableOpacity>

          {/* Modal 30th */}

          <Modal
            transparent={true}
            animationType="slide"
            visible={isModalVisible1}
            onRequestClose={handleCloseModal}
          >
            <View style={ITEMS.modalContainer}>
              <View style={ITEMS.modalContent}>
                <Image
                  style={ITEMS.imgModal}
                  source={require("../assets/Photo/com.jpg")}
                />
                <Text style={ITEMS.comAvailableModal}>
                  Available :{" "}
                  <Text
                    style={{
                      ...ITEMS.comA,
                      color:
                        available30th <= 3
                          ? COLORS.red
                          : available30th <= 6 && available30th >= 4
                          ? COLORS.yellow
                          : COLORS.green,
                    }}
                  >
                    {available30th}
                  </Text>
                </Text>

                <View style={ITEMS.BoxStat}>
                  <TouchableOpacity
                    style={ITEMS.StatBox}
                    onPress={() => {
                      navigation.navigate("Stat"), handleCloseModal();
                    }}
                  >
                    <Text style={ITEMS.StatText}>STATS</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={handleCloseModal}>
                  <Text style={ITEMS.closeButton}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    </View>
  );
}
