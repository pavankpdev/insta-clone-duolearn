import {Avatar, Box, Container, Flex, Text} from "@chakra-ui/react";
import {BsThreeDots} from 'react-icons/bs'
import Image from 'next/image'
import {BsHeart, BsBookmark, BsChat} from 'react-icons/bs'
import {FiSend} from 'react-icons/fi'

const FeedItem = () => {
    return <>
        <Flex flexDir={'column'} bg={'white'} boxShadow={'sm'}>

            <Flex alignItems={'center'} justifyContent={'space-between'} px={'10px'} py={'1rem'}>
                <Flex alignItems={'center'} gap={'10px'}>
                    <Avatar name={'Pavan'} size={'sm'} />
                    <Text>Pavan</Text>
                </Flex>
                <BsThreeDots size={'1.5rem'} />
            </Flex>

            <Box w={'100%'} h={'400px'} pos={'relative'}>
                <Image
                    src={'https://instagram.fblr2-1.fna.fbcdn.net/v/t51.2885-15/297516488_632029231409297_2131938439554666751_n.webp?stp=dst-jpg_e35&cb=2d435ae8-d7f9aae8&_nc_ht=instagram.fblr2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=2qaFccQti-kAX9ztCL5&edm=AJ9x6zYBAAAA&ccb=7-5&ig_cache_key=Mjg5ODAyODU2NTIzMzYzNzM4MQ%3D%3D.2-ccb7-5&oh=00_AT_N7cV9D3powKDiQpr9-xT_spUd1msgysUW1eenp9O3Ww&oe=62FB3BD8&_nc_sid=cff2a4'}
                    alt={'Demo feed image'}
                    layout={'fill'}
                />
            </Box>

            <Container>
                <Flex my={'1rem'} alignItems={'center'} justifyContent={'space-between'}>
                    <Flex alignItems={'center'} gap={'1rem'}>
                        <BsHeart size={'1.5rem'} />
                        <BsChat  size={'1.5rem'} />
                        <FiSend size={'1.5rem'} />
                    </Flex>

                    <BsBookmark size={'1.5rem'}  />
                </Flex>

                <Flex  alignItems={'center'} gap={'5px'}>
                    <Avatar name={'Duolearn'} size={'xs'} />
                    <Text fontSize={'sm'}>Liked by</Text>
                    <Text fontSize={'sm'} fontWeight={'bold'}>the_duolearn</Text>
                    <Text fontSize={'sm'}>and</Text>
                    <Text fontSize={'sm'} fontWeight={'bold'}>100 others</Text>
                </Flex>

                <Text my={'1rem'} textTransform={'uppercase'} fontSize={'xs'} color={'gray.600'}>6 days ago</Text>
            </Container>

        </Flex>
    </>
}

export default FeedItem;