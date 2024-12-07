import { View, Text, StyleSheet ,ScrollView,Dimensions ,TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

const screenheight = Dimensions.get('window').height;
const screenwidth = Dimensions.get('window').width;

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


export default function Grammar() {
	
	const [expandedIndex, setExpandedIndex] = useState(null);

  	const handlePress = (index) => {
    	setExpandedIndex(expandedIndex === index ? null : index);
  	};

  return (
   <ScrollView>
   
	<View style = {styles.freeview}></View>
	
     <View style={styles.v5}>
     
    	<Text style = {styles.grammar}>Grammar</Text>
    	<Text style = {styles.here}>Here! U can learn basic to advance Grammar.</Text>
    	
    	<Text style = {styles.i}>I</Text>
    	<Text style = {styles.mprove}>mprove</Text>
    	<Text style = {styles.y1}>Y</Text>
    	<Text style = {styles.our}>our</Text>
    	<Text style = {styles.f}>F</Text>
    	<Text style = {styles.oundation}>oundation</Text>
    	<Text style = {styles.fullstop1}>.</Text>
    	<Text style = {styles.to}>to</Text>
    	<Text style = {styles.a}>A</Text>
    	<Text style = {styles.chieve}>chieve</Text>
    	<Text style = {styles.y2}>Y</Text>
    	<Text style = {styles.our2}>our</Text>
    	<Text style = {styles.d}>D</Text>
    	<Text style = {styles.esire}>esire</Text>
    	<Text style = {styles.s}>S</Text>
    	<Text style = {styles.core}>core</Text>
    	<Text style = {styles.fullstop2}>.</Text>
	
		<View style = {styles.week1}>
			<Text style = {styles.week1text}>Week 1</Text>
		</View>
		
		<Text style = {styles.nouns}>Noun</Text>
		<View style = {styles.nounsline}></View>
    
    	<View style={styles.container1}>
      		<ExpandableView
        		isExpanded={expandedIndex === 0}
        		onPress={() => handlePress(0)}
        		question="What is it?"
        		answer="Nouns are words that name a person, place, thing, or idea. They are essential for constructing sentences as they identify the subject or object. "
        		backgroundColor={expandedIndex === 0 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 1}
        		onPress={() => handlePress(1)}
        		question="Where to use it?"
        		answer="Nouns can be used anywhere in a sentence where a subject or object is needed. "
        		backgroundColor={expandedIndex === 1 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 2}
        		onPress={() => handlePress(2)}
        		question="Example:"
        		answer="The cat sat on the mat."
        		backgroundColor={expandedIndex === 2 ? '#119d79' : 'white'}
      		/>
    	</View>
    	
    	<Text style = {styles.pronouns}>Pronouns</Text>
		<View style = {styles.pronounsline}></View>
		
		<View style={styles.container2}>
			<ExpandableView
        		isExpanded={expandedIndex === 3}
        		onPress={() => handlePress(3)}
        		question="What is it?"
        		answer="Pronouns are words that take the place of nouns to avoid repetition. They help make sentences smoother and less cumbersome."
        		backgroundColor={expandedIndex === 3 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 4}
        		onPress={() => handlePress(4)}
        		question="Where to use it?"
        		answer="Pronouns can replace nouns already mentioned to maintain clarity and fluidity."
        		backgroundColor={expandedIndex === 4 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 5}
        		onPress={() => handlePress(5)}
        		question="Example:"
        		answer="He loves playing basketball because it is fun."
        		backgroundColor={expandedIndex === 5 ? '#119d79' : 'white'}
      		/>
    	</View>
		
    	<Text style = {styles.verbs}>Verbs</Text>
		<View style = {styles.verbsline}></View>
		
		<View style={styles.container3}>
			<ExpandableView
        		isExpanded={expandedIndex === 6}
        		onPress={() => handlePress(6)}
        		question="What is it?"
        		answer="Verbs are action words that express what the subject does or its state of being. They are crucial for indicating actions or conditions."
        		backgroundColor={expandedIndex === 6 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 7}
        		onPress={() => handlePress(7)}
        		question="Where to use it?"
        		answer="Verbs are used in every sentence to describe actions or states of existence."
        		backgroundColor={expandedIndex === 7 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 8}
        		onPress={() => handlePress(8)}
        		question="Example:"
        		answer="She writes in her journal every night."
        		backgroundColor={expandedIndex === 8 ? '#119d79' : 'white'}
      		/>
    	</View>
    	
    	<Text style = {styles.adjectives}>Adjectives</Text>
		<View style = {styles.adjectivesline}></View>
		
		<View style={styles.container4}>
			<ExpandableView
        		isExpanded={expandedIndex === 9}
        		onPress={() => handlePress(9)}
        		question="What is it?"
        		answer="Adjectives are words that describe or modify nouns, providing more detail about the noun's attributes. They enhance the clarity of the sentence."
        		backgroundColor={expandedIndex === 9 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 10}
        		onPress={() => handlePress(10)}
        		question="Where to use it?"
        		answer="Adjectives are typically placed before the noun or after a linking verb."
        		backgroundColor={expandedIndex === 10 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 11}
        		onPress={() => handlePress(11)}
        		question="Example:"
        		answer="The beautiful garden is full of colorful flowers."
        		backgroundColor={expandedIndex === 11 ? '#119d79' : 'white'}
      		/>
    	</View>
    	
    	<Text style = {styles.adverbs}>Adverbs</Text>
		<View style = {styles.adverbsline}></View>
		
		<View style={styles.container5}>
			<ExpandableView
        		isExpanded={expandedIndex === 12}
        		onPress={() => handlePress(12)}
        		question="What is it?"
        		answer="Adverbs modify verbs, adjectives, or other adverbs, giving more information about how, when, or where something happens. They add depth to actions or qualities."
        		backgroundColor={expandedIndex === 12 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 13}
        		onPress={() => handlePress(13)}
        		question="Where to use it?"
        		answer=" Adverbs can be placed before or after the word they modify."
        		backgroundColor={expandedIndex === 13 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 14}
        		onPress={() => handlePress(14)}
        		question="Example:"
        		answer="She runs quickly to catch the bus."
        		backgroundColor={expandedIndex === 14 ? '#119d79' : 'white'}
      		/>
    	</View>
    	
    	<Text style = {styles.prepositions}>Prepositions</Text>
		<View style = {styles.prepositionsline}></View>
		
		<View style={styles.container6}>
			<ExpandableView
        		isExpanded={expandedIndex === 15}
        		onPress={() => handlePress(15)}
        		question="What is it?"
        		answer="Adverbs modify verbs, adjectives, or other adverbs, giving more information about how, when, or where something happens. They add depth to actions or qualities."
        		backgroundColor={expandedIndex === 15 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 16}
        		onPress={() => handlePress(16)}
        		question="Where to use it?"
        		answer=" Adverbs can be placed before or after the word they modify."
        		backgroundColor={expandedIndex === 16 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 17}
        		onPress={() => handlePress(17)}
        		question="Example:"
        		answer="She runs quickly to catch the bus."
        		backgroundColor={expandedIndex === 17 ? '#119d79' : 'white'}
      		/>
    	</View>
    	
    	<View style = {styles.week2}>
			<Text style = {styles.week2text}>Week 2</Text>
		</View>
    	
    	<Text style = {styles.conjunctions}>Conjunctions</Text>
		<View style = {styles.conjunctionsline}></View>
		
		<View style={styles.container7}>
			<ExpandableView
        		isExpanded={expandedIndex === 18}
        		onPress={() => handlePress(18)}
        		question="What is it?"
        		answer="Conjunctions are words that connect clauses, sentences, or words. They help combine ideas and make writing more cohesive."
        		backgroundColor={expandedIndex === 18 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 19}
        		onPress={() => handlePress(19)}
        		question="Where to use it?"
        		answer="Conjunctions can be used to join words, phrases, or complete sentences."
        		backgroundColor={expandedIndex === 19 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 20}
        		onPress={() => handlePress(20)}
        		question="Example:"
        		answer= "I wanted to go for a walk, but it started raining."
        		backgroundColor={expandedIndex === 20 ? '#119d79' : 'white'}
      		/>
    	</View>
    	
    	<Text style = {styles.interjections}>Interjections</Text>
		<View style = {styles.interjectionsline}></View>
		
		<View style={styles.container8}>
			<ExpandableView
        		isExpanded={expandedIndex === 21}
        		onPress={() => handlePress(21)}
        		question="What is it?"
        		answer="Interjections are words or phrases that express strong emotions or sudden feelings. They often stand alone and convey excitement or surprise."
        		backgroundColor={expandedIndex === 21 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 22}
        		onPress={() => handlePress(22)}
        		question="Where to use it?"
        		answer="Interjections are used to express feelings and can be found at the beginning of a sentence."
        		backgroundColor={expandedIndex === 22 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 23}
        		onPress={() => handlePress(23)}
        		question="Example:"
        		answer= "Wow! That’s incredible!"
        		backgroundColor={expandedIndex === 23 ? '#119d79' : 'white'}
      		/>
    	</View>
    	
    	<Text style = {styles.articles}>Articles</Text>
		<View style = {styles.articlesline}></View>
		
		<View style={styles.container9}>
			<ExpandableView
        		isExpanded={expandedIndex === 24}
        		onPress={() => handlePress(24)}
        		question="What is it?"
        		answer="Articles are words that define a noun as specific or unspecific. They help clarify whether we are talking about something general or specific."
        		backgroundColor={expandedIndex === 24 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 25}
        		onPress={() => handlePress(25)}
        		question="Where to use it?"
        		answer="Articles are used before nouns."
        		backgroundColor={expandedIndex === 25 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 26}
        		onPress={() => handlePress(26)}
        		question="Example:"
        		answer= "A cat chased the mouse across the yard."
        		backgroundColor={expandedIndex === 26 ? '#119d79' : 'white'}
      		/>
    	</View>
    	
    	<Text style = {styles.tenses}>Tenses</Text>
		<View style = {styles.tensesline}></View>
		
		<View style={styles.container10}>
			<ExpandableView
        		isExpanded={expandedIndex === 27}
        		onPress={() => handlePress(27)}
        		question="What is it?"
        		answer="Tenses indicate the time of action in a sentence (past, present, future). They help convey when an action occurs."
        		backgroundColor={expandedIndex === 27 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 28}
        		onPress={() => handlePress(28)}
        		question="Where to use it?"
        		answer="Tenses are essential in verbs to provide a timeline for actions."
        		backgroundColor={expandedIndex === 28 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 29}
        		onPress={() => handlePress(29)}
        		question="Example:"
        		answer= "I visited my grandparents last week. (past)"
        		backgroundColor={expandedIndex === 29 ? '#119d79' : 'white'}
      		/>
    	</View>
    	
    	<Text style = {styles.subject}>Subject-Verb Agreement</Text>
		<View style = {styles.subjectline}></View>
		
		<View style={styles.container11}>
			<ExpandableView
        		isExpanded={expandedIndex === 30}
        		onPress={() => handlePress(30)}
        		question="What is it?"
        		answer="Subject-verb agreement means that subjects and verbs must agree in number (singular or plural). This ensures grammatical correctness in sentences."
        		backgroundColor={expandedIndex === 30 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 31}
        		onPress={() => handlePress(31)}
        		question="Where to use it?"
        		answer="This rule applies to all sentences involving a subject and a verb."
        		backgroundColor={expandedIndex === 31? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 32}
        		onPress={() => handlePress(32)}
        		question="Example:"
        		answer= "The dog barks loudly. (singular) vs. The dogs bark loudly. (plural)"
        		backgroundColor={expandedIndex === 32 ? '#119d79' : 'white'}
      		/>
    	</View>
    	
    	<Text style = {styles.passive}>Passive Voice</Text>
		<View style = {styles.passiveline}></View>
		
		<View style={styles.container12}>
			<ExpandableView
        		isExpanded={expandedIndex === 33}
        		onPress={() => handlePress(33)}
        		question="What is it?"
        		answer="In passive voice constructions, the subject receives the action rather than performing it. This can shift the focus from the doer to the action itself."
        		backgroundColor={expandedIndex === 33 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 34}
        		onPress={() => handlePress(34)}
        		question="Where to use it?"
        		answer="Use passive voice when the doer is unknown or when the action is more important than the doer."
        		backgroundColor={expandedIndex === 34 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 35}
        		onPress={() => handlePress(35)}
        		question="Example:"
        		answer= "The cake was baked by my mom."
        		backgroundColor={expandedIndex === 35 ? '#119d79' : 'white'}
      		/>
    	</View>
    	
    	<View style = {styles.week3}>
			<Text style = {styles.week3text}>Week 3</Text>
		</View>
		
		<Text style = {styles.direct}>Direct and Indirect Speech</Text>
		<View style = {styles.directline}></View>
		
		<View style={styles.container13}>
			<ExpandableView
        		isExpanded={expandedIndex === 36}
        		onPress={() => handlePress(36)}
        		question="What is it?"
        		answer="Direct speech quotes someone's exact words, while indirect speech paraphrases them. This helps convey information in different ways."
        		backgroundColor={expandedIndex === 36 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 37}
        		onPress={() => handlePress(37)}
        		question="Where to use it?"
        		answer=" Use direct speech for quotes and indirect speech for summarizing or reporting what someone said."
        		backgroundColor={expandedIndex === 37 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 38}
        		onPress={() => handlePress(38)}
        		question="Example:"
        		answer=  "Direct: She said, I am tired. Indirect: She said that she was tired."
        		backgroundColor={expandedIndex === 38 ? '#119d79' : 'white'}
      		/>
    	</View>
    	
    	<Text style = {styles.conditionals}>Conditionals</Text>
		<View style = {styles.conditionalsline}></View>
		
		<View style={styles.container14}>
			<ExpandableView
        		isExpanded={expandedIndex === 39}
        		onPress={() => handlePress(39)}
        		question="What is it?"
        		answer="Conditionals express a condition and its possible outcome, often beginning with if. They are used to discuss hypothetical situations and their results."
        		backgroundColor={expandedIndex === 39 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 40}
        		onPress={() => handlePress(40)}
        		question="Where to use it?"
        		answer="Use conditionals to explore potential scenarios and consequences."
        		backgroundColor={expandedIndex === 40 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 41}
        		onPress={() => handlePress(41)}
        		question="Example:"
        		answer=  "If it rains, we will stay indoors."
        		backgroundColor={expandedIndex === 41 ? '#119d79' : 'white'}
      		/>
    	</View>
    	
    	<Text style = {styles.gerunds}>Gerunds</Text>
		<View style = {styles.gerundsline}></View>
		
		<View style={styles.container15}>
			<ExpandableView
        		isExpanded={expandedIndex === 42}
        		onPress={() => handlePress(42)}
        		question="What is it?"
        		answer=" Gerunds are verbs ending in -ing that function as nouns. They allow actions to be treated as objects."
        		backgroundColor={expandedIndex === 42 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 43}
        		onPress={() => handlePress(43)}
        		question="Where to use it?"
        		answer="Use gerunds as subjects, objects, or complements in a sentence."
        		backgroundColor={expandedIndex === 43 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 44}
        		onPress={() => handlePress(44)}
        		question="Example:"
        		answer=  "Reading is my favorite hobby."
        		backgroundColor={expandedIndex === 44 ? '#119d79' : 'white'}
      		/>
    	</View>
    	
    	<Text style = {styles.infinitives}>Infinitives</Text>
		<View style = {styles.infinitivesline}></View>
		
		<View style={styles.container16}>
			<ExpandableView
        		isExpanded={expandedIndex === 45}
        		onPress={() => handlePress(45)}
        		question="What is it?"
        		answer= "Infinitives are the base form of a verb, usually preceded by to.They can act as nouns, adjectives, or adverbs."
        		backgroundColor={expandedIndex === 45 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 46}
        		onPress={() => handlePress(46)}
        		question="Where to use it?"
        		answer="Use infinitives to express purpose or intent."
        		backgroundColor={expandedIndex === 46 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 47}
        		onPress={() => handlePress(47)}
        		question="Example:"
        		answer=  "I like to swim in the ocean."
        		backgroundColor={expandedIndex === 47 ? '#119d79' : 'white'}
      		/>
    	</View>
    	
    	<Text style = {styles.phrasal}>Phrasal Verbs</Text>
		<View style = {styles.phrasalline}></View>
		
		<View style={styles.container17}>
			<ExpandableView
        		isExpanded={expandedIndex === 48}
        		onPress={() => handlePress(48)}
        		question="What is it?"
        		answer= "Phrasal verbs are combinations of verbs with prepositions or adverbs that create new meanings. They are common in informal language."
        		backgroundColor={expandedIndex === 48? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 49}
        		onPress={() => handlePress(49)}
        		question="Where to use it?"
        		answer= "Use phrasal verbs in everyday conversation to express actions or states."
        		backgroundColor={expandedIndex === 49 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 50}
        		onPress={() => handlePress(50)}
        		question="Example:"
        		answer=  "She gave up trying to fix the car."
        		backgroundColor={expandedIndex === 50 ? '#119d79' : 'white'}
      		/>
    	</View>
    	
    	<Text style = {styles.relative}>Relative Clauses</Text>
		<View style = {styles.relativeline}></View>
		
		<View style={styles.container18}>
			<ExpandableView
        		isExpanded={expandedIndex === 51}
        		onPress={() => handlePress(51)}
        		question="What is it?"
        		answer= " Relative clauses provide additional information about a noun. They often begin with relative pronouns like who, that, or which."
        		backgroundColor={expandedIndex === 51? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 52}
        		onPress={() => handlePress(52)}
        		question="Where to use it?"
        		answer= "Use relative clauses to add detail or clarify meaning in a sentence."
        		backgroundColor={expandedIndex === 52 ? '#119d79' : 'white'}
      		/>
      		<ExpandableView
        		isExpanded={expandedIndex === 53}
        		onPress={() => handlePress(53)}
        		question="Example:"
        		answer=   "The book that I borrowed is fascinating."
        		backgroundColor={expandedIndex === 53 ? '#119d79' : 'white'}
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
  	backgroundColor:"white",
  },
  
  week1:
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
	top:  -300,
  },
  
  week1text:{
  	color: "white",
  	fontSize: 20,
  },
  
   week2:
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
	top:  -240,
  },
  
  week2text:{
  	color: "white",
  	fontSize: 20,
  },
  
  
  week3:
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
	top:  -180,
  },
  
  week3text:{
  	color: "white",
  	fontSize: 20,
  },
    //  view v5 design start
  v5: {
  	width: 385,
  	height:4660,
  	backgroundColor: 'white',
  	borderColor: "black",
    borderWidth: 4,
    borderRadius: 50,
    position: 'relative',
    left: 20,
    top:-90,
    overflow: "hidden",
  },     
  
  grammar: {
  	width: 200,
  	fontSize: 40,
  	color: '#119d79',
  	positon: "relative",
  	left: screenwidth/4 ,
  	top:20,
  	fontWeight: 'bold',
  },
  
  here: {
  	fontSize: 16,
  	color: "black",
  	positon: "relative",
  	left: screenwidth/16,
  	top:20,
  	fontWeight: 'bold',
  },
  
   i: {
  	fontSize: 18,
  	color: "black",
  	positon: "relative",
  	left: screenwidth/6 + 20,
  	top:20,
  	fontWeight: 'bold',
  	width: 10,
  },
  
   mprove: {
  	fontSize: 18,
  	color: "gray",
  	positon: "relative",
  	left: screenwidth/6 + 25,
  	top:-5,
  	fontWeight: 'bold',
  	width: 70,
  },
  
  y1: {
  	fontSize: 18,
  	color: "black",
  	positon: "relative",
  	left: screenwidth/6 + 90,
  	top:-30,
  	fontWeight: 'bold',
  	width: 10+2,
  },
  
   our: {
  	fontSize: 18,
  	color: "gray",
  	positon: "relative",
  	left: screenwidth/6 + 99,
  	top:-55,
  	fontWeight: 'bold',
  	width: 30,
  },
  
  f: {
  	fontSize: 18,
  	color: "black",
  	positon: "relative",
  	left: screenwidth/4 + 95,
  	top:-80,
  	fontWeight: 'bold',
  	width: 10 + 2,
  },
  
   oundation: {
  	fontSize: 18,
  	color: "gray",
  	positon: "relative",
  	left: screenwidth/4 + 104,
  	top:-105,
  	fontWeight: 'bold',
  	width: 85,
  },
  
  fullstop1: {
  	fontSize: 18,
  	color: "black",
  	positon: "relative",
  	left: screenwidth/2 +80,
  	top:-130,
  	fontWeight: 'bold',
  	width: 10,
  },
  
   to: {
  	fontSize: 18,
  	color: '#119d79',
  	positon: "relative",
  	left: screenwidth/2 - 30,
  	top:-130,
  	fontWeight: 'bold',
  	width: 20,
  },
  
  
  a: {
  	fontSize: 18,
  	color: "black",
  	positon: "relative",
  	left: screenwidth/6 + 10,
  	top:-120,
  	fontWeight: 'bold',
  	width: 10 + 4,
  },
  
  chieve: {
  	fontSize: 18,
  	color: "gray",
  	positon: "relative",
  	left: screenwidth/6 +22 ,
  	top:-145,
  	fontWeight: 'bold',
  	width: 60,
  },
  
  y2: {
  	fontSize: 18,
  	color: "black",
  	positon: "relative",
  	left: screenwidth/6 + 80,
  	top:-170,
  	fontWeight: 'bold',
  	width: 10 +2,
  },
  
   our2: {
  	fontSize: 18,
  	color: "gray",
  	positon: "relative",
  	left: screenwidth/6 + 89,
  	top:-195,
  	fontWeight: 'bold',
  	width: 30,
  },
  
  d: {
  	fontSize: 18,
  	color: "black",
  	positon: "relative",
  	left: screenwidth/4 + 85,
  	top:-220,
  	fontWeight: 'bold',
  	width: 10 + 2,
  },
  
   esire: {
  	fontSize: 18,
  	color: "gray",
  	positon: "relative",
  	left: screenwidth/4 + 96.5,
  	top:-245,
  	fontWeight: 'bold',
  	width: 45,
  },
  
  s: {
  	fontSize: 18,
  	color: "black",
  	positon: "relative",
  	left: screenwidth/2 + 36.5,
  	top:-270,
  	fontWeight: 'bold',
  	width: 10 + 2,
  },
  
 core: {
  	fontSize: 18,
  	color: "gray",
  	positon: "relative",
  	left: screenwidth/2 + 47.5,
  	top:-296,
  	fontWeight: 'bold',
  	width: 40,
  },
  
   fullstop2: {
  	fontSize: 18,
  	color: "black",
  	positon: "relative",
  	left: screenwidth/2 +85,
  	top:-321.7,
  	fontWeight: 'bold',
  	width: 7,
  },
  
  //  complete design till text score  .


  nouns: {
  	fontSize: 22,
  	color: '#119d79',
  	positon: "relative",
  	left: 20,
  	top:-270,
  	fontWeight: 'bold',
  },
  
  nounsline: {
  	borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    height: 0,
    width: 270,
    position: 'relative',
    top: -286,
    left: 85,
  },
     
  container1: {
    padding: 10,
    backgroundColor: 'white',
    position: "relative",
    top:-275,
  },
  
  
  pronouns: {
  	fontSize: 18,
  	color: '#119d79',
  	positon: "relative",
  	left: 20,
  	top:-270,
  	fontWeight: 'bold',
  },
  
  pronounsline: {
  	borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    height: 0,
    width: 250,
    position: 'relative',
    top: -283,
    left: 105,
  },
  
  container2: {
    padding: 10,
    backgroundColor: 'white',
    position: "relative",
    top:-270,
  },
  
  verbs: {
  	fontSize: 18,
  	color: '#119d79',
  	positon: "relative",
  	left: 20,
  	top:-265,
  	fontWeight: 'bold',
  },
  
  verbsline: {
  	borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    height: 0,
    width: 280,
    position: 'relative',
    top: -278,
    left: 75,
  },
  
  container3: {
    padding: 10,
    backgroundColor: 'white',
    position: "relative",
    top:-265,
    borderRadius: 10,
  },
  
  adjectives: {
  	fontSize: 18,
  	color: '#119d79',
  	positon: "relative",
  	left: 20,
  	top:-265,
  	fontWeight: 'bold',
  },
  
  adjectivesline: {
  	borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    height: 0,
    width: 240,
    position: 'relative',
    top: -278,
    left: 115,
  },
  
  container4: {
    padding: 10,
    backgroundColor: 'white',
    position: "relative",
    top:-265,
    borderRadius: 10,
  },
  
  adverbs: {
  	fontSize: 18,
  	color: '#119d79',
  	positon: "relative",
  	left: 20,
  	top:-265,
  	fontWeight: 'bold',
  },
  
  adverbsline: {
  	borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    height: 0,
    width: 260,
    position: 'relative',
    top: -278,
    left: 95,
  },
  
  container5: {
    padding: 10,
    backgroundColor: 'white',
    position: "relative",
    top:-265,
    borderRadius: 10,
  },
  
  prepositions: {
  	fontSize: 18,
  	color: '#119d79',
  	positon: "relative",
  	left: 20,
  	top:-265,
  	fontWeight: 'bold',
  },
  
 prepositionsline: {
  	borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    height: 0,
    width: 220,
    position: 'relative',
    top: -278,
    left: 135,
  },
  
  container6: {
    padding: 10,
    backgroundColor: 'white',
    position: "relative",
    top:-265,
    borderRadius: 10,
  },
  
  
   conjunctions: {
  	fontSize: 18,
  	color: '#119d79',
  	positon: "relative",
  	left: 20,
  	top:-205,
  	fontWeight: 'bold',
  },
  
 conjunctionsline: {
  	borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    height: 0,
    width: 220,
    position: 'relative',
    top: -218,
    left: 135,
  },
  
  container7: {
    padding: 10,
    backgroundColor: 'white',
    position: "relative",
    top:-205,
    borderRadius: 10,
  },
  
   interjections: {
  	fontSize: 18,
  	color: '#119d79',
  	positon: "relative",
  	left: 20,
  	top:-205,
  	fontWeight: 'bold',
  },
  
  interjectionsline: {
  	borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    height: 0,
    width: 220,
    position: 'relative',
    top: -218,
    left: 135,
  },
  
  container8: {
    padding: 10,
    backgroundColor: 'white',
    position: "relative",
    top:-205,
    borderRadius: 10,
  },
  
  
  articles: {
  	fontSize: 18,
  	color: '#119d79',
  	positon: "relative",
  	left: 20,
  	top:-205,
  	fontWeight: 'bold',
  },
  
  articlesline: {
  	borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    height: 0,
    width: 260,
    position: 'relative',
    top: -218,
    left: 95,
  },
  
  container9: {
    padding: 10,
    backgroundColor: 'white',
    position: "relative",
    top:-205,
    borderRadius: 10,
  },
  
  tenses: {
  	fontSize: 18,
  	color: '#119d79',
  	positon: "relative",
  	left: 20,
  	top:-205,
  	fontWeight: 'bold',
  },
  
  tensesline: {
  	borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    height: 0,
    width: 260,
    position: 'relative',
    top: -218,
    left: 95,
  },
  
  container10: {
    padding: 10,
    backgroundColor: 'white',
    position: "relative",
    top:-205,
    borderRadius: 10,
  },
  
   subject: {
  	fontSize: 18,
  	color: '#119d79',
  	positon: "relative",
  	left: 20,
  	top:-205,
  	fontWeight: 'bold',
  },
  
  subjectline: {
  	borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    height: 0,
    width: 120,
    position: 'relative',
    top: -218,
    left: 235,
  },
  
  container11: {
    padding: 10,
    backgroundColor: 'white',
    position: "relative",
    top:-205,
    borderRadius: 10,
  },
  
  passive: {
  	fontSize: 18,
  	color: '#119d79',
  	positon: "relative",
  	left: 20,
  	top:-205,
  	fontWeight: 'bold',
  },
  
  passiveline: {
  	borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    height: 0,
    width: 210,
    position: 'relative',
    top: -218,
    left: 145,
  },
  
  container12: {
    padding: 10,
    backgroundColor: 'white',
    position: "relative",
    top:-205,
    borderRadius: 10,
  },
  
  
  direct: {
  	fontSize: 18,
  	color: '#119d79',
  	positon: "relative",
  	left: 20,
  	top:-145,
  	fontWeight: 'bold',
  },
  
  directline: {
  	borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    height: 0,
    width: 110,
    position: 'relative',
    top: -158,
    left: 245,
  },
  
  container13: {
    padding: 10,
    backgroundColor: 'white',
    position: "relative",
    top:-145,
    borderRadius: 10,
  },
  
    conditionals: {
  	fontSize: 18,
  	color: '#119d79',
  	positon: "relative",
  	left: 20,
  	top:-145,
  	fontWeight: 'bold',
  },
  
  conditionalsline: {
  	borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    height: 0,
    width: 220,
    position: 'relative',
    top: -158,
    left: 135,
  },
  
  container14: {
    padding: 10,
    backgroundColor: 'white',
    position: "relative",
    top:-145,
    borderRadius: 10,
  },
  
  gerunds: {
  	fontSize: 18,
  	color: '#119d79',
  	positon: "relative",
  	left: 20,
  	top:-145,
  	fontWeight: 'bold',
  },
  
  gerundsline: {
  	borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    height: 0,
    width: 255,
    position: 'relative',
    top: -158,
    left: 100,
  },
  
  container15: {
    padding: 10,
    backgroundColor: 'white',
    position: "relative",
    top:-145,
    borderRadius: 10,
  },
  
    infinitives: {
  	fontSize: 18,
  	color: '#119d79',
  	positon: "relative",
  	left: 20,
  	top:-145,
  	fontWeight: 'bold',
  },
  
  infinitivesline: {
  	borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    height: 0,
    width: 240,
    position: 'relative',
    top: -158,
    left: 115,
  },
  
  container16: {
    padding: 10,
    backgroundColor: 'white',
    position: "relative",
    top:-145,
    borderRadius: 10,
  },
  
   phrasal : {
  	fontSize: 18,
  	color: '#119d79',
  	positon: "relative",
  	left: 20,
  	top:-145,
  	fontWeight: 'bold',
  },
  
   phrasalline: {
  	borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    height: 0,
    width: 210,
    position: 'relative',
    top: -158,
    left: 145,
  },
  
  container17: {
    padding: 10,
    backgroundColor: 'white',
    position: "relative",
    top:-145,
    borderRadius: 10,
  },
  
  
   relative: {
  	fontSize: 18,
  	color: '#119d79',
  	positon: "relative",
  	left: 20,
  	top:-145,
  	fontWeight: 'bold',
  },
  
   relativeline: {
  	borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    height: 0,
    width: 185,
    position: 'relative',
    top: -158,
    left: 170,
  },
  
  container18: {
    padding: 10,
    backgroundColor: 'white',
    position: "relative",
    top:-145,
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
