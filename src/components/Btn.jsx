import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Btn = ({ text, opacity, onPress }) => {
	return (
		<TouchableOpacity
			style={styles.btn}
			activeOpacity={opacity}
			onPress={onPress}
		>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
};

export default Btn;

const styles = StyleSheet.create({
	btn: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#FF6C00",
		paddingHorizontal: 32,
		paddingVertical: 16,
		borderRadius: 100,
		marginTop: 11,
		marginBottom: 16,
	},
	text: {
		color: "#FFFFFF",
		fontSize: 16,
		// fontWeight: 400,
	},
});
