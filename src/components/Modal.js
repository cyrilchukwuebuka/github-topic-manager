import React, { useRef } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Text,
} from '@chakra-ui/react'

const ModalComponent = ({ isOpen, onClose, onRemove, onAdd }) => {
    const focus = useRef()

    return (
        <Modal closeOnOverlayClick={false} initialFocusRef={focus} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent p={4}>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>multiple topics could be added by comma (,) seperating them </FormLabel>
                        <Input ref={focus} placeholder='topic(s)...example github, react, developer' />
                    </FormControl>
                    <Text fontStyle='italic' mt={7}>Topic(s) could also be removed by typing the topic correctly and clicking the 'Remove' button below</Text>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={2} onClick={() => onAdd(focus.current?.value)}>Add</Button>
                    <Button colorScheme='red' variant='outline' mr={3} onClick={() => onRemove(focus.current?.value)}>
                        Remove
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalComponent
