export enum TaskStatus {
    Pending = "Pending",
    Completed = "Completed",

}

export interface Task {
    id : number;
    title : string;
    status : TaskStatus;
}

const exampleTask : Task = {
    id: 1,
    title: "Example Task",
    status: TaskStatus.Pending
};

console.log(exampleTask);