import React, { Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Suspense fallback={<div>Loading translations...</div>}>
      <div className="App">
        <Header />
        <main className="min-h-screen">
          <HomePage />
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
