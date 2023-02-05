import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, HStack, Text, VStack, useToast } from 'native-base';
import { UserContext } from '../context/userContext'; 

interface IDashboardProps {
    
}

export const Dashboard: React.FC<IDashboardProps> = () => {
    const {goal} = useContext(UserContext);
    const [copoSize, setCopoSize] = useState<number>(250);
    const [water, setWater] = useState<number>(0);
    const toast = useToast();

    const handleWater = () =>{
        setWater(water + copoSize);
        toast.show({
            description: `Ual! você bebeu ${copoSize} ml de água`
        })
    };

    const handleChangeCopo = (size: number) => {
        setCopoSize(size);
    }

    useEffect(() => {
        if (water >= goal){
            toast.show({
                description: "Sensacional! Você atingiu sua meta diária!",
                placement: "top",
                colorScheme: "success"
            })
        }
    }, [water]);

    return (
        <VStack flex={1} width='100%' 
                justifyContent='space-between'
                alignItems='center'p={4}
                mt={10}>

            <Text fontSize="sm">
                {''} volume {copoSize} {''} ml
            </Text>

            <VStack>
                <HStack alignItems="center" justifyContent="center">
                <Text>Faltam</Text>
                <Text fontSize="6xl">{water}</Text>
                <Text fontSize="xl">para {goal} ml</Text>
                </HStack>

                <Button
                    mt={2}
                    colorScheme="primary"
                    onPress={handleWater}>Beber água
                </Button> 
            </VStack>

            <Box mt={5}>
            <Button.Group >
                <Button onPress={() => handleChangeCopo(250)} 
                    colorScheme="teal">Copo 250ml</Button>
                <Button onPress={() => handleChangeCopo(350)} 
                    colorScheme="teal">Xicára de chá</Button>
                <Button onPress={() => handleChangeCopo(600)} 
                    colorScheme="teal">Garrafa de 600ml</Button>
            </Button.Group> 
            </Box>
                
        </VStack>
   );
};
