import {
    FormControl,
    Input,
    Flex, Button,
    Link, Text
} from '@chakra-ui/react'

const RegisterForm = () => {
    return <>
        <Flex flexDir={'column'} gap={'10px'} w={'100%'}>
            <FormControl w={'100%'}>
                <Input
                    type='email'
                    placeholder={'Phone number or email'}
                    aria-label={'Phone number or email'}
                    borderRadius={'4px'}
                    borderColor={'gray.300'}
                    fontSize={'sm'}
                    _focusWithin={{
                        borderColor: 'inherit',
                        boxShadow: 'none',
                    }}
                />
            </FormControl>
            <FormControl w={'100%'}>
                <Input
                    type='text'
                    placeholder={'Full Name'}
                    aria-label={'Full Name'}
                    borderRadius={'4px'}
                    borderColor={'gray.300'}
                    fontSize={'sm'}
                    _focusWithin={{
                        borderColor: 'inherit',
                        boxShadow: 'none',
                    }}
                />
            </FormControl>
            <FormControl w={'100%'}>
                <Input
                    type='text'
                    placeholder={'Username'}
                    aria-label={'Username'}
                    borderRadius={'4px'}
                    borderColor={'gray.300'}
                    fontSize={'sm'}
                    _focusWithin={{
                        borderColor: 'inherit',
                        boxShadow: 'none',
                    }}
                />
            </FormControl>
            <FormControl w={'100%'}>
                <Input
                    type='password'
                    placeholder={'Password'}
                    aria-label={'Password'}
                    borderRadius={'4px'}
                    borderColor={'gray.300'}
                    fontSize={'sm'}
                    _focusWithin={{
                        borderColor: 'inherit',
                        boxShadow: 'none',
                    }}
                />
            </FormControl>
            <Text textAlign={'center'} fontSize={'12px'} lineHeight={'16px'} color={'gray.500'}>
                People who use our service may have uploaded your contact information to Instagram. {" "}
                <Link
                    href={'https://www.facebook.com/privacy/policy'}
                    isExternal
                    fontWeight={'bold'}
                >
                    Learn more
                </Link>
            </Text>
            <Text textAlign={'center'} fontSize={'12px'} lineHeight={'16px'} color={'gray.500'}>
                By registering, you agree to our{" "}
                <Link
                    href={'https://help.instagram.com/581066165581870'}
                    isExternal
                    fontWeight={'bold'}
                >Terms,</Link>
                {" "}
                <Link
                    href={'https://www.facebook.com/privacy/policy'}
                    isExternal
                    fontWeight={'bold'}
                >Privacy Policy</Link>
                {" "} and{" "}
                <Link
                    href={'https://help.instagram.com/1896641480634370?ref=ig'}
                    isExternal
                    fontWeight={'bold'}
                >Cookie Policy</Link>.
            </Text>
            <Button colorScheme={'primary'} borderRadius={'4px'} size={'sm'}>
                Sign Up
            </Button>
        </Flex>
    </>
}

export default RegisterForm;