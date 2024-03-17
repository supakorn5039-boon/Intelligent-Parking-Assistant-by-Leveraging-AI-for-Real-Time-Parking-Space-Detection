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
import { getAvailableLot, getTime } from "../firebaseConfig";

import { COLORS, ITEMS, SIZES } from "../theme/theme";

export default function Car() {
  const navigation = useNavigation();
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [available30th, setAvailable30th] = useState('');
  const [time30th, setTime30th] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch available lot data
        const availableLotData = await getAvailableLot();
        setAvailable30th(availableLotData["30"].available);

        // Fetch timestamp data
        const timestampData = await getTime();
        const timestamp = timestampData["30"].timestamp;
        const time = new Date(timestamp).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
        setTime30th(time);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchData();

    // Set up interval to fetch data every 3000 = 3 seconds
    const intervalId = setInterval(fetchData, 10 * 1000);

    // Clean up interval when component unmounts
    return () => clearInterval(intervalId);
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
              source={require("../image/carpark.png")}
            />
            <View>
              <Text style={ITEMS.comtitle}>อาคาร30ปี</Text>
              <Text style={ITEMS.comAvailable}>
                Available:
                <Text
                  style={{
                    ...ITEMS.comA,
                    color:
                      available30th <= 2
                        ? COLORS.red
                        : available30th <= 5 && available30th >= 3
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
                  source={require("../image/carpark.png")}
                />

                <Text style={ITEMS.comAvailableModal}>
                  Last Update: {time30th}
                </Text>

                <Text style={ITEMS.comAvailableModal}>
                  Available :{" "}
                  <Text
                    style={{
                      ...ITEMS.comA,
                      color:
                        available30th <= 2
                          ? COLORS.red
                          : available30th <= 5 && available30th >= 3
                          ? COLORS.orange
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

                <TouchableOpacity
                  onPress={handleCloseModal}
                  style={ITEMS.closeBox}
                >
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
