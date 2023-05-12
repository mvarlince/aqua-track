import {
  Box,
  InfoIcon,
  Text,
  Button,
} from "native-base";

export default function Goals({ goal, setGoal }) {
  return (
    <Box
      height={100}
      width={"100%"}
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
      borderColor={"solid-red"}
    >
      <Button onPress={() => setGoal(goal + 500)}>
        <Text>+</Text>
      </Button>
      <Text color="blue.300" fontSize="lg">
        <InfoIcon color="blue.300" mr={2} />
        Water Target: {goal} ml
      </Text>
      <Button onPress={() => setGoal(goal - 500)}>
        <Text>-</Text>
      </Button>
    </Box>
  );
}
