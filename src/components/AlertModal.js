import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';

const AlertModal = ({open}) => {
    // const [isOpen, setIsOpen] = useState(open)
    let isOpen = false;
    // const { isOpen, onOpen, onClose } = useDisclosure()
    // const callbackUsed = useCallback(() => {
    //     callback(onOpen, onClose)
    // })
    // callbackUsed()
    const close = () => {
        isOpen = !isOpen
    }
    // const close = () => {
    //     isOpen = true
    // }

    return (
        <>
            <Modal isOpen={isOpen}>
                <ModalOverlay/>
                <ModalContent p={5}>
                    <ModalCloseButton onClick={close}/>
                    <ModalBody>
                        <Text textAlign='center'>The Topic update takes a while to reflect on this app,...but you can as well check it out on the repository github page by clicking the "REPO GITHUB PAGE" button</Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
};

export default AlertModal;
