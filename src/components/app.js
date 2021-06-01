import { webSocket } from "../utils/websocket";
import { HitStat } from "./hitStat/HitStat";
import "./app.css";
import { PlayingStatus } from "../utils/constants";
import { useEffect, useState } from "react";
import { HitStatView } from "./hitStat/HitStatView";

const _set = (func, data) => {
  data && func(data);
};

const _clear = (funcs) => {
  for (const func of funcs) {
    func(0);
  }
};

const App = () => {
  const [displayStuff, setDisplayStuff] = useState(false);

  const [marvelous, setMarvelous] = useState();
  const [perfect, setPerfect] = useState();
  const [great, setGreat] = useState();
  const [good, setGood] = useState();
  const [bad, setBad] = useState();
  const [miss, setMiss] = useState();

  const [artistTitle, setArtistTitle] = useState();

  const handleDisplay = (status) => {
    // Don't do anything if event doesn't include status
    if (status) {
      console.log({ status });
      if (
        status === PlayingStatus.Playing ||
        status === PlayingStatus.Watching
      ) {
        setDisplayStuff(true);
      } else {
        _clear([setMarvelous, setPerfect, setGreat, setGood, setBad, setMiss]);
        setDisplayStuff(false);
      }
    }
  };

  useEffect(() => {
    webSocket({
      host: "localhost",
      port: "20727",
      path: "/tokens",
      initialTokens: [
        "mStars",
        "status",
        "rawStatus",
        "bpm",
        "circles",
        "sliders",
        "mapArtistTitle",
        "mapDiff",
        "totaltime",
        "geki",
        "katsu",
        "c300",
        "c100",
        "c50",
        "miss",
      ],
    }).then(({ receive, send }) => {
      receive((data) => {
        console.log(data);

        _set(setMarvelous, data?.geki);
        _set(setPerfect, data?.c300);
        _set(setGreat, data?.katsu);
        _set(setGood, data?.c100);
        _set(setBad, data?.c50);
        _set(setMiss, data?.miss);
        _set(setArtistTitle, data?.mapArtistTitle);

        handleDisplay(data?.rawStatus);
      });
    });
    // Meant to initialize the websocket
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main-flex">
      <HitStatView
        visible={displayStuff}
        marvelous={marvelous}
        perfect={perfect}
        great={great}
        good={good}
        bad={bad}
        miss={miss}
      />
    </div>
  );
};

export default App;
