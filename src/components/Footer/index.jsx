import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box width={'full'} display={'flex'} mt={4} borderTop={'1px solid #ffffff55'} py={6} alignItems={'center'} justifyContent={'space-between'}>
            <Text color={'gray.400'}>© 2024 SunPump. All rights reserved</Text>
            <Box display={'flex'}>
                <Text color={'gray.400'}>This site is protected by reCAPTCHA and the Google &nbsp;</Text>
                <Text color={'purple.400'} textDecoration={'underline'} cursor={'pointer'}>Privacy Policy.</Text>
                <Text color={'gray.400'}>&nbsp;and&nbsp;</Text>
                <Text color={'purple.400'} textDecoration={'underline'} cursor={'pointer'}>Terms of Service</Text>
                <Text color={'gray.400'}>&nbsp;apply.</Text>
            </Box>
        </Box>
    )
}

export default Footer;