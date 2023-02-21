import { StyleSheet, Text, View } from "react-native";
import AddIcon from "./AddIcon";

const Form = ({ title, type, children }) => {
	const isRegistration = type === "register";
	return (
		<View style={styles.form}>
			{isRegistration && (
				<View style={styles.upload}>
					<AddIcon />
				</View>
			)}
			<Text
				style={{
					marginTop: isRegistration ? 92 : 32,
					...styles.heading,
				}}
			>
				{title}
			</Text>
			<View>{children}</View>
		</View>
	);
};

export default Form;

const styles = StyleSheet.create({
	form: {
		backgroundColor: "#ffffff",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		alignItems: "center",
		width: "100%",
		paddingBottom: 45,
	},
	upload: {
		position: "absolute",
		top: -60,

		width: 120,
		height: 120,
		borderRadius: 16,
		backgroundColor: "#F6F6F6",
	},
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
	heading: {
		// fontWeight: 500,
		fontSize: 30,
		lineHeight: 35,

		marginBottom: 32,
		letterSpacing: "0.01em",
		lineHeight: 35,
	},
});
