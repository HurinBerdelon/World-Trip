import { Box, Flex, Text } from "@chakra-ui/react"

interface ContinentBannerProps {
    bannerURL: string
    continentName: string
}

export function ContinentBanner({ bannerURL, continentName }: ContinentBannerProps): JSX.Element {

    return (
        <Flex
            h={["150px", '620px']}
            justify='center'
        >
            <Box
                w='100%'
                maxW={['375px', '1440px']}
                h='100%'
                // backgroundImage={`url(${bannerURL})`}
                bg={`url(${bannerURL}) bottom`}
                bgSize='cover'
                display='flex'
                alignItems={['center', 'flex-end']}
                justifyContent={['center', 'flex-start']}
            >
                <Text
                    fontSize={['28px', '48px']}
                    fontWeight='600'
                    color='gray.50'
                    ml={['0', '130px']}
                    mb={['0', '50px']}
                    p='10px'
                    borderRadius='0.5rem'
                    bg='gray.500-opacity'
                >
                    {continentName}
                </Text>
            </Box>
        </Flex>
    )
}