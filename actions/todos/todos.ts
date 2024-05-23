import { habyApi } from "../../config/api/habyApi";
import { Habit } from "../../domain/entities/habit"; // Asegúrate de importar la entidad correcta para los hábitos
import { HabitResponse } from "../../interfaces/habit.responses";

// Función para manejar el registro de un nuevo hábito
export const createHabit = async (userId: string, habitName: string, description: string, habitType: string, category: string, startDate: Date, endDate: Date) => {
  try {
    const { data } = await habyApi.post<HabitResponse>('/create_habit', {
      userId,
      habitName,
      description,
      habitType,
      category,
      startDate,
      endDate,
    });

    return data; // Aquí puedes manejar la respuesta según lo necesites
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Función para manejar la eliminación de un hábito
export const deleteHabit = async (habitId: string) => {
  try {
    const { data } = await habyApi.delete<HabitResponse>(`/delete_habit/${habitId}`);
    return data; // Aquí puedes manejar la respuesta según lo necesites
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Función para manejar la edición de un hábito
export const updateHabit = async (habitId: string, newData: Partial<Habit>) => {
  try {
    const { data } = await habyApi.put<HabitResponse>(`/update_habit/${habitId}`, newData);
    return data; // Aquí puedes manejar la respuesta según lo necesites
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Función para obtener los hábitos de un usuario específico
export const getHabitsByUserId = async (userId: number) => {
  try {
    const { data } = await habyApi.get<HabitResponse[]>(`/get_habits_by_userId/${userId}`);
    return data; // Aquí puedes manejar la respuesta según lo necesites
  } catch (error) {
    console.log(error);
    return null;
  }
};
