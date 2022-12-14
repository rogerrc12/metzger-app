import * as React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const Logo = (props) => {
  const aspectRatio = 165 / 45;

  return (
    <View style={{ width: props.width, aspectRatio }}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 300 113"
        style={{
          enableBackground: "new 0 0 300 113",
        }}
        xmlSpace="preserve"
        {...props}
      >
        <Path
          style={{
            fill: "#e6e6e6",
          }}
          d="M-5 134h300v113H-5z"
        />
        <Path
          style={{
            fill: "#002b5e",
          }}
          d="M73.1 60.3c-1-.7-2-1.4-3.2-2.2 1.3-.7 2.5-1.2 3.6-1.7 1.4-.7 1.9-1.8 1.4-3.3-1-3-1.9-5.9-2.9-8.9-.5-1.5-1.6-2.2-3.2-1.9-1.2.2-2.4.4-3.9.7.5-1.4.9-2.6 1.3-3.8.5-1.5.1-2.6-1.3-3.3l-8.4-4.2c-1.5-.7-2.6-.4-3.6.9-.7 1-1.4 2-2.2 3.2-.7-1.4-1.2-2.5-1.7-3.6-.7-1.4-1.8-1.9-3.3-1.4-3 1-5.9 1.9-8.9 2.9-1.5.5-2.2 1.6-1.9 3.2.2 1.2.5 2.4.7 3.9-1.4-.5-2.6-.9-3.8-1.3-1.5-.5-2.6-.1-3.3 1.3-1.5 2.8-2.9 5.7-4.3 8.5-.7 1.3-.3 2.5.8 3.3 1 .7 2.1 1.4 3.4 2.3-1.4.7-2.5 1.2-3.6 1.7-1.4.7-1.9 1.8-1.4 3.3.9 3 1.9 5.9 2.9 8.9.5 1.5 1.6 2.2 3.2 1.9 1.2-.2 2.4-.5 3.9-.7-.5 1.4-.9 2.6-1.3 3.8-.5 1.5-.1 2.6 1.3 3.3 2.8 1.4 5.6 2.8 8.3 4.2 1.4.7 2.6.4 3.6-.9.7-1 1.4-2 2.2-3.2.6 1.3 1.2 2.5 1.7 3.6.7 1.4 1.8 1.9 3.3 1.4 3-1 5.9-1.9 8.9-2.9 1.5-.5 2.2-1.6 1.9-3.2-.2-1.2-.4-2.4-.7-3.9 1.4.5 2.6.9 3.8 1.3 1.5.5 2.6.1 3.3-1.3 1.4-2.8 2.8-5.6 4.2-8.3.8-1.5.5-2.7-.8-3.6zm-4.4-6.9c-3 1.3-3.9 3.1-3.3 6.3.2.7.7 1.4 1.3 1.9.9.8 1.9 1.3 2.9 2-.8 1.8-1.6 3.4-2.6 5.1-1.1-.4-2.3-.8-3.4-1.2-2.5-.8-6 2.2-5.7 4.8.1 1.2.8 3 .3 3.4-1.1 1-2.8 1.3-4.2 1.7-.4.1-1-.3-1.3-.6-.3-.2-.3-.7-.5-1.1-1.3-2.8-3.4-3.9-6.4-3.1-.7.2-1.3.7-1.8 1.2-.7.9-1.3 1.9-2.2 3.2-.8-.5-1.6-1.1-2.5-1.5-.8-.4-1.7-.8-2.6-1.2.5-1.3.9-2.4 1.3-3.6.8-2.5-2.2-6-4.8-5.7-1.2.1-3 .8-3.4.3-1-1.1-1.3-2.8-1.7-4.2-.1-.4.3-1 .6-1.3.2-.3.7-.3 1.1-.5 2.8-1.3 3.9-3.4 3.1-6.4-.2-.7-.7-1.3-1.2-1.8-.9-.7-1.9-1.3-2.8-1.9.9-1.7 1.8-3.4 2.7-5.2.8.3 1.8.6 2.8 1 2.8 1 6.4-2 6-4.9v-.2c-.1-1.1-.6-2.9-.2-3.2 1.3-.9 2.9-1.2 4.5-1.7.2-.1.7.3.9.5.2.3.4.7.5 1.1 1.3 2.9 3.1 3.9 6.3 3.3.7-.1 1.4-.7 1.9-1.3.8-.8 1.3-1.9 1.9-2.7 1.7.9 3.4 1.8 5.2 2.7-.3.9-.7 2-1.1 3.1-.8 2.5 2.2 6.1 4.8 5.7h.3c1.1-.1 2.9-.7 3.2-.2.9 1.3 1.2 2.9 1.7 4.5.1.2-.2.7-.5.9-.3.5-.7.6-1.1.8z"
        />
        <Path
          style={{
            fill: "#0057cc",
          }}
          d="M9.6 48.8c-1.6.8-2.8 1.4-4.1 2-1.3.7-2.5.3-3.2-.8-.7-1.2-.3-2.6 1.1-3.3 2.9-1.5 5.8-2.9 8.7-4.3 1.2-.6 2.2-.3 3.1.7 2 2.5 4.1 5 6.1 7.6 1.1 1.3.9 2.8-.2 3.6-1.1.8-2.5.6-3.6-.8-1-1.2-2-2.5-3.2-3.9-1.1 5.2-.9 10.2.2 15 4.9 20.3 25.3 31.9 45.3 25.7 7.6-2.3 13.6-6.9 18.3-13.4.2-.3.5-.7.7-1 .9-1.1 2.3-1.4 3.3-.6 1.1.8 1.4 2.2.5 3.3-2.6 3.1-5.1 6.5-8.2 9C57 102.1 31 99 17.2 80.9c-6.9-9-9.4-19.2-7.8-30.5.1-.4.1-.8.2-1.6zM88.7 64.2c1.5-.8 2.7-1.4 4-2 1.5-.7 2.7-.3 3.3.9.6 1.2.2 2.5-1.3 3.3l-8.4 4.2c-1.3.6-2.4.4-3.3-.7-2-2.5-4-4.9-6-7.5-1.1-1.4-1-2.8.1-3.6 1.1-.9 2.5-.6 3.6.7 1 1.2 2 2.5 3 3.8h.5c.1-2.7.5-5.4.4-8C83.6 31 59.7 15 37 23.2 30 25.7 24.5 30 20.2 36c-.1.2-.3.4-.4.7-1 1.5-2.4 1.9-3.6 1.1-1.2-.8-1.4-2.2-.3-3.7 2.5-3.8 5.6-7.1 9.2-9.7C43 11.2 67.4 14.4 81 32c6.9 8.9 9.5 19.1 8 30.3-.1.5-.2 1-.3 1.9z"
        />
        <Path
          style={{
            fill: "#002b5e",
          }}
          d="M46.1 46.2c5.7-1.7 11.6 1.5 13.3 7.1 1.7 5.7-1.5 11.8-7.2 13.4-5.7 1.6-11.6-1.6-13.2-7.2-1.7-5.7 1.5-11.6 7.1-13.3zm8.5 8.5c-1-3-4.2-4.7-7.2-3.7s-4.7 4.2-3.7 7.2 4.2 4.7 7.2 3.7c3.1-1 4.7-4.2 3.7-7.2z"
        />
        <Path
          style={{
            fill: "#0057cc",
          }}
          d="M19 75.2c11.1 17.7 34.2 22.2 51.1 9.9 6.4-4.7 10.7-10.9 13-18.5l.3-1.2c.5-1.3 1.7-2 2.9-1.7 1.3.4 2.1 1.6 1.5 3-1.5 3.8-2.7 7.8-4.9 11.2-12 19.3-37.6 24.7-56.5 11.9-9.1-6.3-10-18.9-7.4-14.6zM84.5 51.7c-.7-2.6-1.3-5.2-2.2-7.8C73.7 21.4 45.9 13.8 27 28.8c-5.8 4.6-9.7 10.5-11.8 17.5-.1.2-.1.5-.2.8-.5 1.7-1.7 2.5-3 2.2-1.4-.4-2-1.7-1.5-3.4 1.2-4.4 3-8.5 5.6-12.2 12.8-18.2 37-22.9 55.4-10.6 9.4 6.2 15.1 15 17.2 26.1.1.5-4.3 2.5-4.2 2.5z"
        />
        <Path
          style={{
            fill: "#002b5e",
          }}
          d="M139.9 32.3v34.5h-5.7V43.2l-10.5 23.6h-3.9l-10.6-23.6v23.6h-5.7V32.3h6.1l12.1 27.1 12.1-27.1h6.1zM172.2 55.3h-20.9c.2 2.2 1 3.9 2.4 5.3 1.5 1.3 3.2 2 5.4 2 3.1 0 5.2-1.3 6.5-3.8h6.1c-.8 2.5-2.3 4.6-4.5 6.2-2.2 1.6-4.9 2.4-8.1 2.4-2.6 0-5-.6-7-1.8-2.1-1.2-3.7-2.8-4.9-5s-1.8-4.6-1.8-7.4c0-2.8.6-5.3 1.7-7.4s2.8-3.8 4.8-4.9 4.4-1.7 7.1-1.7c2.6 0 4.9.6 6.9 1.7s3.6 2.7 4.7 4.7 1.7 4.4 1.7 7c.1.9 0 1.9-.1 2.7zm-5.7-4.6c0-2.1-.8-3.8-2.2-5-1.5-1.3-3.3-1.9-5.4-1.9-1.9 0-3.6.6-5 1.9s-2.2 2.9-2.5 5h15.1zM184.6 44.1v15.1c0 1 .2 1.8.7 2.2s1.3.7 2.5.7h3.5v4.7h-4.5c-2.6 0-4.5-.6-5.9-1.8-1.4-1.2-2-3.1-2-5.8V44.1h-3.2v-4.6h3.2v-6.8h5.7v6.8h6.7v4.6h-6.7zM201.4 62.2h12.4v4.6h-19v-4.6l12.5-18.1h-12.5v-4.6h19v4.6l-12.4 18.1zM236.5 40.3c1.6.8 2.9 1.9 3.9 3.2v-4h5.7v27.8c0 2.5-.5 4.8-1.6 6.7s-2.6 3.5-4.6 4.6c-2 1.1-4.4 1.7-7.2 1.7-3.7 0-6.8-.9-9.2-2.6-2.4-1.7-3.8-4.1-4.2-7.1h5.6c.4 1.4 1.4 2.6 2.8 3.4 1.4.9 3.1 1.3 5 1.3 2.3 0 4.1-.7 5.5-2.1 1.4-1.4 2.1-3.4 2.1-6.1v-4.6c-1 1.3-2.3 2.4-3.9 3.2-1.6.9-3.5 1.3-5.6 1.3-2.4 0-4.6-.6-6.5-1.8s-3.5-2.9-4.7-5.1-1.7-4.6-1.7-7.4.6-5.2 1.7-7.3 2.7-3.8 4.7-4.9c2-1.2 4.1-1.8 6.5-1.8 2.2.3 4.1.8 5.7 1.6zm2.7 7.9c-.8-1.4-1.8-2.5-3.1-3.2-1.3-.7-2.6-1.1-4.1-1.1s-2.8.4-4.1 1.1c-1.3.7-2.3 1.8-3.1 3.1-.8 1.4-1.2 3-1.2 4.9s.4 3.5 1.2 5c.8 1.4 1.8 2.5 3.1 3.2 1.3.8 2.6 1.1 4.1 1.1 1.5 0 2.8-.4 4.1-1.1 1.3-.7 2.3-1.8 3.1-3.2.8-1.4 1.2-3 1.2-4.9-.1-1.8-.5-3.5-1.2-4.9zM278.4 55.3h-20.9c.2 2.2 1 3.9 2.4 5.3 1.5 1.3 3.2 2 5.4 2 3 0 5.2-1.3 6.5-3.8h6.1c-.8 2.5-2.3 4.6-4.5 6.2-2.2 1.6-4.9 2.4-8.1 2.4-2.6 0-5-.6-7-1.8-2.1-1.2-3.7-2.8-4.9-5s-1.8-4.6-1.8-7.4c0-2.8.6-5.3 1.7-7.4s2.8-3.8 4.8-4.9 4.5-1.7 7.1-1.7c2.6 0 4.9.6 6.9 1.7s3.6 2.7 4.7 4.7 1.7 4.4 1.7 7c.1.9 0 1.9-.1 2.7zm-5.7-4.6c0-2.1-.8-3.8-2.2-5-1.5-1.3-3.3-1.9-5.4-1.9-2 0-3.6.6-5 1.9-1.4 1.2-2.2 2.9-2.5 5h15.1zM293.1 40.2c1.4-.8 3-1.2 4.9-1.2v5.9h-1.4c-2.2 0-3.9.6-5 1.7s-1.7 3.1-1.7 5.9v14.4h-5.7V39.5h5.7v4c.7-1.4 1.8-2.5 3.2-3.3zM109.7 70.6l-.3 1.7H107l-1.3 7.2h-2.2l1.3-7.2h-2.3l.3-1.7h6.9zM113.5 72.7c.4-.2.9-.4 1.3-.4l-.4 2.3h-.6c-.5 0-1 .1-1.3.3-.3.2-.5.6-.6 1.2l-.6 3.3h-2.2l1.2-7.1h2.2l-.2 1.3 1.2-.9zM115.6 74.1c.4-.6.8-1 1.3-1.3.5-.3 1.1-.4 1.7-.4.5 0 .9.1 1.2.3.3.2.6.5.7.8l.2-1h2.2l-1.2 7.1h-2.2l.2-1c-.3.3-.6.6-1 .8-.4.2-.9.3-1.4.3s-.9-.1-1.3-.3c-.4-.2-.7-.6-.9-1s-.3-.9-.3-1.5c0-.3 0-.6.1-.9.1-.8.3-1.4.7-1.9zm4.6 1.5c0-.4-.1-.7-.4-1-.2-.2-.6-.3-.9-.3-.4 0-.8.2-1.2.5-.3.3-.6.7-.7 1.3v.4c0 .4.1.7.4 1 .2.2.5.4.9.4s.8-.2 1.2-.5c.3-.3.6-.7.7-1.3v-.5zM124.2 74.1c.4-.6.9-1 1.5-1.3.6-.3 1.2-.4 1.9-.4.9 0 1.6.2 2.1.7.5.5.8 1.1.8 2h-2.3c-.1-.5-.4-.8-1-.8-.4 0-.7.2-1 .5-.3.3-.5.8-.6 1.3 0 .2-.1.4-.1.6 0 .4.1.7.3.9.2.2.4.3.8.3.6 0 1-.3 1.2-.8h2.3c-.3.8-.8 1.5-1.5 1.9-.7.5-1.5.7-2.3.7-.9 0-1.6-.2-2.2-.8s-.8-1.2-.8-2.1c0-.3 0-.5.1-.8.2-.7.4-1.4.8-1.9zM135.5 76l2.3 3.5h-2.7l-1.6-2.9-.5 2.9h-2.2l1.7-9.4h2.2l-.9 5.2 2.6-2.9h2.7l-3.6 3.6zM142.1 72.5l-1.2 7.1h-2.2l1.2-7.1h2.2zm-1.7-1c-.2-.2-.3-.4-.3-.7 0-.4.1-.7.4-1 .3-.3.6-.4 1.1-.4.3 0 .6.1.8.3.2.2.3.4.3.7 0 .4-.1.7-.4 1-.3.3-.6.4-1.1.4-.4-.1-.6-.2-.8-.3zM149.6 73c.4.4.6.9.6 1.7 0 .2 0 .5-.1.8l-.7 4.1h-2.1l.7-3.8v-.4c0-.3-.1-.6-.3-.8s-.5-.3-.8-.3c-.4 0-.8.1-1.1.4-.3.3-.5.6-.6 1.1v-.1l-.7 3.9h-2.2l1.2-7.1h2.2l-.2.9c.3-.3.6-.6 1-.8.4-.2.8-.3 1.3-.3.9.1 1.4.3 1.8.7zM156.2 72.7c.4.2.6.5.7.8l.2-1h2.2l-1.2 7.1c-.1.7-.4 1.2-.7 1.8-.4.5-.8.9-1.4 1.3-.6.3-1.3.5-2 .5-1.1 0-1.9-.2-2.4-.7-.6-.5-.8-1.2-.8-2h2.1c0 .3.1.5.4.6.2.2.5.2.9.2s.8-.1 1.1-.4.5-.7.6-1.2l.2-1c-.3.3-.6.6-1 .8-.4.2-.9.3-1.4.3s-.9-.1-1.3-.3c-.4-.2-.7-.6-.9-1-.2-.4-.3-.9-.3-1.5 0-.3 0-.5.1-.8.1-.7.4-1.4.8-1.9.4-.6.8-1 1.3-1.3.5-.3 1.1-.4 1.7-.4.3-.2.7-.1 1.1.1zm.3 2.9c0-.4-.1-.7-.4-1-.2-.2-.6-.3-.9-.3-.4 0-.8.2-1.2.5-.4.3-.6.7-.7 1.3v.4c0 .4.1.7.4 1 .2.2.5.4.9.4s.8-.2 1.2-.5.6-.7.7-1.3v-.5zM163.6 79c-.6-.4-.9-1-.9-1.8v-.3h2.2c0 .3.1.6.2.8s.4.3.8.3c.3 0 .6-.1.8-.2.2-.1.3-.3.3-.6s-.1-.5-.4-.7c-.2-.2-.6-.4-1.1-.6-.5-.2-.9-.4-1.2-.6-.3-.2-.6-.4-.8-.7-.2-.3-.3-.7-.3-1.2 0-.6.1-1.1.4-1.5.3-.4.7-.8 1.2-1 .5-.2 1.1-.3 1.8-.3.6 0 1.1.1 1.6.3.5.2.8.5 1.1.8.3.4.4.8.4 1.3v.3h-2.3v-.2c0-.2-.1-.4-.2-.6s-.4-.2-.7-.2c-.3 0-.6.1-.7.2s-.3.3-.3.6.1.5.4.6c.2.2.6.4 1.1.6s.9.4 1.2.6c.3.2.6.4.8.8.2.3.3.7.3 1.2s-.1 1-.4 1.4-.7.7-1.2 1-1.1.3-1.8.3c-.9 0-1.7-.2-2.3-.6zM173.2 72.5l.9 4.4 2.4-4.4h2.3l-6.3 10.4h-2.3l2.2-3.6-1.7-6.8h2.5zM179.8 79.4c-.4-.2-.8-.4-1-.7s-.4-.7-.4-1.1v-.3h2.1c0 .3.1.5.2.6.2.2.4.2.7.2.3 0 .5-.1.7-.2s.3-.2.3-.4-.1-.3-.3-.4c-.2-.1-.5-.2-.9-.4-.5-.2-.8-.3-1.1-.4s-.6-.4-.8-.6-.3-.6-.3-1.1c0-.4.1-.8.4-1.1.2-.3.6-.6 1-.8s.9-.3 1.5-.3 1.1.1 1.5.3c.4.2.8.4 1 .8.2.3.4.7.4 1.1v.2h-2c0-.2-.1-.5-.2-.6s-.4-.2-.7-.2c-.2 0-.4.1-.6.2-.2.1-.2.2-.2.4s.1.3.3.5c.2.1.5.3 1 .4.5.2.8.3 1.1.4.3.2.6.3.8.6.2.3.3.6.3 1 0 .5-.1.8-.4 1.2s-.6.6-1.1.8c-.5.2-1 .3-1.6.3-.8-.2-1.3-.3-1.7-.4zM188.3 77.1v.2c0 .2 0 .3.1.3.1.1.2.1.4.1h.8l-.3 1.8h-1.1c-1.4 0-2.1-.6-2.1-1.8 0-.2 0-.4.1-.7l.5-2.8h-.9l.3-1.8h.9l.3-1.7h2.2l-.3 1.7h1.4l-.3 1.8h-1.4l-.6 2.9zM197.1 73.1c.5.5.8 1.2.8 2 0 .3 0 .5-.1.8 0 .2-.1.4-.1.6h-4.9v.2c0 .4.1.7.3.8.2.2.5.3.8.3.5 0 .9-.2 1.2-.7h2.3c-.3.7-.8 1.3-1.5 1.8s-1.4.7-2.3.7c-.9 0-1.6-.2-2.2-.8s-.8-1.2-.8-2.1c0-.3 0-.5.1-.8.1-.7.4-1.4.8-1.9.4-.6.9-1 1.5-1.3.6-.3 1.2-.4 1.9-.4.9.1 1.7.3 2.2.8zm-1.4 2c0-.3-.1-.6-.3-.8s-.5-.3-.8-.3c-.4 0-.7.1-1 .3-.3.2-.5.5-.6.9h2.7v-.1zM210.4 73c.4.4.6 1 .6 1.7 0 .2 0 .5-.1.7l-.7 4.1H208l.7-3.8v-.3c0-.3-.1-.6-.3-.8-.2-.2-.5-.3-.8-.3-.4 0-.8.1-1.1.4-.3.2-.5.6-.5 1.1l-.7 3.8h-2.1l.7-3.8v-.3c0-.3-.1-.6-.3-.8-.2-.2-.5-.3-.8-.3-.4 0-.8.1-1.1.4-.3.2-.5.6-.5 1.1v-.1l-.7 3.9h-2.2l1.2-7.1h2.2l-.1.9c.3-.3.6-.5 1-.7.4-.2.8-.3 1.2-.3.5 0 1 .1 1.4.3.4.2.6.6.8 1 .3-.4.7-.7 1.2-1 .5-.2.9-.4 1.4-.4.7 0 1.3.2 1.8.6z"
        />
      </Svg>
    </View>
  );
};

export default Logo;
