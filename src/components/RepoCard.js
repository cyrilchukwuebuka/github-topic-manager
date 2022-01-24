import { Box, Checkbox, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import { Link as ReactLink } from 'react-router-dom'

const RepoCard = ({ name, id, repo, callback }) => {
    return (
        <Flex direction='column'>
            <Flex p='5' borderWidth='1px' rounded='md' textTransform='uppercase' justifyContent='space-between'>
                <Link as={ReactLink} to={`/repo/${repo.owner.login}${id}${name}`} _focus={{ outline: 'none' }} _hover={{ textDecoration: 'none', transform: 'scale(1.02)', cursor: "pointer" }}>
                    <Box>{name}</Box>
                </Link>
                <Checkbox onChange={() => callback(repo)} />
            </Flex>
        </Flex>
    )
}

export default RepoCard
