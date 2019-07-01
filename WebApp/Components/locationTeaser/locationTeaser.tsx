import React from "react";
import { Location } from "../../Swagger";
import { Link } from "react-router-dom";

export const LocationTeaser = (props: Location) => {
  const { title, imageUrl } = { ...props };

  return (
    <div className="hv-teaser-location">
      <img src={imageUrl} alt={title} />
      <Link to="/book">{title}</Link>
    </div>
  );
};
