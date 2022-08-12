import {Avatar, Box, Container, Flex, Input, InputGroup, InputLeftElement, useDisclosure} from "@chakra-ui/react";
import {IoCameraOutline} from 'react-icons/io5'
import {RiMessengerLine} from 'react-icons/ri'
import Image from "next/image";
import {FiSearch} from 'react-icons/fi'
import {MdHomeFilled} from 'react-icons/md'
import {FaRegPlusSquare} from 'react-icons/fa'
import {BsHeart} from 'react-icons/bs'

// COMPONENTS
import ImageUpload from "./ImageUpload";

// ASSETS
import Logo from "../assets/insta-logo.png";


const Navbar = () => {


    return <>

        <Box
            display={{base: 'block', md: 'none'}}
            w={'100%'}
        >
            <NavbarSM />
        </Box>
        <Box
            display={{base: 'none', md: 'block'}}
            w={'100%'}
        >
            <NavbarMD/>
        </Box>
    </>
}

const NavbarSM = (props) => {
    return <>
        <Container py={'10px'} bg={'white'} boxShadow={'sm'}>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                <IoCameraOutline size={'1.8rem'} />
                <Box w={"150px"} h={"40px"} pos={"relative"}>
                    <Image src={Logo} alt={"Instagram Logo"} layout={"fill"} />
                </Box>
                <RiMessengerLine size={'1.8rem'} />
            </Flex>
        </Container>
    </>
}

const NavbarMD = () => {
    const {isOpen, onClose, onOpen} = useDisclosure()

    return <>
        <ImageUpload isOpen={isOpen} onClose={onClose} />
        <Box bg={'white'} boxShadow={'lg'} zIndex={30}>
            <Container maxW={'container.lg'} >
                <Flex alignItems={'center'} justifyContent={'space-between'} gap={'1rem'} p={'1rem'} >
                    <Box w={'30%'}>
                        <Box w={"150px"} h={"40px"} pos={"relative"}>
                            <Image src={Logo} alt={"Instagram Logo"} layout={"fill"} />
                        </Box>
                    </Box>

                    <Box w={'40%'}>
                        <InputGroup w={'100%'} variant={'filled'}>
                            <InputLeftElement
                                pointerEvents='none'
                            >
                                <FiSearch/>
                            </InputLeftElement>
                            <Input type='search' placeholder='search' />
                        </InputGroup>
                    </Box>

                    <Flex w={'30%'} alignItems={'center'} justifyContent={'space-between'}>
                        <MdHomeFilled size={'1.5rem'} />
                        <FiSearch size={'1.5rem'}/>
                        <FaRegPlusSquare size={'1.5rem'} onClick={onOpen} />
                        <BsHeart size={'1.5rem'}/>
                        <Avatar name={'Pavan'} size={'sm'} />
                    </Flex>
                </Flex>
            </Container>
        </Box>
    </>
}

export default Navbar;