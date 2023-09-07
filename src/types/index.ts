export interface ITodoItem {
  id: number
  text: string
  completed: boolean
}

export enum FilterTypes {
  ALL = "all",
  ACTIVE = "active",
  COMPLETED = "completed",
}
