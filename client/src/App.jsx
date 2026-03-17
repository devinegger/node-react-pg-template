import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import WelcomeScreen from "./components/WelcomeScreen.jsx";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
      </Routes>
    </Layout>
  );
}

