// ChallengesScreen.tsx
import React from 'react';
import { View, FlatList } from 'react-native';
import { globalStyles } from '../theme/theme';
import Challenge, { ChallengeProp } from '../components/Challenge';

const ChallengesScreen = () => {
    const retos: ChallengeProp[] = [
        {
            todoType: 'Exercise',
            title: 'Complete Daily Workout',
            score: 100,
            goal: 100,
            reward: { id: 1, imagen: 'item1.gif' },
            description: 'Complete your daily workout routine to achieve your fitness goals.'
        },
        {
            todoType: 'Study',
            title: 'Read 5 Chapters',
            score: 15,
            goal: 50,
            reward: { id: 2, imagen: 'item2.gif' },
            description: 'Read 5 chapters of your favorite book to enhance your knowledge.'
        }
    ];

    return (
        <View style={globalStyles.mainContainer}>
            <FlatList
                data={retos}
                renderItem={({ item }) => (
                    <Challenge
                        todoType={item.todoType}
                        title={item.title}
                        score={item.score}
                        goal={item.goal}
                        reward={item.reward}
                        description={item.description} // Pasar la descripción como prop
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default ChallengesScreen;
