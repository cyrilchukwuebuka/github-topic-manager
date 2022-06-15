import { Box, Flex, Text, useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import React, { FC } from 'react';

const HowItWorks: FC<{}> = () => {
    const [isLargerThan653] = useMediaQuery('(min-width: 653px)')
    const bgColor = useColorModeValue('themeLight.textColor', 'themeDark.textColor')

    return (
        <Flex direction={isLargerThan653 ? 'row' : 'column'} maxW='container.xl' w='100%' h='calc(100vh - 80px)' padding={5}>
            <Flex w={isLargerThan653 ? '50%' : '100%'} h={isLargerThan653 ? '100%' : '50%'} direction='column' align='center'>
                <Text mb='5%' textDecoration='underline' fontSize={{ base: '18px', md: '26px', lg: '38px' }} textAlign='center' fontWeight='600'>About</Text>
                <Text mb='5%' maxW='90%' fontStyle='italic' fontSize={{ base: '12px', md: '16px', lg: '20px' }} textAlign='justify'>This Application streamlines the process of adding or removal of Topics by developers and github users to one or more github repositories. With topics, exploring repositories in a particular subject area, finding projects to contribute to, and discovering new solutions to a specific problem becomes easy. Topics appear on the main page of a repository. Clicking on a topic name refers you to see related topics and a list of other repositories classified with that topic.</Text>
            </Flex>
            <Flex px='3%' w={isLargerThan653 ? '50%' : '100%'} direction='column'>
                <Text h='6%' mb='2%' textDecoration='underline' fontSize={{ base: '18px', md: '23px', lg: '28px' }} textAlign='center' fontWeight='600'>How It Works</Text>
                <Flex mt={isLargerThan653 ? '' : '2.5%'} h={isLargerThan653 ? 'fit-content' : '200px'} direction='column' align='center' overflowY='scroll' scrollBehavior='smooth' sx={{
                    '&::-webkit-scrollbar': {
                        width: '5px',
                        borderRadius: '5px',
                        backgroundColor: `rgba(0, 0, 0, 0.05)`,
                    },
                    '&::-webkit-scrollbar-thumb': {
                        borderRadius: '5px',
                        backgroundColor: `rgba(0, 0, 0, 0.05)`,
                    },
                }}>
                    <Flex w='100%' px='5%' align='center' justify='flex-start'>
                        <Flex w='5%'>
                            <Box h={{ base: '4px', md: '6px', lg: '8px' }} w={{ base: '4px', md: '6px', lg: '8px' }} bgColor={bgColor} borderRadius='50%'></Box>
                        </Flex>
                        <Flex w='95%'>
                            <Text textAlign='justify' fontStyle='italic' fontSize={{ base: '12px', md: '18px', lg: '16px' }}>To be able to make use of the application, you first need to log in with a github account credentials</Text>
                        </Flex>
                    </Flex>
                    <Flex w='100%' mb='10px' px='5%' align='center' justify='flex-start'>
                        <Flex w='5%'>
                            <Box h={{ base: '4px', md: '6px', lg: '8px' }} w={{ base: '4px', md: '6px', lg: '8px' }} bgColor={bgColor} borderRadius='50%'></Box>
                        </Flex>
                        <Flex w='95%'>
                            <Text textAlign='justify' fontStyle='italic' fontSize={{ base: '12px', md: '18px', lg: '16px' }}>Having successfully logged into the user's github account, the application lists all existing github repositories it has access to</Text>
                        </Flex>
                    </Flex>
                    <Flex w='100%' mb='10px' px='5%' align='center' justify='flex-start'>
                        <Flex w='5%'>
                            <Box h={{ base: '4px', md: '6px', lg: '8px' }} w={{ base: '4px', md: '6px', lg: '8px' }} bgColor={bgColor} borderRadius='50%'></Box>
                        </Flex>
                        <Flex w='95%'>
                            <Text textAlign='justify' fontStyle='italic' fontSize={{ base: '12px', md: '18px', lg: '16px' }}>The user can then proceed to select the number of repositories to add/remove specific topic(s)</Text>
                        </Flex>
                    </Flex>
                    <Flex w='100%' mb='10px' px='5%' align='center' justify='flex-start'>
                        <Flex w='5%'>
                            <Box h={{ base: '4px', md: '6px', lg: '8px' }} w={{ base: '4px', md: '6px', lg: '8px' }} bgColor={bgColor} borderRadius='50%'></Box>
                        </Flex>
                        <Flex w='95%'>
                            <Text textAlign='justify' fontStyle='italic' fontSize={{ base: '12px', md: '18px', lg: '16px' }}>When done with the selection, click on the "Add Topic" button to pop up a new display</Text>
                        </Flex>
                    </Flex>
                    <Flex w='100%' mb='10px' px='5%' align='center' justify='flex-start'>
                        <Flex w='5%'>
                            <Box h={{ base: '4px', md: '6px', lg: '8px' }} w={{ base: '4px', md: '6px', lg: '8px' }} bgColor={bgColor} borderRadius='50%'></Box>
                        </Flex>
                        <Flex w='95%'>
                            <Text textAlign='justify' fontStyle='italic' fontSize={{ base: '12px', md: '18px', lg: '16px' }}>Type in the topic or topics with comma seperated</Text>
                        </Flex>
                    </Flex>
                    <Flex w='100%' mb='10px' px='5%' align='center' justify='flex-start'>
                        <Flex w='5%'>
                            <Box h={{ base: '4px', md: '6px', lg: '8px' }} w={{ base: '4px', md: '6px', lg: '8px' }} bgColor={bgColor} borderRadius='50%'></Box>
                        </Flex>
                        <Flex w='95%'>
                            <Text textAlign='justify' fontStyle='italic' fontSize={{ base: '12px', md: '18px', lg: '16px' }}>Click on the "Add" button to add those topic(s) to the repo(s) selected</Text>
                        </Flex>
                    </Flex>
                    <Flex w='100%' mb='10px' px='5%' align='center' justify='flex-start'>
                        <Flex w='5%'>
                            <Box h={{ base: '4px', md: '6px', lg: '8px' }} w={{ base: '4px', md: '6px', lg: '8px' }} bgColor={bgColor} borderRadius='50%'></Box>
                        </Flex>
                        <Flex w='95%'>
                            <Text textAlign='justify' fontStyle='italic' fontSize={{ base: '12px', md: '18px', lg: '16px' }}>Same process applies when removing topic(s) from repo(s)</Text>
                        </Flex>
                    </Flex>
                    <Flex w='100%' mb='10px' px='5%' align='center' justify='flex-start'>
                        <Flex w='5%'>
                            <Box h={{ base: '4px', md: '6px', lg: '8px' }} w={{ base: '4px', md: '6px', lg: '8px' }} bgColor={bgColor} borderRadius='50%'></Box>
                        </Flex>
                        <Flex w='95%'>
                            <Text textAlign='justify' fontStyle='italic' fontSize={{ base: '12px', md: '18px', lg: '16px' }}>Having successfully made changes to repo(s) topic, user can proceed to check out each repo for changes made to it</Text>
                        </Flex>
                    </Flex>
                    <Flex w='100%' mb='10px' px='5%' align='center' justify='flex-start'>
                        <Flex w='5%'>
                            <Box h={{ base: '4px', md: '6px', lg: '8px' }} w={{ base: '4px', md: '6px', lg: '8px' }} bgColor={bgColor} borderRadius='50%'></Box>
                        </Flex>
                        <Flex w='95%'>
                            <Text textAlign='justify' fontStyle='italic' fontSize={{ base: '12px', md: '18px', lg: '16px' }}>Having successfully made changes to repo(s) topic, user can proceed to check out each repo for changes made to it</Text>
                        </Flex>
                    </Flex>
                    <Flex w='100%' mb='10px' px='5%' align='center' justify='flex-start'>
                        <Flex w='5%'>
                            <Box h={{ base: '4px', md: '6px', lg: '8px' }} w={{ base: '4px', md: '6px', lg: '8px' }} bgColor={bgColor} borderRadius='50%'></Box>
                        </Flex>
                        <Flex w='95%'>
                            <Text textAlign='justify' fontStyle='italic' fontSize={{ base: '12px', md: '18px', lg: '16px' }}>Note that it may take a while for the changes to reflect on this application, so the user can click on the "Repo Github Page" button made available to be directed to the specific repository page on github</Text>
                        </Flex>
                    </Flex>
                    <Flex w='100%' mb='10px' px='5%' align='center' justify='flex-start'>
                        <Flex w='5%'>
                            <Box h={{ base: '4px', md: '6px', lg: '8px' }} w={{ base: '4px', md: '6px', lg: '8px' }} bgColor={bgColor} borderRadius='50%'></Box>
                        </Flex>
                        <Flex w='95%'>
                            <Text textAlign='justify' fontStyle='italic' fontSize={{ base: '12px', md: '18px', lg: '16px' }}>Same process followed above also applies while trying to add/remove topic(s) from a repo while in the repository detail page, the changes only effect the specific repository</Text>
                        </Flex>
                    </Flex>
                    <Flex w='100%' mb='10px' px='5%' align='center' justify='flex-start'>
                        <Flex w='5%'>
                            <Box h={{ base: '4px', md: '6px', lg: '8px' }} w={{ base: '4px', md: '6px', lg: '8px' }} bgColor={bgColor} borderRadius='50%'></Box>
                        </Flex>
                        <Flex w='95%'>
                            <Text textAlign='justify' fontStyle='italic' fontSize={{ base: '12px', md: '18px', lg: '16px' }}>When done with the process, the user can choose to log out of the application or remain logged in for future use cases</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default HowItWorks;
