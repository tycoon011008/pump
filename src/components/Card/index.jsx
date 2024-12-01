import { Box, Image, Text } from "@chakra-ui/react";

const Card = () => {
    return (
        <Box width={'full'} background={'#151528'} borderRadius={12} border={'1px solid transparent'} _hover={{borderColor: 'purple.400'}} cursor={'pointer'}>
            <Image src="/images/card.webp" borderTopRadius={12} width={'full'}/>
            <Box gap={2} p={4}>
                <Box display={'flex'} alignItems={'center'}>
                    <Text fontSize={12} color={"white"}>Created by:</Text>&nbsp;
                    <Text textDecoration={'underline'} fontSize={12} color={'purple.300'}>TVh9....PZ4U</Text>
                </Box>
                <Text fontWeight={700} fontSize={18} color={"white"}>Sumpump($ PUMP)</Text>
                <Text fontSize={12} color={'gray.400'} height={'9vh'} maxH={'9vh'} textOverflow={'ellipsis'} overflow={'hidden'}>
                    Pump to the SUN!
                </Text>
                <Box display={"flex"} alignItems={'center'}>
                    <Text fontSize={12} color={'gray.400'}>Marketcap:&nbsp;</Text>
                    <Text fontSize={12} color={"white"}>$7.32k</Text>
                </Box>
                <Box display={'flex'} alignItems={'center'} gap={2}>
                    <Image src="/images/rocket.png" width={6}/>
                    <Text fontSize={14} fontWeight={500} color={"white"}>Listed on SunSwap</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Card;