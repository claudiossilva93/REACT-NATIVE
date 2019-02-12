import { createStackNavigator } from 'react-navigation';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

export default createStackNavigator({
    'Main':{
      screen: PeoplePage
    },
    'PeopleDetail':{
      screen: PeopleDetailPage
    }
  },
  {
    navigationOptions:{
      title: 'Pessoas!',
      headerStyle:{
          backgroundColor: '#6ca2f7',
          borderBottomWidth: 1,
          borderBottomColor: '#C5C5C5',
      },
      headerTitleStyle:{
        color:'white',
        fontSize: 30
      }
    }
});