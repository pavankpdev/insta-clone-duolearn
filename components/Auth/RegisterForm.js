import {
    FormControl,
    Input,
    Flex, Button,
    Link, Text, Alert
} from '@chakra-ui/react'
import {useRef, useState} from "react";
import {createUser, createUserInFirestore} from "../../utils/firebase-utils";

const RegisterForm = () => {
    const [formFields, setFormFields] = useState({
        email: '',
        fullname: '',
        password: '',
        username: '',
    })
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const formRef = useRef()

    const handleOnChange = (e) => {
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.value,
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            const user = await createUser(formFields)
            await createUserInFirestore(user.user.uid, formFields.fullname, formFields.username)
            setIsLoading(false)
        }
        catch (e) {
            setIsLoading(false)
            setError(e.message)
        }

    }


    return <>
        <Flex flexDir={'column'} gap={'10px'} w={'100%'}>
            <FormControl ref={formRef} w={'100%'}>
                <Input
                    onChange={handleOnChange}
                    value={formFields.email}
                    name={'email'}
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
                    onChange={handleOnChange}
                    value={formFields.fullname}
                    type='text'
                    name={'fullname'}
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
                    onChange={handleOnChange}
                    value={formFields.username}
                    type='text'
                    name={'username'}
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
                    onChange={handleOnChange}
                    value={formFields.password}
                    type='password'
                    name={'password'}
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
            {error ? <Alert status='error'>
                {error}
            </Alert>: ''}
            <Button
                isLoading={isLoading}
                disabled={isLoading}
                onClick={submitHandler} colorScheme={'primary'} borderRadius={'4px'} size={'sm'}>
                Sign Up
            </Button>
        </Flex>
    </>
}

export default RegisterForm;
