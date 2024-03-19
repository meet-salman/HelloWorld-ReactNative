import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

export default function App() {


  const [todoVal, setTodoVal] = useState();
  const [todos, setTodos] = useState([]);


  const onChangeVal = (todoVal) => {
    setTodoVal(todoVal)
  }

  const addTodo = () => {

    let todoCopy = [...todos];
    todoCopy.push(todoVal);
    setTodos(todoCopy);
    setTodoVal('');
  }

  const deleteTodo = (i) => {

    let todoCopy = [...todos];
    todoCopy.splice(i, 1);
    setTodos(todoCopy);
  }

  const editTodo = (i) => {

    let editedVal = prompt('Enter Edited Value');

    let todoCopy = [...todos];
    todoCopy[i] = editedVal;
    setTodos(todoCopy);

  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.headBox}>
            <Text style={styles.heading}> My Todo List </Text>
          </View>

          <View style={styles.body} >

            {/* Todo Input */}
            <View style={styles.inputBox}>
              <TextInput style={styles.input} value={todoVal} onChangeText={onChangeVal} placeholder='Enter Task' />
              <TouchableOpacity onPress={addTodo} activeOpacity={1} style={styles.inputButton}>
                <Text style={{ textAlign: 'center', fontSize: 15 }}> ➜ </Text>
              </TouchableOpacity>
            </View>

            <View style={{ padding: 22, gap: 10 }}>

              {todos.length > 0 ?
                todos.map((todo, i) => (
                  <View key={i} style={styles.list}>

                    <View>
                      <Text> {todo} </Text>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                      <TouchableOpacity activeOpacity={1}>
                        <Text onPress={() => editTodo(i)} style={{ color: '#4061a6' }}> Edit </Text>
                      </TouchableOpacity>
                      <TouchableOpacity activeOpacity={1}>
                        <Text onPress={() => deleteTodo(i)} style={{ color: '#a64040' }}> Delete </Text>
                      </TouchableOpacity>
                    </View>

                  </View>
                ))
                :
                <Text style={{ color: '#4061a6', textAlign: 'center', fontSize: 20, color: 'grey' }}> No items! </Text>

              }
            </View>

          </View>



          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    backgroundColor: '#f3f7ff',
    // alignItems: 'center',
    justifyContent: 'justify-between'
  },
  headBox: {
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    // backgroundColor: 'red'
    backgroundColor: '#4786ff'
  },
  body: {
    display: 'flex',
    justifyContent: 'flex-start'
    // backgroundColor: '#f3f7ff'
  },
  heading: {
    marginTop: 50,
    fontSize: 35,
    color: '#ffff',
    textAlign: 'center',
    borderRadius: 20
  },
  inputBox: {
    bottom: 18,
    display: 'flex',
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#cfcfcf',
    backgroundColor: '#ffff'
  },
  inputButton: {
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#c0c0c0',
    backgroundColor: '#ffff'
  },
  list: {
    width: '100%',
    padding: 18,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#cfcfcf',
    backgroundColor: '#ffff'
  }
});