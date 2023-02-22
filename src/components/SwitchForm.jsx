import { Button, StyleSheet, Text, TouchableOpacity } from "react-native";

const SwitchForm = ({ text, onSwitch }) => {
	return (
		<TouchableOpacity onPress={onSwitch} style={styles.btn} title={text}>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
};

export default SwitchForm;

const styles = StyleSheet.create({
	btn: { justifyContent: "center", alignItems: "center" },
	text: { color: "#1B4371", fontSize: 16 },
});
