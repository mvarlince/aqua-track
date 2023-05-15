import { useState, useEffect } from "react";
import { Box, NativeBaseProvider, Toast } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Title from "./src/components/Title";
import Goals from "./src/components/Goals";
import Tracker from "./src/components/Tracker";
import Controls from "./src/components/Controls";

export default function App() {

  const [intake, setIntake] = useState(0);
  const [goal, setGoal] = useState(3000);
  const [toastDisplayed, setToastDisplayed] = useState(false)

  const getPreviousIntake = async () => {
    const value = await AsyncStorage.getItem("@storage_Key");
    if (value) {
      setIntake(JSON.parse(value));
    }
  };

  const setPreviousIntake = async () => {
    if (intake) {
      await AsyncStorage.setItem("@storage_Key", JSON.stringify(intake));
    }
  };

  const checkGoal = () => {
    if (intake >= goal && !toastDisplayed) {
      setToastDisplayed(true)
      return Toast.show({
        title: "Congrats!!",
        description: "You met your water intake goal",
        bg: "blue.400",
        w: 360,
        h: 60,
        p: 16,
        onCloseComplete: () => setToastDisplayed(false)
      });
    }
  }

  useEffect(() => {
    getPreviousIntake();
  }, []);

  useEffect(() => {
    setPreviousIntake();  
    checkGoal()
  }, [intake]);

  return (
    <NativeBaseProvider>
      <Box
        flex={1}
        bg="#151926"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Box height={50} width="100%" bg="#29313C"></Box>
        <Title />
        <Goals goal={goal} setGoal={setGoal} />
        <Tracker goal={goal} intake={intake} setIntake={setIntake} />
        <Controls intake={intake} setIntake={setIntake} />
      </Box>
    </NativeBaseProvider>
  );
}