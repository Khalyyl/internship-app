import mongoose from "mongoose";


export interface Task{
    description: string;
    date: Date;
    assignedTo: string;
    status: string;
    type: string;
    reminders: Date[];
}


const taskSchema = new mongoose.Schema({
    description: { type: String, required: true },
    date: { type: Date, required: true },
    assignedTo: { type: String, required: true }, 
    status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
    type: { type: String, required: true },
    reminders: [Date] 
  },{
    toJSON: {
      virtuals: true
    },
    toObject: {
      virtuals: true
    },
    timestamps: true

  });

  /* Create a model from the schema */
  export const TaskModel = mongoose.model<Task>('Task', taskSchema);