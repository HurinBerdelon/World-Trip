import { Flex } from "@chakra-ui/react";
import { Info } from "./Info";

interface ContinentInfoProps {
    countries: string
    languages: string
    numberOfTop100Cities: string
}

export function ContinentInfo({ countries, languages, numberOfTop100Cities }: ContinentInfoProps): JSX.Element {

    return (
        <Flex justify='center'>
            <Flex
                justify='flex-start'
                p={['16px', '80px']}
                pr={['16px', '450px']}
                maxW='375px'
            >
                <Info title='países' amount={countries} />
                <Info title='línguas' amount={languages} />
                <Info title='cidades 100+' info={true} amount={numberOfTop100Cities} />
            </Flex>
        </Flex>
    )

}