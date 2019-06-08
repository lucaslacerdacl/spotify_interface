import { 
  createAppContainer,
  createStackNavigator
} from 'react-navigation';

import Login from './pages/Login';
import SignUp from './pages/SignUp';

const Routes = createAppContainer(createStackNavigator({ 
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null
    }
  }
}));

export default Routes;