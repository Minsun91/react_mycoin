import ApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { fetchPriceHistory } from "../api";

interface PriceProps {
    coinId: string;
}

interface IHistorical {
    time_open: number;
    time_close: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    market_cap: number;
}

function Price({ coinId }: PriceProps) {
    const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchPriceHistory(coinId)
    );
    return (
        <div>
            {isLoading ? (
                "Loading chart..."
            ) : (
                <ApexChart
                    type="candlestick"
                    series={[
                        // {  
                        //     data: 
                        //     data?.map((price)=> {
                        //         return [
                        //             price.time_close,
                        //             parseFloat(price.open),
                        //             parseFloat(price.close),
                        //             parseFloat(price.high),
                        //             parseFloat(price.low),
                        //         ];
                        //     }),
                        // }
                    ]}
                    options={{
                        theme: {
                            mode: "dark",
                        },
                        chart: {
                            height: 300,
                            width: 500,
                            toolbar: {
                                show: false,
                            },
                            background: "transparent",
                        },
                        grid: { show: false },
                        stroke: {
                            curve: "smooth",
                            width: 4,
                        },
                        yaxis: {
                            show: false,
                        },
                        xaxis: {
                            axisBorder: { show: false },
                            axisTicks: { show: false },
                            labels: { show: false },
                            categories:data?.map((price) => price.time_close) ??
                            [],
                        },
                        fill: {
                            type: "gradient",
                            gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
                        },
                        colors: ["#0fbcf9"],
                        tooltip: {
                            y: {
                              formatter: (value) => `$${value.toFixed(2)}`,
                            },
                        }
                    }}
                />
            )}
        </div>
    );
}
export default Price;
