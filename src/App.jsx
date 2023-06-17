import "./style.css";
import Login from "./pages/Login.jsx";
import DashboardPage from "./pages/DashboardPage";
import { Routes, Route } from "react-router-dom";
import FeedbackPage from "./pages/FeedbackPage";

// const imageUrl = "https://placehold.co/400x400/png";
// const items = [
//   {
//     id: 1,
//     image: imageUrl,
//     name: "Item 1",
//     quantity: 5,
//     price: 500,
//   },
//   {
//     id: 1,
//     image: imageUrl,
//     name: "Item 1",
//     quantity: 5,
//     price: 500,
//   },
//   {
//     id: 1,
//     image: imageUrl,
//     name: "Item 1",
//     quantity: 5,
//     price: 500,
//   },
//   {
//     id: 1,
//     image: imageUrl,
//     name: "Item 1",
//     quantity: 5,
//     price: 500,
//   },
//   {
//     id: 1,
//     image: imageUrl,
//     name: "Item 1",
//     quantity: 5,
//     price: 500,
//   },
//   {
//     id: 1,
//     image: imageUrl,
//     name: "Item 1",
//     quantity: 5,
//     price: 500,
//   },
//   {
//     id: 1,
//     image: imageUrl,
//     name: "Item 1",
//     quantity: 5,
//     price: 500,
//   },
//   {
//     id: 1,
//     image: imageUrl,
//     name: "Item 1",
//     quantity: 5,
//     price: 500,
//   },
//   {
//     id: 1,
//     image: imageUrl,
//     name: "Item 1",
//     quantity: 5,
//     price: 500,
//   },
//   {
//     id: 1,
//     image: imageUrl,
//     name: "Item 1",
//     quantity: 5,
//     price: 500,
//   },
//   {
//     id: 1,
//     image: imageUrl,
//     name: "Item 1",
//     quantity: 5,
//     price: 500,
//   },
//   {
//     id: 1,
//     image: imageUrl,
//     name: "Item 1",
//     quantity: 5,
//     price: 500,
//   },
//   {
//     id: 1,
//     image: imageUrl,
//     name: "Item 1",
//     quantity: 5,
//     price: 500,
//   },
//   {
//     id: 1,
//     image: imageUrl,
//     name: "Item 1",
//     quantity: 5,
//     price: 500,
//   },
// ];

export default function App({}) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
        <Route path="/feedbacks" element={<FeedbackPage />}></Route>
      </Routes>
    </>
  );
}
