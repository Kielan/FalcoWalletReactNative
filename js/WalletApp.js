'use strict'
import { Navigation } from 'react-native-navigation'
//import { Provider } from 'react-redux'
//import { falcoWalletTheme } from './constants'
import { registerScreens, startApp } from './screens'
//import { configureStore } from './store/configureStore'

//const store = configureStore()

const navigatorStyle = {
	navBarTranslucent: true,
	drawUnderNavBar: true,
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	statusBarTextColorScheme: 'light',
	drawUnderTabBar: true
};

// Register screens
registerScreens()

// Start application
Navigation.events().registerAppLaunchedListener(() => {
//  if (__DEV__) {
//    makeInspectable(UI);
//    makeInspectable(Account);
//    makeInspectable(Stories);
//    makeInspectable(Items);
//  }

  Navigation.setRoot({
    root: {
      component: {
        name: 'walletapp.Login'
      }
    },
  })
})
