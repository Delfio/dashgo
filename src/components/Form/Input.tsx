import React, { ForwardRefRenderFunction } from "react";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

interface IInputProps extends InputProps {
  type: "email" | "password" | "text" | "number";
  name: string;
  error?: FieldError;
  label: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  { label, name, type, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
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

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export default React.forwardRef(Input);
