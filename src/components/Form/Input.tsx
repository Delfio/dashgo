import React, { ForwardRefRenderFunction } from "react";

import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps,
} from "@chakra-ui/react";

interface IInputProps extends InputProps {
  type: "email" | "password" | "text" | "number";
  name: string;
  label: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  { label, name, type, ...rest },
  ref
) => {
  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <ChakraInput
        id={name}
        name={name}
        type={type}
        focusBorderColor="orange.500"
        bg="gray.900"
        variant="filled"
        _hover={{
          bg: "gray.900",
        }}
        size="lg"
        ref={ref}
        {...rest}
      />
    </FormControl>
  );
};

export default React.forwardRef(Input);
