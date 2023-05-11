import {Box, InfoIcon, ArrowUpIcon, ArrowDownIcon, Text} from 'native-base'

export default function Goals ({goal, setGoal}) {
    return (
        <Box height={100} width={"100%"} alignItems="center" justifyContent="center">
            <ArrowUpIcon color="blue.300" onPress={() => setGoal(goal + 500)}/>
            <Text color="blue.300" fontSize="lg">
                <InfoIcon color="blue.300" mr={2}/>
                Water Target: {goal} ml
            <ArrowDownIcon color="blue.300" onPress={() => setGoal(goal - 500)}/>
            </Text>
        </Box>
    )
}