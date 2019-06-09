import { 
  createAppContainer,
  createStackNavigator
} from 'react-navigation';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

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
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null
    }
  }
}));

export default Routes;