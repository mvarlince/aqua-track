import {Box, InfoIcon, Text} from 'native-base'

export default function Goals ({goal}) {
    return (
        <Box height={100} width={"100%"} alignItems="center" justifyContent="center">
            <Text color="blue.300" fontSize="lg">
                <InfoIcon color="blue.300" mr={2}/>
                Water Target: {goal} ml
            </Text>
        </Box>
    )
}