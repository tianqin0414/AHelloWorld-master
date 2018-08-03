/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
} from 'react-native';

const styles = StyleSheet.create({
	root: {
		marginTop: 20,
		width: 150,
	},
	image: {
		width: 150,
		height: 215,
	},
	title: {
    marginTop: 5,
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
	}
});

export default  class MyApp extends  Component {
	render() {
		return (
			<View style={styles.root}>

				<Image
					source = {require('./img/poster.jpg')}
					style={styles.image}
				/>
				<Text style={styles.title} numberOfLines={1}>金刚狼3:殊死一战</Text>
			</View>
		);
	}

}