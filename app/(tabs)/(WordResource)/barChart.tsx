import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function BarChart() {
  return (
    <ScrollView>
      <View style={styles.freeStyleContainer}>
        <Text style={styles.title}>Bar Chart Analysis</Text>
        <Text style={styles.question}>Q.1: Analyze the following bar chart.</Text>
        
         <Image
          source={require('../../../assets/images/barchart.png')}// Replace with your image URL or local path
          style={styles.image}
          resizeMode="contain" // Adjusts the image to fit within the defined dimensions
        />
        
        <Text style={styles.answer}>
          The bar chart illustrates the <Text style={styles.adjective}>significant</Text> differences in sales across various regions. 
          In the first quarter, sales were <Text style={styles.adverb}>remarkably</Text> high in the <Text style={styles.adjective}>northern</Text> region, 
          reaching a peak of <Text style={styles.adjective}>1500</Text> units. 
          This can be attributed to the <Text style={styles.adjective}>increased</Text> marketing efforts and favorable weather conditions.
        </Text>

        <Text style={styles.answer}>
          Conversely, the <Text style={styles.adjective}>southern</Text> region exhibited lower sales figures, with only <Text style={styles.adjective}>800</Text> units sold. 
          This is likely due to the <Text style={styles.adjective}>poor</Text> economic conditions affecting consumer purchasing behavior. 
          <Text style={styles.linker}>Moreover</Text>, the sales in the <Text style={styles.adjective}>eastern</Text> region remained <Text style={styles.adverb}>steady</Text> at <Text style={styles.adjective}>1000</Text> units.
        </Text>

        <Text style={styles.answer}>
          In summary, the data indicates that while the <Text style={styles.adjective}>northern</Text> region has a <Text style={styles.adjective}>strong</Text> sales performance, 
          other regions need to improve their strategies to compete effectively. 
          <Text style={styles.linker}>Therefore</Text>, focusing on targeted marketing campaigns could help boost their sales.
        </Text>
        
        <View style={styles.footer}>
          <View style={[styles.box, styles.adjectiveBox]}>
            <Text style={styles.boxText}>Adjective</Text>
          </View>
          <View style={[styles.box, styles.adverbBox]}>
            <Text style={styles.boxText}>Adverb</Text>
          </View>
          <View style={[styles.box, styles.linkerBox]}>
            <Text style={styles.boxText}>Linker</Text>
          </View>
        </View>
        
      </View>
      <View style={{ height: 130, width: screenWidth }}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  freeStyleContainer: {
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 3,
    width: screenWidth - 50,
    height: 'auto', // Adjust height dynamically based on content
    position: "relative",
    top: 15,
    left: screenWidth / 16,
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#119d79',
    marginBottom: 20,
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  answer: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    textAlign: 'justify',
    color: '#333',
    fontWeight: 'bold',
  },
  
  image: {
    width: '100%', // Adjusts to full width of the container
    height: 300, // Set a specific height
    marginBottom: 20, // Spacing below the image
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 3,
  },
  
  adjective: {
    color: 'red', // Light red
    fontWeight: 'bold',
  },
  adverb: {
    color: 'green', // Aqua
    fontWeight: 'bold',
  },
  linker: {
    color: 'blue', // Yellow
    fontWeight: 'bold',
  },
  
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  box: {
    width: '30%', // Adjust width for layout
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    borderColor: "black",
    borderWidth: 3,
  },
  adjectiveBox: {
    backgroundColor: 'red', // Light red
  },
  adverbBox: {
    backgroundColor: 'green', // Aqua
  },
  linkerBox: {
    backgroundColor: 'blue', // Yellow
  },
  boxText: {
    fontWeight: 'bold',
    color: 'white',
  },
});
