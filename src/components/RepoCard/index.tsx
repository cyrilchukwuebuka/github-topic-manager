import { Checkbox, Flex, Link, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import { Link as ReactLink } from 'react-router-dom'
import { CreateRepoResponseType } from 'src/services/githubOctokit'

type Repo = Partial<CreateRepoResponseType['data']>

interface RepoCardProps {
    name: string,
    id: number,
    repo: Repo,
    callback: (repo: Repo) => void
}

const RepoCard: FC<RepoCardProps> = ({ name, id, repo, callback }) => {
    return (
        <Flex direction='column'>
            <Flex p='5' borderWidth='1px' rounded='md' textTransform='uppercase' justifyContent='space-between'>
                <Link as={ReactLink} to={`/repo/${repo?.owner?.login}${id}${name}`} _focus={{ outline: 'none' }} _hover={{ textDecoration: 'none', transform: 'scale(1.02)', cursor: "pointer" }}>
                    <Text fontSize={{ base: '14px', md: '16px', lg: '18px' }}>{name}</Text>
                </Link>
                <Checkbox onChange={() => callback(repo)} />
            </Flex>
        </Flex>
    )
}

export default RepoCard
