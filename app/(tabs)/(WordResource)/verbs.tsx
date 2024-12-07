import { View, Text, StyleSheet , Button, ScrollView,Dimensions} from 'react-native';

const screenheight = Dimensions.get('window').height;
const screenwidth = Dimensions.get('window').width;

const verbs = [
  { v1: 'go', v2: 'went', v3: 'gone' },
  { v1: 'do', v2: 'did', v3: 'done' },
  { v1: 'be', v2: 'was/were', v3: 'been' },
  { v1: 'have', v2: 'had', v3: 'had' },
  { v1: 'say', v2: 'said', v3: 'said' },
  { v1: 'make', v2: 'made', v3: 'made' },
  { v1: 'know', v2: 'knew', v3: 'known' },
  { v1: 'think', v2: 'thought', v3: 'thought' },
  { v1: 'take', v2: 'took', v3: 'taken' },
  { v1: 'see', v2: 'saw', v3: 'seen' },
  { v1: 'come', v2: 'came', v3: 'come' },
  { v1: 'want', v2: 'wanted', v3: 'wanted' },
  { v1: 'use', v2: 'used', v3: 'used' },
  { v1: 'find', v2: 'found', v3: 'found' },
  { v1: 'give', v2: 'gave', v3: 'given' },
  { v1: 'tell', v2: 'told', v3: 'told' },
  { v1: 'work', v2: 'worked', v3: 'worked' },
  { v1: 'call', v2: 'called', v3: 'called' },
  { v1: 'try', v2: 'tried', v3: 'tried' },
  { v1: 'ask', v2: 'asked', v3: 'asked' },
  { v1: 'need', v2: 'needed', v3: 'needed' },
  { v1: 'feel', v2: 'felt', v3: 'felt' },
  { v1: 'become', v2: 'became', v3: 'become' },
  { v1: 'leave', v2: 'left', v3: 'left' },
  { v1: 'put', v2: 'put', v3: 'put' },
  { v1: 'mean', v2: 'meant', v3: 'meant' },
  { v1: 'keep', v2: 'kept', v3: 'kept' },
  { v1: 'let', v2: 'let', v3: 'let' },
  { v1: 'begin', v2: 'began', v3: 'begun' },
  { v1: 'seem', v2: 'seemed', v3: 'seemed' },
  { v1: 'help', v2: 'helped', v3: 'helped' },
  { v1: 'talk', v2: 'talked', v3: 'talked' },
  { v1: 'turn', v2: 'turned', v3: 'turned' },
  { v1: 'start', v2: 'started', v3: 'started' },
  { v1: 'show', v2: 'showed', v3: 'shown' },
  { v1: 'hear', v2: 'heard', v3: 'heard' },
  { v1: 'play', v2: 'played', v3: 'played' },
  { v1: 'run', v2: 'ran', v3: 'run' },
  { v1: 'move', v2: 'moved', v3: 'moved' },
  { v1: 'like', v2: 'liked', v3: 'liked' },
  { v1: 'live', v2: 'lived', v3: 'lived' },
  { v1: 'believe', v2: 'believed', v3: 'believed' },
  { v1: 'hold', v2: 'held', v3: 'held' },
  { v1: 'bring', v2: 'brought', v3: 'brought' },
  { v1: 'happen', v2: 'happened', v3: 'happened' },
  { v1: 'write', v2: 'wrote', v3: 'written' },
  { v1: 'provide', v2: 'provided', v3: 'provided' },
  { v1: 'sit', v2: 'sat', v3: 'sat' },
  { v1: 'stand', v2: 'stood', v3: 'stood' },
  { v1: 'lose', v2: 'lost', v3: 'lost' },
  { v1: 'pay', v2: 'paid', v3: 'paid' },
  { v1: 'meet', v2: 'met', v3: 'met' },
  { v1: 'include', v2: 'included', v3: 'included' },
  { v1: 'continue', v2: 'continued', v3: 'continued' },
  { v1: 'set', v2: 'set', v3: 'set' },
  { v1: 'learn', v2: 'learned/learnt', v3: 'learned/learnt' },
  { v1: 'change', v2: 'changed', v3: 'changed' },
  { v1: 'lead', v2: 'led', v3: 'led' },
  { v1: 'understand', v2: 'understood', v3: 'understood' },
  { v1: 'watch', v2: 'watched', v3: 'watched' },
  { v1: 'follow', v2: 'followed', v3: 'followed' },
  { v1: 'stop', v2: 'stopped', v3: 'stopped' },
  { v1: 'create', v2: 'created', v3: 'created' },
  { v1: 'speak', v2: 'spoke', v3: 'spoken' },
  { v1: 'read', v2: 'read', v3: 'read' },
  { v1: 'allow', v2: 'allowed', v3: 'allowed' },
  { v1: 'add', v2: 'added', v3: 'added' },
  { v1: 'spend', v2: 'spent', v3: 'spent' },
  { v1: 'grow', v2: 'grew', v3: 'grown' },
  { v1: 'open', v2: 'opened', v3: 'opened' },
  { v1: 'walk', v2: 'walked', v3: 'walked' },
  { v1: 'win', v2: 'won', v3: 'won' },
  { v1: 'offer', v2: 'offered', v3: 'offered' },
  { v1: 'remember', v2: 'remembered', v3: 'remembered' },
  { v1: 'consider', v2: 'considered', v3: 'considered' },
  { v1: 'appear', v2: 'appeared', v3: 'appeared' },
  { v1: 'buy', v2: 'bought', v3: 'bought' },
  { v1: 'serve', v2: 'served', v3: 'served' },
  { v1: 'die', v2: 'died', v3: 'died' },
  { v1: 'send', v2: 'sent', v3: 'sent' },
  { v1: 'expect', v2: 'expected', v3: 'expected' },
  { v1: 'build', v2: 'built', v3: 'built' },
  { v1: 'stay', v2: 'stayed', v3: 'stayed' },
  { v1: 'fall', v2: 'fell', v3: 'fallen' },
  { v1: 'cut', v2: 'cut', v3: 'cut' },
  { v1: 'reach', v2: 'reached', v3: 'reached' },
  { v1: 'kill', v2: 'killed', v3: 'killed' },
  { v1: 'remain', v2: 'remained', v3: 'remained' },
  { v1: 'suggest', v2: 'suggested', v3: 'suggested' },
  { v1: 'raise', v2: 'raised', v3: 'raised' },
  { v1: 'pass', v2: 'passed', v3: 'passed' },
  { v1: 'sell', v2: 'sold', v3: 'sold' },
  { v1: 'require', v2: 'required', v3: 'required' },
  { v1: 'report', v2: 'reported', v3: 'reported' },
  { v1: 'decide', v2: 'decided', v3: 'decided' },
  { v1: 'pull', v2: 'pulled', v3: 'pulled' },
  { v1: 'break', v2: 'broke', v3: 'broken' },
  { v1: 'receive', v2: 'received', v3: 'received' },
  { v1: 'agree', v2: 'agreed', v3: 'agreed' },
  { v1: 'support', v2: 'supported', v3: 'supported' },
  { v1: 'hit', v2: 'hit', v3: 'hit' },
  { v1: 'produce', v2: 'produced', v3: 'produced' },
  { v1: 'eat', v2: 'ate', v3: 'eaten' },
  { v1: 'cover', v2: 'covered', v3: 'covered' },
  { v1: 'catch', v2: 'caught', v3: 'caught' },
  { v1: 'draw', v2: 'drew', v3: 'drawn' },
  { v1: 'choose', v2: 'chose', v3: 'chosen' },
  { v1: 'exist', v2: 'existed', v3: 'existed' },
  { v1: 'enable', v2: 'enabled', v3: 'enabled' },
  { v1: 'return', v2: 'returned', v3: 'returned' },
  { v1: 'create', v2: 'created', v3: 'created' },
  { v1: 'involve', v2: 'involved', v3: 'involved' },
  { v1: 'love', v2: 'loved', v3: 'loved' },
  { v1: 'consider', v2: 'considered', v3: 'considered' },
  { v1: 'discuss', v2: 'discussed', v3: 'discussed' },
  { v1: 'apply', v2: 'applied', v3: 'applied' },
  { v1: 'maintain', v2: 'maintained', v3: 'maintained' },
  { v1: 'accept', v2: 'accepted', v3: 'accepted' },
  { v1: 'determine', v2: 'determined', v3: 'determined' },
  { v1: 'manage', v2: 'managed', v3: 'managed' },
];

export default function Verbs() {
  return (
    <ScrollView>
    <View style = {styles.freeStyleContainer}>
    	<Text style={styles.title}>Vocabulary</Text>
    	 <View style={styles.row}>
            <Text style={{color: "black",fontSize: 22,fontWeight: "bold",}}>V1</Text>
            <Text style={{color: "black",fontSize: 22,fontWeight: "bold",}}>V2</Text>
            <Text style={{color: "black",fontSize: 22,fontWeight: "bold",}}>V3</Text>
          </View>
    	{verbs.map((verb, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.verb}>{verb.v1}</Text>
            <Text style={styles.verb}>{verb.v2}</Text>
            <Text style={styles.verb}>{verb.v3}</Text>
          </View>
        ))}
    </View>
    	<View style = {{height: 150,width: screenwidth,}}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
   freeStyleContainer: {
  	backgroundColor: "white",
  	borderColor: "black",
	borderRadius: 5,
    borderWidth: 3,
  	width: screenwidth - 50,
  	height: 5650,
    position: "relative",
    top: 20,
    left: screenwidth / 16,
    padding: 20,
  },
  
   title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#119d79',
  },
  
   row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black', // Light gray for row separation
  },
  
  verb: {
    fontSize: 18,
    color: '#119d79',
    fontWeight: 'bold',
    textAlign: 'justify',
    // Additional text styling if needed
  },
  
  
});
