import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import SignUp from './pages/SignUp';

const Routes = createAppContainer(createSwitchNavigator({ 
  Login,
  SignUp
}));

export default Routes;