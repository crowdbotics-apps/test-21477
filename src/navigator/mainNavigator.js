import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps141896Navigator from '../features/Maps141896/navigator';
import Add-Item141895Navigator from '../features/Add-Item141895/navigator';
import Maps141891Navigator from '../features/Maps141891/navigator';
import UserProfile141887Navigator from '../features/UserProfile141887/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps141896: { screen: Maps141896Navigator },
Add-Item141895: { screen: Add-Item141895Navigator },
Maps141891: { screen: Maps141891Navigator },
UserProfile141887: { screen: UserProfile141887Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
