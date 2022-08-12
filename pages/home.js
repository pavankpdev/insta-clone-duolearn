import {Box, Container, Flex, Grid, useBreakpointValue} from "@chakra-ui/react";

// COMPONENTS
import Navbar from "../components/Navbar";
import FloatingNavbar from "../components/FloatingNavbar";
import FeedItem from "../components/FeedItem";
import Suggestions from "../components/Suggestions";

const Home = () => {

    const containerMaxWidth = useBreakpointValue({base: 'container.sm', lg: 'container.lg'});

    return <>
        <Navbar />
        <Container maxW={containerMaxWidth} px={{base: '0', md: '6rem', lg: '4rem'}}>
            <Grid gridTemplateColumns={{base: '1fr', lg: '1fr 1fr'}} gap={'2rem'}>
                <Flex flexDir={'column'} w={'100%'} h={'100vh'} overflowY={'scroll'} gap={'1.5rem'}>
                    <FeedItem />
                    <FeedItem />
                    <FeedItem />
                    <FeedItem />
                    <FeedItem />
                    <FeedItem />
                    <FeedItem />
                    <FeedItem />
                </Flex>
                <Flex w={'100%'} my={'4rem'}>
                    <Suggestions />
                </Flex>
            </Grid>
        </Container>
        <Box
            display={{base: 'block', md: 'none'}}
            pos={'fixed'}
            bottom={'0'}
            zIndex={30}
            w={'100%'}
        >
            <FloatingNavbar />
        </Box>
    </>
}

export default Home;