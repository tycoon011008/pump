import { Box, Button, Image, Input, Spacer, Text, Textarea } from "@chakra-ui/react";

const Launch = () => {
    return (
        <Box width={'100vw'} px={{'2xl':'25vw', xl: '15vw', lg: '10vw', base: '8vw'}} pt={8}>
            <Box display={'flex'} justifyContent={'center'}>
                <Text fontSize={42} fontWeight={900} background={'linear-gradient(to right,#ffffff,#6d21ff)'} backgroundClip={'text'} textFillColor={'transparent'}>Launch Your Token on SunPump</Text>
            </Box>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Spacer />
                <Box>
                    <Image src="/images/presale.png" width={40}/>
                    <Text textAlign={'center'} color={"white"} fontWeight={800} fontSize={20}>No Presale</Text>
                </Box>
                <Spacer />
                <Box>
                    <Image src="/images/team.png" width={40}/>
                    <Text textAlign={'center'} color={"white"} fontWeight={800} fontSize={20}>No Team Allocation</Text>
                </Box>
                <Spacer />
                <Box>
                    <Image src="/images/gas.png" width={40}/>
                    <Text textAlign={'center'} color={"white"} fontWeight={800} fontSize={20}>Lower Gas</Text>
                </Box>
                <Spacer />
            </Box>
            <Box px={8} py={6} mt={8} background={'rgb(21 21 40)'} borderRadius={20}>
                <Box display={'flex'}>
                    <Box width={'30%'}>
                        <Box display={'flex'} pb={2}>
                            <Text color={"white"} fontWeight={700}>Image</Text>
                            <Text color={'purple.400'}>&nbsp;*</Text>
                        </Box>
                        <Box width={'200px'} height={'200px'} position={"relative"} display={'flex'} flexDirection={'column'} alignItems={'center'} padding={2} background={'#202038'} borderRadius={10} border={'1px solid #4d404d'} justifyContent={'space-around'} cursor={'pointer'}>
                            <Image width={'55px'} src="/images/upload.svg"/>
                            <Box gap={2}>
                                <Text color={'gray.400'} fontWeight={500} textAlign={'center'}>JPEG/PNG/WEBP/GIF</Text>
                                <Text color={'gray.400'} fontWeight={500} textAlign={'center'}>Less Than 4MB</Text>
                            </Box>
                            <Input type="file" position={'absolute'} height={'full'} background={'transparent'} accept="image/*" opacity={0} cursor={'pointer'} color={"white"}/>
                        </Box>
                    </Box>
                    <Box width={'70%'} display={'flex'} flexDir={'column'}>
                        <Box>
                            <Box width={'full'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                <Box display={'flex'} pb={2}>
                                    <Text color={"white"} fontWeight={700}>Token Name</Text>
                                    <Text color={'purple.400'}>&nbsp;*</Text>
                                </Box>
                                <Text color={'gray.400'} fontSize={14}>0/20</Text>
                            </Box>
                            <Input color={"white"}/>
                        </Box>
                        <Spacer />
                        <Box>
                            <Box width={'full'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                <Box display={'flex'} pb={2}>
                                    <Text color={"white"} fontWeight={700}>Token Symbol ($Ticker)</Text>
                                    <Text color={'purple.400'}>&nbsp;*</Text>
                                </Box>
                                <Text color={'gray.400'} fontSize={14}>0/10</Text>
                            </Box>
                            <Input color={"white"}/>
                        </Box>
                    </Box>
                </Box>
                <Box display={'flex'} pt={4} justifyContent={'space-between'}>
                    <Box display={'flex'} pb={2}>
                        <Text color={"white"} fontWeight={700}>Token Description</Text>
                        <Text color={'purple.400'}>&nbsp;*</Text>
                    </Box>
                    <Text color={'gray.400'}>0/256</Text>
                </Box>
                <Textarea color={"white"}/>
                <Text pt={4} color={"white"} fontWeight={700}>Website</Text>
                <Input mt={2} placeholder="Optional" color={"white"}/>
                <Text pt={4} color={"white"} fontWeight={700}>Telegram</Text>
                <Input mt={2} placeholder="Optional" color={"white"}/>
                <Text pt={4} color={"white"} fontWeight={700}>Twitter</Text>
                <Input mt={2} placeholder="Optional" color={"white"}/>

                <Button width={"full"} mt={16} background={'purple.600'} color={"white"}>Connet Wallet</Button>
            </Box>
        </Box>
    )
}

export default Launch;