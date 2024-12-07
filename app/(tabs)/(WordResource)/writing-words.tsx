import { View, Text, StyleSheet , Button, ScrollView,Dimensions} from 'react-native';

const screenheight = Dimensions.get('window').height;
const screenwidth = Dimensions.get('window').width;

const writingWords = {
  task1: {
    adjectives: [
      'significant', 'dramatic', 'considerable', 'steady', 'sharp',
      'gradual', 'slight', 'remarkable', 'moderate', 'substantial',
      'frequent', 'minor', 'rapid', 'noticeable', 'consistent',
    ],
    adverbs: [
      'increasingly', 'steadily', 'dramatically', 'significantly', 'rapidly',
      'gradually', 'quickly', 'sharply', 'consistently', 'markedly',
      'occasionally', 'frequently', 'slightly', 'often', 'continuously',
    ],
    linkers: [
      'in addition', 'furthermore', 'moreover', 'however', 'on the other hand',
      'while', 'similarly', 'conversely', 'in contrast', 'therefore',
      'as a result', 'for instance', 'specifically', 'generally speaking',
      'to illustrate',
    ],
  },
  task2: {
    adjectives: [
      'important', 'beneficial', 'challenging', 'effective', 'essential',
      'relevant', 'controversial', 'traditional', 'innovative', 'practical',
      'harmful', 'effective', 'positive', 'negative', 'valuable',
    ],
    adverbs: [
      'undoubtedly', 'generally', 'particularly', 'effectively', 'essentially',
      'significantly', 'frequently', 'typically', 'often', 'certainly',
      'notably', 'alternatively', 'consequently', 'additionally', 'primarily',
    ],
    linkers: [
      'firstly', 'secondly', 'in conclusion', 'to summarize', 'overall',
      'despite this', 'in contrast', 'for example', 'on the contrary', 'thus',
      'in other words', 'as a result', 'more importantly', 'finally',
    ],
  },
};

export default function WritingWords(){
  return (
    <ScrollView>
    <View style={styles.freeStyleContainer}>
      <Text style={styles.title}>IELTS Writing Task Vocabulary</Text>
		<View style={styles.table}>
        	
        	<View style={styles.row}>
          		<Text style={styles.cell1}>Task 1</Text>
          		<Text style={styles.cell1}>Task 2</Text>
        	</View>
        	<View style={styles.row}>
          		<Text style={styles.cell2}>Adjectives</Text>
          		<Text style={styles.cell2}>Adjectives</Text>
        	</View>
        	<View style={styles.row}>
          		<Text style={styles.cell3}>
            	{writingWords.task1.adjectives.join(', ')}
          		</Text>
          		<Text style={styles.cell3}>
            	{writingWords.task2.adjectives.join(', ')}
          		</Text>
        	</View>
        	<View style={styles.row}>
          		<Text style={styles.cell2}>Adverbs</Text>
          		<Text style={styles.cell2}>Adverbs</Text>
        	</View>
        	<View style={styles.row}>
          		<Text style={styles.cell3}>
            	{writingWords.task1.adverbs.join(', ')}
          		</Text>
          		<Text style={styles.cell3}>
            	{writingWords.task2.adverbs.join(', ')}
          		</Text>
        	</View>
        	<View style={styles.row}>
          		<Text style={styles.cell2}>Linkers</Text>
          		<Text style={styles.cell2}>Linkers</Text>
        	</View>
        	<View style={styles.row}>
          		<Text style={styles.cell3}>
            	{writingWords.task1.linkers.join(', ')}
          		</Text>
          		<Text style={styles.cell3}>
            	{writingWords.task2.linkers.join(', ')}
          		</Text>
        	</View>
        	
      </View> 
    </View>
    <View style = {{height: 130,width: screenwidth,}}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  freeStyleContainer: {
    backgroundColor: "white",
  	borderColor: "black",
	borderRadius: 5,
    borderWidth: 3,
  	width: screenwidth - 50,
  	height: 1230,
    position: "relative",
    top: 15,
    left: screenwidth / 16,
    padding: 20,
  },
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    padding: 10,
  },
  
  cell1: {
    flex: 1,
    textAlign: 'center',
    fontSize: 22,
    color: "black",
    fontWeight: "bold",
  },
  
  cell2: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: '#119d79',
    fontWeight: "bold",
  },
  
  cell3: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
  },
});
