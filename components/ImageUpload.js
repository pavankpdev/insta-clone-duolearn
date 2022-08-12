import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Button, Box,
    Flex, Text, FormControl, Image, Input, Textarea
} from '@chakra-ui/react'
import {AiOutlinePlusSquare} from 'react-icons/ai'
import {useState, useRef} from "react";

const ImageUpload = (props) => {

    const [file, setFile] = useState({
        raw: null,
        preview: ""
    })
    const [caption, setCaption] = useState('')

    const UploadBtnRef = useRef();

    const handleFileUpload = (event) => {
        event.preventDefault();
        const inputfiles = event?.target?.files;
        const objectUrl = URL.createObjectURL(inputfiles[0])

        setFile({raw: inputfiles[0], preview: objectUrl });
        event.target.value = "";
    };

    const openFileSystem = (event) => {
        event.preventDefault();
        UploadBtnRef.current.click();
        return;
    };

    const handleCaptionChange = (e) => {
        setCaption(e.target.value);
    }

    const handleUpload = () => {
        console.log({
            file: file.raw,
            caption: caption
        })
    }

    return <>
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Upload Image</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex
                        flexDir={'column'} w={'100%'} h={'300px'}
                        bg={'gray.200'} alignItems={'center'}
                        justifyContent={'center'} cursor={'pointer'}
                        transition={'all .4s linear'}
                        _hover={{
                            bg: 'gray.300',
                        }}
                    >
                        {
                            file.preview
                                ? <Image src={file?.preview} alt={'File Preview'} w={'100%'} h={'100%'} objectFit={'contain'} onClick={openFileSystem}/>
                                : <Flex flexDir={'column'} alignItems={'center'} onClick={openFileSystem}>
                                    <AiOutlinePlusSquare size={'3rem'}/>
                                    <Text fontSize={'lg'}>Add Image</Text>
                                </Flex>
                        }
                    </Flex>

                    <Flex flexDir={'column'} my={'1rem'}>
                        <FormControl>
                            <Input
                               display={'none'}
                               type={'file'}
                               ref={UploadBtnRef}
                               onChange={handleFileUpload}
                            />
                        </FormControl>
                        <FormControl>
                            <Textarea
                                rows={'6'}
                                placeholder={'Add caption'}
                                aria-label={'Add caption'}
                                border={'1px solid'}
                                borderRadius={'4px'}
                                _focusWithin={{
                                    borderColor: 'gray.600',
                                    boxShadow: 'none'
                                }}
                                onChange={handleCaptionChange}
                                value={caption}
                            />
                        </FormControl>
                    </Flex>
                </ModalBody>

                <ModalFooter>
                    <Button mr={3} onClick={props.onClose}>
                        Close
                    </Button>
                    <Button colorScheme={'primary'} onClick={handleUpload}>Upload</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
}
export default ImageUpload;