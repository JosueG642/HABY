import { Habit } from "../domain/entities/habit";

// Define la interfaz para las respuestas de hábitos
export interface HabitResponse {
    success: boolean;
    message?: string;
    data?: Habit | Habit[];
  }
  