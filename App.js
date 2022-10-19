import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { useState, useEffect } from "react";
import TodoList from "./TodoList";

const SERVER1 = "https://api.npoint.io/ff1f1c968f8bb2ae2e0d";

export default function App() {


  const [miLista, setMiLista] = useState(null);
  const [config, setConfig] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(SERVER1);
        const data = await response.json();         
        //console.log(data);
        setConfig(data);
        //console.log("SETDATA!!---------------");
      } catch(e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  async function callServer(){
    try {
      const response = await fetch(config.server);
      const data = await response.json();         
      console.log(data.todos);
      setMiLista(data.todos);
    } catch(e) {
      console.log(e);
    }
  }

  function toggle(index){
    const newMyList = [...miLista];
    newMyList[index].completed = !newMyList[index].completed;
    setMiLista(newMyList);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Examen 2022</Text>
        {config && <Button title="LLAMAR SERVER" onPress={() =>callServer()}/>}
        {miLista && <TodoList numitems={config.numitems} lista={miLista} myUserId={config.myUserId} toggle={toggle}/>}  
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
