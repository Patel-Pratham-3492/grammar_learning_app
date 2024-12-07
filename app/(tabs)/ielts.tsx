import { View, Text, StyleSheet ,ScrollView,Dimensions ,TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

const screenheight = Dimensions.get('window').height;
const screenwidth = Dimensions.get('window').width;

const ExpandableView = ({ isExpanded, onPress, question, answer, backgroundColor}) => (
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


export default function Grammar() {
	
	const [expandedIndex, setExpandedIndex] = useState(null);

  	const handlePress = (index) => {
    	setExpandedIndex(expandedIndex === index ? null : index);
  	};

  return (
   <ScrollView>
   
	<View style = {styles.freeview}></View>
	
     <View style={styles.v5}>
     
    	<Text style = {styles.ielts}>IELTS</Text>
    	<Text style = {styles.here}>Here! U can Learn about IELTS Exam.</Text>
    	
    	<Text style = {styles.smalls}>S</Text>
    	<Text style = {styles.o}>o,</Text>
    	<Text style = {styles.u1}>U</Text>
    	<Text style = {styles.k}>K</Text>
    	<Text style = {styles.nowk}>now</Text>
    	<Text style = {styles.w}>W</Text>
    	<Text style = {styles.here1}>here</Text>
    	<Text style = {styles.u2}>U</Text>
    	<Text style = {styles.h}>H</Text>
    	<Text style = {styles.ave}>ave</Text>
    	<Text style = {styles.to}>to</Text>
    	<Text style = {styles.b}>b</Text>
    	<Text style = {styles.e}>e</Text>
    	<Text style = {styles.m}>M</Text>
    	<Text style = {styles.ore}>ore</Text>
    	<Text style = {styles.f}>F</Text>
    	<Text style = {styles.ocused}>ocused</Text>
    	<Text style = {styles.and}>&</Text>
    	<Text style = {styles.p}>P</Text>
    	<Text style = {styles.ractice}>ractice</Text>
    	<Text style = {styles.fullstop2}>.</Text>
	
		<View style = {styles.speakingmain}>
			<Text style = {styles.speakingmaintext}>Speaking</Text>
		</View>
		
		<Text style = {styles.speaking}>Speaking</Text>
		<View style = {styles.speakingline}></View>
    
    	<View style={styles.container1}>
      		<ExpandableView
        		isExpanded={expandedIndex === 0}
        		onPress={() => handlePress(0)}
        		question="What is IELTS speaking in detail?"
        		answer="There are 3 parts to the Speaking test. The examiner will ask you general questions about yourself and a range of familiar topics, such as home, family, work, studies and interests. This part lasts between 4 and 5 minutes. You will be given a task card and the examiner will ask you to talk about a topic. "
        		backgroundColor={expandedIndex === 0 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 1}
        		onPress={() => handlePress(1)}
        		question="IELTS Speaking Format: Part 1"
        		answer="Introducing yourself
Next you will be asked 2 or 3 questions on one of the following topics 
WORK, STUDIES, HOMETOWN or HOME
"
        		backgroundColor={expandedIndex === 1 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 2}
        		onPress={() => handlePress(2)}
        		question="IELTS Speaking Format: Part 2"
        		answer="This part of the test lasts 3-4 minutes. The examiner will give you a Task Card (sometimes called a Cue Card) with a question. There will also be 3 bullet points to help guide your answer. You can use these bullet points to help you, but ou don’t have to. You have 1 minute to prepare an answer, and then you have 1 to 2 minutes to answer. The examiner may ask you a rounding-off question at the end. If you have spoken for the full 2 minutes, they may not ask you an extra question."
        		backgroundColor={expandedIndex === 2 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 3}
        		onPress={() => handlePress(3)}
        		question="IELTS Speaking Format: Part 3"
        		answer="Part 3 lasts for 4 – 5 minutes. You will be asked further questions connected to the main topic in part 2. The examiner may also ask questions on some related sub-topics. You will typically get 4 or 5 questions, so you will need to give longer answers, often up to 1 minute or even longer, if appropriate. However, don’t be surprised if the examiner interrupts you, this is common and normal.The questions may relate to your life, but will also look at more general, wider themes, ideas and debates."
        		backgroundColor={expandedIndex === 3 ? '#119d79' : 'white'}
      		/>
      		
    	</View>
    	
    	<View style = {styles.readingmain}>
			<Text style = {styles.readingmaintext}>Reading</Text>
		</View>
    	
    	<Text style = {styles.reading}>Reading</Text>
		<View style = {styles.readingline}></View>
		
		<View style={styles.container2}>
      		<ExpandableView
        		isExpanded={expandedIndex === 4}
        		onPress={() => handlePress(4)}
        		question="What is the reading explanation for IELTS?"
        		answer="In many ways, IELTS Reading is more of a vocabulary test than a reading test. The reason is that you need a wide range of vocabulary to understand the passages of text given to you. You must also be aware of synonyms and paraphrasing if you wish to identify the information required to answer the questions correctly."
        		backgroundColor={expandedIndex === 4 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 5}
        		onPress={() => handlePress(5)}
        		question="How we can do reading in IELTS?"
        		answer="Read the questions before you read the text.
Skim through the passage.
Pay attention to the introduction and conclusion.
Identify key words.
Answer every question.
Check your answers.
Practice makes perfect! Check out the official IELTS preparation materials to be fully prepared for your test."
        		backgroundColor={expandedIndex === 5 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 6}
        		onPress={() => handlePress(6)}
        		question="How to calculate IELTS reading?"
        		answer="The IELTS Reading test contains 40 questions. Each correct answer is awarded 1 mark. Scores out of 40 are converted to the IELTS 9-band scale. Scores are reported in whole and half bands."
        		backgroundColor={expandedIndex === 6 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 7}
        		onPress={() => handlePress(7)}
        		question="How to improve reading skills?"
        		answer="Practise reading texts quickly: you can time yourself. For example, give yourself 3 minutes to read 300 words, then give yourself 2 minutes to read 300 words, then try in 1 minute. You can repeat this idea with the same text at first, but then try it with different texts as you get better at it."
        		backgroundColor={expandedIndex === 7 ? '#119d79' : 'white'}
      		/>
      		
    	</View>
		
		<View style = {styles.listeningmain}>
			<Text style = {styles.listeningmaintext}>Listening</Text>
		</View>
		
    	<Text style = {styles.listening}>Listening</Text>
		<View style = {styles.listeningline}></View>
		
		<View style={styles.container3}>
			
      		<ExpandableView
        		isExpanded={expandedIndex === 8}
        		onPress={() => handlePress(8)}
        		question="What is listening in IELTS?"
        		answer="You will need to answer 40 questions in response to four recordings. You will listen to four recordings which are a mix of monologues and conversations from a range of native speakers and you will only hear each recording once."
        		backgroundColor={expandedIndex === 8 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 9}
        		onPress={() => handlePress(9)}
        		question="How to prepare for a listening test?"
        		answer="Always read the question and think about the person talking and if they are giving an opinion or expressing an attitude or a feeling, for example. Read and listen carefully to the example given at the start of each part, this will show you how to answer the questions. "
        		backgroundColor={expandedIndex === 9 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 10}
        		onPress={() => handlePress(10)}
        		question="How is IELTS listening calculated?"
        		answer="The IELTS Listening test contains 40 questions. Each correct answer is awarded 1 mark. Scores out of 40 are converted to the IELTS 9-band scale. Scores are reported in whole and half bands."
        		backgroundColor={expandedIndex === 10 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 11}
        		onPress={() => handlePress(11)}
        		question="How many parts are in IELTS listening?"
        		answer="The paper has four parts, with ten questions in each part. The questions are in the same order as the information in the recording, so the answer to the first question will be before the answer to the second question, and so on."
        		backgroundColor={expandedIndex === 11 ? '#119d79' : 'white'}
      		/>
      		
    	</View>
    	
    	<View style = {styles.writingmain}>
			<Text style = {styles.writingmaintext}>Writing</Text>
		</View>
    	
    	<Text style = {styles.writing}>Writing</Text>
		<View style = {styles.writingline}></View>
		
		<View style={styles.container4}>
			<ExpandableView
        		isExpanded={expandedIndex === 12}
        		onPress={() => handlePress(12)}
        		question="What is the explanation of IELTS Writing?"
        		answer="There are two Writing tasks and BOTH must be completed. In Task 1, you have to describe some visual information in your own words (a graph, table, chart or diagram). You need to write at least 150 words in about 20 minutes. In Task 2, you are given a point of view, argument or problem which you need to discuss."
        		backgroundColor={expandedIndex === 12 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 13}
        		onPress={() => handlePress(13)}
        		question="How to do writing in IELTS?"
        		answer="Understand how the test is marked. Knowing the marking criteria will allow you to give the examiner exactly what they need.
Paraphrase the question. It is best to paraphrase the question in the first paragraph.
Write the overview.
Support the main features.
Check your work."
        		backgroundColor={expandedIndex === 13 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 14}
        		onPress={() => handlePress(14)}
        		question="What type of writing comes in IELTS?"
        		answer="Following types of essays will help you identify them in IELTS exam: Type 1 essays ask you to write your opinion and discuss some. Type 2 essays ask you to write advantages and disadvantages of something. Type 3 essays ask you to write problems and solutions on some topic."
        		backgroundColor={expandedIndex === 14 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 15}
        		onPress={() => handlePress(15)}
        		question="What is asked in IELTS writing?"
        		answer="There are two Writing tasks and BOTH must be completed. In Task 1, you have to describe some visual information in your own words (a graph, table, chart or diagram). You need to write at least 150 words in about 20 minutes. In Task 2, you are given a point of view, argument or problem which you need to discuss."
        		backgroundColor={expandedIndex === 15 ? '#119d79' : 'white'}
      		/>
    	</View>
    	
    </View>  
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  freeview:{
  	width: screenwidth,
  	height: 100,
  	backgroundColor: "white",
  },

  speakingmain:
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
	left: screenwidth/16,
	top:  -390,
  },
  
  speakingmaintext:{
  	color: "white",
  	fontSize: 20,
  },
  
   readingmain:
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
	left: screenwidth/16,
	top:  -330,
  },
  
    readingmaintext:{
  	color: "white",
  	fontSize: 20,
  },
  
  listeningmaintext:{
  	color: "white",
  	fontSize: 20,
  },
  
  listeningmain:
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
	left: screenwidth/16,
	top:  -270,
  },
  
    writingmaintext:{
  	color: "white",
  	fontSize: 20,
  },
  
  writingmain:
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
	left: screenwidth/16,
	top:  -210,
  },
  
    //  view v5 design start
  v5: {
  	width: 385,
  	height:1880,
  	backgroundColor: 'white',
  	borderColor: "black",
    borderWidth: 4,
    borderRadius: 50,
    position: 'relative',
    left: 20,
    top:-90,
    overflow: "hidden",
  },     
  
  ielts: {
  	width: 200,
  	fontSize: 45,
  	color: '#119d79',
  	positon: "relative",
  	left: screenwidth/3  - 10,
  	top:20,
  	fontWeight: 'bold',
  },
  
  here: {
  	fontSize: 18,
  	color: "black",
  	positon: "relative",
  	left: screenwidth/12,
  	top:20,
  	fontWeight: 'bold',
  },
  
   smalls: {
  	fontSize: 18,
  	color: "black",
  	positon: "relative",
  	left: screenwidth/6 + 20,
  	top:20,
  	fontWeight: 'bold',
  	width: 13,
  },
  
   o: {
  	fontSize: 18,
  	color: "gray",
  	positon: "relative",
  	left: screenwidth/6 + 31,
  	top:-5,
  	fontWeight: 'bold',
  	width: 70,
  },
  
  u1: {
  	fontSize: 18,
  	color: "black",
  	positon: "relative",
  	left: screenwidth/6 + 50,
  	top:-30,
  	fontWeight: 'bold',
  	width: 10+2,
  },
  
   k: {
  	fontSize: 18,
  	color: "black",
  	positon: "relative",
  	left: screenwidth/6 + 70,
  	top:-55,
  	fontWeight: 'bold',
  	width: 10+2,
  },
  
  nowk: {
  	fontSize: 18,
  	color: "gray",
  	positon: "relative",
  	left: screenwidth/4 + 47,
  	top:-80,
  	fontWeight: 'bold',
  	width: 100,
  },
  
   w: {
  	fontSize: 18,
  	color: "black",
  	positon: "relative",
  	left: screenwidth/4 + 90,
  	top:-105,
  	fontWeight: 'bold',
  	width: 10 +7 ,
  },
  
  here1: {
  	fontSize: 18,
  	color: "gray",
  	positon: "relative",
  	left: screenwidth/2 ,
  	top:-130,
  	fontWeight: 'bold',
  	width: 100,
  },
  
    u2: {
  	fontSize: 18,
  	color: "black",
  	positon: "relative",
  	left: screenwidth/2 + 40,
  	top:-155,
  	fontWeight: 'bold',
  	width: 10 + 3,
  },
  
   h: {
  	fontSize: 18,
  	color: "black",
  	positon: "relative",
  	left: screenwidth/2 +57,
  	top:-180,
  	fontWeight: 'bold',
  	width: 10 +5,
  },
  
   ave: {
  	fontSize: 18,
  	color: "gray",
  	positon: "relative",
  	left: screenwidth/2 +70,
  	top:-205,
  	fontWeight: 'bold',
  	width: 100,
  },
  
   to: {
  	fontSize: 18,
  	color: '#119d79',
  	positon: "relative",
  	left: screenwidth/2 - 30,
  	top:-200,
  	fontWeight: 'bold',
  	width: 20,
  },
  
  
  b: {
  	fontSize: 18,
  	color: "black",
  	positon: "relative",
  	left: screenwidth/6 + 10,
  	top:-190,
  	fontWeight: 'bold',
  	width: 10 + 4,
  },
  
  e: {
  	fontSize: 18,
  	color: "gray",
  	positon: "relative",
  	left: screenwidth/6 +20 ,
  	top:-215,
  	fontWeight: 'bold',
  	width: 20,
  },
  
  m: {
  	fontSize: 18,
  	color: "black",
  	positon: "relative",
  	left: screenwidth/6 + 35,
  	top:-240,
  	fontWeight: 'bold',
  	width: 10 +5,
  },
  
   ore: {
  	fontSize: 18,
  	color: "gray",
  	positon: "relative",
  	left: screenwidth/6  + 50,
  	top:-265,
  	fontWeight: 'bold',
  	width: 30,
  },
  
  f: {
  	fontSize: 18,
  	color: "black",
  	positon: "relative",
  	left: screenwidth/4 + 45,
  	top:-290,
  	fontWeight: 'bold',
  	width: 10 + 2,
  },
  
   ocused: {
  	fontSize: 18,
  	color: "gray",
  	positon: "relative",
  	left: screenwidth/4 + 55,
  	top:-315,
  	fontWeight: 'bold',
  	width: 100,
  },
  
  and: {
  	fontSize: 18,
  	color: "black",
  	positon: "relative",
  	left: screenwidth/2 +  15,
  	top:-340,
  	fontWeight: 'bold',
  	width: 10 + 2,
  },
  
 p: {
  	fontSize: 18,
  	color: "black",
  	positon: "relative",
  	left: screenwidth/2 + 30,
  	top:-365,
  	fontWeight: 'bold',
  	width: 20,
  },
  
  ractice: {
  	fontSize: 18,
  	color: "gray",
  	positon: "relative",
  	left: screenwidth/2 + 42,
  	top:-390,
  	fontWeight: 'bold',
  	width: 100,
  },
  
   fullstop2: {
  	fontSize: 18,
  	color: "black",
  	positon: "relative",
  	left: screenwidth/2 + 99,
  	top:-415,
  	fontWeight: 'bold',
  	width: 7,
  },
  
  //  complete design till text score  .


  speaking: {
  	fontSize: 18,
  	color: '#119d79',
  	positon: "relative",
  	left: 20,
  	top:-360,
  	fontWeight: 'bold',
  },
  
  speakingline: {
  	borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    height: 0,
    width: 250,
    position: 'relative',
    top: -370,
    left: 105,
  },
     
  container1: {
    padding: 10,
    backgroundColor: 'white',
    position: "relative",
    top:-355,
  },
  
  
  reading: {
  	fontSize: 18,
  	color: '#119d79',
  	positon: "relative",
  	left: 20,
  	top:-295,
  	fontWeight: 'bold',
  },
  
  readingline: {
  	borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    height: 0,
    width: 260,
    position: 'relative',
    top: -308,
    left: 95,
  },
  
  container2: {
    padding: 10,
    backgroundColor: 'white',
    position: "relative",
    top:-290,
  },
  
  listening: {
  	fontSize: 18,
  	color: '#119d79',
  	positon: "relative",
  	left: 20,
  	top:-235,
  	fontWeight: 'bold',
  },
  
  listeningline: {
  	borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    height: 0,
    width: 250,
    position: 'relative',
    top: -248,
    left: 105,
  },
  
  container3: {
    padding: 10,
    backgroundColor: 'white',
    position: "relative",
    top:-230,
    borderRadius: 10,
  },
  
  writing: {
  	fontSize: 18,
  	color: '#119d79',
  	positon: "relative",
  	left: 20,
  	top:-170,
  	fontWeight: 'bold',
  },
  
  writingline: {
  	borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    height: 0,
    width: 270,
    position: 'relative',
    top: -183,
    left: 90,
  },
  
  container4: {
    padding: 10,
    backgroundColor: 'white',
    position: "relative",
    top:-165,
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

   //  view v5 design end

});
