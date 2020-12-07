/**
 * @format
 */

import {AppRegistry} from 'react-native';
import RegistrActivity from './component/Registr';
import LoginActivity from './component/LogIn';
import Nav from './Navig';
import App from './App';




import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Nav);
