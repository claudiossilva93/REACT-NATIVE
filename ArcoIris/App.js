import React from 'react';
import { View, StyleSheet } from 'react-native';

class App extends React.Component {

  constructor(props)
  {
    super(props);

    this.state = {
      colors: [
        'red', 
        'orange',
        'yellow', 
        'green', 
        'blue', 
        'indigo', 
        'violet'
      ]
    }
  }

  componentDidMount()
  {
    setInterval(() => {
      const lastColor       = this.state.colors.slice(-1);
      const lastWithoutLast = this.state.colors.slice(0, -1);
      this.setState( { colors: lastColor.concat(lastWithoutLast) } );
    }, 500);


  }

  render() {
    const views = this.state.colors.map(color => (
      <View key={color} style={ [styles.container, styles[ `${color}Container` ]] }/>
    )); 

    return (
      <View style={ styles.container }>
        {views}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  redContainer:{
    backgroundColor: 'red'
  },
  orangeContainer:{
    backgroundColor: '#ff7f00'
  },
  yellowContainer:{
    backgroundColor: '#FFFF00'
  },
  greenContainer:{
    backgroundColor: '#00FF00'
  },
  blueContainer:{
    backgroundColor: '#0000FF'
  },
  indigoContainer:{
    backgroundColor: '#4b0082'
  },
  violetContainer:{
    backgroundColor: '#8B00FF'
  }

});

export default App;