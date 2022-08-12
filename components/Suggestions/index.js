import {Flex, Heading} from "@chakra-ui/react";
import Item from "./Item";

const Suggestions = () => {
    return <>
        <Flex flexDir={'column'} w={'100%'} gap={'1rem'} display={{base: 'none', lg: 'flex@ai'}}>
            <Heading
                as={'h4'}
                textTransform={'uppercase'}
                size={'xs'}
                color={'gray.500'}
            >
                Suggestions For You
            </Heading>

            <Flex flexDir={'column'} gap={'1rem'}>
                <Item username={'Pavan'}/>
                <Item username={'Dev'}/>
                <Item username={'Gojo'}/>
                <Item username={'Sukuna'}/>
                <Item username={'Pavan'}/>
            </Flex>

        </Flex>
    </>
}

export default Suggestions;