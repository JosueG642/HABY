import { View,Text, StyleSheet, TouchableOpacity } from "react-native"
import { colors, globalStyles } from "../theme/theme"
import { useEffect, useState } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming, Easing } from 'react-native-reanimated';
import { Login } from "../components/Login";
import { Logup } from "../components/Logup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../routes/StackNavigator";

export const LogScreen = () => {
    const [login,setLogin] = useState(true);
    const anim = useSharedValue<number>(-10)
    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    const animatedHeading = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: anim.value }],
        };
    });
    useEffect(() => {
        anim.value = withRepeat(
            withTiming(20, {
                duration: 1530,
                easing: Easing.bounce,
            }),
            0,
            false
        );
    }, []);

    return(
        <View style={globalStyles.mainContainer}>
            <Animated.Text style={[styles.habitText,globalStyles.headingShadow,animatedHeading ]}>HABY</Animated.Text>

            <View style={[styles.formContainer,globalStyles.formShadow]}>
                {login?  <Login/>: <Logup/>}
            </View>

            <Text style={styles.textStyles}>You don't have an account?</Text>

            <View style={globalStyles.btnPrimary}>
                <TouchableOpacity onPress={()=>setLogin(!login)}>
                    <Text style={globalStyles.btnPrimaryText}>
                        {login?  "Sign Up": "Sign In"}
                    </Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    textStyles: {
        color: colors.text,
        fontSize: 15
    },
    formContainer: {
        display: 'flex',
        backgroundColor: colors.formBackgroundColor,
        width: '80%',
        borderRadius: 40,
        paddingHorizontal: 35,
        paddingVertical: 30,
        alignItems: 'center',
        rowGap: 20,
        justifyContent: 'space-evenly',
    },
    habitText: {
        fontSize: 130,
        color: colors.heading,
    },
})