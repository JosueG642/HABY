// Define la interfaz para la entidad Habit
export interface Habit {
    id: string;
    userId: string;
    habitName: string;
    description: string;
    habitType: string;
    category: string;
    startDate: Date;
    endDate: Date;
  }
  