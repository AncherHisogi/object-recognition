import React from "react";

export default function Picture({ imageUrl }) {
  if (imageUrl === undefined) {
     console.log("error");
  } else {
    return (
      <img alt="" src={imageUrl} style={{ maxWidth: "1000px", width: "100%" }} />
    );
  }
}
