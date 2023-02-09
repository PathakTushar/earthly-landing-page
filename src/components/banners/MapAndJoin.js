import React from "react";
import classes from "./MapAndJoin.module.css";
const MapAndJoin = () => {
  return (
    <div className={classes.mapAndJoin}>
      <iframe
        title="gmap"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7462.839248745952!2d-6.419523483870396!3d53.34890644669905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486772e19f0ee6f1%3A0xc6b1ed92a1673a0c!2s16%20Liffey%20Ave%2C%20Liffey%20Valley%20Park%2C%20Lucan%2C%20Co.%20Dublin%2C%20K78%20HW50%2C%20Ireland!5e0!3m2!1sen!2sin!4v1675759674108!5m2!1sen!2sin"
        width="600px"
        height="450px"
        style={{
          border: 0,
          width: "100vw",
          height: "35vh",
          margin: 0,
          overflow: "hidden",
        }}
        loading="lazy"
      ></iframe>
      <div className={classes.joinContainer}>
        <h1 data-aos="zoom-in" data-aos-duration="1500">Join the Club</h1>
        <h3>
          Join our email list and get access to specials deals exclusive to our
          subscribers.
        </h3>
        <form>
          <input
            type="email"
            placeholder="Enter your email here*"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="2000"
          />
          <button
            type="submit"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-duration="2000"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default MapAndJoin;
