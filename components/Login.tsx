import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, Text, Alert } from "react-native";
import { globalStyles } from "../theme/theme";
import { authLogin } from "../actions/auth/auth";
import { StorageAdapter } from "../config/adapters/storage-adapter";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../routes/StackNavigator";
import { useAuthStore } from "../store/useStoreAuth";


export const Login = () => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();
    const { login} = useAuthStore()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSignIn = async () => {
        if (!email || !password) {
            Alert.alert("Error", "Por favor, ingrese un correo electrónico y una contraseña");
            return;
        }
        const response = await login(email, password);
        if (response) {
            //await StorageAdapter.setItem("token", response.token);
            navigation.navigate("Home");
        } else {
            Alert.alert("Error", "Correo electrónico o contraseña incorrectos");
        }
    };

    return (
        <>
            <TextInput
                style={globalStyles.input}
                placeholder='E-mail'
                value={email}
                onChangeText={setEmail}
                autoCapitalize='none'
                autoComplete='email'
                autoCorrect={false}
            />
            <TextInput
                style={globalStyles.input}
                placeholder='Password'
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                autoCapitalize='none'
                autoComplete='password'
            />
            <View style={globalStyles.btnPrimary}>
                <TouchableOpacity onPress={handleSignIn}>
                    <Text style={globalStyles.btnPrimaryText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};
