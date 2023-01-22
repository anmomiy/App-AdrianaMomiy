import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({

    listContainer:{
        marginHorizontal: 20,
        marginTop: 30,
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    itemList:{
        borderColor: '#BC9EC1',
        borderWidth: 2,
        margin: 5,
        padding: 10,
        borderRadius: 10,
        width: 220,
      },
    itemStatus:{
      backgroundColor: '#95B7C2',
      margin: 5,
      padding: 10,
      borderRadius: 10,
      width: 100,
      color: 'white',
      fontWeight: 'bold',
    } 
})