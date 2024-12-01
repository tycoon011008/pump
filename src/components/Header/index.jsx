import { Box, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [page,setPage] = useState('');
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('home')) {
            setPage('home');
        }
        else if (location.pathname.includes('launch')) {
            setPage('launch');
        }
        else if (location.pathname.includes('ranking')) {
            setPage('ranking');
        }
        else if (location.pathname.includes('agent')) {
            setPage('agent');
        }
        else {
            setPage('')
        }
    }, [location]);

    return (
        <Box display={"flex"} py={2} px={16} justifyContent={'space-around'} alignItems={"center"}>
            <Image src="/images/logo.svg" cursor={"pointer"} onClick={() => navigate('/')}/>
            <Box display={"flex"}>
                <Box borderBottom={page === 'home' ? '2px solid #b283ff': '2px solid transparent'} px={4} cursor={"pointer"} onClick={() => navigate('/home')}>
                    <Text color={page === 'home' ? "white": 'gray'} fontWeight={500} fontSize={20}>Home</Text>
                </Box>
                <Box borderBottom={page === 'launch' ? '2px solid #b283ff': '2px solid transparent'} px={4} cursor={"pointer"} onClick={() => navigate('/launch')}>
                    <Text color={page === 'launch' ? "white": 'gray'} fontWeight={500} fontSize={20}>Launch</Text>
                </Box>
                <Box borderBottom={page === 'ranking' ? '2px solid #b283ff': '2px solid transparent'} px={4} cursor={"pointer"} onClick={() => navigate('/ranking')}>
                    <Text color={page === 'ranking' ? "white": 'gray'} fontWeight={500} fontSize={20}>Ranking</Text>
                </Box>
                <Box borderBottom={page === 'agent' ? '2px solid #b283ff': '2px solid transparent'} px={4} cursor={"pointer"} onClick={() => navigate('/agent')}>
                    <Text color={page === 'agent' ? "white": 'gray'} fontWeight={500} fontSize={20}>AI agent</Text>
                </Box>
            </Box>
            <Box>
                <Text color={"white"} cursor={'pointer'}>Connect Wallet</Text>
            </Box>
        </Box>
    )
}

export default Header;