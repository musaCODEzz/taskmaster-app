import express, {Request, Response} from 'express';
import cors from 'cors';
import { Task, TaskStatus } from './types'; 

const app = express();
app.use(cors());
app.use(express.json());

let tasks: Task[] = [];


app.get('/tasks', (req: Request, res: Response) => {
    res.json(tasks);
});

app.post('/tasks', (req: Request, res: Response) => {
    const newTask: Task = {
        id: Date.now(),
        title: req.body.title,
        status: TaskStatus.Pending
    };
    tasks.push(newTask);
    res.json(newTask);  
});

app.listen(3001, () => {
    // Adding 'http://' makes it clickable
    console.log('Backend running on http://localhost:3001');
});