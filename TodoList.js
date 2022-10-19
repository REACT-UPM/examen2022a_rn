import Todo from "./Todo";
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

export default function TodoList(props) {
  //reduzco el array al tamaño que me indiquen en numitems
  const sliced_results = props.lista.slice(0, props.numitems);

  const renderItem = ({item, index}) => (
      <Todo item={item} index={index} toggle={props.toggle} myUserId={props.myUserId}/>
  )

	return (
  <FlatList data={sliced_results} renderItem={renderItem} />
  )
}