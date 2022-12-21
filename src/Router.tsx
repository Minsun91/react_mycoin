import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import env from "dotenv";

// const Router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Coins />,
//     },
//     {
//         path: "/:coinId",
//         element: <Coin />,
//         children: [
//             {
//                 path: "chart",
//                 element: <Chart />,
//             },
//             {
//                 path: "price",
//                 element: <Price />,
//             },
//         ],
//     },
// ]);

// export default Router;
interface IRouterProps {
}

function Router({}:IRouterProps) {
  return (
    <BrowserRouter>
      <Routes> // 하나의 라우터를 렌더링 할 수 있다. 
        {/* <Route path={`${process.env.PUBLIC_URL}/:coinId`}  element={<Coin />}/>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Coins />}/>
        <Route path={`${process.env.PUBLIC_URL}/:coinId/chart`} element={<Coin />}/>
        <Route path={`${process.env.PUBLIC_URL}/:coinId/price`} element={<Coin />}/> */}
        
        <Route path="/" element={<Coins />}/>
        <Route path="/:coinId" element={<Coin />}/>
        <Route path="/:coinId/chart" element={<Coin />}/>
        <Route path="/:coinId/price" element={<Coin />}/>
        </Routes>
    </BrowserRouter>
  );
}
export default Router;
