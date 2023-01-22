import React, {useState} from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import {styles} from './styles'
const TaskItem = ({item}) =>{
    const [completed, setCompleted] = useState(false)
    const onHandlerCompleted = () =>{
        setCompleted(!completed)
    }
    var day = new Date().getDate();
    var month = new Date().getMonth()+1;
    var year = new Date().getFullYear();
    const date = day + '-' + month + '-' + year
    return(
        <View style={styles.listContainer}>
        <TouchableOpacity  onPress={onHandlerCompleted}>
            <Text style={styles.itemList} >{item.value}</Text>
        </TouchableOpacity>
        <Text style={styles.itemStatus}>{completed ? 'Completado ' + date : 'Incompleto'}</Text>
        </View>
    )
}
export default TaskItem;