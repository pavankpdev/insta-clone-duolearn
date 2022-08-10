import { Flex, FormControl, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = () => {
    
  };

  return (
    <>
      <Flex flexDir={"column"} w={"100%"} gap={"10px"}>
        <FormControl>
          <Input
            type="text"
            placeholder="phone number or username or email"
            border={"1px solid"}
            borderColor={"gray.300"}
            borderRadius={"4px"}
            aria-lable={"phone number or username or email"}
            _focusWithin={{
              borderColor: "gray.500",
              boxShadow: "none",
            }}
            onChange={handleEmailChange}
            value={email}
          />
        </FormControl>
        <FormControl>
          <Input
            type="password"
            placeholder="password"
            aria-lable={"password"}
            border={"1px solid"}
            borderColor={"gray.300"}
            borderRadius={"4px"}
            _focusWithin={{
              borderColor: "gray.500",
              boxShadow: "none",
            }}
            onChange={handlePasswordChange}
            value={password}
          />
        </FormControl>
        <Button
          colorScheme="primary"
          borderRadius={"4px"}
          onClick={handleSubmit}
        >
          Log in
        </Button>
      </Flex>
    </>
  );
};

export default Login;
