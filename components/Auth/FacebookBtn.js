import { Button } from "@chakra-ui/react";
import { FaFacebookSquare } from "react-icons/fa";
const FacebookBtn = (props) => {
  return (
    <>
      <Button
        bg={props.bg}
        color={props.color}
        leftIcon={<FaFacebookSquare />}
        variant={props.variant}
        w={"full"}
        fontSize={props.fontSize}
      >
        {props.text}
      </Button>
    </>
  );
};

export default FacebookBtn;
