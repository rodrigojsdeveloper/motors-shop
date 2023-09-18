import { PageProductDetails } from "../pages/PageProductDetails";
import { PageProductsUser } from "../pages/PageProductsUser";
import { PageNewPassword } from "../pages/PageNewPassword";
import { PageAdvertiser } from "../pages/PageAdvertiser";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Home } from "../pages/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/newpassword/:userId" element={<PageNewPassword />} />
      <Route path="/products/:productId" element={<PageProductDetails />} />
      <Route path="/myadvertiser" element={<PageAdvertiser />} />
      <Route path="/users/:userProductId" element={<PageProductsUser />} />
      <Route path="/" index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export { AllRoutes };
