import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native'; // Importa componentes do React Native
import PizzaTranslator from './PizzaTranslator'; // Importa o componente PizzaTranslator

// Função principal do aplicativo (App)
const App = () => {
  return (
    // SafeAreaView protege o conteúdo dentro da área visível da tela
    <SafeAreaView style={styles.container}>
      {/* Aqui estamos "usando" o componente PizzaTranslator */}
      <PizzaTranslator />
    </SafeAreaView>
  );
};

// Estilos simples para o SafeAreaView
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    padding: 10,
  },
});

export default App;
