import { useState } from "react";
import { KeyboardAvoidingView, View } from "react-native";
import { loginForm } from "../data/formFields";

import Btn from "../components/Btn";
import Input from "../components/Input";
import SwitchForm from "../components/SwitchForm";

const LoginScreen = ({ onFormSwitch, isShowKeyboard, setIsShowKeyboard }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onPress = () => {
		console.log("email", email, "password", password);
		setIsShowKeyboard(false);
		Keyboard.dismiss();
	};
	return (
		<>
			<KeyboardAvoidingView behavior="padding">
				<View style={{ marginBottom: isShowKeyboard ? 100 : 0 }}>
					<Input
						input={loginForm[0]}
						val={email}
						setter={setEmail}
						setIsShowKeyboard={setIsShowKeyboard}
					/>
					<Input
						input={loginForm[1]}
						val={password}
						setter={setPassword}
						setIsShowKeyboard={setIsShowKeyboard}
					/>
				</View>
			</KeyboardAvoidingView>
			<Btn text={"Войти"} opacity={0.8} onPress={onPress} />
			<SwitchForm
				text={"Нет аккаунта? Зарегистрироваться"}
				onSwitch={onFormSwitch}
			/>
		</>
	);
};

export default LoginScreen;
