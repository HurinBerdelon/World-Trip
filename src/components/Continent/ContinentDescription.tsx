import { Flex, Text } from "@chakra-ui/react";

interface ContinentDescriptionProps {
    description: string
}

export function ContinentDescription({ description }: ContinentDescriptionProps): JSX.Element {

    return (
        <Flex justify='center'>
            <Text
                fontSize={['14px', '24px']}
                textAlign='justify'
                px={['16px', '0']}
                pr={['16px', '70px']}
                pt={['24px', '80px']}
                maxW={['375px', '600px']}
            >
                {description}
            </Text>
        </Flex>
    )
}