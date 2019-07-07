import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from '../../../styles/Menu/MenuMainStyle';

import MenuButton from '../../Buttons/MenuButton';
import TutorialTexts from '../../../styles/Texts/TutorialTexts';
import { ScrollView } from 'react-native-gesture-handler';

interface Props {
  navigation: Navigation;
}

export default class StartGameMenu extends React.Component<Props> {
  levels = [
    {
      text: 'Level 1',
      notes: 'tutaj powinny byc nuty',
      difficulty: 'w sumie można takie coś zrobić :V',
    },
    {
      text: 'Level 2',
      notes: 'tutaj powinny byc nuty',
      difficulty: 'w sumie można takie coś zrobić :V',
    },
    {
      text: 'Level 3',
      notes: 'tutaj powinny byc nuty',
      difficulty: 'w sumie można takie coś zrobić :V',
    },
    {
      text: 'Level 4',
      notes: 'tutaj powinny byc nuty',
      difficulty: 'w sumie można takie coś zrobić :V',
    },
    {
      text: 'Level 5',
      notes: 'tutaj powinny byc nuty',
      difficulty: 'w sumie można takie coś zrobić :V',
    },
    {
      text: 'Level 6',
      notes: 'tutaj powinny byc nuty',
      difficulty: 'w sumie można takie coś zrobić :V',
    },
    {
      text: 'Level 4',
      notes: 'tutaj powinny byc nuty',
      difficulty: 'w sumie można takie coś zrobić :V',
    },
    {
      text: 'Level 5',
      notes: 'tutaj powinny byc nuty',
      difficulty: 'w sumie można takie coś zrobić :V',
    },
    {
      text: 'Level 6',
      notes: 'tutaj powinny byc nuty',
      difficulty: 'w sumie można takie coś zrobić :V',
    },
  ];

  renderLevelButtons() {
    return this.levels.map((item, key) => {
      return (
        <View key={key}>
          <MenuButton
            text={item.text}
            onPress={() =>
              this.props.navigation.navigate('Level', {
                notes: item.notes,
                notesLength: item.notes.length,
              })
            }
          />
          <Text style={TutorialTexts.smallText}>
            Difficulty: {item.difficulty}
          </Text>
        </View>
      );
    });
  }

  render() {
    return (
      <ImageBackground
        source={require('../../../static/backgroundImages/pianoMain.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <ScrollView>
          <View style={styles.container}>
            <Text style={TutorialTexts.text}>Choose level</Text>
            {this.renderLevelButtons()}
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
