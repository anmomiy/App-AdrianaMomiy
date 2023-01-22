import React from 'react'
import { Button, TextInput, View } from 'react-native'
import { styles } from './styles'

const AddItem = ({task, onHandlerChange, onHandlerSubmit, placeholder, buttonColor}) =>{
    return(
        <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder={placeholder}
          autoComplete='off'
          value={task}
          onChangeText={onHandlerChange}
          />

        <Button disabled={!task} color={buttonColor} title='Agregar' onPress={onHandlerSubmit} />
      </View>
    )
}
export default AddItem