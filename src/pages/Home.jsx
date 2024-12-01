import { Box, Button, Checkbox, Grid, GridItem, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Progress, Text, VStack } from "@chakra-ui/react";
import { FaSearch, FaAngleDown, FaSortAmountDownAlt } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import Card from "../components/Card";

const Home = () => {
    return (
        <Box width={'100vw'} px={{'2xl':'20vw', xl: '15vw', lg: '10vw', base: '8vw'}} pt={8}>
            <Box display={{md: 'flex', base: 'block'}} width={"full"} justifyContent={'space-between'} alignItems={'center'}>
                <Box>
                    <Image src="/images/pump.svg" alt="pump" />
                    <Text color={"white"} fontWeight={600} fontSize={20}>The First Meme Fair Launch Platform on Tron.</Text>
                    <Text color={"white"} fontWeight={600} fontSize={20}>PUMP TO THE SUN</Text>
                </Box>
                <VStack>
                    <Box display={"flex"} background={'linear-gradient(90.21deg,#ff6058 -10.85%,#ffbd7f 111.64%)'} position={'relative'} borderRadius={'5px'} padding={'3px 10px 3px 23px'}>
                        <Image src="/images/top-badge.png" width={8} left={'-14px'} position={"absolute"}/>
                        <Text color={"black"} fontWeight={600} fontSize={20}>Sunflare: IIIuminate the Peak</Text>
                    </Box>
                    <Box background={'linear-gradient(89.79deg,rgba(255,89,88,.8) .21%,rgba(255,194,88,.8) 101.26%)'} padding={'1px'} borderRadius={'10px'}>
                        <Box display={"flex"} background={'#151527'} borderRadius={'9px'} cursor={"pointer"} width={'25vw'}>
                            <Image src="/images/test.webp" width={'8vw'} borderLeftRadius={'9px'}/>
                            <Box padding={3} width={'17vw'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                                <Box display={"flex"} width={"full"} alignItems={"center"} justifyContent={'space-between'}>
                                    <Box display={"flex"} alignItems={"center"}>
                                        <Text color={"white"} fontSize={12}>Created By: </Text>
                                        <Text color={'#b482ff'} fontSize={12}>TYri...Rxsbe</Text>
                                    </Box>
                                    <Box display={"flex"} alignItems={"center"}>
                                        <Image src="/images/twitter.svg" mx={1} width={4} height={4}/>
                                        <Image src="/images/earth.svg" mx={1} width={4} height={4}/>
                                        <Image src="/images/telegram.svg" mx={1} width={4} height={4}/>
                                    </Box>
                                </Box>
                                <Box>
                                    <Text fontWeight={500} color={"white"}>SUNGOAT ($ SUNGOAT)</Text>
                                    <Text color={'#ffffff99'} fontSize={14}>terminal of truths</Text>
                                </Box>
                                <Box display={'flex'}>
                                    <Text color={'#fff9'} fontSize={12}>Market cap:&nbsp;</Text>
                                    <Text color={'#fff'} fontSize={12}>$62.76k</Text>
                                    <Text color={'#fff9'} fontSize={12}>&nbsp;(82.26%)</Text>
                                </Box>
                                <Box>
                                    <Progress value={80} borderRadius={50} height={'7px'} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </VStack>
            </Box>
            <Box display={{md: 'flex', base: 'block'}} pt={8} width={'full'} justifyContent={'space-between'} alignItems={'center'}>
                <Box width={{md: '50%', base: 'full'}}>
                    <InputGroup width={'80%'}>
                        <InputLeftElement pointerEvents='none'>
                        <FaSearch color="gray"/>
                        </InputLeftElement>
                        <Input type='tel' placeholder='Search for tokens' borderColor={'#ffffff55'} color={"white"} />
                    </InputGroup>
                </Box>
                <Box display={'flex'} width={{md: '50%', base: 'full'}} justifyContent={'space-between'}>
                    <Menu>
                        <MenuButton
                            px={4}
                            py={2}
                            transition='all 0.2s'
                            borderRadius='md'
                            borderWidth='1px'
                            borderColor={'#ffffff55'}
                            _hover={{ color: 'purple.500' }}
                            // _focus={{ boxShadow: 'outline' }}
                        >
                            <Box display={'flex'} alignItems={"center"} justifyContent={'space-between'} gap={4} color={"white"}>
                                Launched Time <FaAngleDown />
                            </Box>
                        </MenuButton>
                        <MenuList background={'#222222'} borderColor={'#ffffff55'}>
                            <MenuItem color={"white"} background={'#222222'}>Launched Time</MenuItem>
                            <MenuItem color={"white"} background={'#222222'}>Trading Volume</MenuItem>
                            <MenuItem color={"white"} background={'#222222'}>Market Cap</MenuItem>
                            <MenuItem color={"white"} background={'#222222'}>24H Price Increase</MenuItem>
                        </MenuList>
                    </Menu>
                    <Box
                        display={'flex'}
                        alignItems={"center"}
                        background={'transparent'}
                        px={4}
                        borderRadius={8}
                        border={'1px solid #ffffff22'}
                        _hover={{
                            color: 'purple.500'
                        }}
                    >
                        <Checkbox color={"white"}>Listed On SunSwap</Checkbox>
                    </Box>
                    <Box display={'flex'} alignItems={'center'} background={'transparent'} px={3} borderRadius={8} border={'1px solid #ffffff22'} cursor={'pointer'} _hover={{color: 'purple.500'}}>
                        <FaSortAmountDownAlt />
                    </Box>
                    <Box display={'flex'} alignItems={'center'} background={'transparent'} px={3} borderRadius={8} border={'1px solid #ffffff22'} cursor={'pointer'} _hover={{color: 'purple.500'}}>
                        <IoMdRefresh />
                    </Box>
                </Box>
            </Box>
            <Box pt={4} width={'full'} overflowX={'hidden'}>
                <Grid width={'full'} templateColumns={{xl: 'repeat(4, 1fr)', lg: 'repeat(3, 1fr)', md: 'repeat(2, 1fr)', base: 'repeat(1, 1fr)'}} gap={{base: 2, lg: 4}} overflowX={'hidden'}>
                    <GridItem><Card /></GridItem>
                    <GridItem><Card /></GridItem>
                    <GridItem><Card /></GridItem>
                    <GridItem><Card /></GridItem>
                    <GridItem><Card /></GridItem>
                    <GridItem><Card /></GridItem>
                    <GridItem><Card /></GridItem>
                    <GridItem><Card /></GridItem>
                    <GridItem><Card /></GridItem>
                    <GridItem><Card /></GridItem>
                    <GridItem><Card /></GridItem>
                    <GridItem><Card /></GridItem>
                </Grid>
            </Box>
            <Box py={8} display={'flex'} justifyContent={'center'} width={'full'}>
                <Button backgroundColor={'#1d1dfc'} fontSize={18} _hover={{background: '#1d1dfc'}} color={"white"}>Load More</Button>
            </Box>
            <Box width={'full'} position={'relative'} display={'flex'} alignItems={'center'}>
                <Image src="/images/footer.svg" minW={{base: '100vw', lg: '40vw'}} ml={{base: '-8vw', lg: '0vw'}}/>
                <Box width={"full"} position={'absolute'}>
                    <Box width={'full'} pt={4} justifyContent={'center'} display={'flex'} gap={4}>
                        <InputGroup width={'45%'}>
                            <InputLeftElement pointerEvents='none'>
                            <FaSearch color="gray"/>
                            </InputLeftElement>
                            <Input type='tel' placeholder='Search for tokens' color={"white"} borderColor={'#ffffff55'}/>
                        </InputGroup>
                        <Button background={'white'} color={'black'} _hover={{background: 'white'}}>Subscribe</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Home;
