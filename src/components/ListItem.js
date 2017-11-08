import React, { Component } from 'react';
import { CardSection } from './common';
import { Text, TouchableWithoutFeedback, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {


  expandRow(){
    const {library, selectedLibraryId } = this.props;
    console.log("Expanding Row", library.id)
    console.log(selectedLibraryId)
    if (library.id === selectedLibraryId){
      return <Text>{library.description}</Text>
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

const mapStateToProps = (state) => {
    return {selectedLibraryId: state.selectedLibraryId}
}


// const mapDispatchToProps = () => {
//   return {
//     selectLibrary: actions.selectLibrary
//   }
// }

export default connect(mapStateToProps, actions)(ListItem)
