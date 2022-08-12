import {MdHomeFilled} from 'react-icons/md'
import {FiSearch} from 'react-icons/fi'
import {FaRegPlusSquare} from 'react-icons/fa'
import {BsHeart} from 'react-icons/bs'
import {Avatar, Container, Flex, useDisclosure} from "@chakra-ui/react";

// COMPONENTS
import ImageUpload from "./ImageUpload";

const FloatingNavbar = () => {
    const {isOpen, onClose, onOpen} = useDisclosure()
    return <>
        <ImageUpload isOpen={isOpen} onClose={onClose} />
        <Container bg={'white'} boxShadow={'md'} py={'.5rem'}>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                <MdHomeFilled size={'1.5rem'} />
                <FiSearch size={'1.5rem'}/>
                <FaRegPlusSquare size={'1.5rem'} onClick={onOpen} />
                <BsHeart size={'1.5rem'}/>
                <Avatar name={'Pavan'} size={'sm'} />
            </Flex>
        </Container>
    </>
}

export default FloatingNavbar;