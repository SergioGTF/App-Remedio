import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../componentes/Principal';
import AddMedicine from '../componentes/AdicionarMedicamento';
import MedicineList from '../componentes/ListaMedicamentos';
import LoginUsuario from '../login/LoginUsuario';
import Cadastro from '../cadastro/Cadastro';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={LoginUsuario}
                    options={{ title: 'Login' }}
                />
                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{ title: 'Cadastro' }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Tela Principal' }}
                />
                <Stack.Screen
                    name="AddMedicine"
                    component={AddMedicine}
                    options={{ title: 'Adicionar Medicamento' }}
                />
                <Stack.Screen
                    name="MedicineList"
                    component={MedicineList}
                    options={{ title: 'Lista de Medicamentos' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;