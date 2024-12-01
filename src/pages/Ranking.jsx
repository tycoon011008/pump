import { Box, Divider, Image, Progress, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Ranking = () => {
    const navigate = useNavigate();
    return (
        <Box width={'100vw'} px={{'2xl':'20vw', xl: '15vw', lg: '10vw', base: '8vw'}} pt={8}>
            <Box display={'flex'} justifyContent={'center'}>
                <Text fontSize={42} fontWeight={900} background={'linear-gradient(to right,#ffffff,#6d21ff)'} backgroundClip={'text'} textFillColor={'transparent'}>
                    SunPump Ranking
                </Text>
            </Box>
            <Box display={'flex'} justifyContent={'center'}>
                <Text color={'gray.600'} fontWeight={700}>The data was last updated at</Text>
            </Box>
            <Box display={'flex'} gap={4} pt={8} justifyContent={'space-between'}>
                <Box width={'48%'}>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Text color={'white'} fontSize={22} fontWeight={600}>Launching soon!</Text>
                    </Box>
                    <Box>
                        <Box background={'#151528'} border={'1px solid #600eff'} borderRadius={13} padding={4} mt={4}>
                            <Box width={'full'} display={'flex'} justifyContent={'space-between'}>
                                <Text width={'10%'} color={"#fff9"} ></Text>
                                <Text width={'40%'} pl={2} color={"#fff9"}>Name (Symbol)</Text>
                                <Text width={'25%'} pr={4} color={"#fff9"} >Market Cap</Text>
                                <Text width={'25%'} color={"#fff9"} >BondingCurve%</Text>
                            </Box>
                            <Divider py={1} />
                            <Box width={'full'} pt={2}>
                                {
                                    new Array(10).fill(0).map((item, index) => {
                                        return (
                                            <Box>
                                                <Box display={'flex'} justifyContent={'space-between'} pt={1} cursor={'pointer'} onClick={() => navigate('/token/id')}>
                                                    <Box width={'10%'} color={"white"} alignItems={'center'} display={'flex'} justifyContent={'center'}>
                                                        {index < 3 && <Image src={`/images/${index + 1}.png`} width={'40px'}/>}
                                                        {index >= 3 && <Text color={"white"}>{index + 1}</Text>}
                                                    </Box>
                                                    <Text width={'40%'} pl={2} color={"white"} display={'flex'} alignItems={"center"}>
                                                        <Image src="/images/token-logo.png" borderRadius={8} width={8}/>
                                                        &nbsp;BUMP ($BUMP)
                                                    </Text>
                                                    <Box width={'25%'} pr={4} color={"white"} display={'flex'} alignItems={'center'}>$54.23k</Box>
                                                    <Box width={'25%'}>
                                                        <Text color={"white"} textAlign={'right'} pb={2}>73.81%</Text>
                                                        <Progress value={73} borderRadius={50}/>
                                                    </Box>
                                                </Box>
                                                {index < 9 && <Divider py={1} />}
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box width={'48%'}>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Text color={'white'} fontSize={22} fontWeight={600}>Market Cap Ranking</Text>
                    </Box>
                    <Box>
                        <Box background={'#151528'} border={'1px solid #600eff'} borderRadius={13} padding={4} mt={4}>
                            <Box width={'full'} display={'flex'} justifyContent={'space-between'}>
                                <Text width={'10%'} color={"#fff9"} ></Text>
                                <Text width={'40%'} pl={2} color={"#fff9"}>Name (Symbol)</Text>
                                <Text width={'25%'} pr={4} color={"#fff9"} >Market Cap</Text>
                                <Text width={'25%'} color={"#fff9"} >BondingCurve%</Text>
                            </Box>
                            <Divider py={1} />
                            <Box width={'full'} pt={2}>
                                {
                                    new Array(10).fill(0).map((item, index) => {
                                        return (
                                            <Box>
                                                <Box display={'flex'} justifyContent={'space-between'} pt={1} cursor={'pointer'} onClick={() => navigate('/token/id')}>
                                                    <Box width={'10%'} color={"white"} alignItems={'center'} display={'flex'} justifyContent={'center'}>
                                                        {index < 3 && <Image src={`/images/${index + 1}.png`} width={'40px'}/>}
                                                        {index >= 3 && <Text color={"white"}>{index + 1}</Text>}
                                                    </Box>
                                                    <Text width={'40%'} pl={2} color={"white"} display={'flex'} alignItems={"center"}>
                                                        <Image src="/images/token-logo.png" borderRadius={8} width={8}/>
                                                        &nbsp;BUMP ($BUMP)
                                                    </Text>
                                                    <Box width={'25%'} pr={4} color={"white"} display={'flex'} alignItems={'center'}>$54.23k</Box>
                                                    <Box width={'25%'}>
                                                        <Text color={"white"} textAlign={'right'} pb={2}>73.81%</Text>
                                                        <Progress value={73} borderRadius={50}/>
                                                    </Box>
                                                </Box>
                                                {index < 9 && <Divider py={1} />}
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box display={'flex'} gap={4} pt={8} justifyContent={'space-between'}>
                <Box width={'48%'}>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Text color={'white'} fontSize={22} fontWeight={600}>24H Price Increase</Text>
                    </Box>
                    <Box>
                        <Box background={'#151528'} border={'1px solid #600eff'} borderRadius={13} padding={4} mt={4}>
                            <Box width={'full'} display={'flex'} justifyContent={'space-between'}>
                                <Text width={'10%'} color={"#fff9"} ></Text>
                                <Text width={'40%'} pl={2} color={"#fff9"}>Name (Symbol)</Text>
                                <Text width={'25%'} pr={4} color={"#fff9"} >Market Cap</Text>
                                <Text width={'25%'} color={"#fff9"} >BondingCurve%</Text>
                            </Box>
                            <Divider py={1} />
                            <Box width={'full'} pt={2}>
                                {
                                    new Array(10).fill(0).map((item, index) => {
                                        return (
                                            <Box>
                                                <Box display={'flex'} justifyContent={'space-between'} pt={1} cursor={'pointer'} onClick={() => navigate('/token/id')}>
                                                    <Box width={'10%'} color={"white"} alignItems={'center'} display={'flex'} justifyContent={'center'}>
                                                        {index < 3 && <Image src={`/images/${index + 1}.png`} width={'40px'}/>}
                                                        {index >= 3 && <Text color={"white"}>{index + 1}</Text>}
                                                    </Box>
                                                    <Text width={'40%'} pl={2} color={"white"} display={'flex'} alignItems={"center"}>
                                                        <Image src="/images/token-logo.png" borderRadius={8} width={8}/>
                                                        &nbsp;BUMP ($BUMP)
                                                    </Text>
                                                    <Box width={'25%'} pr={4} color={"white"} display={'flex'} alignItems={'center'}>$54.23k</Box>
                                                    <Box width={'25%'}>
                                                        <Text color={"white"} textAlign={'right'} pb={2}>73.81%</Text>
                                                        <Progress value={73} borderRadius={50}/>
                                                    </Box>
                                                </Box>
                                                {index < 9 && <Divider py={1} />}
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box width={'48%'}>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Text color={'white'} fontSize={22} fontWeight={600}>24H Trading Volume(TRX)</Text>
                    </Box>
                    <Box>
                        <Box background={'#151528'} border={'1px solid #600eff'} borderRadius={13} padding={4} mt={4}>
                            <Box width={'full'} display={'flex'} justifyContent={'space-between'}>
                                <Text width={'10%'} color={"#fff9"} ></Text>
                                <Text width={'40%'} pl={2} color={"#fff9"}>Name (Symbol)</Text>
                                <Text width={'25%'} pr={4} color={"#fff9"} >Market Cap</Text>
                                <Text width={'25%'} color={"#fff9"} >BondingCurve%</Text>
                            </Box>
                            <Divider py={1} />
                            <Box width={'full'} pt={2}>
                                {
                                    new Array(10).fill(0).map((item, index) => {
                                        return (
                                            <Box>
                                                <Box display={'flex'} justifyContent={'space-between'} pt={1} cursor={'pointer'} onClick={() => navigate('/token/id')}>
                                                    <Box width={'10%'} color={"white"} alignItems={'center'} display={'flex'} justifyContent={'center'}>
                                                        {index < 3 && <Image src={`/images/${index + 1}.png`} width={'40px'}/>}
                                                        {index >= 3 && <Text color={"white"}>{index + 1}</Text>}
                                                    </Box>
                                                    <Text width={'40%'} pl={2} color={"white"} display={'flex'} alignItems={"center"}>
                                                        <Image src="/images/token-logo.png" borderRadius={8} width={8}/>
                                                        &nbsp;BUMP ($BUMP)
                                                    </Text>
                                                    <Box width={'25%'} pr={4} color={"white"} display={'flex'} alignItems={'center'}>$54.23k</Box>
                                                    <Box width={'25%'}>
                                                        <Text color={"white"} textAlign={'right'} pb={2}>73.81%</Text>
                                                        <Progress value={73} borderRadius={50}/>
                                                    </Box>
                                                </Box>
                                                {index < 9 && <Divider py={1} />}
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Ranking;