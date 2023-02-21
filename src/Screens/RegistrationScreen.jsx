import {
	StyleSheet,
	KeyboardAvoidingView,
	View,
	Keyboard,
	TouchableWithoutFeedback,
} from "react-native";
import { register } from "../data/formFields.js";

import Btn from "../components/Btn.jsx";
import Input from "../components/Input.jsx";
import SwitchForm from "../components/SwitchForm.jsx";
import { useState } from "react";

const RegistrationScreen = ({
	onFormSwitch,
	isShowKeyboard,
	setIsShowKeyboard,
}) => {
	const [login, setLogin] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onPress = () => {
		console.log("login", login, "email", email, "password", password);
		setIsShowKeyboard(false);
		Keyboard.dismiss();
	};

	return (
		<>
			<KeyboardAvoidingView behavior="padding">
				<View style={{ marginBottom: isShowKeyboard ? 170 : 0 }}>
					<Input
						input={register[0]}
						val={login}
						setter={setLogin}
						setIsShowKeyboard={setIsShowKeyboard}
					/>
					<Input
						input={register[1]}
						val={email}
						setter={setEmail}
						setIsShowKeyboard={setIsShowKeyboard}
					/>
					<Input
						input={register[2]}
						val={password}
						setter={setPassword}
						setIsShowKeyboard={setIsShowKeyboard}
					/>
				</View>
			</KeyboardAvoidingView>
			<Btn text={"Зарегистрироваться"} opacity={0.8} onPress={onPress} />
			<SwitchForm
				text={"Уже есть аккаунт? Войти"}
				onSwitch={onFormSwitch}
			/>
		</>
	);
};

export default RegistrationScreen;

const styles = StyleSheet.create({
	content: {
		backgroundColor: "#000",
		fontSize: 20,
	},
});
