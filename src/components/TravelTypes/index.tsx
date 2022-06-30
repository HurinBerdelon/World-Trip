import { Flex, HStack, useBreakpointValue } from "@chakra-ui/react"
import { Type } from "./Type"

export function TravelTypes(): JSX.Element {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex
            m='auto'
            maxWidth={['275px', '1160px']}
            flexWrap='wrap'
            justifyContent='center'
            mt={['15px', '80px']}
        >
            {isWideVersion
                ? (<>
                    <HStack spacing='130px'>
                        <Type imageURL="/assets/cocktail.svg" text="Vida Noturna" isWideVersion={isWideVersion} />
                        <Type imageURL="/assets/surf.svg" text="Praia" isWideVersion={isWideVersion} />
                        <Type imageURL="/assets/building.svg" text="Moderno" isWideVersion={isWideVersion} />
                        <Type imageURL="/assets/museum.svg" text="Clássico" isWideVersion={isWideVersion} />
                        <Type imageURL="/assets/earth.svg" text="e mais ..." isWideVersion={isWideVersion} />
                    </HStack>
                </>)
                : (<>
                    <Flex flexDir='column' w='60%' justifyContent='space-between'>
                        <Type imageURL="/assets/cocktail.svg" text="Vida Noturna" isWideVersion={isWideVersion} />
                        <Type imageURL="/assets/surf.svg" text="Praia" isWideVersion={isWideVersion} />
                    </Flex>

                    <Flex flexDir='column' w='40%' justifyContent='space-between'>
                        <Type imageURL="/assets/building.svg" text="Moderno" isWideVersion={isWideVersion} />
                        <Type imageURL="/assets/museum.svg" text="Clássico" isWideVersion={isWideVersion} />
                    </Flex>

                    <Type imageURL="/assets/earth.svg" text="e mais ..." isWideVersion={isWideVersion} />
                </>)
            }

        </Flex>
    )
}