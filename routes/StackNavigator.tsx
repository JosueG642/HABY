import { createStackNavigator } from "@react-navigation/stack" 
import { HomeScreen } from "../screens/home/HomeScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import ItemsScreen from "../screens/ItemsScreen";
import { StoreScreen } from "../screens/StoreScreen";
import TodosScreen from "../screens/TodosScreen";
import { colors, globalStyles } from "../theme/theme";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import React from "react";
import Entypo from '@expo/vector-icons/Entypo';
import ChallengesScreen from "../screens/ChallengesScreen";
import { LogScreen } from "../screens/LogScreen";
import FormScreen from "../screens/FormScreen";

export type RootStackParams = {
    Home: undefined,
    Log: undefined,
    Todos: undefined,
    Settings: undefined,
    Store: undefined,
    Items: undefined,
    Challenges: undefined,
    Form: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    const navigator = useNavigation();
    return(
        <Stack.Navigator screenOptions={{
            headerShown: true,
            headerStyle: {
                elevation: 0,
                shadowColor: 'transparent',
                backgroundColor: colors.background,
            },
            headerTitleStyle: {
                ...globalStyles.title,
                ...globalStyles.headingShadow
            },
            headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigator.goBack()}
                  style={[globalStyles.smallIcon,globalStyles.iconContainer,{marginLeft: 15}]}
                >
                    <Entypo name="home" size={24} color={colors.icon} />
                </TouchableOpacity>
              ),
            headerTitleAlign: 'center',

        }} >
            <Stack.Screen name="Log" options={{headerShown:false}} component={LogScreen} />
            
            <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />

            <Stack.Screen name="Settings" component={SettingsScreen}/>

            <Stack.Screen name="Items" component={ItemsScreen} />

            <Stack.Screen name="Store" component={StoreScreen} /> 

            <Stack.Screen name="Todos" component={TodosScreen} />

            <Stack.Screen name="Challenges" component={ChallengesScreen} />

            <Stack.Screen name="Form" component={FormScreen} />
            
        </Stack.Navigator>
    )
}