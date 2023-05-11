import {Box, Text } from 'native-base'


export default function Title (){
    return (
        <Box height={60} width={"100%"} bg="#29313C" 
                alignItems={"center"} justifyContent={"center"}>
            <Text color="white" fontSize={"2xl"} fontWeight={700}>
                Water Intake Tracker
            </Text>
        </Box>
    )
}