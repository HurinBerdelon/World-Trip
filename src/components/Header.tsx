import { Box, Flex, Icon, Image, Link as ChakraLink, useBreakpointValue } from '@chakra-ui/react'
import Link from 'next/link'
import { CaretLeft } from 'phosphor-react'

interface HeaderProps {
    isHome?: boolean
}

export function Header({ isHome = false }: HeaderProps): JSX.Element {

    const isDesktopVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex
            position='relative'
            as='header'
            h={isDesktopVersion ? '100px' : '50px'}
            align='center'
            justify='center'
            w='100%'
        >
            {!isHome && (
                <Link
                    href='/'
                >
                    <ChakraLink position='absolute' left={['16px', '60px']} top={['16px', '34px']}>
                        <Icon as={CaretLeft} fontSize={['16px', '32px']} />
                    </ChakraLink>
                </Link>
            )}
            <Box>
                <Image src="/assets/Logo.svg" alt="World Trip Logo" width='180px' />
            </Box>
        </Flex>
    )
}