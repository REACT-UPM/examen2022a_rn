import { StyleSheet, Text, View, Button } from 'react-native';

export default function Todo(props) {
  
	return (
    <View>          
        <Text>Titulo: {props.item.todo}</Text>
        <Text>Completado: {'' + props.item.completed}</Text>
        {props.item.userId===props.myUserId ? <Button title="TOGGLE" onPress={() =>props.toggle(props.index)}/>:<Text>No se puede hacer TOGGLE</Text>}
     </View>)
}