import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const quizData = [
    {
      question:'What is the capital of India?',
      options:['Chandigarh','Goa', 'Delhi', 'Shimla'],
      answer: 'Delhi'
    },
    {
      question:'Largest animal in the world?',
      options:['Elephant','Blue Whale', 'Hippopotamus', 'iraffle'],
      answer: 'Blue Whale'
    },
  ]

  const handleAnswer = (selectedAnswer) =>{
    const answer = quizData[currentQuestion]?.answer
    if(answer == selectedAnswer){
      setScore((prevScore) => prevScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < quizData.length){
      setCurrentQuestion(nextQuestion);
    }else{
      setShowScore(true);
    }
  }

  const handleRestart = () =>{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  }
  return (
    <View style={styles.container}>
      {showScore ? 
            <View>
              <Text style={styles.optionStyle}> {score}</Text>
              <TouchableOpacity onPress={handleRestart} style={styles.optionContainer}>
                <Text style={styles.resetBtnText} >Reset</Text>
              </TouchableOpacity>
            </View>
            :
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{quizData[currentQuestion]?.question}</Text>
        {quizData[currentQuestion]?.options.map((item)=>{
          return <TouchableOpacity onPress={() => handleAnswer(item)} style={styles.optionContainer}>
            <Text style={styles.optionStyle}>{item}</Text>
          </TouchableOpacity>
        })}
      </View>
}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionContainer:{
    backgroundColor: '@DDDDDD',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  optionStyle:{
    color: 'green',
    padding: 5,
    alignSelf: 'center',
    fontSize: 18,
  },
  optionContainer:{
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 15,
  },
  questionText:{
    fontSize: 24,
  },
  resetBtnText:{
    fontSize: 18,
    paddingHorizontal: 10,
  }
});
