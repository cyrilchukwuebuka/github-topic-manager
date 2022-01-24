import { Box, Checkbox, Flex, Link } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { Link as ReactLink } from 'react-router-dom'

const RepoCard = ({ name, id, repo, callback }) => {
    // const [isChecked, setIsChecked] = useState(false);
    // const checked = useRef()
    // callback(repo)
    // console.log(checked.current?.value)

    return (
        <Flex direction='column'>
            <Flex p='5' borderWidth='1px' rounded='md' textTransform='uppercase' justifyContent='space-between'>
                <Link as={ReactLink} to={`/repo/${id}`} _focus={{ outline: 'none' }} _hover={{ textDecoration: 'none', transform: 'scale(1.02)', cursor: "pointer" }}>
                    <Box>{name}</Box>
                </Link>
                <Checkbox onChange={() => callback(repo)} />
            </Flex>
        </Flex>
    )
}

export default RepoCard
