'use strict'
import { StatusBar } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { COLORS } from './constants'
import { LoginScreen } from './screenviews/Login'
import { ActionsScreen } from './screenviews/Actions'
import { SignupScreen } from './screenviews/Signup'
import { PortfolioScreen } from './screenviews/Portfolio'
import { HomeScreen } from './screenviews/Home'
import { TopBar } from './screenviews/TopBar'
import * as types from './store/actions/actionTypes'
import { tabNavigationPress } from './store/actions/screenviewActions'
import { getComponentId, getCurrentIndex } from './store/reducers/selectors'

//export const Screens = new Map()
//Screens.set(LOGIN_SCREEN, LoginScreen)
//store, Provider
export function registerScreens(store, Provider) {
	Navigation.registerComponent(types.LOGIN_SCREEN, () => LoginScreen, Provider, store)
  Navigation.registerComponent(types.SIGNUP_SCREEN, () => SignupScreen, Provider, store)
  Navigation.registerComponent(types.PORTFOLIO_SCREEN, () => PortfolioScreen, Provider, store)
  Navigation.registerComponent(types.HOME_SCREEN, () => HomeScreen, Provider, store)
  Navigation.registerComponent(types.ACTIONS_SCREEN, () => ActionsScreen, Provider, store)
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
              name: types.LOGIN_SCREEN,
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: 'Sign In',
                  icon: require('./assets/icons/signin.png')
                }
              }
            },
          },
          {
            component: {
              name: types.SIGNUP_SCREEN,
              options: {
                bottomTab: {
                  text: 'Sign Up',
                  fontSize: 12,
                  icon: require('./assets/icons/signup.png')
                }
              }
            },
          },
        ],
      },
    },
  })
}

export const loginScreen = () => Navigation.setRoot({
  component: {
    name: types.LOGIN_SCREEN,
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
    name: types.SETTINGS_SCREEN,
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
/*
export const portfolioScreen = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'App',
      children: [
        {
          component: {
            name: 'walletapp.Portfolio',
          }
        }
      ],
    }
  }
})
*/
//      id: 'App',
export const portfolioScreen = () => Navigation.setRoot({
  root: {
    stack: {
      options: {
        topBar: {
          leftButtons: [
            {
              id: 'myDynamicButtonLeft',
              text: 'PORTFOLIO',
              color: COLORS.PRIMARY_WHITE
            }
          ],
          title: {
            text: 'ONYX',
//            fontFamily: 'Helvetica',
            color: COLORS.PRIMARY_WHITE
          },
          rightButtons: [
            {
              id: 'myDynamicButtonRight',
              text: 'ACTIONS',
              color: COLORS.PRIMARY_WHITE
            }
          ],
          background: {
            color: COLORS.PRIMARY_BLACK,
          }
        },
      },
      children: [
        {
          component: {
            name: types.HOME_SCREEN,
          }
        }
      ]
    }
  }
})
Navigation.events().registerNavigationButtonPressedListener((event) => {
  console.log('registerNavigationButtonPressedListener: ', event.buttonId)
  if (event.buttonId ===  'myDynamicButtonRight') {
    console.log('registerNavigationButtonPressedListener 2: ', getCurrentIndex(), event.buttonId)
    tabNavigationPress({
      id: event.buttonId,
      currentIndex: getCurrentIndex(),
      focusIndex:(getCurrentIndex()+1),
      componentFromId: getFocusIndex(getCurrentIndex()),
      componentToId: getFocusIndex(getCurrentIndex()+1),
    })
  }
})
const getFocusIndex = (index) => {
  let tabNavArray = [
    types.PORTFOLIO_SCREEN,
    types.HOME_SCREEN,
    types.ACTIONS_SCREEN,
  ]
  console.log('tabNavArray[index]: ', tabNavArray[index])
  return tabNavArray[index]
}
