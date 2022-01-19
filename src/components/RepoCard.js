import { Checkbox, Flex } from '@chakra-ui/react'
import React from 'react'

const RepoCard = ({ name }) => {
    return (
        <Flex direction='column'>
            <Flex p='5' borderWidth='1px' rounded='md' textTransform='uppercase' justifyContent='space-between'>
                {name}
                <Checkbox />
            </Flex>
        </Flex>
    )
}

export default RepoCard
