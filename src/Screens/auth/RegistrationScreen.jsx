import { useState } from "react";
import {
	StyleSheet,
	KeyboardAvoidingView,
	View,
	Keyboard,
	TouchableWithoutFeedback,
	ImageBackground,
} from "react-native";
import { register } from "../../data/formFields";

import Btn from "../../components/Btn.jsx";
import Form from "../../components/Form.jsx";
import Input from "../../components/Input.jsx";
import SwitchForm from "../../components/SwitchForm.jsx";

const RegistrationScreen = ({ navigation }) => {
	const [isShowKeyboard, setIsShowKeyboard] = useState(false);
	const [data, setData] = useState({
		login: "",
		email: "",
		password: "",
	});
	const setter = (name, data) => {
		setData((prev) => ({
			...prev,
			[name]: data,
		}));
	};
	const onPress = () => {
		console.log(data);
		setIsShowKeyboard(false);
		Keyboard.dismiss();
		setData({ login: "", email: "", password: "" });
	};

	const hideKeyboard = () => {
		setIsShowKeyboard(false);
		Keyboard.dismiss();
	};
	return (
		<TouchableWithoutFeedback onPress={() => hideKeyboard()}>
			<View style={styles.container}>
				<ImageBackground
					style={styles.image}
					source={require("../../../assets/BG.png")}
				>
					<Form title={"Регистрация"} type={"register"}>
						<KeyboardAvoidingView behavior="padding">
							<View
								style={{
									marginBottom: isShowKeyboard ? 170 : 0,
								}}
							>
								{register.map(({ name, ...input }) => (
									<Input
										key={input.key}
										input={input}
										val={data[name]}
										setter={(e) => setter(name, e)}
										setIsShowKeyboard={setIsShowKeyboard}
									/>
								))}
							</View>
						</KeyboardAvoidingView>
						<Btn
							text={"Зарегистрироваться"}
							opacity={0.8}
							onPress={onPress}
						/>
						<SwitchForm
							text={"Уже есть аккаунт? Войти"}
							onSwitch={() => navigation.navigate("Login")}
						/>
					</Form>
				</ImageBackground>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default RegistrationScreen;

const styles = StyleSheet.create({
	container: { flex: 1 },
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "flex-end",
	},
});
