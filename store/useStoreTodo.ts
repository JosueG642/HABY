import { create } from "zustand";
import { authLogin, authCheckStatus } from "../actions/auth/auth";
import { StorageAdapter } from "../config/adapters/storage-adapter";
import { Todo } from "../domain/entities/todo";


export interface TodosState {
    todos: Todo[];

    getTodos: () => Promise<void>;
    createTodo: (todo: Todo) => Promise<void>
    deleteTodo: () => Promise<void>
    editTodo: (todo: Todo) => Promise<void>
}

export const useTodoStore = create<TodosState>()((set, get) => ({
    todos: [],

    getTodos: async() => {

    },

    createTodo: async(todo: Todo) => {

    },
    deleteTodo: async() => {
        
    },
    editTodo: async(todo: Todo) => {

    }

}))