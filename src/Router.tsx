import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    createBrowserRouter,
} from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Chart from "./routes/Chart";
import Price from "./routes/Price";

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

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId"  element={<Coin />}/>
        <Route path="/" element={<Coins />}/>
        <Route path="/:coinId/chart" element={<Coin />}/>
        <Route path="/:coinId/price" element={<Coin />}/>
        </Routes>
    </BrowserRouter>
  );
}
export default Router;
