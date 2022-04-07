import React, {useState} from 'react';
import {Text, SafeAreaView,StyleSheet,Image,View,Button,TouchableOpacity} from 'react-native';

function MyCustomButton(props) {
return(
  
  <TouchableOpacity 
  style={[styles.button,props.style]}
  onPress={props.onPress}
  >
          <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>
        
)
}

function App() {
  const [count, setCount] = useState(0);
  
  const handleIncrement = () => {
    setCount(count + 1)
    
  };

  const handleDecrement = () => {
    setCount(count - 1) ;
    
  };
  
  
  
  
  return (
    
    <SafeAreaView>
      <View style={styles.container}>
      <Image
        source={{uri:'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png'}}
        style={styles.image}
      />
      <Text style={styles.text}>Counter: {count} </Text>
      <Text style={styles.subtitle}>Click buttons to change the counter</Text>
     
     
      <View style={styles.buttonContainer}>
      <MyCustomButton title="Decrement -" 
        onPress={handleDecrement}
        style={{backgroundColor:'firebrick'}}/>
        
        <MyCustomButton title="Increment +" onPress={handleIncrement}
        style={{marginStart:16}} />
      

        
      </View>
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
container:{
margin: 16,
},
text: {
  fontSize:30,
},
subtitle: {
  fontSize:10,
  color:'gray',
  marginTop:8,
},
buttonContainer: {
  marginTop:16,
  flexDirection:'row',
},
button:{
  flex:1,
  backgroundColor:'lightblue',
  padding:12,
  borderRadius:12,
  alignItems:'center',
},
buttonText:{
  fontSize:20,
  color:'black',

},
image: {
  
  height: 150,
  margin: 40,
  borderRadius:10,
}
});
export default App;