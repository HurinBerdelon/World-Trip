import { Box, Center, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { Banner } from "../components/Banner";
import { Continents } from "../components/Continents";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";
import { api } from "../services/api";

interface HomeProps {
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

export default function Home({ continents }: HomeProps) {

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true
	})

	return (
		<Flex
			flexDir="column"
			maxW={isWideVersion && '1440px'}
			mx='auto'
		>
			<Header isHome={true} />
			<Banner />
			<TravelTypes />

			<Center flex='1' my='15px'>
				<img src='/assets/Divider.svg' alt='divider' />
			</Center>

			<Flex
				align='center'
				justify='center'
			>
				<Text fontWeight='500' fontSize={['20px', '36px']} lineHeight={['30px', '54px']}>
					<Box textAlign='center' as='span' display='block'>Vamos nessa?</Box>
					Então escolha seu continente
				</Text>
			</Flex>
			<Continents continents={continents} />

		</Flex>
	)
}

export const getStaticProps: GetStaticProps = async () => {

	const { data: continents } = await api.get('/continents')

	return {
		props: { continents: continents }
	}
}