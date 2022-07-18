import React from "react";
import {
	Box,
	FormErrorMessage,
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
	onStateChange,
	error,
}) => {
	const handleClick = () => setShowPass(!showPass);
	return (
		<>
			{type !== "password" ? (
				<Box>
					<FormLabel htmlFor={id}>{title}</FormLabel>
					<Input
						onChange={onStateChange}
						value={value}
						id={id}
						type={type}
						placeholder={placeholder}
					/>
					{error && <FormErrorMessage>{error}</FormErrorMessage>}
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
						{error && <FormErrorMessage>{error}</FormErrorMessage>}
				</Box>
			)}
		</>
	);
};

export default InputBox;
