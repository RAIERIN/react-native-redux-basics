import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';
import {Divider} from 'react-native-elements';
import KeysButtons from  '../components/KeysButtons';
import CapoButtons from '../components/CapoButtons';
import CapoKey from '../components/CapoKey';
import ViewChordsButton from '../components/ViewChordsButton';
import ChordsModal from '../modals/ChordsModal';

const cacheImages = images => images.map(image => {
  if (typeof image === 'string') return Image.prefetch(image);
  return Expo.Asset.fromModule(image).downloadAsync();
});
const SCREEN_WIDTH = Dimensions.get('window').width;
class MainScreen extends Component {
  static navigationOptions = () => ({
    title: 'Capo Keys',
    headerStyle: {
      height: 74,
      backgroundColor: '#2196F3'
    },
    headerTitleStyle: {
      marginTop: 20,
      color: 'white'
    },
    headerLeft: (
      <Image
        source={require('../assets/icons/pure-icon.png')}
        style={styles.imageStyle}
      />
    )
  });
  render() {
    const { containerStyle, dividerStyle, buttonContainerStyle } = styles;
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
       <ChordsModal />
       <View style={containerStyle}>
          <KeysButtons />
          <Divider style={dividerStyle}/>
          <CapoButtons />
          <Divider style ={dividerStyle}/>
          <CapoKey/>
        </View>

        <ViewChordsButton style={buttonContainerStyle} />
         
        </View>
    );
  }
}

const styles = {
  imageStyle: {
    marginTop: 20,
    marginLeft: 40,
    width: 40,
    height: 40
  },
  containerStyle:{
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  dividerStyle:{
    width: SCREEN_WIDTH * 0.9,
    backgroundColor: '#2196F3'
  },
  buttonContainerStyle: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10
  }
};

export default MainScreen;
