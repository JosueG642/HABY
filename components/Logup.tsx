import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, Text, Alert } from "react-native";
import { globalStyles } from "../theme/theme";
import { authRegister } from "../actions/auth/auth";


export const Logup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const handleSignUp = async () => {
        if (password !== passwordConfirm) {
            Alert.alert("Error", "Las contraseñas no coinciden");
            return;
        }

        const response = await authRegister(name, email, password);
        if (response) {
            Alert.alert("Registro exitoso", "Bienvenido");
        } else {
            Alert.alert("Error", "Hubo un problema con el registro");
        }
    };

    return (
        <>
            <TextInput
                style={globalStyles.input}
                placeholder='Name'
                value={name}
                onChangeText={setName}
                autoCapitalize='none'
                autoComplete='name'
                autoCorrect={false}
            />
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
            <TextInput
                style={globalStyles.input}
                placeholder='Confirm password'
                value={passwordConfirm}
                onChangeText={setPasswordConfirm}
                secureTextEntry={true}
                autoCapitalize='none'
                autoComplete='password'
            />
            <View style={globalStyles.btnPrimary}>
                <TouchableOpacity onPress={handleSignUp}>
                    <Text style={globalStyles.btnPrimaryText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};
