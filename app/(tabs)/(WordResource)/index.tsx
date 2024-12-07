import { View, Text, StyleSheet, Button, ScrollView,Dimensions ,TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

const screenheight = Dimensions.get('window').height;
const screenwidth = Dimensions.get('window').width;

export default function WritingResource() {
	 const router = useRouter();
  return (
    <ScrollView>
    <View style = {styles.freeStyleContainer}>
    	<View style = {styles.Grammar}>
			<Text style = {styles.Grammartext}>Grammar</Text>
		</View>
		
    	<View style = {styles.wrapper}>
    		<FontAwesome name="long-arrow-right" size={32} color="black" />
    		<TouchableOpacity style = {styles.freeTouchable} onPress={() => router.push('verbs')}>
  				<Text style = {styles.freeText}>Verbs</Text>
  			</TouchableOpacity>
  		</View>
  		
  		<View style = {styles.Writing}>
			<Text style = {styles.Writingtext}>Writing</Text>
		</View>
  			
  		<View style = {styles.wrapper}>
  			<FontAwesome name="long-arrow-right" size={32} color="black" />
  			<TouchableOpacity style = {styles.freeTouchable} onPress={() => router.push('writing-words')}>
  				<Text style = {styles.freeText}>Words For Writing</Text>
  			</TouchableOpacity>
  		</View>
  		
  		<View style = {styles.wrapper}>
  			<FontAwesome name="long-arrow-right" size={32} color="black" />
  			<TouchableOpacity style = {styles.freeTouchable} onPress={() => router.push('barChart')}>
  				<Text style = {styles.freeText}>Bar Chart</Text>
  			</TouchableOpacity>
  		</View>
  		
  		<View style = {styles.wrapper}>
  			<FontAwesome name="long-arrow-right" size={32} color="black" />
  			<TouchableOpacity style = {styles.freeTouchable} onPress={() => router.push('lineChart')}>
  				<Text style = {styles.freeText}>Line Chart</Text>
  			</TouchableOpacity>
  		</View>
  		
  		<View style = {styles.wrapper}>
  			<FontAwesome name="long-arrow-right" size={32} color="black" />
  			<TouchableOpacity style = {styles.freeTouchable} onPress={() => router.push('pieChart')}>
  				<Text style = {styles.freeText}>Pie Chart</Text>
  			</TouchableOpacity>
  		</View>
  		
  		<View style = {styles.wrapper}>
  			<FontAwesome name="long-arrow-right" size={32} color="black" />
  			<TouchableOpacity style = {styles.freeTouchable} onPress={() => router.push('maps')}>
  				<Text style = {styles.freeText}>Maps</Text>
  			</TouchableOpacity>
  		</View>
  		
  		<View style = {styles.wrapper}>
  			<FontAwesome name="long-arrow-right" size={32} color="black" />
  			<TouchableOpacity style = {styles.freeTouchable} onPress={() => router.push('process')}>
  				<Text style = {styles.freeText}>Process</Text>
  			</TouchableOpacity>
  		</View>
  		
  		<View style = {styles.wrapper}>
  			<FontAwesome name="long-arrow-right" size={32} color="black" />
  			<TouchableOpacity style = {styles.freeTouchable} onPress={() => router.push('life-cycle')}>
  				<Text style = {styles.freeText}>Life Cycle</Text>
  			</TouchableOpacity>
  		</View>
  		
  		<View style = {styles.Speaking}>
			<Text style = {styles.Speakingtext}>Speaking</Text>
		</View>
  		
  		<View style = {styles.wrapper}>
  			<FontAwesome name="long-arrow-right" size={32} color="black" />
  			<TouchableOpacity style = {styles.freeTouchable} onPress={() => router.push('idioms')}>
  				<Text style = {styles.freeText}>Idioms</Text>
  			</TouchableOpacity>
  		</View>
  		
  		<View style = {styles.USA}>
			<Text style = {styles.USAtext}>USA Question</Text>
		</View>
  		
  		<View style = {styles.wrapper}>
  			<FontAwesome name="long-arrow-right" size={32} color="black" />
  			<TouchableOpacity style = {styles.freeTouchable} onPress={() => router.push('usa-question')}>
  				<Text style = {styles.freeText}>USA - Question</Text>
  			</TouchableOpacity>
  		</View>
  		
  		
  		
  		<View style = {styles.line1}></View>
  		<View style = {styles.line2}></View>
  		<View style = {styles.line3}></View>
  		<View style = {styles.line4}></View>
  		<View style = {styles.line5}></View>
  		<View style = {styles.line6}></View>
  		<View style = {styles.line7}></View>
  		<View style = {styles.line8}></View>
  		<View style = {styles.line9}></View>
  		<View style = {styles.line10}></View>
  	
  		
  	</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
   Grammar:
  {
    justifyContent: 'center',
    alignItems: 'center',
	width:  screenwidth-100,
	height:40,
	backgroundColor: '#119d79',
	borderColor: "black",
	borderRadius: 50,
    borderWidth: 2,
    position: "relative",
	left: screenwidth/128,
	top:  10,
	margin: 20,
  },
  
  Grammartext:{
  	color: "white",
  	fontSize: 20,
  	fontWeight: "bold",
  },
  
  Writing:{
    justifyContent: 'center',
    alignItems: 'center',
	width:  screenwidth-100,
	height:40,
	backgroundColor: '#119d79',
	borderColor: "black",
	borderRadius: 50,
    borderWidth: 2,
    position: "relative",
	left: screenwidth/128,
	top:  10,
	margin: 20,
  },
  
  Writingtext:{
  	color: "white",
  	fontSize: 20,
  	fontWeight: "bold",
  },
  
  Speaking:{
    justifyContent: 'center',
    alignItems: 'center',
	width:  screenwidth-100,
	height:40,
	backgroundColor: '#119d79',
	borderColor: "black",
	borderRadius: 50,
    borderWidth: 2,
    position: "relative",
	left: screenwidth/128,
	top:  10,
	margin: 20,
  },
  
  Speakingtext:{
  	color: "white",
  	fontSize: 20,
  	fontWeight: "bold",
  },
  
  USA:{
    justifyContent: 'center',
    alignItems: 'center',
	width:  screenwidth-100,
	height:40,
	backgroundColor: '#119d79',
	borderColor: "black",
	borderRadius: 50,
    borderWidth: 2,
    position: "relative",
	left: screenwidth/128,
	top:  10,
	margin: 20,
  },
  
  USAtext:{
  	color: "white",
  	fontSize: 20,
  	fontWeight: "bold",
  },
  
  wrapper: {
  	width: screenwidth-200,
  	height : 100,
  	borderColor: "white",
	borderRadius: 5,
    borderWidth: 3,
    margin: 10,
    position: "relative",
    top: 20,
    left: screenwidth / 6,
    flexDirection: 'row', // Align children in a row
    alignItems: 'center',  // Center vertically
  },
  
  
  freeStyleContainer: {
  	backgroundColor: "white",
  	width: screenwidth - 50,
  	height: 1650,
    position: "relative",
    top: 20,
    left: screenwidth / 16,
  },
  
   freeTouchable:{ 
	width: screenwidth-250,
	height:60,
	backgroundColor: 'white',
	justifyContent: 'center',
    alignItems: 'center',
    borderColor: "black",
	borderRadius: 5,
    borderWidth: 3,
 }, 
  
  freeText: {
  	color: '#119d79',
  	fontWeight: "bold",
  	fontSize: 20,
  }, 
  
   line1:{
 	borderColor: "black",
 	borderLeftWidth: 5, // Left border
    borderBottomWidth: 5, // Bottom border
    width: 50,
    height: 95,
    position: "relative",
    left: 50,
    top: -screenheight * 1.6523,
  },
  
   line2:{
 	borderColor: "black",
 	borderLeftWidth: 5, // Left border
    borderBottomWidth: 5, // Bottom border
    width: 50,
    height: 95,
    position: "relative",
    left: 50,
    top: -screenheight * 1.533,
  },
  
  line3:{
 	borderColor: "black",
 	borderLeftWidth: 5, // Left border
    borderBottomWidth: 5, // Bottom border
    width: 50,
    height: 120,
    position: "relative",
    left: 50,
    top: -screenheight * 1.533,
  },
  
  line4:{
 	borderColor: "black",
 	borderLeftWidth: 5, // Left border
    borderBottomWidth: 5, // Bottom border
    width: 50,
    height: 120,
    position: "relative",
    left: 50,
    top: -screenheight * 1.533,
  },
  
  line5:{
 	borderColor: "black",
 	borderLeftWidth: 5, // Left border
    borderBottomWidth: 5, // Bottom border
    width: 50,
    height: 120,
    position: "relative",
    left: 50,
    top: -screenheight * 1.533,
  },
  
   line6:{
 	borderColor: "black",
 	borderLeftWidth: 5, // Left border
    borderBottomWidth: 5, // Bottom border
    width: 50,
    height: 120,
    position: "relative",
    left: 50,
    top: -screenheight * 1.533,
  },
  
  line7:{
 	borderColor: "black",
 	borderLeftWidth: 5, // Left border
    borderBottomWidth: 5, // Bottom border
    width: 50,
    height: 120,
    position: "relative",
    left: 50,
    top: -screenheight * 1.533,
  },
  
  line8:{
 	borderColor: "black",
 	borderLeftWidth: 5, // Left border
    borderBottomWidth: 5, // Bottom border
    width: 50,
    height: 120,
    position: "relative",
    left: 50,
    top: -screenheight * 1.533,
  },
   
  line9:{
 	borderColor: "black",
 	borderLeftWidth: 5, // Left border
    borderBottomWidth: 5, // Bottom border
    width: 50,
    height: 95,
    position: "relative",
    left: 50,
    top: -screenheight * 1.4132,
  },
  
   
  line10:{
 	borderColor: "black",
 	borderLeftWidth: 5, // Left border
    borderBottomWidth: 5, // Bottom border
    width: 50,
    height: 94,
    position: "relative",
    left: 50,
    top: -screenheight * 1.2934,
  },
  
});
