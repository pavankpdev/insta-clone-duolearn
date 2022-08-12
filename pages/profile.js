import Navbar from "../components/Navbar";
import {Avatar, Box, Button, Container, Flex, Grid, Heading, Link, Text} from "@chakra-ui/react";
import Image from 'next/image';

const Profile = () => {
    return <>
        <Navbar />
        <Container>
            <Flex my={'1rem'} w={'100%'} gap={'2rem'}>
                <Avatar name={'Duolearn'} size={'xl'} />
                <Flex flexDir={'column'}  w={'100%'} gap={'10px'}>
                    <Heading as={'h2'} fontSize={'3xl'} fontWeight={'medium'}  w={'100%'}>
                        the_duolearn
                    </Heading>
                    <Button variant={'outline'} size={'sm'} w={'100%'}>
                        Edit profile
                    </Button>
                </Flex>
            </Flex>

            <Flex flexDir={'column'}>
                <Heading as={'h5'} size={'xs'}>
                    Duolearn Hq
                </Heading>
                <Text fontSize={'sm'} fontWeight={'normal'} noOfLines={3}>
                    Duolearn is a platform for learning and sharing knowledge. We are a community of people who love to share knowledge and share our knowledge with the world.
                </Text>
                <Link href={'https://duolearn.tech/'} isExternal color={'blue.500'} fontWeight={'semibold'}>
                    duolearn.tech
                </Link>
            </Flex>
        </Container>

        <Flex my={'2rem'} borderY={'1px solid'} borderColor={'gray.400'} justify={'center'} alignItems={'center'} gap={'3rem'} py={'.8rem'}>
            <Flex flexDir={'column'}  alignItems={'center'}>
                <Text>1</Text>
                <Text color={'gray.500'}>posts</Text>
            </Flex>
            <Flex flexDir={'column'} alignItems={'center'}>
                <Text>13</Text>
                <Text color={'gray.500'}>followers</Text>
            </Flex>
            <Flex flexDir={'column'}  alignItems={'center'}>
                <Text>3</Text>
                <Text color={'gray.500'}>following</Text>
            </Flex>
        </Flex>

        <Grid gridTemplateColumns={{base: 'repeat(3, 1fr)'}} gap={'10px'} px={'1rem'}>
            <Box w={'100'} h={{base: '120px', md: '250px', lg: '400px'}} pos={'relative'}>
                <Image
                    src={'https://instagram.fblr2-1.fna.fbcdn.net/v/t51.2885-15/297516488_632029231409297_2131938439554666751_n.webp?stp=dst-jpg_e35&cb=2d435ae8-d7f9aae8&_nc_ht=instagram.fblr2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=2qaFccQti-kAX9ztCL5&edm=AJ9x6zYBAAAA&ccb=7-5&ig_cache_key=Mjg5ODAyODU2NTIzMzYzNzM4MQ%3D%3D.2-ccb7-5&oh=00_AT_N7cV9D3powKDiQpr9-xT_spUd1msgysUW1eenp9O3Ww&oe=62FB3BD8&_nc_sid=cff2a4'}
                    alt={'Demo feed image'}
                    layout={'fill'}
                />
            </Box>
        </Grid>

    </>
}

export default Profile
