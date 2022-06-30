import { Flex, Image, Text } from "@chakra-ui/react";

interface TypesProps {
    text: string
    imageURL: string
    isWideVersion: boolean
}

export function Type({ text, imageURL, isWideVersion }: TypesProps): JSX.Element {

    const imageComponent = isWideVersion
        ? <Image src={imageURL} alt="travel type" w='85px' />
        : <Image src="/assets/Ellipse.svg" alt="bullet" />

    return (
        <Flex
            m='0'
            flexDir={isWideVersion ? 'column' : 'row'}
            w={isWideVersion && '158px'}
            align='center'
        >
            {imageComponent}
            <Text fontSize={['18px', '24px']} lineHeight={['27px', '34px']} fontWeight='500' m={['8px', '24px']}>
                {text}
            </Text>
        </Flex>
    )
}