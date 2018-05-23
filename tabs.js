import React from 'react';
import soorten from './Components/soorten.js';
import soortComponent  from './Components/soort.js';
import {
    Router,
    Scene,
    Actions
    } from 'react-native-router-flux';
    import {
        StyleSheet,
        Text,
      } from 'react-native';

const TabIcon = ({ selected, title }) => {
        return (
          <Text style={{color: 'white', fontFamily: 'montserrat', fontSize: 20  }}>{title}</Text>
        );
      }

const jsx = require('./Assets/soorten.js').map((soort) => {
    return(
            <Scene key={soort[0].soort} title={soort[0].soort} showLabel={false} icon={TabIcon}>
                <Scene
                    key={soort[0].soort + "LIST"}
                    title="CoachWare"

                    navigationBarStyle={{backgroundColor: '#1e90ff', paddingLeft: 'auto'}}
                    titleStyle={{color: 'white', fontFamily: 'montserrat', fontSize: 25}}
                    component={soorten}
                    soort={soort}
                >
                                </Scene>
                    {
                      soort.map((soortItem) => {
                    
                         return(
                             <Scene
                                navigationBarStyle={{backgroundColor: '#1e90ff', paddingLeft: 'auto'}}
                                titleStyle={{color: 'white', fontFamily: 'montserrat', fontSize: 25}}
                                headerTintColor="white"
                                leftButtonIconStyle={{ tintColor: 'white' }}
                                title={soortItem.title}
                                hideTabBar
                                key={soortItem.key}
                                component={soortComponent}
                             >
                             </Scene>
                         ) 
                      })    
                    }

            </Scene>
          )
});

module.exports = Actions.create(
    <Scene
    key="tabbar"
    tabs={true}
    showLabel={false}
    tabBarStyle={{ backgroundColor: '#1e90ff' }}
    tabBarPosition={'bottom'}
  >
    {
        jsx
    }
    </Scene>
);