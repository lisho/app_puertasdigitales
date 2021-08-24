import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';


const BotonDeleteConfirm = ({handleBorrar}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

   const handleClick = () => {
     handleBorrar()
   }
    
    return (
      <>
        <Button onClick={() => onOpen()}
          
          m={4} p={2}>Eliminar</Button>

        <Modal onClose={onClose} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Borrar un registro</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              ¿Realmente quieres eliminar este registro?
            </ModalBody>
            <ModalFooter>
              <Button onClick={()=> handleClick()} m="2">Eliminar</Button>
              <Button onClick={onClose} m="2">Cancelar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
</>

    );
}

export default BotonDeleteConfirm;