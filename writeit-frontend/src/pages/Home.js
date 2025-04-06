import React from "react";
import { Card } from "reactstrap";
import BaseComponent from "../components/BaseComponent";
import Typewriter from "typewriter-effect";
import blog from "../images/blog.jpg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <BaseComponent>
      <div className="Home container" style={{ minHeight: "500px" }}>
        <Card
          className="p-3 m-3"
          style={{ backgroundColor: "rgb(255,255,255,0.9)" }}
        >
        <h3 style={{
              textAlign: "center",
              color: "#BB2D3B",
              fontStyle:"italic"
            }}>Hey There..</h3>
          <h1
            style={{
              textAlign: "center",
              color: "#212529",
              fontStyle:"italic"
            }}
            className="m-2 rounded-5"
          >
            <Typewriter
              options={{
                strings: [
                  "It’s more than just a website",  "it’s your creative space.!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="container text-center">
            <img
              src="https://www.iwriter.com/blog/wp-content/uploads/2019/09/blog-opportunities.jpeg"
              alt="Blog Image"
              height={"400px"}
              width={"400px"}
              className="rounded-5"
            />
            <br />
            <Link to="/signup" className="btn btn-sm btn-danger mt-2 mb-4">
              SignUp Now
            </Link>
  
          </div>
        </Card>
      </div>
    </BaseComponent>
  );
}

export default Home;
