import axios from 'axios';
import { Task } from '../types/task';
import { ApiResponse } from '../types/apiResponse';

const API_URL = 'https://backend-production-3faa.up.railway.app/tasks';

export const getTasks = async (): Promise<Task[]> => {
    try {
        const { data } = await axios.get<ApiResponse<Task[]>>(API_URL);
        return data.data;
    } catch (error: any) {
        throw new Error('Erro ao buscar tarefas');
    }
};

export const createTask = async (task: Omit<Task, 'id'>): Promise<Task> => {
    try {
        const { data } = await axios.post<ApiResponse<Task>>(API_URL, task);
        return data.data;
    } catch (error: any) {
        throw new Error('Erro ao criar tarefa');
    }
};

export const updateTask = async (id: number, task: Partial<Task>): Promise<Task> => {
    try {
        const { data } = await axios.put<ApiResponse<Task>>(`${API_URL}/${id}`, task);
        return data.data;
    } catch (error: any) {
        throw new Error('Erro ao atualizar tarefa');
    }
};

export const deleteTask = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error: any) {
        throw new Error('Erro ao excluir tarefa');
    }
};