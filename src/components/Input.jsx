import { useState } from "react";
import {
	TextInput,
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
} from "react-native";

const Input = ({ input, val, setter, setIsShowKeyboard }) => {
	const [isShowPass, setIsShowPass] = useState(true);

	const [isFocus, setIsFocus] = useState(false);

	const focusBorder = isFocus ? "#FF6C00" : "#E8E8E8";

	const onShow = () => {
		setIsShowPass(!isShowPass);
	};

	const onChange = (e) => {
		setter(e);
	};

	const onFocus = () => {
		setIsFocus(!isFocus);
		setIsShowKeyboard(true);
	};

	const onBlur = () => {
		setIsFocus(!isFocus);
	};

	const isPass = input.type === "Password";
	return (
		<View style={styles.wrapper}>
			<TextInput
				onFocus={() => onFocus()}
				onBlur={() => onBlur()}
				value={val}
				onChangeText={(e) => onChange(e)}
				placeholderTextColor={"#BDBDBD"}
				style={{ borderColor: focusBorder, ...styles.input }}
				placeholder={input.placeholder}
				secureTextEntry={isPass && isShowPass ? true : false}
			/>

			{isPass && (
				<TouchableOpacity
					style={styles.showWrapper}
					onPress={onShow}
					activeOpacity={0.7}
				>
					<Text style={styles.showText}>
						{isShowPass ? "Скрыть" : "Показать"}
					</Text>
				</TouchableOpacity>
			)}
		</View>
	);
};

export default Input;

const styles = StyleSheet.create({
	wrapper: { marginBottom: 32 },
	input: {
		width: 300,

		padding: 16,

		// fontWeight: 400,
		fontSize: 16,
		// lineHeight: "1",
		color: "#212121",
		backgroundColor: "#F6F6F6",

		borderWidth: 1,
		borderRadius: 8,
	},
	showWrapper: {
		position: "absolute",
		right: 16,
		top: 16,
	},
	showText: {
		fontSize: 16,
		// fontWeight: 400,
		color: "#1B4371",
	},
});
