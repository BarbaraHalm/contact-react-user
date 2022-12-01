import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactHome from "./Pages/ContactHome";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import ProtectedRoute from "./component/ProtectedRoute";




function Routing() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"element={
                        <ProtectedRoute> 
                        <ContactHome/>
                        </ProtectedRoute>
                        }/>
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Routing;