import { Checkbox, Flex, Link, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import { Link as ReactLink } from 'react-router-dom'
import type { GraphQlQueryResponseData } from "@octokit/graphql";

type Repo = GraphQlQueryResponseData

interface RepoCardProps {
    name: string,
    id: string,
    repo: Repo,
    callback: (repo: Repo) => void
}

const RepoCard: FC<RepoCardProps> = ({ name, id, repo, callback }) => {
    const randomId = Math.floor(Math.random() * 1000000);
    
    return (
        <Flex key={id} direction='column'>
            <Flex p='5' borderWidth='1px' rounded='md' textTransform='uppercase' justifyContent='space-between'>
                <Link as={ReactLink} to={`/repo/${repo?.owner?.login}${randomId}${name}`} _focus={{ outline: 'none' }} _hover={{ textDecoration: 'none', transform: 'scale(1.02)', cursor: "pointer" }}>
                    <Text fontSize={{ base: '14px', md: '16px', lg: '18px' }}>{name}</Text>
                </Link>
                <Checkbox onChange={() => callback(repo)} />
            </Flex>
        </Flex>
    )
}

export default RepoCard
