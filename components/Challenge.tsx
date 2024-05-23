import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../theme/theme";

export interface ChallengeProp {
    todoType: string;
    title: string;
    score: number;
    goal: number;
    reward: {
        id: number;
        imagen: string;
    };
    description?: string;
}

const Challenge: React.FC<ChallengeProp> = ({
    title,
    score,
    goal,
    reward,
    description,
}) => {
    const isGoalReached = score === goal;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title.toUpperCase()}</Text>

            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-around', gap: 20, marginBottom: 10 }}>
                <View>
                    {isGoalReached ? (
                        <View style={styles.button}>
                            <TouchableOpacity
                                onPress={() => console.log("Recompensa recogida")}
                            >
                                <Text style={styles.buttonText}>{"Recoger Recompensa".toUpperCase()}</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <Text style={styles.description}>{description}</Text>
                    )}
                </View>
                <View>
                    <Image source={imageMap[reward.id]} style={styles.image} />
                </View>
            </View>

            <View style={styles.progressBar}>
                <View
                    style={{
                        ...styles.progressIndicator,
                        width: `${(score / goal) * 100}%`,
                    }}
                >

                    <View style={styles.progressTextView}>
                        <Text style={styles.progressText}>{`${score}/${goal}`}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const imageMap: { [key: number]: any } = {
    1: require("./../assets/items/item1.gif"),
    2: require("./../assets/items/item2.gif"),
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.tertiary,
        padding: 20,
        marginBottom: 20,
        borderRadius: 10,
        maxWidth: "100%",
        marginHorizontal: 10
    },
    title: {
        fontSize: 24,
        color: colors.secundary,
        textAlign: 'center',
        fontWeight: "bold",
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    progressBar: {
        backgroundColor: "#f0f0f0",
        height: 19,
        borderRadius: 5,
        overflow: "hidden",
        marginBottom: 10,
    },
    progressIndicator: {
        height: "100%",
        backgroundColor: "#335f53",
        justifyContent: "center",
    },
    progressTextView: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressText: {
        color: "#fff",
        textAlign: 'center',
    },
    description: {
        fontSize: 15,
        marginBottom: 10,
        maxWidth: 200,
        fontWeight: '500',
        color: colors.secundary
    },
    button: {
        backgroundColor: colors.secundary,
        height: 90,
        width: 220,
        justifyContent: 'center',
        borderRadius: 10
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 15
    }
});

export default Challenge;
