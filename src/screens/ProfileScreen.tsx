import { Avatar, Box, Divider, Slider, Text } from 'native-base';
import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { UserContext } from '../context/userContext';


interface ProfileScreenProps {
    
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({

}) => {
    const { goal, user, setGoal } = useContext(UserContext);
    return (
        <SafeAreaView>
            <Avatar bg="blue.500" alignSelf="center" size="2xl" source={{
        uri: user?.photo || undefined
         }}>
            {user?.name.substring(0, 1)}
        </Avatar>
        <Text fontSize="2xl" textAlign="center" mt={4}>
            {user?.name}
        </Text>

        <Divider my={10} />
        
        <Box mx={20}>
            {/* <Text>
                {JSON.stringify(challenge)}
            </Text> */}
            <Text fontSize="xl" textAlign="center" mt={4}>
                Desafio do dia!
            </Text>
            <Text fontSize="xl" textAlign="center" mt={4}>
                {goal}
            </Text>

            <Slider 
                    defaultValue={goal} 
                    value={goal}
                    minValue={0} 
                    maxValue={2000} 
                    onChange={(value) => setGoal(value)}
                    step={250}
                    accessibilityLabel="hello world">
                <Slider.Track>
                <Slider.FilledTrack />
                </Slider.Track>
                <Slider.Thumb />
            </Slider>
        </Box>
      
        </SafeAreaView>
    );
};

export default ProfileScreen;