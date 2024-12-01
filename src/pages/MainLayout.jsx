import { Box } from "@chakra-ui/react";
import Transactions from "../components/Transactions/Transactions";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <Box width={'100vw'} backgroundColor={'#090b1a'}>
            <Transactions />
            <Header />
            <Outlet />
            <Footer />
        </Box>
    )
}

export default MainLayout;