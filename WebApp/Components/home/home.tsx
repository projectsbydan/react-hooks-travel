import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Location, LocationsApi } from "../../Swagger";
import { LocationTeaser } from "../locationTeaser/locationTeaser";

export const Home = () => {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    (async () => {
      const api = new LocationsApi();
      const locations = await api.getAllLocations();
      setLocations(locations);
    })();
  }, []);

  return (
    <section>
      <article className="hv-hero-container">
        <img src="/images/hero.jpg" alt="" />
        <div className="hv-hero-content">
          <h1>
            Take the <br /> trip of a lifetime
          </h1>
          <Link to="/book">book now</Link>
        </div>
      </article>
      <article className="hv-teaser">
        <h2>See our locations</h2>
        <p>
          But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the
          system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or
          avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue.
        </p>
      </article>
      <article className="hv-locations">
        {locations.map((location, index) => (
          <LocationTeaser {...location} key={index} />
        ))}
      </article>
    </section>
  );
};
