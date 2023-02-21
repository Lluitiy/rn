import { StyleSheet, Text, TouchableOpacity } from "react-native";

const SwitchForm = ({ text, onSwitch }) => {
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={onSwitch}
			style={styles.btn}
		>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
};

export default SwitchForm;

const styles = StyleSheet.create({
	btn: { justifyContent: "center", alignItems: "center" },
	text: { color: "#1B4371", fontSize: 16 },
});
