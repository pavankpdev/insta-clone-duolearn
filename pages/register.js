import {Box, Divider, Flex, Text, Container, useBreakpointValue} from "@chakra-ui/react";
import Image from "next/image";
import Link from 'next/link'
import Logo from "../assets/insta-logo.png";
import RegisterForm from "../components/Auth/RegisterForm";
import FacebookBtn from "../components/Auth/FacebookBtn";

const Register = () => {

    const containerBG = useBreakpointValue({base: 'transparent', md: 'white'})
    const containerBorder = useBreakpointValue({base: 'none', md: '1px solid rgba(219,219,219,1)'})
    const containerPadding = useBreakpointValue({base: '0', md: '2rem'})

    return <>
        <Container>
            <Flex
                flexDir={'column'}
                h={'100vh'} w={'full'}
                alignItems={'center'}
                gap={'1rem'}
                p={'3rem'}

            >
                <Flex
                    flexDir={'column'}
                    h={'fit-content'} w={'full'}
                    alignItems={'center'}
                    gap={'1rem'}
                    bg={containerBG}
                    width={{base: '100%', md: '80%'}}
                    p={containerPadding}
                    border={containerBorder}
                >
                    <Box pos={'relative'} w={'200px'} h={'60px'} >
                        <Image src={Logo} alt={'Instagram logo'} layout={'fill'} />
                    </Box>
                    <Text textAlign={'center'} fontWeight={'bold'} color={'gray.500'}>
                        Sign up to see photos and videos from your friends.
                    </Text>
                    <Flex flexDir={'column'} w={'full'}>
                        <FacebookBtn bg={'#0095f6'} color={'white'} text={'Sign Up with Facebook'} />
                    </Flex>
                    <Flex w={'100%'} alignItems={'center'} gap={'10px'}>
                        <Divider borderColor={'gray.500'}  />
                        <Text>or</Text>
                        <Divider borderColor={'gray.500'}  />
                    </Flex>
                    <RegisterForm />

                </Flex>
                <Flex
                    py={'1.5rem'}
                    border={containerBorder}
                    px={'3rem'} mb={{base: '50%', md: '0'}}
                    alignItems={'flex-start'}
                    justify={'center'}
                    gap={'4px'}
                    bg={containerBG}
                    h={'fit-content'}
                    width={{base: '100%', md: '80%'}}
                >
                    <Text fontWeight={'medium'} fontSize={'sm'} color={'heading'} >
                        Have an account?
                    </Text>
                    <Link href={'/'}>
                        <Text color={'#0095f6'} fontWeight={'medium'} fontSize={'sm'}>Sign In</Text>
                    </Link>
                </Flex>
                <Flex
                    flexDir={'column'}
                    alignItems={'center'}
                    gap={'10px'}
                >
                    <Text fontWeight={'medium'} fontSize={'md'} color={'heading'}>
                        Get the app.
                    </Text>
                    <Flex gap={'10px'}>
                        <Box pos={'relative'} w={'120px'} h={'40px'}>
                            <Image
                                src={'https://instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png'}
                                alt={'Get it from app store'}
                                layout={'fill'}
                            />
                        </Box>
                        <Box pos={'relative'} w={'120px'} h={'40px'}>
                            <Image
                                src={'https://instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png'}
                                alt={'Get it from app store'}
                                layout={'fill'}
                            />
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
        </Container>
    </>
}

export default Register;