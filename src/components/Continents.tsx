import { Box, Flex, Text, Link as ChakraLink } from '@chakra-ui/react'
import { Navigation, Pagination, Scrollbar, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { useEffect, useState } from 'react'

interface ContinentProps {
    continents: {
        id: string
        bannerURL: string
        name: string
        countries: string
        description: string
        languages: string
        title: string
        numberOfTop100Cities: string
    }[]
}

export function Continents({ continents }: ContinentProps): JSX.Element {

    const [currentSlideId, setCurrentSlideId] = useState(0)
    const [currentLink, setCurrentLink] = useState('')

    useEffect(() => {
        const currentContinent = continents[currentSlideId]
        setCurrentLink(currentContinent.title)
    }, [currentSlideId])

    return (
        <Flex maxW={['375px', '1440px']} w={['375px', '90vw']} mx='auto' my={['15px', '52px']}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                effect={'fade'}
                // speed={800}
                pagination={{ clickable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={(swiper) => setCurrentSlideId(swiper.realIndex)}
            >
                {continents.map(continent => {
                    return (
                        <SwiperSlide key={continent.id}>
                            <Box
                                h={['220px', '720px']}
                                bgSize='100%'
                                bgImage={`url('${continent.bannerURL}')`}
                                display='flex'
                                justifyContent='center'
                                alignItems='center'
                            >
                                <Link
                                    href={`/${currentLink}`}
                                >
                                    <ChakraLink
                                        textAlign='center'
                                        w='fit-content'
                                        px='10px'
                                        bg='gray.500-opacity'
                                        borderRadius='0.3rem'
                                    >
                                        <Text
                                            color='gray.50'
                                            fontSize={['24px', '48px']}
                                            fontWeight={700}
                                            pb={['12px', '16px']}
                                        >
                                            {continent.name}
                                        </Text>

                                        <Text
                                            color='gray.50'
                                            fontSize={['14px', '24px']}
                                            fontWeight={700}
                                        >
                                            {`${continent.numberOfTop100Cities} cities among the top 100 most visited`}
                                        </Text>
                                    </ChakraLink>
                                </Link>

                            </Box>
                        </SwiperSlide>
                    )
                }
                )}
            </Swiper>
        </Flex >
    )
}

