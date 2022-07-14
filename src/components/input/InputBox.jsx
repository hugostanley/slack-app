import React from "react";
import {
	Box,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react";
import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
const InputBox = ({handleChange, id, title, type, placeholder, showPass, setShowPass }) => {
	const handleClick = () => setShowPass(!showPass);
	return (
		<>
			{type !== "password" ? (
				<Box>
					<FormLabel htmlFor={id}>{title}</FormLabel>
					<Input onChange={handleChange} id={id} type={type} placeholder={placeholder} />
				</Box>
			) : (
				<Box>
					<FormLabel htmlFor="password">{title}</FormLabel>
					<InputGroup>
						<Input
							id="password"
							type={showPass ? "text" : "password"}
							placeholder={placeholder}
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
