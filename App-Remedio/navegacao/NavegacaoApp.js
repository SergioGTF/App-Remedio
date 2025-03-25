import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../componentes/Principal';
import AddMedicine from '../componentes/AdicionarMedicamento';
import MedicineList from '../componentes/ListaMedicamentos';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AddMedicine" component={AddMedicine} />
            <Stack.Screen name="MedicineList" component={MedicineList} />
        </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;