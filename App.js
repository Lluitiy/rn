import { useState } from "react";
import {
	ImageBackground,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
	Keyboard,
} from "react-native";

import Form from "./src/components/Form";
import LoginScreen from "./src/Screens/LoginScreen";
import RegistrationScreen from "./src/Screens/RegistrationScreen";

export default function App() {
	const [isRegister, setIsRegister] = useState(true);
	const [isShowKeyboard, setIsShowKeyboard] = useState(false);

	const formTitle = isRegister ? "Регистрация" : "Войти";
	const formType = isRegister ? "register" : "login";

	const onFormSwitch = () => {
		setIsRegister(!isRegister);
	};

	const hideKeyboard = () => {
		setIsShowKeyboard(false);
		Keyboard.dismiss();
	};
	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={() => hideKeyboard()}>
				<ImageBackground
					style={styles.image}
					source={require("./assets/BG.png")}
				>
					<Form title={formTitle} type={formType}>
						{isRegister ? (
							<RegistrationScreen
								onFormSwitch={onFormSwitch}
								isShowKeyboard={isShowKeyboard}
								setIsShowKeyboard={setIsShowKeyboard}
							/>
						) : (
							<LoginScreen
								onFormSwitch={onFormSwitch}
								isShowKeyboard={isShowKeyboard}
								setIsShowKeyboard={setIsShowKeyboard}
							/>
						)}
					</Form>
				</ImageBackground>
			</TouchableWithoutFeedback>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "flex-end",
	},
});
