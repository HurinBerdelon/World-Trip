import { Flex, Icon, Text, Tooltip } from "@chakra-ui/react";
import { Info as InfoIcon } from 'phosphor-react'

interface InfoProps {
    title: string
    amount: string
    info?: boolean
}

export function Info({ title, info = false, amount }: InfoProps): JSX.Element {

    return (
        <Flex
            flexDir='column'
            pr='42px'
        >
            <Text
                color='yellow.500'
                fontSize={['24px', '48px']}
                fontWeight='600'
                lineHeight={['36px', '72px']}
            >
                {amount}
            </Text>
            <Text
                color='gray.500'
                fontSize={['16px', '24px']}
                lineHeight={['27px', '36px']}
                display='flex'
                justifyContent='center'
            >
                {info
                    ? (
                        <>
                            {title}
                            <Tooltip label={`${amount} among the 100 more famous cities`}>
                                <Icon
                                    as={InfoIcon}
                                    color='gray.300'
                                    ml={['2px', '5px']}
                                    mt='5px'
                                    fontSize={['16px', '24px']} />
                            </Tooltip>
                        </>
                    )
                    : title
                }
            </Text>
        </Flex >
    )
}