import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableWithoutFeedback, Button, Alert, Platform, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, View, Image, SafeAreaView } from 'react-native';

export default function App() {

  // console.log(require("./assets/icon.png"))

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World</Text>
      <TouchableNativeFeedback onPress={()=> console.log("Image Tapped")}>
        {/* <Image 
        blurRadius={2}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300"}}/> */}
          <View style= {{width: 200, height: 70, backgroundColor: 'dodgerblue'}}></View>
      </TouchableNativeFeedback>
      {/* <Button 
      color="orange"
      title="Click Me" 
      onPress={()=> Alert.alert("My title", "My message", [
        {text:"yes", onPress: ()=> console.log("Yes")},
        {text:"no", onPress: ()=> console.log("No")}
      ])}></Button> */}
      {/* Button for prompt- it takes input in alert */}
      <Button 
      color="orange"
      title="Click Me" 
      onPress={()=> 
      Alert.prompt("My title", "My message", text => console.log(text))}
      ></Button>
      {/* <Image source={require("./assets/icon.png")}/> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


// StyleSheet.create validates our css code and gives us a warning if we have any errors in our css code.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? 20 : 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
