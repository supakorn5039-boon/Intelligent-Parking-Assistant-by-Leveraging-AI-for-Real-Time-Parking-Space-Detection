import {
  Image,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import {
  getAvailableLot,
  getAvailableLot1,
  getAvailableLot2,
} from "../firebaseConfig";

//StatBar
import {StatCar  , initialWeeklyData} from "./StatCar";
import { COLORS , ITEMS, SIZES } from "../theme/theme";



export default function Car()  {
  // StatBar
  const [weeklyData] = useState(initialWeeklyData);

  const navigation = useNavigation();

  // Modal
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const [isModalVisible3, setModalVisible3] = useState(false);

  // Available from firebase
  const [available30th, setAvailable30th] = useState(0);
  const [availableSurvey, setAvailableSurvey] = useState(0);
  const [availablePro, setAvailablePro] = useState(0);

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

  const fetchAvailableSurveyFromFirebase = async () => {
    const datas = await getAvailableLot1();
    console.log(datas);
    console.log(setAvailableSurvey(datas["survey"].available));
    try {
    } catch (error) {
      console.error("Error fetching data from Firebase:", error);
    }
  };

  const fetchAvailableProFromFirebase = async () => {
    const datas = await getAvailableLot2();
    console.log(datas);
    console.log(setAvailablePro(datas["pro"].available));
    try {
    } catch (error) {
      console.error("Error fetching data from Firebase: ", error);
    }
  };

  useEffect(() => {
    const fetData = async () => {
      await fetchAvailable30thFromFirebase();
      await fetchAvailableSurveyFromFirebase();
      await fetchAvailableProFromFirebase();
    };
    fetData();
    const unsubscribe = setInterval(fetData, 6 * 1000);
    return () => {
      clearImmediate(unsubscribe);
    };
  }, []);

  const handleButtonClick = () => setModalVisible1(true);
  const handleCloseModal = () => setModalVisible1(false);
  const handleButtonClick1 = () => setModalVisible2(true);
  const handleCloseModal1 = () => setModalVisible2(false);
  const handleButtonClick2 = () => setModalVisible3(true);
  const handleCloseModal2 = () => setModalVisible3(false);

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

          {/* Title&Desc */}

          <Text style={ITEMS.title}>CAR</Text>

          {/* Go Next */}
          <TouchableOpacity
            onPress={() => navigation.navigate("Mot")}
            style={ITEMS.NextButton}
          >
            <ArrowRightIcon size={SIZES.arrow} color={COLORS.black} />
          </TouchableOpacity>
        </View>

        {/* Com 30th */}

        <View>
          <TouchableOpacity onPress={handleButtonClick} style={ITEMS.sq}>
            <Image
              style={ITEMS.img}
              source={require("../assets/Photo/com.jpg")}
            />
            <View>
              <Text style={ITEMS.com}>30th Computer</Text>
              <Text style={ITEMS.comA}>
                Available:
                <Text
                  style={{
                    ...ITEMS.comA,
                    color:
                      available30th < 45
                        ? COLORS.red
                        : available30th < 50 && available30th > 45
                        ? COLORS.yellow
                        : COLORS.green,
                  }}
                >
                  {available30th}
                </Text>
              </Text>
            </View>
          </TouchableOpacity>

          {/* Survey */}

          <TouchableOpacity onPress={handleButtonClick1} style={ITEMS.sq}>
            <Image
              style={ITEMS.img}
              source={require("../assets/Photo/test1.avif")}
            />
            <View>
              <Text style={ITEMS.survey}>Survey</Text>
              <Text style={ITEMS.comA}>
                Available:
                <Text
                  style={{
                    ...ITEMS.comA,
                    color:
                      availableSurvey < 12
                        ? COLORS.red
                        : available30th > 12 && available30th < 15
                        ? COLORS.yellow
                        : COLORS.green,
                  }}
                >
                  {availableSurvey}
                </Text>
              </Text>
            </View>
          </TouchableOpacity>

          {/* Professor */}

          <TouchableOpacity onPress={handleButtonClick2} style={ITEMS.sq}>
            <Image
              style={ITEMS.img}
              source={require("../assets/Photo/car3.png")}
            />
            <View>
              <Text style={ITEMS.pro}>Professor</Text>
              <Text style={ITEMS.comA}>
                Available:
                <Text
                  style={{
                    ...ITEMS.comA,
                    color:
                      availablePro < 15
                        ? COLORS.red
                        : available30th < 18 && available30th > 15
                        ? COLORS.yellow
                        : COLORS.green,
                  }}
                >
                  {availablePro}
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
                  style={ITEMS.imgDes}
                  source={require("../assets/Photo/com.jpg")}
                />
                <Text style={ITEMS.comAD}>
                  Available :{" "}
                  <Text
                    style={{
                      ...ITEMS.comA,
                      color:
                        available30th < 45
                          ? COLORS.red
                          : available30th < 50 && available30th > 45
                          ? COLORS.yellow
                          : COLORS.green
                    }}
                  >
                    {available30th}
                  </Text>
                </Text>

                <View style={ITEMS.bar}>
                  <StatCar data={weeklyData} />
                </View>

                <TouchableOpacity onPress={handleCloseModal}>
                  <Text style={ITEMS.closeButton}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          {/* Modal Survey */}

          <Modal
            transparent={true}
            animationType="slide"
            visible={isModalVisible2}
            onRequestClose={handleCloseModal1}
          >
            <View style={ITEMS.modalContainer}>
              <View style={ITEMS.modalContent}>
                <Image
                  style={ITEMS.imgDes}
                  source={require("../assets/Photo/test1.avif")}
                />
                <Text style={ITEMS.comAD}>
                  Available :{" "}
                  <Text
                    style={{
                      ...ITEMS.comA,
                      color:
                        availableSurvey < 12
                          ? "red"
                          : available30th > 12 && available30th < 15
                          ? "yellow"
                          : "green",
                    }}
                  >
                    {availableSurvey}
                  </Text>
                </Text>

                <View
                  style={{
                    ...ITEMS.bar,
                    color: weeklyData < 12 ? "red" : "green",
                  }}
                >
                  <StatCar data={weeklyData} />
                </View>

                <TouchableOpacity onPress={handleCloseModal1}>
                  <Text style={ITEMS.closeButton}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          {/* Modal Professor */}

          <Modal
            transparent={true}
            animationType="slide"
            visible={isModalVisible3}
            onRequestClose={handleCloseModal2}
          >
            <View style={ITEMS.modalContainer}>
              <View style={ITEMS.modalContent}>
                <Image
                  style={ITEMS.imgDes}
                  source={require("../assets/Photo/car3.png")}
                />
                <Text style={ITEMS.comAD}>
                  Available :{" "}
                  <Text
                    style={{
                      ...ITEMS.comA,
                      color:
                        availablePro < 15
                          ? "red"
                          : available30th < 18 && available30th > 15
                          ? "yellow"
                          : "green",
                    }}
                  >
                    {availablePro}
                  </Text>
                </Text>

                <View
                  style={{
                    ...ITEMS.bar,
                  }}
                >
                  <StatCar data={weeklyData} />
                </View>

                <TouchableOpacity onPress={handleCloseModal2}>
                  <Text style={ITEMS.closeButton}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    </View>
  );
};



