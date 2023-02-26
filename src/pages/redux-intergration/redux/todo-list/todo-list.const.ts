export enum PRIORITY_TASK {
  HIGH = 1,
  MEDIUM = 2,
  LOW = 3,
}

export enum MODE {
  EDIT = "EDIT",
  CREATE = "CREATE",
}

export interface ListItem {
  id: string;
  task: string;
  createdAt: string;
  expireAt: string;
  priority: PRIORITY_TASK;
}
