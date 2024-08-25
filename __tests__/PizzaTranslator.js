// Importa os módulos necessários do React e React Native
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

// Componente PizzaTranslator
const PizzaTranslator = () => {
  // useState para armazenar o texto digitado pelo usuário
  const [text, setText] = useState('');

  return (
    // View para agrupar o TextInput e o Text
    <View style={{ padding: 10 }}>
      {/* TextInput para o usuário digitar o texto */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Digite aqui para traduzir!"
        onChangeText={newText => setText(newText)} // Atualiza o texto sempre que o usuário digita
        defaultValue={text} // Define o valor inicial do TextInput
      />
      
      {/* Text que mostra o texto traduzido em emojis de pizza */}
      <Text style={{ padding: 10, fontSize: 42 }}>
        {
          text
            .split(' ') // Divide o texto em palavras
            .map(word => word && '🍕') // Substitui cada palavra por 🍕
            .join(' ') // Junta os emojis com um espaço entre eles
        }
      </Text>
    </View>
  );
};

export default PizzaTranslator;


