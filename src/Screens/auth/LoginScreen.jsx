import { useState } from "react";
import {
	KeyboardAvoidingView,
	View,
	Keyboard,
	StyleSheet,
	TouchableWithoutFeedback,
	ImageBackground,
} from "react-native";
import { loginForm } from "../../data/formFields";

import Btn from "../../components/Btn";
import Input from "../../components/Input";
import SwitchForm from "../../components/SwitchForm";
import Form from "../../components/Form";

const LoginScreen = ({ navigation }) => {
	const [isShowKeyboard, setIsShowKeyboard] = useState(false);

	const [data, setData] = useState({
		email: "",
		password: "",
	});

	const hideKeyboard = () => {
		setIsShowKeyboard(false);
		Keyboard.dismiss();
	};

	const onPress = () => {
		console.log(data);
		setIsShowKeyboard(false);
		Keyboard.dismiss();
		setData({ email: "", password: "" });
		navigation.navigate("Home");
	};

	const setter = (name, data) => {
		setData((prev) => ({
			...prev,
			[name]: data,
		}));
	};
	return (
		<TouchableWithoutFeedback onPress={() => hideKeyboard()}>
			<View style={styles.container}>
				<ImageBackground
					style={styles.image}
					source={require("../../../assets/BG.png")}
				>
					<Form title={"Войти"} type={"login"}>
						<KeyboardAvoidingView behavior="padding">
							<View
								style={{
									marginBottom: isShowKeyboard ? 260 : 0,
								}}
							>
								{loginForm.map(({ name, ...input }) => (
									<Input
										key={input.key}
										input={input}
										val={data[name]}
										setter={(e) => setter(name, e)}
										setIsShowKeyboard={setIsShowKeyboard}
									/>
								))}
								<Btn
									text={"Войти"}
									opacity={0.8}
									onPress={onPress}
								/>
								<SwitchForm
									text={"Нет аккаунта? Зарегистрироваться"}
									onSwitch={() =>
										navigation.navigate("Registration")
									}
								/>
							</View>
						</KeyboardAvoidingView>
					</Form>
				</ImageBackground>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: { flex: 1 },
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "flex-end",
	},
});
