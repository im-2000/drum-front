import { Navigation } from "../../components/Navigation";
import background from "../../image/background2.webp";

export const MyTracks = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div
        className="mytracks"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};
