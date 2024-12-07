import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const idiomsData = {
  "Travel & Holidays": [
    {
      idiom: "Hit the road",
      meaning: "To leave or start a journey.",
      example: "We decided to hit the road early to avoid traffic."
    },
    {
      idiom: "Off the beaten track",
      meaning: "In a place that is not well known or frequently visited.",
      example: "We found a lovely café that was off the beaten track."
    },
    {
      idiom: "Catch some rays",
      meaning: "To sunbathe or relax in the sun.",
      example: "Let's go to the beach and catch some rays."
    },
    {
      idiom: "Travel light",
      meaning: "To pack very few belongings when traveling.",
      example: "I prefer to travel light to make my journey easier."
    }
  ],
  "Friends": [
    {
      idiom: "A friend in need is a friend indeed",
      meaning: "A true friend helps you when you really need it.",
      example: "When I was struggling, Sarah was there for me; a friend in need is a friend indeed."
    },
    {
      idiom: "Bury the hatchet",
      meaning: "To make peace and forgive past disagreements.",
      example: "After years of fighting, they finally decided to bury the hatchet."
    },
    {
      idiom: "Two peas in a pod",
      meaning: "Two people who are very similar or close.",
      example: "Those two are like two peas in a pod; they do everything together."
    },
    {
      idiom: "The more, the merrier",
      meaning: "More people make a situation more enjoyable.",
      example: "Feel free to bring your friends; the more, the merrier!"
    }
  ],
  "Technology": [
    {
      idiom: "Cutting-edge",
      meaning: "The latest and most advanced technology.",
      example: "This smartphone features cutting-edge technology."
    },
    {
      idiom: "In the loop",
      meaning: "To be informed and updated about something.",
      example: "I want to be kept in the loop regarding the project updates."
    },
    {
      idiom: "Glitch in the system",
      meaning: "A small problem or malfunction in a system.",
      example: "We experienced a glitch in the system during the presentation."
    },
    {
      idiom: "Go viral",
      meaning: "To quickly gain popularity on the internet.",
      example: "That funny video went viral overnight."
    }
  ],
  "Sport": [
    {
      idiom: "Go the extra mile",
      meaning: "To put in more effort than is expected.",
      example: "She always goes the extra mile to ensure her team wins."
    },
    {
      idiom: "On the ball",
      meaning: "To be alert and efficient.",
      example: "You have to be on the ball to succeed in this competitive field."
    },
    {
      idiom: "Out of left field",
      meaning: "Something unexpected or surprising.",
      example: "His decision to change careers came out of left field."
    },
    {
      idiom: "Level the playing field",
      meaning: "To make a situation fairer.",
      example: "The new regulations aim to level the playing field for all competitors."
    }
  ],
  "Food": [
    {
      idiom: "Bite off more than you can chew",
      meaning: "To take on a task that is too big or difficult.",
      example: "I think I've bitten off more than I can chew by volunteering for two events."
    },
    {
      idiom: "The icing on the cake",
      meaning: "Something that makes a good situation even better.",
      example: "The extra vacation days were the icing on the cake for my promotion."
    },
    {
      idiom: "Spill the beans",
      meaning: "To reveal a secret or disclose information.",
      example: "I can't believe she spilled the beans about the surprise party!"
    },
    {
      idiom: "Bring home the bacon",
      meaning: "To earn a living or provide for a family.",
      example: "He works long hours to bring home the bacon."
    }
  ],
  "Education": [
    {
      idiom: "Hit the books",
      meaning: "To study hard.",
      example: "I need to hit the books this weekend to prepare for my exams."
    },
    {
      idiom: "Learn the ropes",
      meaning: "To understand the basics of a task or job.",
      example: "It took me a while to learn the ropes at my new job."
    },
    {
      idiom: "Make the grade",
      meaning: "To reach the required standard.",
      example: "I hope I can make the grade in this challenging course."
    },
    {
      idiom: "A blank slate",
      meaning: "A person with no prior knowledge or experience.",
      example: "The new students are like a blank slate, ready to learn."
    }
  ],
  "Weather": [
    {
      idiom: "Under the weather",
      meaning: "Feeling ill or unwell.",
      example: "I'm feeling a bit under the weather today, so I'll stay home."
    },
    {
      idiom: "Every cloud has a silver lining",
      meaning: "There is something good in every bad situation.",
      example: "Even after losing my job, I remembered that every cloud has a silver lining."
    },
    {
      idiom: "Break the ice",
      meaning: "To initiate conversation in a social setting.",
      example: "To break the ice, he told a funny story at the meeting."
    },
    {
      idiom: "It’s a storm in a teacup",
      meaning: "A small issue that has been exaggerated.",
      example: "Their argument was just a storm in a teacup; they'll be friends again soon."
    }
  ],
  "Environment": [
    {
      idiom: "Go green",
      meaning: "To adopt environmentally friendly practices.",
      example: "We should all try to go green by recycling more."
    },
    {
      idiom: "Leave no stone unturned",
      meaning: "To search thoroughly in every possible place.",
      example: "The investigators will leave no stone unturned in their search for evidence."
    },
    {
      idiom: "Put all your eggs in one basket",
      meaning: "To rely completely on one plan or resource.",
      example: "It's risky to put all your eggs in one basket when investing."
    },
    {
      idiom: "Reduce, reuse, recycle",
      meaning: "A mantra for environmentally friendly practices.",
      example: "To protect the planet, we must reduce, reuse, recycle."
    }
  ],
  "Music": [
    {
      idiom: "Face the music",
      meaning: "To confront the consequences of one’s actions.",
      example: "After failing the test, I had to face the music."
    },
    {
      idiom: "Music to my ears",
      meaning: "Something that is very pleasant to hear.",
      example: "When I heard I got the job, it was music to my ears."
    },
    {
      idiom: "Play it by ear",
      meaning: "To improvise or decide how to deal with a situation as it unfolds.",
      example: "I'm not sure how the meeting will go, so I'll just play it by ear."
    },
    {
      idiom: "Change your tune",
      meaning: "To change your opinion or attitude.",
      example: "He used to dislike the project, but now he's changed his tune."
    }
  ],
  "Books & Films": [
    {
      idiom: "Turn the page",
      meaning: "To move on to the next chapter or phase in life.",
      example: "After the breakup, I decided it was time to turn the page."
    },
    {
      idiom: "In the limelight",
      meaning: "In the center of public attention.",
      example: "She has been in the limelight since her debut film."
    },
    {
      idiom: "The plot thickens",
      meaning: "The situation becomes more complicated.",
      example: "Just when I thought I understood the story, the plot thickens."
    },
    {
      idiom: "A page-turner",
      meaning: "A book that is very engaging and difficult to put down.",
      example: "This novel is a real page-turner; I finished it in one night!"
    }
  ],
  "Health": [
    {
      idiom: "An apple a day keeps the doctor away",
      meaning: "Eating healthy food can help maintain good health.",
      example: "I always try to eat fruit; an apple a day keeps the doctor away!"
    },
    {
      idiom: "Burn the candle at both ends",
      meaning: "To work excessively hard and exhaust oneself.",
      example: "He's been burning the candle at both ends with work and school."
    },
    {
      idiom: "Fit as a fiddle",
      meaning: "In very good health.",
      example: "Despite his age, he's as fit as a fiddle."
    },
    {
      idiom: "Under the knife",
      meaning: "To undergo surgery.",
      example: "He had to go under the knife for his knee injury."
    }
  ]
};

export default function Idioms() {
  return (
    <ScrollView>
      <View style={styles.freeStyleContainer}>
        <Text style={styles.title}>Idioms</Text>

        {Object.entries(idiomsData).map(([category, idioms]) => (
          <View key={category} style={styles.categoryContainer}>
            <Text style={styles.subtitle}>{category.charAt(0).toUpperCase() + category.slice(1)}</Text>
            {idioms.map(({ idiom, meaning, example }, index) => (
              <View key={index} style={styles.idiomContainer}>
                <Text style={styles.idiom}>
                  <Text style={styles.bold}>{idiom}</Text> - {meaning}
                </Text>
                <Text style={styles.example}>{example}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
      <View style = {{height: 130,width: screenWidth,}}></View>
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
    color: 'black',
    marginBottom: 20,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#119d79',
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  idiomContainer: {
    marginBottom: 10,
  },
  idiom: {
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 5,
  },
  example: {
    fontSize: 16,
    marginLeft: 20,
    color: 'gray',
    textAlign: 'justify',
  },
  bold: {
    fontWeight: 'bold',
  },
});
