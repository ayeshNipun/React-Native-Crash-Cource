import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Component2 extends Component {
	render() {
		return (
			<View>
				<View style={styles.viewStyle}>
					<Text style={styles.textStyle}>InComponent </Text>
				</View>

				<View style={styles.container}>
					<View style={styles.v1}>
						<Text>container 1</Text>
					</View>
					<View style={styles.v2}>
						<Text>container 2</Text>
					</View>
					<View style={styles.v3}>
						<Text>container 3</Text>
					</View>
				</View>
			</View>
		)
	}

}
const styles = StyleSheet.create({
	viewStyle: {
		backgroundColor: 'blue'
	},

	textStyle: {
		 color: 'red' 
	},

	container:{
		flexDirection: 'row',
		height: 100,
	},

	v1:{
		flex: 1,
		backgroundColor: 'red',
		padding: 10
	},

	v2:{
		flex: 1,
		backgroundColor: 'green',
		padding: 10
	},

	v3:{
		flex: 1,
		backgroundColor: 'yellow',
		padding: 10
	},
});
