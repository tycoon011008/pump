import { Box, Image, Text } from "@chakra-ui/react";
import { showTransactionHash } from "../../utils";

const Item = ({hash, type, price, coin, icon, token}) => {
    return (
        <Box display={'flex'} alignItems={"center"}>
            <Text color={'#ffffff99'} px={1} fontSize={14}>{showTransactionHash(hash)}</Text>
            <Text color={type === 0 ? '#ffcb1e' : '#35fffe'} fontSize={14} px={1}>{type === 0 ? 'Sold' : 'Bought'}</Text>
            <Text color={'#ffffff99'} fontSize={14} px={1}>{price}</Text>
            <Text color={'#ffffff99'} fontSize={14} px={1}>{coin}&nbsp;of&nbsp;</Text>
            <Image src={icon} width={7} height={7} />
            <Text color={"white"} px={1}>{token}</Text>
        </Box>
    )
}

export default Item;