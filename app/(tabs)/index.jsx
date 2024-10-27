import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Modal,
  Alert,
  Pressable,
} from "react-native";
import React, { useState } from "react";

const index = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [update, setUpdate] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [index, setIndex] = useState(0);

  const addTodo = () => {
    console.log(input);
    todo.push(input);
    setTodo([...todo]);
    setInput("");
  };
  const deleteTodo = (index) => {
    console.log("todo delete", index);
    todo.splice(index, 1);
    setTodo([...todo]);
  };

  const editTodo = (index) => {
    console.log(update , index);
    todo.splice(index , 1 , update)
    setTodo([...todo])
    setModalVisible(false)
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Todo App</Text>
      <TextInput
        style={styles.input}
        placeholder="enter todo"
        onChangeText={setInput}
        value={input}
      />
      <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text style={{ color: "#fff" }}>Press Here</Text>
      </TouchableOpacity>

      {todo.length > 0 && (
        <FlatList
          data={todo}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.item}>
                <Text style={styles.title}>{item}</Text>
                <TouchableOpacity
                  style={styles.listBtn}
                  onPress={() => deleteTodo(index)}
                >
                  <Text>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.listBtn}
                  onPress={() => {
                    setIndex(index)
                    setModalVisible(true)
                  }}
                >
                  <Text>Edit</Text>
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      {/* <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        /> */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Update Todo</Text>
              <TextInput
                style={styles.input}
                placeholder="enter todo"
                onChangeText={setUpdate}
                value={update}
              />
              <Pressable
                style={[styles.modalBtn, styles.buttonClose]}
                onPress={()=> editTodo(index)}
              >
                <Text style={styles.textStyle}>Update Todo</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        {/* <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable> */}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginHorizontal: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalBtn: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#000",
    padding: 10,
    color: "#fff",
  },
  listBtn: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 5,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "cyan",
  },
  text: {
    fontSize: 40,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
  },
  item: {
    backgroundColor: "#f9c2ff",
    paddingHorizontal: 20,
    width: 350,
    // marginVertical: 8,
    // marginHorizontal: 16,
  },
  title: {
    fontSize: 35,
    margin: 10,
  },
});

export default index;
