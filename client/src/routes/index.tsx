import { PageProductDetails } from "../pages/PageProductDetails";
import { PageAuctionDetails } from "../pages/PageAuctionDetails";
import { PageNewPassword } from "../pages/PageNewPassword";
import { PageAdvertiser } from "../pages/PageAdvertiser";
import { Routes, Route } from "react-router-dom";
import { PageEmail } from "../pages/PageEmail";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Home } from "../pages/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/newpassword/:userId" element={<PageNewPassword />} />
      <Route path="/resetpassword" element={<PageEmail />} />
      <Route path="/products/:productId" element={<PageProductDetails />} />
      <Route path="/auctions/:auctionId" element={<PageAuctionDetails />} />
      <Route path="/myadvertiser" element={<PageAdvertiser />} />
      <Route index element={<Home />} />
    </Routes>
  );
};

export { AllRoutes };
