import { View } from "react-native";
import { Box, Text, Image, Progress } from "native-base";

const Tracker = ({ goal, intake, setIntake }) => {
  return (
    <Box height={400} width="100%" alignItems="center" justifyContent="center">
      <View style={{backgroundColor: 'red'}} 
      // this. = this view component.
      // this.[name] = e
        onTouchStart={ e => this.touchY = e.nativeEvent.pageY}
        onTouchEnd={ e => {
            const swipeY = Math.round(this.touchY - e.nativeEvent.pageY)
            if(swipeY > 20 || swipeY < -20) setIntake(intake + 5 * swipeY)
        }}>
        <Image
          size={200}
          borderRadius={100}
          borderColor="blue.300"
          borderWidth={8}
          mb={6}
          source={{
            uri: "https://wallpaperaccess.com/full/380161.jpg",
            alt: "water",
          }}
        />
      </View>
      <Text color="whitesmoke" fontSize="2xl" fontWeight="900" mt={6}>
        {intake} ml
      </Text>
      <Box w="90%" maxW="400" mt={5}>
        <Progress size="2xl" colorScheme="blue" value={intake} max={goal} />
      </Box>
    </Box>
  );
};

export default Tracker;
