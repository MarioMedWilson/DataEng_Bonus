
import Task from "../models/task.js";

const createTask = async (req, res) => {
  const { title, description, deadline, assignedTo } = req.body;
  if (!title){
    return res.status(404).json({message: "Please Insert title for this task"});
  } if(!description){
    return res.status(404).json({message: "Please Insert description for this task"});
  } if(!deadline){
    return res.status(404).json({message: "Please Insert deadline for this task"});
  } if(!assignedTo){
    return res.status(404).json({message: "Please assigned a user for this task"});
  }
  try{
    const task = await Task.create({title, description, deadline});
    return res.status(200).json({message: "Successfully created the task", task});
  }catch(error){
    return res.status(500).json({message: "Failed to create the task.", error: error});
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.body;
  if (!id){
    return res.status(404).json({message: "Please assigned id of task"});
  }
  try{
    const task = await Task.destroy({where: {id: id}})
    return res.status(200).json({message: "Task deleted sucessfully", task});
  } catch(error){
    return res.status(500).json({message: "Failed to delete the task.", error: error});
  }
};

const showTask = async (req, res) => {
  try{
    const task = await Task.findAll();
    return res.status(200).json({message: "The task fetched successfully.", task});
  }catch (error){
    return res.status(500).json({message: "Failed to show all tasks."});
  }
};

const updateTask = async (req, res) => {
  const { id, title, description, deadline, startTime, finished, assignedTo } = req.body;
  if (!id){
    return res.status(404).json({message: "Please assigned id of task"});
  }
  try{
    const task = await Task.findByPk(id);
    if (title){
      task.title = title;
    } if (description){
      task.description = description;
    } if (deadline){
      task.description = description;
    } if (startTime){
      task.startTime = startTime;
    } if (finished){
      task.finished = finished;
      task.finishedTime = new Date();
    } if (assignedTo){
      task.assignedTo = assignedTo;
    } 
    task.save();
    return res.status(200).json({message: "Task updated successfully", task});
  }catch(error){
    console.log(error)
    return res.status(500).json({message: "Failed to update task.", error});
  }
};



export default {
  createTask,
  deleteTask,
  showTask,
  updateTask
}