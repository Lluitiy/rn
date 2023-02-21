import { StyleSheet, View } from "react-native";

const AddIcon = () => {
	return (
		<View style={styles.addBtn}>
			<View style={styles.horizontal} />
			<View style={styles.vertical} />
		</View>
	);
};

export default AddIcon;

const styles = StyleSheet.create({
	addBtn: {
		position: "absolute",
		right: -12.5,
		bottom: 14,
		width: 25,
		height: 25,
		borderWidth: 1,
		borderColor: "#FF6C00",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 50,
	},
	horizontal: {
		backgroundColor: "#FF6C00",
		width: 13,
		height: 1,
	},
	vertical: {
		position: "absolute",
		backgroundColor: "#FF6C00",
		height: 13,
		width: 1,
	},
});
