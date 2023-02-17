import React, { useState } from 'react';

import { Header } from '@components/Header';
import { GroupCard } from '@components/GroupCard';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';
import { FlatList } from 'react-native';
import { Button } from '@components/Button';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');
  }

  return (
    <Container>
      <Header />
      
      <Highlight
        title='Turmas'
        subtitle='jogue com sua turma'
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={
          <ListEmpty message="Que tal adicionar um novo grupo?"/>
        }
      />

      <Button 
        title="Criar nova Turma"
        onPress={handleNewGroup}
      />
    </Container>
  );
}
