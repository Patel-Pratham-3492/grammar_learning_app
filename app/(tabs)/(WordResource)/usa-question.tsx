import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function BarChart() {
  return (
    <ScrollView>
      <View style={styles.freeStyleContainer}>
        <Text style={styles.title}>USA VISA Questions</Text>
        
        <Text style={styles.question}>Q.1 Why did you choose the US above Australia, Canada, or the United Kingdom?</Text>
        <Text style={styles.answer}>
          I chose the US for my studies because it has some of the best programs in computer science, especially in AI and machine learning. The opportunities for research, internships, and networking in the tech industry are exceptional here.
        </Text>
        
        <Text style={styles.question}>Q.2 Tell me what you know about America and US education.</Text>
        <Text style={styles.answer}>
          America is known for its diverse culture and high-quality education system. US universities emphasize critical thinking, innovation, and hands-on experience.
        </Text>
        
        <Text style={styles.question}>Q.3 How can you prove that you are going to come back home after completing your degree?</Text>
        <Text style={styles.answer}>
          I have strong ties to my home country, including my family and the agricultural business my father runs. 
        </Text>
        
        <Text style={styles.question}>Q.4 Have you ever been to the US?</Text>
        <Text style={styles.answer}>
          No, I have not visited the US before. However, I am eager to experience its culture and education system.
        </Text>
        
        <Text style={styles.question}>Q.5 Do you know anyone at this university?</Text>
        <Text style={styles.answer}>
          I don’t personally know anyone at the University of Illinois Springfield, but I have researched the faculty and their work in AI/ML.
        </Text>
        
        <Text style={styles.question}>Q.6 What will you do if your visa is rejected?</Text>
        <Text style={styles.answer}>
          If my visa is rejected, I will carefully review the reasons and address them.
        </Text>
        
        <Text style={styles.question}>Q.7 Will you come home during summer for visits?</Text>
        <Text style={styles.answer}>
          I plan to stay in the US during the summer to focus on my studies and internships.
        </Text>

        <Text style={styles.question}>Q.8 Why this specific college/university?</Text>
        <Text style={styles.answer}>
          I chose the University of Illinois Springfield because of its strong focus on research in AI/ML and the supportive environment for international students.
        </Text>
        
        <Text style={styles.question}>Q.9 Which colleges/universities did you apply to?</Text>
        <Text style={styles.answer}>
          I applied to several universities, including the University of Illinois Springfield and a couple of others.
        </Text>

        <Text style={styles.question}>Q.10 Why did you apply to these universities?</Text>
        <Text style={styles.answer}>
          I applied to these universities because they have reputable programs in computer science and specific strengths in AI/ML research.
        </Text>

        <Text style={styles.question}>Q.11 Which colleges/universities accepted you?</Text>
        <Text style={styles.answer}>
          I received acceptance from the University of Illinois Springfield and a couple of other institutions.
        </Text>

        <Text style={styles.question}>Q.12 What is your undergraduate GPA/Percentage?</Text>
        <Text style={styles.answer}>
          I graduated with a CGPA of 9.36 in computer science engineering.
        </Text>

        <Text style={styles.question}>Q.13 What professors will you work with? (for graduate students)</Text>
        <Text style={styles.answer}>
          I am particularly interested in working with professors who specialize in AI and machine learning.
        </Text>

        <Text style={styles.question}>Q.14 When and where did you get your bachelor’s degree?</Text>
        <Text style={styles.answer}>
          I completed my bachelor’s degree in computer science engineering at [Your University Name].
        </Text>

        <Text style={styles.question}>Q.15 How long will you study in the USA?</Text>
        <Text style={styles.answer}>
          I plan to study in the USA for about two years to complete my Master's degree.
        </Text>

        <Text style={styles.question}>Q.16 How did you learn about this college/university?</Text>
        <Text style={styles.answer}>
          I learned about the University of Illinois Springfield through online research and recommendations from my academic advisors.
        </Text>

        <Text style={styles.question}>Q.17 Do you plan to get a PhD after the MS degree (or an MS after the BS, etc.)?</Text>
        <Text style={styles.answer}>
          At this moment, I am focused on completing my MS degree. I may consider pursuing a PhD in the future.
        </Text>

        <Text style={styles.question}>Q.18 Who is sponsoring you?</Text>
        <Text style={styles.answer}>
          My mother is sponsoring my education.
        </Text>

        <Text style={styles.question}>Q.19 What does your father do?</Text>
        <Text style={styles.answer}>
          My father runs an agricultural factory.
        </Text>

        <Text style={styles.question}>Q.20 What is your father’s annual income?</Text>
        <Text style={styles.answer}>
          My father's annual income is [insert estimated amount].
        </Text>

        <Text style={styles.question}>Q.21 How long has he been working for his current employer?</Text>
        <Text style={styles.answer}>
          My father has been running his agricultural business for over [insert number of years].
        </Text>

        <Text style={styles.question}>Q.22 What is your college/university’s yearly expense?</Text>
        <Text style={styles.answer}>
          The yearly expense at the University of Illinois Springfield is approximately [insert amount].
        </Text>

        <Text style={styles.question}>Q.23 Have you obtained any loans for your education?</Text>
        <Text style={styles.answer}>
          No, I have not obtained any loans; my mother is funding my studies.
        </Text>

        <Text style={styles.question}>Q.24 Your bank statements show that a large amount of money has recently been deposited. How do you explain that?</Text>
        <Text style={styles.answer}>
          The recent deposit reflects my mother’s savings for my education, which she has been setting aside over time.
        </Text>

        <Text style={styles.question}>Q.25 Does your sponsor expect you to pay him/her back?</Text>
        <Text style={styles.answer}>
          No, my mother does not expect me to pay her back for my education.
        </Text>

        <Text style={styles.question}>Q.26 How many brothers and sisters do you have?</Text>
        <Text style={styles.answer}>
          I have one sister who works in the cloth design field.
        </Text>

        <Text style={styles.question}>Q.27 Do you have a brother/sister, or any other relative already at this university?</Text>
        <Text style={styles.answer}>
          No, I do not have any relatives at this university.
        </Text>

        <Text style={styles.question}>Q.28 Do you have any other relatives in the USA?</Text>
        <Text style={styles.answer}>
          No, I do not have any other relatives in the USA.
        </Text>

        <Text style={styles.question}>Q.29 Where did your siblings/parents complete their studies?</Text>
        <Text style={styles.answer}>
          My parents completed their education in [insert locations], and my sister studied in [insert location].
        </Text>

        <Text style={styles.question}>Q.30 Where do your parents live?</Text>
        <Text style={styles.answer}>
          My parents live in [insert location].
        </Text>

        <Text style={styles.question}>Q.31 Why are you leaving your current job? (if you are working)</Text>
        <Text style={styles.answer}>
          I am leaving my current job to pursue my master's degree.
        </Text>

        <Text style={styles.question}>Q.32 What do you hope to do with your degree in your home country?</Text>
        <Text style={styles.answer}>
          With my degree, I hope to contribute to the growing tech industry in my home country.
        </Text>

        <Text style={styles.question}>Q.33 Is there a lot of demand for these kinds of professions in your home country?</Text>
        <Text style={styles.answer}>
          Yes, there is a significant demand for AI and machine learning professionals in my country.
        </Text>

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
    height: 'auto',
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
    borderBottomWidth: 3,
    borderBottomColor: 'black',
  },
  question: {
  	fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 5,
    textAlign: 'justify',
  },
  answer: {
  	fontSize: 15,
    color: 'gray',
    marginBottom: 10,
    textAlign: 'justify',
    fontWeight: 'bold',
  },
});
