import { Box, Button, Divider, Image, Input, Progress, Text, Textarea, theme } from "@chakra-ui/react"
import { FaAngleLeft } from "react-icons/fa";
import { FaRegCopy, FaExternalLinkAlt, FaTelegramPlane, FaUser } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { GiCircleCage } from "react-icons/gi";
import { RiSettingsLine } from "react-icons/ri";
import { AgCharts } from "ag-charts-react";
import "ag-charts-enterprise";
import { useState } from "react";
import getData from "../utils/data";
import { TbMessageDots } from "react-icons/tb";
import { PiShoppingCartSimple } from "react-icons/pi";

const Token = () => {
    const [options, setOptions] = useState({
        data: getData(),
        theme: "ag-default-dark",
        title: {
          text: "S&P 500 Index",
        },
        subtitle: {
          text: "Daily High and Low Prices",
        },
        footnote: {
          text: "1 Aug 2023 - 1 Nov 2023",
        },
        series: [
          {
            type: "candlestick",
            xKey: "date",
            xName: "Date",
            lowKey: "low",
            highKey: "high",
            openKey: "open",
            closeKey: "close",
          },
        ],
    });
    return (
        <Box width={'100vw'} px={{'2xl':'20vw', xl: '15vw', lg: '10vw', base: '8vw'}} pt={8}>
            <Box display={'flex'} alignItems={'center'} cursor={'pointer'}>
                <FaAngleLeft color="gray"/>
                <Text color={'gray.500'}>Back</Text>
            </Box>
            <Box display={'flex'} padding={4} borderRadius={12} background={'#151528'} mt={4}>
                <Box backgroundColor={'#222222'} backgroundImage={'url(/images/token-logo.png)'} width={'200px'} height={'280px'} backgroundPosition={'center'} borderRadius={8} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}></Box>
                <Box px={4} py={1} width={'calc(100% - 200px)'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                    <Box>
                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={"full"}>
                            <Text color={"white"} fontWeight={700} fontSize={24}>BUMP($ BUMP)</Text>
                            <Box display={'flex'} alignItems={'center'}>
                                <Text color={'gray.500'}>Created by:&nbsp;</Text>
                                <Text color={'purple.500'} textDecoration={'underline'}>TEhW...NMA6</Text>
                            </Box>
                        </Box>
                        <Box display={'flex'} mt={4} alignItems={'center'} width={'full'} justifyContent={'space-between'}>
                            <Box display={'flex'} alignItems={'center'} gap={4}>
                                <Box display={'flex'}>
                                    <Text color={'gray.500'}>Contract:&nbsp;</Text>
                                    <Text color={"white"}>TVMhZYBtv9CjNfx9B9tbpFcabDi8qUYMfw</Text>
                                </Box>
                                <FaRegCopy color="white"/>
                                <FaExternalLinkAlt color="white"/>
                            </Box>
                            <Box display={'flex'} gap={4}>
                                <BsTwitterX color="white"/>
                                <GiCircleCage color="white"/>
                                <FaTelegramPlane color="white"/>
                            </Box>
                        </Box>
                        <Text color={'gray.500'} fontSize={14}>BUMP is a bouncy, playful creature that loves to pop up in unexpected places across the TRON network.</Text>
                    </Box>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Box width={'19%'} px={4} py={3} borderRadius={8} background={'#202039'}>
                            <Box display={'flex'}>
                                <Text color={"gray.500"} fontSize={14}>Price&nbsp;</Text>
                                <Text color={'cyan'} fontSize={14}>+0.57%</Text>
                            </Box>
                            <Text color={"white"} fontWeight={700} fontSize={18}>0.00032 TRX</Text>
                        </Box>
                        <Box width={'19%'} px={4} py={3} borderRadius={8} background={'#202039'}>
                            <Box display={'flex'}>
                                <Text color={"gray.500"} fontSize={14}>Market Cap&nbsp;</Text>
                                {/* <Text color={'cyan'} fontSize={14}>+0.57%</Text> */}
                            </Box>
                            <Text color={"white"} fontWeight={700} fontSize={18}>$54.37k</Text>
                        </Box>
                        <Box width={'19%'} px={4} py={3} borderRadius={8} background={'#202039'}>
                            <Box display={'flex'}>
                                <Text color={"gray.500"} fontSize={14}>Virtual Liquidity&nbsp;</Text>
                                {/* <Text color={'cyan'} fontSize={14}>+0.57%</Text> */}
                            </Box>
                            <Text color={"white"} fontWeight={700} fontSize={18}>$36.67k</Text>
                        </Box>
                        <Box width={'19%'} px={4} py={3} borderRadius={8} background={'#202039'}>
                            <Box display={'flex'}>
                                <Text color={"gray.500"} fontSize={14}>24H Volume&nbsp;</Text>
                                {/* <Text color={'cyan'} fontSize={14}>+0.57%</Text> */}
                            </Box>
                            <Text color={"white"} fontWeight={700} fontSize={18}>517.77 TRX</Text>
                        </Box>
                        <Box width={'19%'} px={4} py={3} borderRadius={8} background={'#202039'}>
                            <Box display={'flex'}>
                                <Text color={"gray.500"} fontSize={14}>Token Created&nbsp;</Text>
                                {/* <Text color={'cyan'} fontSize={14}>+0.57%</Text> */}
                            </Box>
                            <Text color={"white"} fontWeight={700} fontSize={18}>2D 20H 50M</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box display={'flex'} gap={4} mt={4}>
                <Box width={'55%'} padding={4} background={'#151528'} borderRadius={12}>
                    <Box display={'flex'} gap={4} alignItems={'center'}>
                        <Image src="/images/token-logo.png" width={'40px'} height={'40px'} borderRadius={50}/>
                        <Text fontSize={20} fontWeight={500} color={"white"}>BUMP($ BUMP) / TRX</Text>
                    </Box>
                    <AgCharts options={options} />
                </Box>
                <Box width={'44%'}>
                    <Box padding={4} background={'#151528'} borderRadius={12}>
                        <Box display={'flex'} width={'full'} background={'rgb(32 32 57)'} padding={1} borderRadius={8}>
                            <Box width={'50%'} background={'rgb(96 14 255)'} py={2} borderRadius={6} cursor={'pointer'}>
                                <Text textAlign={'center'} fontSize={20} fontWeight={700} color={"white"}>Buy</Text>
                            </Box>
                            <Box width={'50%'} py={2} borderRadius={6} cursor={'pointer'}>
                                <Text textAlign={'center'} color={'rgb(96 14 255)'} fontSize={20} fontWeight={700}>Sell</Text>
                            </Box>
                        </Box>
                        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                            <Box px={2} py={1} mt={2} borderRadius={4} background={'#202039'}>
                                <Text color={"white"} fontSize={14}>switch to BUMP</Text>
                            </Box>
                            <RiSettingsLine color="white"/>
                        </Box>
                        <Input mt={2} placeholder="Enter the amount" color={"white"}/>
                        <Box display={'flex'} gap={2} alignItems={'center'}>
                            <Box px={2} py={1} mt={2} borderRadius={4} background={'#202039'} cursor={'pointer'}>
                                <Text color={"white"}>100 TRX</Text>
                            </Box>
                            <Box px={2} py={1} mt={2} borderRadius={4} background={'#202039'} cursor={'pointer'}>
                                <Text color={"white"}>500 TRX</Text>
                            </Box>
                            <Box px={2} py={1} mt={2} borderRadius={4} background={'#202039'} cursor={'pointer'}>
                                <Text color={"white"}>1000 TRX</Text>
                            </Box>
                            <Box px={2} py={1} mt={2} borderRadius={4} background={'#202039'} cursor={'pointer'}>
                                <Text color={"white"}>5000 TRX</Text>
                            </Box>
                        </Box>
                        <Box background={'rgb(96 14 255)'} py={2} mt={2} borderRadius={10} cursor={"pointer"}>
                            <Text color={"white"} textAlign={"center"} fontWeight={600} fontSize={20}>Connect Wallet</Text>
                        </Box>
                    </Box>
                    <Text mt={2} fontWeight={600} color={"white"}>Bonding Curve Progress: 73.81%</Text>
                    <Progress value={74} borderRadius={50} mt={1}/>
                    <Text color={'gray.400'}>There are 67,233,082.02 BUMP still available for sale in the bonding curve and there are 76,050.78 TRX in the bonding curve. When the market cap reaches $ 82,458.97 all the liquidity from the bonding curve will be deposited into SunSwap and burned. Progression increases as the price goes up.</Text>
                </Box>
            </Box>
            <Box display={'flex'} gap={4} mt={4}>
                <Box width={'55%'}>
                    <Box display={'flex'} gap={2}>
                        <Box display={'flex'} alignItems={'center'}>
                            <TbMessageDots />
                            <Text color={"white"}>&nbsp;Comments</Text>
                        </Box>
                        <Box display={'flex'} alignItems={'center'}>
                            <PiShoppingCartSimple />
                            <Text color={"white"}>&nbsp;Trading History</Text>
                        </Box>
                    </Box>
                    <Box width={'full'} background={'#151528'} padding={4} borderRadius={12}>
                        <Textarea placeholder="Write your comments" color={"white"}/>
                        <Box display={'flex'} justifyContent={'end'} mt={1}>
                            <Button color={"white"} colorScheme="blue">Submit</Button>
                        </Box>
                        <Box pt={4}>
                            <Box display={'flex'} gap={2} alignItems={'center'}>
                                <Box border={'1px solid #a50ce5'} px={4} py={1} borderRadius={4}>
                                    <Text color={"white"}>TXmQ....wgmH</Text>
                                </Box>
                                <Text fontSize={14} color={'gray.500'}>3 days ago</Text>
                            </Box>
                            <Text py={2} color={"white"}>
                                ✅ Micron ✅- a single hub for staking all your favorite coins. 🤗Community is the number 1 priority of our journey at Micron. 🚀 https://t.me/MicronCryptoBot/play?startapp=ref_klD9WSkr99D https://sunpump.meme/token/TCHDiYcY2JqwANTJgP5fSDwJfsYje4uBQp
                            </Text>
                            <Divider />
                        </Box>
                        <Box pt={4}>
                            <Box display={'flex'} gap={2} alignItems={'center'}>
                                <Box border={'1px solid #a50ce5'} px={4} py={1} borderRadius={4}>
                                    <Text color={"white"}>TXmQ....wgmH</Text>
                                </Box>
                                <Text fontSize={14} color={'gray.500'}>3 days ago</Text>
                            </Box>
                            <Text py={2} color={"white"}>
                                Well
                            </Text>
                            <Divider />
                        </Box>
                        <Box width={'full'} pt={4}>
                            <Text textAlign={"center"} color={'gray.500'}>no more</Text>
                        </Box>
                    </Box>
                </Box>
                <Box width={'44%'}>
                    <Box display={'flex'} gap={2}>
                        <Image src="/images/crown.svg" width={5} />
                        <Text fontWeight={600} fontSize={18} color={'#ffff00'}>Crowned Sunflare on 2024/10/24 11:55:48 (UTC+8)</Text>
                    </Box>
                    <Box display={'flex'} alignItems={'center'} gap={8}>
                        <Text fontSize={20} fontWeight={600} color={"white"}>Holder Distribution</Text>
                        <Box display={'flex'} alignItems={'center'} gap={2}>
                            <FaUser color="gray"/>
                            <Text color={'gray.500'}>155</Text>
                        </Box>
                    </Box>
                    <Box mt={4} width={'full'} background={'#151528'} padding={4} borderRadius={12}>
                        <Box>
                            <Box display={'flex'} alignItems={'center'} width={'full'}>
                                <Box width={'50%'}>
                                    <Text color={'gray.500'} fontSize={16} fontWeight={600}>Holder</Text>
                                </Box>
                                <Box width={'50%'} >
                                    <Text color={'gray.500'} fontSize={16} textAlign={'right'} fontWeight={600}>Percentage</Text>
                                </Box>
                            </Box>
                            <Divider py={1} />
                        </Box>
                        {
                            new Array(10).fill(0).map((item, index) => {
                                return (
                                    <Box pt={2} key={index}>
                                        <Box display={'flex'} alignItems={'center'} width={'full'}>
                                            <Box width={'50%'}>
                                                <Text color={'purple.400'} fontWeight={600} fontSize={16} cursor={'pointer'}>TTfv...7AAw</Text>
                                            </Box>
                                            <Box width={'50%'} >
                                                <Text color={'white'} fontSize={16} textAlign={'right'}>26.72%(Bonding Curve)</Text>
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
    )
}

export default Token;