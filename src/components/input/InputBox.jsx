import React from "react";
import {
	Box,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react";
import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
const InputBox = ({
	value,
	id,
	title,
	type,
	placeholder,
	showPass,
	setShowPass,
	onStateChange
}) => {
	const handleClick = () => setShowPass(!showPass);
	return (
		<>
			{type !== "password" ? (
				<Box>
					<FormLabel htmlFor={id}>{title}</FormLabel>
					<Input onChange={onStateChange} value={value} id={id} type={type} placeholder={placeholder} />
				</Box>
			) : (
				<Box>
					<FormLabel htmlFor="password">{title}</FormLabel>
					<InputGroup>
						<Input
							id={id}
							type={showPass ? "text" : "password"}
							placeholder={placeholder}
							value={value}
							onChange={onStateChange}
						/>
						<InputRightElement>
							{showPass ? (
								<ViewOffIcon onClick={handleClick} />
							) : (
								<ViewIcon onClick={handleClick} />
							)}
						</InputRightElement>
					</InputGroup>
				</Box>
			)}
		</>
	);
};

export default InputBox;
