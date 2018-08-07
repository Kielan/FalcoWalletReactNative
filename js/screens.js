'use strict'
import { StatusBar } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { LoginScreen } from './screenviews/Login'
import { SignupScreen } from './screenviews/Signup'
import {
  ACCOUNT_SCREEN, SEARCH_SCREEN, STORY_SCREEN,
  SETTINGS_SCREEN, STORIES_SCREEN, LOGIN_SCREEN,
} from './store/actions/actionTypes'
import { getComponentId } from './store/reducers/selectors'

//export const Screens = new Map()
//Screens.set(LOGIN_SCREEN, LoginScreen)
//store, Provider
export function registerScreens(store, Provider) {
	Navigation.registerComponent('walletapp.Login', () => LoginScreen)
  Navigation.registerComponent('walletapp.Signup', () => SignupScreen)
}

export const startApp = () => {
	StatusBar.setBarStyle('dark-content', true)

  return Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'ROOT',
        children: [
          {
            component: {
              name: 'walletapp.Login',
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: 'Sign In',
                  icon: require('./assets/icons/signup.png')
                }
              }
            },
          },
          {
            component: {
              name: 'walletapp.Signup',
              options: {
                bottomTab: {
                  text: 'Sign Up',
                  fontSize: 12,
                  icon: require('./assets/icons/signin.png')
                }
              }
            },
          },
        ],
      },
    },
  })
}

export const loginScreen = (id: string) => Navigation.push(getComponentId, {
  component: {
    name: LOGIN_SCREEN,
    passProps: {
      id,
    },
    options: {
      topBar: {
        title: {
          text: id,
        },
      },
    },
  },
})
export const settingsScreen = (id: string) => Navigation.push(getComponentId, {
  component: {
    name: SETTINGS_SCREEN,
    passProps: {
      id,
    },
    options: {
      topBar: {
        title: {
          text: id,
        },
      },
    },
  },
})
