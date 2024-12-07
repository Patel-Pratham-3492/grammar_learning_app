import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet ,ScrollView, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import BarChartComponent from '../../components/Index/BarChartComponent';
import IndividualScoreContainer from '../../components/Index/IndividualScoreContainer';

const ExpandableView = ({ isExpanded, onPress, question, answer, backgroundColor }) => (
  <TouchableOpacity
    style={[styles.view, isExpanded ? styles.expandedView : styles.collapsedView, { backgroundColor }]}
    onPress={onPress}
  >
     <View style={styles.header}>
      <Text style={styles.question}>{question}</Text>
      <Icon
        name={isExpanded ? 'chevron-up' : 'chevron-down'}
        size={20}
        color={isExpanded ? 'white' : 'black'}
        style={styles.icon}
      />
      </View>
    {isExpanded && <Text style={styles.answer}>{answer}</Text>}
  </TouchableOpacity>
);


export default function Tab() {
  const [isMessageVisibleView1, setMessageVisibleView1] = useState(false);

  const toggleMessageVisibilityView1 = () => {
    setMessageVisibleView1(!isMessageVisibleView1);
  };
  
  const [isMessageVisibleView2, setMessageVisibleView2] = useState(false);

  const toggleMessageVisibilityView2 = () => {
    setMessageVisibleView2(!isMessageVisibleView2);
  };
  
  const [isMessageVisibleView3, setMessageVisibleView3] = useState(false);

  const toggleMessageVisibilityView3 = () => {
    setMessageVisibleView3(!isMessageVisibleView3);
  };
  
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handlePress = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
  <ScrollView>
  
    <View>
      <Text style = {styles.hi}>Hi, Mickey Singh</Text>
      <Text style = {styles.blackHashtag}>#</Text>
      <Text style = {styles.aquaText}>NKL-598</Text>
    </View>
    
    
    
    <View style = {styles.v1}>
    	<View style = {styles.circularView}>
    		<Text style = {styles.i}>i</Text>
    	</View>
    	<Text style = {styles.currentScore}>Current Score :</Text>
    	<Text style = {styles.bandScore}>9.0 Band</Text>
    	
    	 <View style={styles.containerView1}>
      		<TouchableOpacity style={styles.iconContainer1} onPress={toggleMessageVisibilityView1}>
       		 	<FontAwesome name="info" size={20} color="black" />
      		</TouchableOpacity>
      		{isMessageVisibleView1 && (
        		<TouchableOpacity style={styles.messageContainerView1} onPress={toggleMessageVisibilityView1}>
          			<Text style={styles.messageTextView1}>You are currently viewing information about your current Band scores. </Text>
          			<View style={styles.tricontainer1}>
      					<View style={styles.triangle1}></View>
    				</View>
               </TouchableOpacity>
               
            )}
    	 </View>
    	 
    </View>
    
    
    
    <View style={styles.v2}>
    	<Text style={styles.examDate}> Exam Date :</Text>
    	<Text style={styles.notDecide}> Not Decide</Text>
    	<View style={styles.containerView2}>
      		<TouchableOpacity style={styles.iconContainer2} onPress={toggleMessageVisibilityView2}>
       		 	<FontAwesome name="info" size={20} color="white" />
      		</TouchableOpacity>
      		{isMessageVisibleView2 && (
        		<TouchableOpacity style={styles.messageContainerView2} onPress={toggleMessageVisibilityView2}>
          			<Text style={styles.messageTextView2}>You are currently viewing information about Your Final IELTS exam. </Text>
          			<View style={styles.tricontainer2}>
      					<View style={styles.triangle2}></View>
    				</View>
               </TouchableOpacity>
               
            )}
    	 </View>
      	
    </View>
    
    <View style={styles.v3}>
    	<Text style={styles.module}> Module :</Text>
      	<Text style={styles.academic}> Academic</Text>
      	<View style={styles.containerView3}>
      		<TouchableOpacity style={styles.iconContainer3} onPress={toggleMessageVisibilityView3}>
       		 	<FontAwesome name="info" size={20} color="black" />
      		</TouchableOpacity>
      		{isMessageVisibleView3 && (
        		<TouchableOpacity style={styles.messageContainerView3} onPress={toggleMessageVisibilityView3}>
          			<Text style={styles.messageTextView3}>You are currently viewing your Module, either it is Academic or General.</Text>
          			<View style={styles.tricontainer3}>
      					<View style={styles.triangle3}></View>
    				</View>
               </TouchableOpacity>
               
            )}
    	 </View>
      	
    </View>
    
    
    
    
    <View style={styles.v4}>
    	<BarChartComponent />
    	<Text style = {styles.graph}>Graph for Score</Text>
    </View>
    
    <IndividualScoreContainer/>
    
    <View style={styles.v5}>
    	<Text style = {styles.helpCenter}>Help Center</Text>
    	<Text style = {styles.hey}>Hey there! Looks like you need help.</Text>
		<Text style = {styles.findyour}>Find your answer here.</Text>
		<Text style = {styles.general}>General</Text>
		<View style = {styles.generalline}></View>
    
    	<View style={styles.container1}>
      		<ExpandableView
        		isExpanded={expandedIndex === 0}
        		onPress={() => handlePress(0)}
        		question="Where to start learning?"
        		answer="Start with IELTS section, learn about the structure and pattern of exam and then go for grammar. "
        		backgroundColor={expandedIndex === 0 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 1}
        		onPress={() => handlePress(1)}
        		question="What to learn?"
        		answer="Grammar, Sentence formation and way of represents your idea in writing and speaking. "
        		backgroundColor={expandedIndex === 1 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 2}
        		onPress={() => handlePress(2)}
        		question="How to determine band score?"
        		answer="It is depend on different module of IELTS and predict based on writing, speaking, listening, reading."
        		backgroundColor={expandedIndex === 2 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 3}
        		onPress={() => handlePress(3)}
        		question="Where to focus more?"
        		answer="Speaking, is a difficult for most of the student, sometime student face anxiety, fear of failure or have no idea what to speak."
        		backgroundColor={expandedIndex === 3 ? '#119d79' : 'white'}
      		/>
    	</View>
    	
    	<Text style = {styles.rewards}>Rewards</Text>
		<View style = {styles.rewardsline}></View>
		
		<View style={styles.container2}>
      		<ExpandableView
        		isExpanded={expandedIndex === 4}
        		onPress={() => handlePress(4)}
        		question="Above 6 band?"
        		answer="Congratulations! You've earned a 1,500 rupees scholarship for your impressive Band 6 performance."
        		backgroundColor={expandedIndex === 4 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 5}
        		onPress={() => handlePress(5)}
        		question="Above 7 band?"
        		answer="Fantastic work! You've secured a 3,000 rupees scholarship for your excellent Band 7 achievement."
        		backgroundColor={expandedIndex === 5 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 6}
        		onPress={() => handlePress(6)}
        		question="Above 8 band?"
        		answer="Well done! Your outstanding Band 8 result has earned you a 4500 rupees scholarship."
        		backgroundColor={expandedIndex === 6 ? '#119d79' : 'white'}
      		/>
    	</View>
		
    	<Text style = {styles.upgrade}>Upgrade</Text>
		<View style = {styles.upgradeline}></View>
		
		<View style={styles.container3}>
      		<ExpandableView
        		isExpanded={expandedIndex === 7}
        		onPress={() => handlePress(7)}
        		question="For Speaking and Writing practice?"
        		answer="Elevate your English proficiency with our app! Subscribe now for only ₹299 and enjoy unlimited practice for speaking and writing, tailored to help you succeed."
        		backgroundColor={expandedIndex === 7 ? '#119d79' : 'white'}
      		/>
    	</View>
    	
    </View>  
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  
  hi: {
		fontSize: 40,
		fontWeight: 'bold',
		position: 'relative',
		left: 20,
		top:10,
		width: 400,
  	  },
  	  
  blackHashtag: {
  	fontSize: 25,
    color: 'black',
    fontWeight: 'bold', 
    position: 'relative',
    left: 20,
    width: 17,
  },
  
  aquaText: {
  	fontSize: 25,
    color: '#119d79',
    position: 'relative', 
    left: 38,
    top: -35,
    width: 150,
  },
  
  
  
  
  // view v1  design start
 
  v1: {
  	
  	width: 385,
  	height:150,
  	backgroundColor: 'white',
  	borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    position: 'relative',
    left: 20,
    elevation: 25,
  },
  
  circularView: {
    width: 100,
    height: 100,
    backgroundColor: '#119d79', // Background color
    borderColor: 'black', // Border color
    borderWidth: 2, // Border width
    borderRadius: 50, // Border radius to make the view circular
    position: 'relative',
	left: 20,
	top: 20,
  },
  
  i:{
  	fontSize: 60,
  	color: "white",
  	width: 20,
  	position: 'relative',
  	left: 40,
  	top: 5,
  },
  
  currentScore: {
  	fontSize: 18 , 
  	width: 150,
  	color: 'black',
   // fontWeight: 'bold', 
  	position: 'relative',
  	top: -70,
  	left: 140,
  },
  
  bandScore: {
  	fontSize: 30, 
  	width: 150,
 	color: 'black',
    fontWeight: 'bold',
    position: 'relative',
    top: -65,
    left: 140,
  },
  
  iconContainer1: {
    width: 25,
    height: 25,
    backgroundColor: 'white', // Background color of the view
    borderColor: 'black', // Border color
    borderWidth: 2, // Border width
    borderRadius: 50, // Border radius to make it circular
    justifyContent: 'center', // Center icon vertically
    alignItems: 'center',
    position: 'relative',
    top: -150,
    left: 338,
  },
  
  containerView1:{
		backgroundColor: "red",
		width: 0,
		height:0,
	},

 tricontainer1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: "relative",
    top: -63,
    left: 120,
	//backgroundColor: "red",
    width: 20,
    transform: [{ rotate: '90deg' }],
  },
  triangle1: {
    width: 0,
    height: 0,
    borderLeftWidth:7, // Base width of the triangle
    borderRightWidth: 7, // Base width of the triangle
    borderBottomWidth: 25, // Height of the triangle
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'black', // Color of the triangle
  }, 


 messageContainerView1: {
    marginTop: 10, // Adjust as needed
    padding: 10,
    backgroundColor: 'black', // Background color of the message
    borderColor: '#119d79',
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    position: "relative",
    top: -190,
    width: 220,
    left: 100,
    height: 100,
    
  },
  
  messageTextView1: {
    fontSize: 16,
    color: 'white',
  },
  
  
  //  view v1 design end   
  
  
  
  
    // view v2  design start
  v2: {  	
  	width: 215,
  	height:150,
  	backgroundColor: '#119d79',
  	borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    position: 'relative',
    left: 20,
    top:20,
  },    
  
  examDate: {
  	width: 180,
  	fontSize: 20,
  	color: "white",
  	positon: "relative",
  	left: 5,
  	top:15,
  },
  
  notDecide: {
  	width: 210,
  	fontSize: 40,
  	color: "white",
  	positon: "relative",
  	left: -3,
  	top:55,
  	fontWeight: 'bold',
  },
  
  iconContainer2: {
    width: 25,
    height: 25,
    backgroundColor: 'black', // Background color of the view
    borderColor: 'white', // Border color
    borderWidth: 2, // Border width
    borderRadius: 50, // Border radius to make it circular
    justifyContent: 'center', // Center icon vertically
    alignItems: 'center',
    position: 'relative',
    top: -70,
    left: 172,
  },
  
  
  containerView2:{
		backgroundColor: "red",
		width: 0,
		height:0,
	},

 tricontainer2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: "relative",
    top: -110,
    left: 70,
	backgroundColor: "red",
    width: 20,
    transform: [{ rotate: '90deg' }],
  },
  
  triangle2: {
    width: 0,
    height: 0,
    borderLeftWidth:7, // Base width of the triangle
    borderRightWidth: 7, // Base width of the triangle
    borderBottomWidth: 25, // Height of the triangle
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white', // Color of the triangle
  }, 


 messageContainerView2: {
    marginTop: 10, // Adjust as needed
    padding: 10,
    backgroundColor: 'white', // Background color of the message
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    position: "relative",
    top: -110,
    left: 35,
    width: 120,
    height: 140,
    
  },
  
  messageTextView2: {
    fontSize: 14,
    color: '#119d79',

  },
 
  
    //  view v2 design end
  
  
  
  
    
    // view v3  design start
  v3: {  	
  	width: 150,
  	height:150,
  	backgroundColor: 'black',
  	borderColor: '#119d79',
    borderWidth: 4,
    borderRadius: 20,
    position: 'relative',
    left: 255,
    top:-130,
  },    
  
  module: {
  	width: 90,
  	fontSize: 20,
  	color: "white",
  	positon: "relative",
  	left: 5,
  	top:15,
  	
  },
  
  academic: {
  	width: 140,
  	fontSize: 28,
  	color: "white",
  	positon: "relative",
  	left: -3,
  	top:65,
  	fontWeight: 'bold',
  },
  
  iconContainer3: {
    width: 25,
    height: 25,
    backgroundColor: 'white', // Background color of the view
    borderColor: '#119d79', // Border color
    borderWidth: 2, // Border width
    borderRadius: 50, // Border radius to make it circular
    justifyContent: 'center', // Center icon vertically
    alignItems: 'center',
    position: 'relative',
    top: -55,
    left: 105,
  },
    
   containerView3:{
		backgroundColor: "red",
		width: 0,
		height:0,
	},

 tricontainer3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: "relative",
    top: -95,
    left: 57,
	backgroundColor: "red",
    width: 20,
    transform: [{ rotate: '90deg' }],
  },
  
  triangle3: {
    width: 0,
    height: 0,
    borderLeftWidth:7, // Base width of the triangle
    borderRightWidth: 7, // Base width of the triangle
    borderBottomWidth: 25, // Height of the triangle
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#119d79', // Color of the triangle
  }, 


 messageContainerView3: {
    marginTop: 10, // Adjust as needed
    padding: 10,
    backgroundColor: '#119d79', // Background color of the message
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    position: "relative",
    top: -94,
    left: -10,
    width: 100,
    height: 125,
    
  },
  
  messageTextView3: {
    fontSize: 12,
    color: 'black',

  }, 
    
    //  view v3 design end
    
    
    
    
    
    
     // view v4  design start
  
  v4: {
  	width: 385,
  	height:350,
  	backgroundColor: 'black',
  	borderColor: '#119d79',
    borderWidth: 4,
    borderRadius: 20,
    position: 'relative',
    left: 20,
    top:-110,
  },     
  
  graph: {
  	width: 220,
  	fontSize: 25,
  	color: "white",
  	positon: "relative",
  	backgroundColor: 'black',
  	left: 100,
  	top:0,
  	fontWeight: 'bold',
  	textDecorationLine: 'underline', 
  	fontStyle: 'italic',
  },
     
     //  view v4 design end
     

     
     // view v5  design start
  
  v5: {
  	width: 385,
  	height:945,
  	backgroundColor: 'white',
  	borderColor: "black",
    borderWidth: 4,
    borderRadius: 50,
    position: 'relative',
    left: 20,
    top:-50,
     overflow: 'hidden',
  },     
  
  helpCenter: {
  	width: 220,
  	fontSize: 40,
  	color: "black",
  	positon: "relative",
  	left: 80,
  	top:20,
  	fontWeight: 'bold',
  },
  
  hey: {
  	fontSize: 18,
  	color: "gray",
  	positon: "relative",
  	left: 40,
  	top:20,
  	fontWeight: 'bold',
  },
  
  findyour: {
  	fontSize: 18,
  	color: "gray",
  	positon: "relative",
  	left: 95,
  	top:20,
  	fontWeight: 'bold',
  },
     
  general: {
  	fontSize: 18,
  	color: '#119d79',
  	positon: "relative",
  	left: 20,
  	top:50,
  	fontWeight: 'bold',
  },
  
  generalline: {
  	borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    height: 0,
    width: 260,
    position: 'relative',
    top: 37,
    left: 95,
  },
     
  container1: {
    padding: 10,
    backgroundColor: 'white',
    position: "relative",
    top:50,
  },
  
  container2: {
    padding: 10,
    backgroundColor: 'white',
    position: "relative",
    top:70,
  },
  
  container3: {
    padding: 10,
    backgroundColor: 'white',
    position: "relative",
    top:90,
    borderRadius: 10,
  },
  
  view: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  
  collapsedView: {
    height: 50,
    justifyContent: 'center',
  },
  
  expandedView: {
    paddingVertical: 10,
  },
  
   header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  question: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  answer: {
    fontSize: 14,
    color: 'white',
    marginTop: 10,
  },
  
  icon: {
    marginLeft: 10,
  },
  
  rewards: {
  	fontSize: 18,
  	color: '#119d79',
  	positon: "relative",
  	left: 20,
  	top:70,
  	fontWeight: 'bold',
  },
  
  rewardsline: {
  	borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    height: 0,
    width: 260,
    position: 'relative',
    top: 57,
    left: 95,
  },
  
  upgrade: {
  	fontSize: 18,
  	color: '#119d79',
  	positon: "relative",
  	left: 20,
  	top:90,
  	fontWeight: 'bold',
  },
  
  upgradeline: {
  	borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    height: 0,
    width: 260,
    position: 'relative',
    top: 77,
    left: 95,
  },
   //  view v5 design end
    
   
   
});
