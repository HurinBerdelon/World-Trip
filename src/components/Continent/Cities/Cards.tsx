import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { findFlagUrlByCountryName } from "country-flags-svg"

interface CardProps {
    city: {
        id: string
        name: string
        country: string
        continent: string
        flag: string
        cityURL: string
    }
}
// { country, flagURL, imageURL, name }: CardProps
export function Card({ city }: CardProps): JSX.Element {

    const flagUrl = findFlagUrlByCountryName(city.flag)

    return (
        <Flex
            flexDir='column'
            maxW='256px'
            maxH='279px'
            border='1px'
            borderRadius='0.3rem'
            borderColor='yellow.500'
            overflow='hidden'
        // pb={['0', '48px']}
        >
            <Image
                src={city.cityURL}
                alt={city.name}
                objectFit='contain'
                // h='100%'
                // w='100%'
                overflow='hidden'
            />

            <Flex
                px='24px'
                py='20px'
                justifyContent='space-between'
            >
                <Box>
                    <Text
                        fontWeight='600'
                        lineHeight='25px'
                        fontSize='20px'
                        pb='12px'
                    >
                        {city.name}
                    </Text>
                    <Text
                        fontWeight='500'
                        lineHeight='26px'
                        fontSize='16px'
                    >
                        {city.country}
                    </Text>
                </Box>
                <Box alignSelf='center'>
                    <Image src={flagUrl} w='50px' />
                </Box>

            </Flex>
        </Flex >
    )

}