import React, {useState} from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Button} from './components/Button';
import {SkillCard} from './components/SkillCard';

type skillProps = {
  id: string;
  name: string;
};

export default function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkill, setMySkill] = useState<skillProps[]>([]);

  function handleNewAddSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };
    setMySkill([...mySkill, data]);
  }

  function handleRemoveSkill(skillId: string) {
    setMySkill(mySkill.filter(item => item.id !== skillId));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Wellington!</Text>

      <TextInput
        testID="input-new"
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button
        title="Add"
        testID="button-add"
        onPress={handleNewAddSkill}
        activeOpacity={0.8}
      />

      <Text style={[styles.title, {marginVertical: 20}]}>My skills</Text>

      {mySkill && (
        <FlatList
          testID="flatlist-skills"
          data={mySkill}
          keyExtractor={item => item.id}
          keyboardShouldPersistTaps="never"
          renderItem={({item}) => (
            <SkillCard
              onPress={() => handleRemoveSkill(item.id)}
              skill={item.name}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});
