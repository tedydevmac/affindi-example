import React from "react";
import "./Main.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { IoMdSettings } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import shoplogo from "../assets/icon.png";
import arraragi from "../assets/Koyomi Araragi PFP.jpg";
import arduino from "../assets/ArduinoProjectImage.png";
import japan from "../assets/20241130_161409 copy 2.jpeg";
import house1 from "../assets/Subdivisible Bungalow Plot Near Botanical Garden (1).jpg";
import house2 from "../assets/Subdivisible Bungalow Plot Near Botanical Garden.jpg";
import book from "../assets/Miyamoto Musashi Wallpaper.jpg";
import Card from "../components/Card";

const Main: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  return (
    <div className="column">
      <div className="tabrow">
        <img src={shoplogo} alt="logo not found" className="shoplogo" />
        <input type="text" placeholder="Search..." className="searchbar" />
        <div className="icondiv">
          <a href="" onClick={() => navigate("/cart", { state: {} })}>
            <FaCartShopping className="icon" />
          </a>
          <a href="" onClick={() => navigate("/profile", { state: {} })}>
            <IoPersonCircleSharp className="icon" />
          </a>
          <a href="" onClick={() => navigate("/settings", { state: {} })}>
            <IoMdSettings className="icon" />
          </a>
        </div>
      </div>

      <div className="card-container">
        <text style={{ fontWeight: "bold", fontSize: 17 }}>For You</text>
        <div className="card-row">
          <Card
            itemTitle="Ticket to Japan"
            itemDesc="Fly to Japan as soon as tomorrow!"
            price="999.99"
            daysLater={2}
            imgSrc={japan}
          />
          <Card
            itemTitle="Bungalow by the Bay"
            itemDesc="A luxurious house by the Marina Bay!"
            price="9.49mil"
            daysLater={30}
            imgSrc={house1}
          />
          <Card
            itemTitle="House next to Hume MRT"
            itemDesc="A convenient landed property"
            price="2.66mil"
            daysLater={30}
            imgSrc={house2}
          />
        </div>
        <text style={{ fontWeight: "bold", fontSize: 17 }}>Books</text>
        <div className="card-row">
          <Card
            itemTitle="Book 1"
            itemDesc="Get a Book 1 for yourself!"
            price="13.99"
            daysLater={7}
            imgSrc={book}
          />
          <Card
            itemTitle="Book 2"
            itemDesc="Get a Book 2 for yourself!"
            price="13.99"
            daysLater={7}
            imgSrc={book}
          />
          <Card
            itemTitle="Book 3"
            itemDesc="Get a Book 3 for yourself!"
            price="13.99"
            daysLater={7}
            imgSrc={book}
          />
        </div>
        <text style={{ fontWeight: "bold", fontSize: 17 }}>Explore</text>
        <div className="card-row">
          <Card
            itemTitle="Ai Hoshino Poster"
            itemDesc="Get a Ai Hoshino Poster for yourself!"
            price="15.99"
            daysLater={7}
            imgSrc={shoplogo}
          />
          <Card
            itemTitle="Koyomi Araragi"
            itemDesc="Obtain Arararagi"
            price="0.99"
            daysLater={14}
            imgSrc={arraragi}
          />
          <Card
            itemTitle="Arduino Starter Kit"
            itemDesc="Start tinkering with this kit!"
            price="39.99"
            daysLater={7}
            imgSrc={arduino}
          />
        </div>
      </div>
    </div>
  );
};
export default Main;
