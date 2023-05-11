import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Box, NativeBaseProvider, Toast } from "native-base";
import { StyleSheet, Text } from "react-native";
import Title from "./src/components/Title";
import Goals from "./src/components/Goals";
import Tracker from "./src/Tracker";
import Controls from "./src/components/Controls";

const goal = 2000;
const bottle = 280;

export default function App() {

  const [intake, setIntake] = useState(0);

  const getPreviousIntake = async () => {
    const value = await AsyncStorage.getItem('@storage_Key')
    console.log(value)
    if(value) {
      setIntake(JSON.parse(value))
    }
  } 

  const setPreviousIntake = async () => {
    if(intake){
    await AsyncStorage.setItem('@storage_Key', JSON.stringify(intake))
  }
  }

  useEffect( () => {
    getPreviousIntake()
  }, [] )

  useEffect( () => {
    setPreviousIntake()

    if (intake >= goal){
      return (
        Toast.show({
          title: "Congrats!!",
          description: "You met your water intake goal",
          bg: "blue.400",
          w: 360
        })
      )
    }
  }, [intake])

  return (
    <NativeBaseProvider>
      <Box
        flex={1}
        bg="#151926"
        alignItems="center"
        justifyContent="flex-start">
        <Box height={50} width="100%" bg="#29313C">
        </Box>
        <Title />
        <Goals goal={goal} />
        <Tracker goal={goal} intake={intake} />
        <Controls intake={intake} setIntake={setIntake} />
      </Box>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
