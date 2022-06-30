import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        yellow: {
            "500": "#FFBA08"
        },
        gray: {
            "50": "#F5F8FA",
            "100": "#DADADA",
            "300": "#999999",
            "500": "#47585B",
            "500-opacity": "#47585B65",
            "900": "#1C1401"
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'gray.500'
            }
        }
    }
})