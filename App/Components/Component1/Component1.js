import React, { Component } from 'react'
import { AppRegistry, Text, View } from 'react-native'

export default class Component1 extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			name: "Ayesh nipun",
			age: 21,
			showName: true,
			msg: this.props.msg
		};
	}

	static defaultProps = {
		msg: "Hella",
	}

	render() {
		return (
			<View style={{}}>
				<Text> {this.state.msg} </Text>
				<Text> {this.state.name} </Text>
			</View>
		);
	}
}

AppRegistry.registerComponent('Component1', () => Component1);
 