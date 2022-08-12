import {Avatar, Button, Flex, Heading, Text} from "@chakra-ui/react";

const Item = (props) => {
    return <>
        <Flex w={'100%'} justifyContent={'space-between'} alignItems={'center'}>
            <Flex alignItems={'center'} gap={'10px'}>
                <Avatar name={props.username} size={'md'} />
                <Flex flexDir={'column'} >
                    <Text as={'h6'} fontSize={'lg'} noOfLines={1} fontWeight={'bold'}>
                        {props.username}
                    </Text>
                    <Text as={'h6'} fontSize={'xs'} textTransform={'uppercase'} color={'gray.500'}>
                        NEw to Instagram
                    </Text>
                </Flex>
            </Flex>

            <Button
                colorScheme={'primary'}
                variant={'ghost'}
                color={'rgb(0, 149, 246)'}
            >
                Follow
            </Button>
        </Flex>
    </>
}

export default Item;