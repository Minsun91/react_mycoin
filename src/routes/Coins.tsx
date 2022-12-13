import styled from "styled-components";
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import React from "react";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`;
const Header = styled.header`
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const CoinsList = styled.ul``;
const Coin = styled.li`
    background-color: white;
    color: ${(props) => props.theme.bgColor};
    border-radius: 15px;
    margin-bottom: 10px;
    a {
        padding: 20px;
        transition: color 0.2s ease-in;
        display: block;
    }
    &:hover {
        a {
            color: ${(props) => props.theme.accentColor};
        }
    }
`;
const Title = styled.h1`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor};
`;
const Loader = styled.span`
    font-size: 30px;
    text-align: center;
    display: block;
`;
const Img = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`;

interface ICoin {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}
function Coins() {
    // const [coins, setCoins] = useState<CoinInterface[]>([]);
    // const [loading, setLoading] = useState(true);
    // //useEffect로 특정한 시기에만 코드를 실행하게 할 수 있엇찌!
    // useEffect(() => {
    //     (async () => { //-> 여기부터는 api.tsx로 넘어감
    //         const response = await fetch(
    //             "https://api.coinpaprika.com/v1/coins"
    //         );
    //         const json = await response.json();
    //         setCoins(json.slice(0, 100));
    //         setLoading(false);
    //     })();
    // }, []);

    const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
    
    return (
        <Container>
            <Header>
                <Title> Coins </Title>
            </Header>
            {isLoading ? (
                <Loader> Loading... </Loader>
            ) : (
                <CoinsList>
                    {data?.slice(0, 100).map((coin) => (
                        <Coin key={coin.id}>
                            <Link to={`/${coin.id}`} state={coin.name}>
                                <Img
                                    src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}></Img>
                                {coin.name} &rarr;
                            </Link>
                        </Coin>
                    ))}
                </CoinsList>
            )}
        </Container>
    );
}
export default Coins;

//Link는 페이지 리렌더링을 하지 않는다.
// a href="" 페이지 렌더링을 해서 여기서는 사용하지 않음
