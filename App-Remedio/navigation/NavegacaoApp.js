import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Principal';
import AddMedicine from '../components/AdicionarMedicamento'; 
import MedicineList from '../screens/ListaMedicamentos';
import LoginUsuario from '../screens/auth/LoginUsuario';
import CriarConta from '../screens/auth/CriarConta';
import { AuthContext } from '../context/AuthContext';
import { globalStyles } from '../styles/global';
import { ActivityIndicator, View } from 'react-native';

const Stack = createStackNavigator();

const AppNavigator = () => {
    const { user, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {user ? (
                    <>
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
                    </>
                ) : (
                    <>
                        <Stack.Screen
                            name="Login"
                            component={LoginUsuario}
                            options={{
                                title: 'Entrar no App Remédio',
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="Criar Conta"
                            component={CriarConta}
                            options={{ 
                                title: 'Criar Conta',
                                headerShown: false 
                            }}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
