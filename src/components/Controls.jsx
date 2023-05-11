import { Text, AddIcon, Box, Button } from "native-base";

export default function Controls({ intake, setIntake }) {
  return (
    <Box w="100%" alignItems="center">
      <Text color="whitesmoke" fontSize="2xl" mb={4}>
        <AddIcon color="whitesmoke" /> Add water
      </Text>
      <Box
        flexDirection="row"
        w="80%"
        alignItems="center"
        justifyContent="space-around"
      >
        <Button
          colorScheme="blue"
          size="lg"
          borderRadius={16}
          paddingLeft={6}
          paddingRight={6}
          onPress={() => setIntake(intake + 250)}
        >
          <Text color="whitesmoke" fontWeight="700" fontSize="lg">
            {" "}
            1 cup{" "}
          </Text>
        </Button>
        <Button
          colorScheme="blue"
          size="lg"
          borderRadius={16}
          paddingLeft={6}
          paddingRight={6}
          onPress={() => setIntake(intake + 500)}
        >
          <Text color="whitesmoke" fontWeight="700" fontSize="lg">
            {" "}
            1 bokle{" "}
          </Text>
        </Button>
      </Box>
      <Button mt={5} colorScheme="gray" pl={8} pr={8} borderRadius={16} onPress={() => setIntake(0)}>
      <Text color="whitesmoke" fontWeight="700" fontSize="lg">
            Reset
          </Text>
      </Button>
    </Box>
  );
}
