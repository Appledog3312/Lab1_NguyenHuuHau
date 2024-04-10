import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handlePress = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const calculateResult = () => {
    try {
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  const clearExpression = () => {
    setExpression('');
  };

  const deleteLastCharacter = () => {
    setExpression((prevExpression) => prevExpression.slice(0, -1));
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, theme.container]}>
      <View style={styles.toggleContainer}>
        <TouchableOpacity style={styles.toggleButton} onPress={toggleTheme}>
          <Icon name={isDarkMode ? "fa-solid fa-moon": "fa-solid fa-sun"} size={24} color={theme.iconColor} /> 
        </TouchableOpacity>
      </View>
      <View style={styles.resultContainer}>
        <Text style={[styles.expressionText, theme.expressionText]}>{expression}</Text>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, theme.button]} onPress={() => handlePress('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, theme.button]} onPress={() => handlePress('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, theme.button]} onPress={() => handlePress('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, theme.button]} onPress={() => handlePress('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, theme.button]} onPress={() => handlePress('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, theme.button]} onPress={() => handlePress('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, theme.button]} onPress={() => handlePress('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, theme.button]} onPress={() => handlePress('*')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, theme.button]} onPress={() => handlePress('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, theme.button]} onPress={() => handlePress('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, theme.button]} onPress={() => handlePress('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, theme.button]} onPress={() => handlePress('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, theme.button]} onPress={() => handlePress('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, theme.button]} onPress={() => handlePress('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, theme.button]} onPress={clearExpression}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, theme.button]} onPress={deleteLastCharacter}>
          <Text style={styles.buttonText}>DEL</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.equalButton, theme.button]} onPress={calculateResult}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  expressionText: {
    fontSize: 48,
    color: '#000000',
    textAlign: 'right',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  iconColor: '#333333',
});

const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  expressionText: {
    fontSize: 48,
    color: '#FFFFFF',
    textAlign: 'right',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  iconColor: '#CCCCCC',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  resultContainer: {
    borderWidth: 2,
    borderColor: '#CCCCCC',
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 24,
  },
  equalButton: {
    backgroundColor: '#FF9500',
  },
  toggleContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  toggleButton: {
    padding: 10,
  },
});

export default Calculator;
