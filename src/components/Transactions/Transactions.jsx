import { Box } from "@chakra-ui/react";
import Item from "./Item";

const Transactions = () => {
    return (
        <Box width={'100vw'} backgroundColor={'#1b182b'} py={1} overflowX={'hidden'}>
            <Box display={"flex"} animation={`linear scroll ${2 * 8}s infinite`}>
                <Item hash={'0xfdsf0fds0f0ds0fd0sf0d0s0f0ds'} type={0} price={2356.15} coin={'TRX'} icon={'/logo192.png'} token={'CZC'}/>
                <Box width={'3px'} background={'#ffffff55'} my={1} mx={3}></Box>
                <Item hash={'0xfdsf0fds0f0ds0fd0sf0d0s0f0ds'} type={0} price={2356.15} coin={'TRX'} icon={'/logo192.png'} token={'CZC'}/>
                <Box width={'3px'} background={'#ffffff55'} my={1} mx={3}></Box>
                <Item hash={'0xfdsf0fds0f0ds0fd0sf0d0s0f0ds'} type={0} price={2356.15} coin={'TRX'} icon={'/logo192.png'} token={'CZC'}/>
                <Box width={'3px'} background={'#ffffff55'} my={1} mx={3}></Box>
                <Item hash={'0xfdsf0fds0f0ds0fd0sf0d0s0f0ds'} type={0} price={2356.15} coin={'TRX'} icon={'/logo192.png'} token={'CZC'}/>
                <Box width={'3px'} background={'#ffffff55'} my={1} mx={3}></Box>
                <Item hash={'0xfdsf0fds0f0ds0fd0sf0d0s0f0ds'} type={0} price={2356.15} coin={'TRX'} icon={'/logo192.png'} token={'CZC'}/>
                <Box width={'3px'} background={'#ffffff55'} my={1} mx={3}></Box>
                <Item hash={'0xfdsf0fds0f0ds0fd0sf0d0s0f0ds'} type={0} price={2356.15} coin={'TRX'} icon={'/logo192.png'} token={'CZC'}/>
                <Box width={'3px'} background={'#ffffff55'} my={1} mx={3}></Box>
                <Item hash={'0xfdsf0fds0f0ds0fd0sf0d0s0f0ds'} type={0} price={2356.15} coin={'TRX'} icon={'/logo192.png'} token={'CZC'}/>
                <Box width={'3px'} background={'#ffffff55'} my={1} mx={3}></Box>
                <Item hash={'0xfdsf0fds0f0ds0fd0sf0d0s0f0ds'} type={0} price={2356.15} coin={'TRX'} icon={'/logo192.png'} token={'CZC'}/>
                <Box width={'3px'} background={'#ffffff55'} my={1} mx={3}></Box>
            </Box>
        </Box>
    )
}

export default Transactions;