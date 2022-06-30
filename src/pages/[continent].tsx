import { Flex } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Cities } from "../components/Continent/Cities";
import { ContinentBanner } from "../components/Continent/ContinentBanner";
import { ContinentDescription } from "../components/Continent/ContinentDescription";
import { ContinentInfo } from "../components/Continent/Infos";
import { Header } from "../components/Header";
import { api } from "../services/api";


interface ContinentsProps {
    continentInfo: {
        id: string
        title: string
        name: string
        bannerURL: string
        decription: string
        countries: string
        languages: string
        numberOfTop100Cities: string
    },
    cities: {
        id: string
        name: string
        country: string
        continent: string
        flag: string
        cityURL: string
    }[]
}

export default function Continents(props: ContinentsProps) {

    return (
        <Flex flexDir="column">
            <Header />
            <ContinentBanner bannerURL={props.continentInfo.bannerURL} continentName={props.continentInfo.name} />
            <Flex
                flexDir={['column', 'row']}
                align='center'
                justify={['center', 'space-between']}
                w={['375px', '1160px']}
                m='auto'
            >
                <ContinentDescription description={props.continentInfo.decription} />
                <ContinentInfo
                    countries={props.continentInfo.countries}
                    languages={props.continentInfo.languages}
                    numberOfTop100Cities={props.continentInfo.numberOfTop100Cities}
                />
            </Flex>
            <Cities cities={props.cities} />
        </Flex>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [
            { params: { continent: 'africa' } },
            { params: { continent: 'north-america' } },
            { params: { continent: 'south-america' } },
            { params: { continent: 'asia' } },
            { params: { continent: 'europe' } },
            { params: { continent: 'oceania' } },
        ],
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { continent } = params

    const { data: citiesData } = await api.get(`/cities?continent=${continent}`)
    const { data: continentData } = await api.get(`/continents?title=${continent}`)

    const props: ContinentsProps = {
        continentInfo: continentData[0],
        cities: citiesData
    }

    return {
        props
    }
}