import React, { useState } from "react";
import { View} from 'react-native';
import { styles } from "./styles";
import { AddItem, TaskList } from "./components";
const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const onHandlerChange = (text) => {
    setTask(text)
  }

  const onHandlerSubmit = () =>{
    setTasks([
      ...tasks, 
      {
        id: Math.random().toString(),
        value: task
      }
    ])
    setTask('');
  }

  return (
    <View style={styles.container}>
      <AddItem
      onHandlerChange={onHandlerChange}
      onHandlerSubmit={onHandlerSubmit}
      task={task}
      placeholder='Agregar una tarea'
      buttonColor='#BA8CC2'
      />
      <TaskList
      tasks={tasks}
      />
    </View>
  );
}



export default App;