import React, {Component} from 'react';
import {View, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import { Text, ButtonGroup} from 'react-native-elements';
import {selectCapo} from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const CAPO_POSITIONS =['1','2','3','4','5','6','7','8','9','10','11'];
class CapoButtons extends Component {
    render() {
        const { selectedCapo } = this.props.selectedValues;
        const {
            containerStyle,
            buttonStyle,
            selectedTextStyle
          } = styles;
        return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text h3> Capo </Text>
                <Text h1 style={{marginBottom: 2}}>{selectedCapo}</Text>
                <ButtonGroup
                    onPress={index => this.props.selectCapo(index + 1)}
                    selectedIndex={selectedCapo - 1}
                    buttons={CAPO_POSITIONS}
                    constainerStyle={containerStyle}
                    buttonStyle={buttonStyle}
                    selectedTextStyle={selectedTextStyle}
                />
            </View>
        );
    }
}

const styles = {
    containerStyle: {
      height: 40,
      width: SCREEN_WIDTH * 0.9
    },
    buttonStyle: {
      backgroundColor: 'white'
    },
    selectedTextStyle: {
      color: 'red',
      fontWeight: '900'
    }
  };
const mapStateToProps = ({selectedValues}) => ({selectedValues});
export default connect(mapStateToProps, {selectCapo})(CapoButtons);