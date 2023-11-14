import { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"

function GoalInput({onAddGoal, showModal, hideModal}) {
  const [text, setText] = useState('');

  function goalInputHandler(enteredText) {
    setText(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(text);
    setText('')
  }
  return (
    <Modal visible={showModal} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/icon.png')} />
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={text}
          placeholder="Your course goal..."
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={hideModal} color='#f31282' />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color='#5e0acc' />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    borderBottomColor: '#cccccc',
    borderBottomWidth: 2,
    backgroundColor: "#311b6b"
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
  textInput: {
    borderColor: '#e4d0ff',
    borderWidth: 1,
    padding: 8,
    width: '100%',
    color: '#120438',
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  }
})