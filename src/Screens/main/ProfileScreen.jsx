import { Text, View, ImageBackground, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import AddIcon from "../../components/AddIcon";

const ProfileScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.image}
				source={require("../../../assets/BG.png")}
			>
				<View style={styles.main}>
					<View style={styles.avatar}>
						<AddIcon />
					</View>
					<MaterialIcons
						name="logout"
						size={24}
						style={styles.logout}
						onPress={() => {
							console.log("LogOut");
						}}
					/>
					<Text style={styles.title}>ProfileScreen</Text>
				</View>
			</ImageBackground>
		</View>
	);
};

export default ProfileScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	main: {
		backgroundColor: "#ffffff",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		alignItems: "center",
		width: "100%",
		paddingBottom: 45,
	},
	avatar: {
		position: "absolute",
		top: -60,

		width: 120,
		height: 120,
		borderRadius: 16,
		backgroundColor: "#F6F6F6",
	},
	title: {
		fontSize: 30,
		lineHeight: 35,
		marginTop: 92,
		marginBottom: 32,
		letterSpacing: "0.01em",
		lineHeight: 35,
	},
	logout: { position: "absolute", right: 16, top: 22, color: "#BDBDBD" },
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "flex-end",
	},
});
