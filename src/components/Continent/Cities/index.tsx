import { Flex, Text, Wrap } from "@chakra-ui/react";
import { Card } from "./Cards";

interface CitiesProps {
    cities: {
        id: string
        name: string
        country: string
        continent: string
        flag: string
        cityURL: string
    }[]
}

export function Cities({ cities }: CitiesProps): JSX.Element {

    return (
        <Flex justify='center'>

            <Flex
                px={['16px', '0']}
                pt={['0', '40px']}
                mb='10px'
                flexDir='column'
                w={['375px', '1160px']}
            >
                <Text
                    py={['20px', '40px']}
                    as='header'
                    fontSize={['24px', '36ox']}
                    fontWeight='500'
                    lineHeight={['36px', '54px']}
                >

                    Cidades 100+
                </Text>

                <Wrap
                    direction={['column', 'row']}
                    align='center'
                    spacing={['20px', '45px']}
                >
                    {cities.map(city => (
                        <Card key={city.id} city={city} />
                    ))}
                </Wrap>

            </Flex>
        </Flex>
    )
}