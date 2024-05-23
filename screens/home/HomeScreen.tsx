import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import {
  FontAwesome5,
  FontAwesome6,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { colors, globalStyles } from "../../theme/theme";
import { type NavigationProp, useNavigation } from "@react-navigation/native";
import type { RootStackParams } from "../../routes/StackNavigator";
import { useAuthStore } from "../../store/useStoreAuth";
import { getHabitsByUserId } from "../../actions/todos/todos";

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const {user} = useAuthStore();
  console.log(getHabitsByUserId(2));
  console.log(user?.idUser);
  

  return (
    <View style={[globalStyles.mainContainer,{paddingTop: 30}]}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View style={styles.topIconsContainer}>
          <TouchableOpacity style={[globalStyles.iconContainer, globalStyles.smallIcon]} onPress={()=> navigation.navigate('Settings')}>
            <MaterialIcons name="settings" size={25} color="#035f50" />
          </TouchableOpacity>

          <TouchableOpacity style={[globalStyles.iconContainer, globalStyles.smallIcon]} onPress={()=> navigation.navigate('Store')}>
            <FontAwesome5 name="store-alt" size={25} color="#035f50" />
          </TouchableOpacity>
        </View>

        <View style={styles.friendsContainer}></View>

        <View style={styles.topIconsContainer}>
          <TouchableOpacity style={[globalStyles.iconContainer, globalStyles.smallIcon]}>
            <FontAwesome5 name="user-alt" size={25} color="#035f50" />
          </TouchableOpacity>

          <TouchableOpacity style={[globalStyles.iconContainer, globalStyles.smallIcon]}>
            <FontAwesome6 name="paint-roller" size={25} color="#035f50" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.userNameContainer}>
        <Text style={[styles.userNameText, globalStyles.headingShadow]}>{user?.name}</Text>
      </View>

      <View style={styles.avatarContainer}>
        <Image
          source={require("./../../assets/avatar.gif")}
          style={styles.avatar}
        />
        <View style={styles.iconOverlay}>
          <TouchableOpacity onPress={()=> navigation.navigate('Items')}>
            <FontAwesome5 name="tshirt" size={30} color={colors.tertiary} />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 20,
          gap: 34,
        }}
      >
        <TouchableOpacity style={[globalStyles.iconContainer, globalStyles.bigIcon]} >
          <FontAwesome5 name="user-friends" size={45} color="#035f50" />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate("Challenges")} style={[globalStyles.iconContainer, globalStyles.bigIcon]}>
          <MaterialCommunityIcons
            name="sword-cross"
            size={45}
            color="#035f50"
          />
        </TouchableOpacity>

        <TouchableOpacity style={[globalStyles.iconContainer, globalStyles.bigIcon]} onPress={()=> navigation.navigate('Todos')}>
          <FontAwesome5 name="tasks" size={45} color="#035f50" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 36,
    overflow: "hidden",
    marginBottom: 35,
  },iconOverlay: {
    position: 'absolute',
    bottom: 15,
    right: 15, 
  },
  avatar: {
    width: 340,
    height: 300,
  },
  friendsContainer: {
    backgroundColor: "#035f50",
    height: 100,
    width: 200,
    borderRadius: 10,
  },
  topIconsContainer: {
    flexDirection: "column",
    alignContent: "space-between",
    rowGap: 10,
  },
  userNameContainer: {
    marginVertical: 10,
    height: 120,
  },
  userNameText: {
    color: colors.secundary,
    fontSize: 50,
    fontWeight: "500",
  },
});
