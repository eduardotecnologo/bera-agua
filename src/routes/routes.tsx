import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { View, Text } from 'native-base';
import { Dashboard } from '../screens/Dashboard';

type ITabsRoutes = {
    Settings:  undefined;
    Dashboard: undefined;
    Profile:   undefined;
}

const Tab = createMaterialBottomTabNavigator<ITabsRoutes>();

interface IMyApps{

}

export const Routes: React.FunctionComponent<IMyApps> = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen 
                name="Settings" component={Screen}
                options={{
                    title: 'Configurações',
                    tabBarIcon: () => <Icon name="setting" size={20} color="blue"/>}}
                 />
            <Tab.Screen 
                name="Dashboard" component={Dashboard}
                options={{
                    title: 'Painel',
                    tabBarBadge: 2,
                    tabBarIcon: () => <Icon name="dashboard" size={20} color="blue"/>}} />
            
            <Tab.Screen 
                name="Profile" component={Screen}
                options={{
                    title: 'Prefil',
                    tabBarIcon: () => <Icon name="user" size={20} color="blue"/>}} />

        </Tab.Navigator>
    </NavigationContainer>
  );
}

const Screen = () => {
    return (
        <View style={{ 
            flex: 1,
            backgroundColor: generateRandomColorHexadecimal(),
            justifyContent: 'center',
            alignItems: 'center'
            }}>
            <Text>{Math.random()}</Text>
        </View>
    );
};

function generateRandomColorHexadecimal(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

