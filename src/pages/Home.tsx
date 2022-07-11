import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
  FlatList,
} from 'react-native';
// useState a gente armazena um estado e depois atualiza o estado com um novo valor
// useEffect a gente executa uma função quando o estado é alterado
//useEffect quando a função dentro do array é executado, o valor dentro das chaves é o estado que será alterado
//useEffect quando o array estiver vazio, a função sera executada toda vez que atualizarmos a tela

interface mySkillprops {
  id: string;
  name: string;
  date?: string;
}
export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [myskills, setMySkillls] = useState<mySkillprops[]>([]);
  const [grettins, setGrettings] = useState('');

  function addSkill() {
    const data = {
      //id: String(Math.random()),
      id: 'id',
      name: newSkill,
    };
    setMySkillls(oldState => [...oldState, data]);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGrettings('Bom dia mother fucker');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGrettings('Boa tarde mother fucker');
    } else {
      setGrettings('Boa noite mother fucker');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Nadson.</Text>

      <Text style={styles.grettings}>{grettins}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="#555"
        placeholder="Minhas skills"
        onChangeText={setNewSkill}
      />
      <TouchableOpacity style={styles.button} onPress={addSkill}>
        <Text>Salvar</Text>
      </TouchableOpacity>
      <Text style={[styles.title, {marginTop: 20, left: 74}]}>My skills</Text>
      <FlatList
        data={myskills}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Text style={styles.textSkills} key={item.id}>
            {item.name}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 80,
    paddingTop: 80,
    backgroundColor: '#121015',
  },

  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 10,
    marginRight: 15,
    paddingRight: 15,
    right: 24,
  },
  button: {
    backgroundColor: '#185b63',
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    right: 30,
    alignItems: 'center',
    marginRight: 8,
    marginLeft: 8,
  },

  textSkills: {
    color: '#fff',
    fontSize: 15,
    top: 30,
    backgroundColor: '#1f1e25',
    right: 30,
    borderRadius: 5,
    padding: 15,
    textAlign: 'center',
    marginRight: 8,
    marginLeft: 8,
    marginTop: 10,
  },
  grettings: {
    color: '#fff',
  },
});
