import { Box, Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react"

export function Banner(): JSX.Element {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex
            justify='center'
            position='relative'
        >
            {isWideVersion && <Image
                src='/assets/Airplane.svg'
                position='absolute'
                right='140px'
                w='471.15px'
            />}
            <Box
                maxW={isWideVersion ? '1440px' : '375px'}
                w='100%'
                // mx="auto"
                backgroundImage="url('assets/Background.svg')"
                backgroundSize='100%'
            >
                <Text
                    fontSize={['20px', '36px']}
                    fontWeight='500'
                    color='gray.50'
                    maxWidth={['238px', '426px']}
                    ml={['16px', '140px']}
                    mt={['28px', '80px']}
                    lineHeight='30px'
                >
                    <Text as='span' display='block'>5 Continentes,</Text>infinitas possibilidades.
                </Text>

                <Text
                    fontSize={['14px', '20px']}
                    fontWeight='400'
                    color='gray.100'
                    maxWidth={['333px', '524px']}
                    ml={['16px', '140px']}
                    mt={['8px', '20px']}
                    lineHeight='21px'
                    mb={['26px', '70px']}
                >
                    Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                </Text>
            </Box>
        </Flex>
    )
}