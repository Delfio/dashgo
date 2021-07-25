import { FormControl, FormLabel, Input, InputProps } from "@chakra-ui/react";

interface IInputProps extends InputProps {
  type: "email" | "password" | "text" | "number";
  name: string;
  label: string;
}

export default ({ label, name, type, ...rest }: IInputProps) => (
  <FormControl>
    <FormLabel htmlFor={name}>{label}</FormLabel>
    <Input
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
      {...rest}
    />
  </FormControl>
);
