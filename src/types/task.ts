
export type Priority = "high" | "medium" | "low";

export interface Task {
    id: number;
    title: string;
    description: string;
    status: boolean;
    priority: Priority;
    dueDate: string;
    createdAt: string;
    updatedAt: string;
}

// TaskFormData型はTask型からid、status、createdAt、updatedAtを除外したものです
export type TaskFormData = Omit<Task, "id" | "status" | "createdAt" | "updatedAt">;