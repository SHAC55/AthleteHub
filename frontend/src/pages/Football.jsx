import { useEffect, useState } from "react";
import "../football.css";
import NavBar from "../components/navbar";
import { fetchFixtures, fetchTesting } from "../lib/fetch-data";
import Table from "../components/table";
import { Link } from "react-router-dom";
import Fixture from "../components/fixture";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import CachedIcon from "@mui/icons-material/Cached";
import Modal from "../components/modal";
import Footer from "../components/footer";
import EPL from "../components/standings/epl";
import SerieA from "../components/standings/serieA";
import Laliga from "../components/standings/laliga";
import Bundesliga from "../components/standings/bundesliga";
import Ligue from "../components/standings/ligue";
import Team from "../components/standings/team/team";
const Football = () => {
  const [fixtures, setFixtures] = useState([]);
  const [popUp, setPopUp] = useState(false);

  const fetchInfo = async () => {
    const data = await fetchFixtures();
    const test = await fetchTesting();

    const italy = test.response.filter((match) => {
      return match.country.name === "Spain";
    });

    setFixtures(data);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const refresh = () => window.location.reload(true);

  const showPopUpHandler = () => {
    setPopUp(true);
  };
  const hidePopUpHandler = () => {
    setPopUp(false);
  };

  if (fixtures.length === 0)
    return (
      <div className=" bg-white m-auto pt-10" align="center">
        <CircularProgress />
      </div>
    );

  return (
    <>
      <div className="w-full md:w-[700px] lg:w-[800px] m-auto h-screen">
        <NavBar onOpen={showPopUpHandler} onClose={hidePopUpHandler} />

        {popUp && <Modal onClose={hidePopUpHandler} />}

        <button
          onClick={refresh}
          className="btn btn-sm fixed bottom-3 right-2 z-40"
        >
          <CachedIcon />
        </button>

        {fixtures.length == 0 ? (
          <div className=" bg-white w-full text-center p-10">
            <Box>
              <CircularProgress />
            </Box>
          </div>
        ) : (
          <div>
            <Link
              to={"/football/"}
              className="ml-20 cursor-pointer hover:text-blue-500"
            >
              .tyegry
            </Link>

            <Link
              to={"/football/epl"}
              className="ml-20 cursor-pointer hover:text-blue-500"
            >
              Odi score
            </Link>

            <Link
              to={"/football/seriea"}
              className="ml-20 cursor-pointer hover:text-blue-500"
            ></Link>

            <Link
              to={"/football/laliga"}
              className="ml-20 cursor-pointer hover:text-blue-500"
            >
              di score
            </Link>

            <Link
              to={"/football/bundesliga"}
              className="ml-20 cursor-pointer hover:text-blue-500"
            >
              Odi score
            </Link>

            <Link
              to={"/football/ligue"}
              className="ml-20 cursor-pointer hover:text-blue-500"
            >
              Odi score
            </Link>

            <Link
              to={"/football/fixture/:matchID"}
              className="ml-20 cursor-pointer hover:text-blue-500"
            >
              Odi score
            </Link>

            <Link
              to={"/football/team/:teamID/:leagueID"}
              className="ml-20 cursor-pointer hover:text-blue-500"
            >
              Odi score
            </Link>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Football;
