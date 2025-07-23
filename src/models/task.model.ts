export type Category =
  | "Bug"
  | "Feature"
  | "Documentation"
  | "Refactor"
  | "Test";
export type Status = "To Do" | "In Progress" | "Done";
export type Priority = "Low" | "Medium" | "High";

export interface Task {
  id: number;
  title: string;
  description?: string;
  createdAt: Date;
  status: Status;
  category: Category;
  priority: Priority;
}
