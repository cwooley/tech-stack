import React, { Component } from 'react';
import { CardSection } from './common';
import { Text, TouchableWithoutFeedback, View, TouchableHighlight, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {

  componentWillUpdate(){
    LayoutAnimation.spring();
  }

  expandRow(){
    const {library, expanded } = this.props;
    if (expanded){
      return (
        <CardSection>
          <Text>{library.description}</Text>
        </CardSection>
      )
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableHighlight
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{this.props.library.title}</Text>
          </CardSection>
          {this.expandRow()}
        </View>
      </TouchableHighlight>
    )
  }
}

const styles ={
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return {expanded}
}


// const mapDispatchToProps = () => {
//   return {
//     selectLibrary: actions.selectLibrary
//   }
// }

export default connect(mapStateToProps, actions)(ListItem)
