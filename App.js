import { useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';
import { StatusBar } from "expo-status-bar";

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function showAddGoalModal() {
    setIsModalVisible(true);
  }

  function hideAddGoalModal() {
    setIsModalVisible(false);
  }

  function addGoalHandler(text) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text, id: Math.random().toString() },
    ]);
    hideAddGoalModal();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#a065ec" onPress={showAddGoalModal} />
        <GoalInput
          onAddGoal={addGoalHandler}
          showModal={isModalVisible}
          hideModal={hideAddGoalModal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={true}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 8,
  },
});
