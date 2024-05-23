import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import HabitCategories from './TodosForm/HabitCategories';
import { globalStyles, colors } from '../theme/theme';

import DateTimePicker from '@react-native-community/datetimepicker';
import { RootStackParams } from '../routes/StackNavigator';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { createHabit } from '../actions/todos/todos';
import { useAuthStore } from '../store/useStoreAuth';


const FormScreen = () => {
    const {user} = useAuthStore()
    const navigation = useNavigation<NavigationProp<RootStackParams>>();
    const [step, setStep] = useState(0);

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const [openStart, setOpenStart] = useState(false);
    const [openEnd, setOpenEnd] = useState(false);

    const [form, setForm] = useState({
        category: '',
        habitName: '',
        description: '',
        habitType: '',
    });

    const handleCategorySelect = (category: string) => {
        setForm({ ...form, category });
        setStep(step + 1);
    };

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handleChange = (name: string, value: string) => {
        setForm({ ...form, [name]: value });
    };
    const handleCreateHabit = async () => {
        try {
            // Llama a la función createHabit con los datos del formulario
            const response = await createHabit(
                user?.idUser.toString(), // Asegúrate de tener el userId disponible aquí
                form.habitName,
                form.description,
                form.habitType,
                form.category,
                startDate,
                endDate
            );
    
            // Maneja la respuesta del servidor según sea necesario
            if (response) {
                console.log('Hábito creado exitosamente:', response);
                // Aquí podrías realizar alguna acción adicional, como navegar a otra pantalla
            } else {
                console.log('Error al crear el hábito');
                // Aquí podrías mostrar un mensaje de error al usuario
            }
        } catch (error) {
            console.error('Error al crear el hábito:', error);
            // Aquí podrías mostrar un mensaje de error al usuario
        }
    };

    const renderStep = () => {
        switch (step) {
            case 0:
                return (
                    <View style={styles.formStep}>
                        <Text style={styles.label}>Nombre del Hábito:</Text>
                        <TextInput
                            style={globalStyles.input}
                            value={form.habitName}
                            onChangeText={(text) => handleChange('habitName', text)}
                        />
                        <Text style={styles.label}>Descripción:</Text>
                        <TextInput
                            style={globalStyles.input}
                            value={form.description}
                            onChangeText={(text) => handleChange('description', text)}
                        />
                        <Button title="Siguiente" onPress={handleNextStep} />
                    </View>
                );

            case 1:
                return <HabitCategories onPressCategory={handleCategorySelect} />;
            case 2:
                return (
                    <View style={styles.formStep}>
                        <Text style={styles.label}>Tipo de Hábito:</Text>
                        <TextInput
                            style={globalStyles.input}
                            value={form.habitType}
                            onChangeText={(text) => handleChange('habitType', text)}
                        />
                        <Text style={styles.label}>Fecha de Inicio:</Text>


                        <TouchableOpacity onPress={() => setOpenStart(true)}>
                            <Text style={styles.date}>{startDate.toDateString()}</Text>
                        </TouchableOpacity>


                        {openStart && (
                            <DateTimePicker
                                value={startDate}
                                mode="date"
                                onChange={(event, selectedDate) => {
                                    const currentDate = selectedDate || startDate;
                                    setStartDate(currentDate);
                                    setOpenStart(false)
                                }}
                            />
                        )
                        }

                        {openEnd && (
                            <DateTimePicker
                                value={endDate}
                                mode="date"
                                onChange={(event, selectedDate) => {
                                    const currentDate = selectedDate || endDate;
                                    
                                    setEndDate(currentDate);
                                    setOpenEnd(false)
                                }}
                            />
                        )}

                        <Text style={styles.label}>Fecha de Fin:</Text>

                        <TouchableOpacity onPress={() => setOpenEnd(true)}>
                            <Text style={styles.date}>{endDate.toDateString()}</Text>
                        </TouchableOpacity>

                        <Button title="Finalizar" onPress={() => {navigation.navigate('Todos')
                            handleCreateHabit()
                        }} />
                    </View>
                );
            default:
                return null;
        }
    };

    return <View style={globalStyles.mainContainer}>{renderStep()}</View>;
};

const styles = StyleSheet.create({
    formStep: {
        display: 'flex',
        backgroundColor: colors.formBackgroundColor,
        width: '80%',
        borderRadius: 40,
        paddingHorizontal: 35,
        paddingVertical: 30,
        alignItems: 'center',
        rowGap: 20,
        justifyContent: 'space-evenly',
        ...globalStyles.formShadow,
    },
    label: {
        color: colors.secundary,
        fontSize: 20,
        fontWeight: '900',
    },
    date: {
        backgroundColor: colors.tertiary,
        borderRadius: 10,
        fontSize: 20,
        color: colors.secundary,
        padding: 4
    }
});

export default FormScreen;
