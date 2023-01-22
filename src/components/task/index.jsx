import React from 'react'
import { FlatList } from 'react-native';
import TaskItem from './task-item/index'
const TaskList = ( { tasks}) =>{
    const renderItem = ({item}) =>(
        <TaskItem
            item={item}
        />
      )
    
      const keyExtractor = (item) => item.id;
    return(
        <FlatList 
        data={tasks}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        />
    )
}
export default TaskList;