import { Dimensions, StyleSheet } from "react-native";

export interface ThemeColors {
  primary: string;
  secundary: string;
  tertiary: string;
  text: string;
  heading: string;
  background: string;
  buttonText: string;
  formBackgroundColor: string;
  icon: string;
  itemBackground: string;
}

export const colors: ThemeColors = {
  primary: "#61ae92",
  secundary: "#035f50",
  tertiary: "#caddbf",
  text: "white",
  heading: "#035f50",
  background: "#61ae92",
  buttonText: "white",
  icon: "#035f50",
  itemBackground: "#caddbf",
  formBackgroundColor: "white"
};

export const globalStyles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "400",
    color: colors.secundary,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
  },
  headingShadow: {
    textShadowColor: '#35f50',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#a3af9c'
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    paddingTop: 3,
    justifyContent: 'space-evenly',
    paddingHorizontal: 5
  },
  btnPrimary: {
    backgroundColor: colors.secundary,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    height: 40,
    width: 100,

  },
  btnPrimaryText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '500'
  },
  formShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 9, height: 9 },
    shadowOpacity: 0.6,
    shadowRadius: 4.65,
    elevation: 6,
  },
  smallIcon: {
    width: 50,
    height: 50,
  },
  bigIcon: {
    padding: 20,
  },
  iconContainer: {
    backgroundColor: "#caddbf",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    backgroundColor: colors.itemBackground,
    borderRadius: 10,
    padding: 8
  },
  itemImage: {
    width: Dimensions.get('window').width / 2 - 30,
    height: Dimensions.get('window').width / 2 - 30,
    borderRadius: 10
  },
});