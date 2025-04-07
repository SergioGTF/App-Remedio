import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthContext';
import { globalStyles } from '../../styles/global';

const LoginUsuario = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);

    const handleLogin = async () => {
        if (!username.trim() || !password.trim()) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        try {
            login(username);
            navigation.replace('Home');
        } catch (error) {
            console.log('Erro ao realizar login:', error);
        }
    };

    return (
        <View style={[globalStyles.container, styles.centered]}>
            <Text style={globalStyles.title}>Login</Text>
            <View style={globalStyles.inputContainer}>
                <MaterialIcons name="person" size={20} color="gray" />
                <TextInput
                    style={globalStyles.input}
                    placeholder="Usuário"
                    value={username}
                    onChangeText={setUsername}
                />
            </View>
            <View style={globalStyles.inputContainer}>
                <MaterialIcons name="lock" size={20} color="gray" />
                <TextInput
                    style={globalStyles.input}
                    placeholder="Senha"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            <TouchableOpacity style={globalStyles.button} onPress={handleLogin}>
                <Text style={globalStyles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[globalStyles.button, globalStyles.registerButton]}
                onPress={() => navigation.replace('Cadastro')}
            >
                <Text style={globalStyles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    centered: {
        flex: 1,
        justifyContent: 'center', 
    },
};

export default LoginUsuario;