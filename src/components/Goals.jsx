import { Box, InfoIcon, Text, Button } from "native-base";

export default function Goals({ goal, setGoal }) {
  return (
    <Box
      height={100}
      width={"100%"}
      flexDir={"row"}
      alignItems="center"
      justifyContent="center"
    >
      <Button mr={5} onPress={() => setGoal(goal - 500)}>
        <Text fontWeight={900} fontSize={20}>
          -
        </Text>
      </Button>

      <Text color="blue.300" fontSize="lg">
        Water Target: {goal} ml
      </Text>
      <Button ml={5} onPress={() => setGoal(goal + 500)}>
        <Text fontWeight={900} fontSize={20}>
          +
        </Text>
      </Button>
    </Box>
  );
}
