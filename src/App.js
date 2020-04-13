//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import TopRow from "./TopRow";
import Buttons from "./Buttons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarter, setQuarter] = useState(1);
  const [timer, setTimer] = useState(48);

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow
          homeScore={homeScore}
          awayScore={awayScore}
          timer={timer}
          setTimer={setTimer}
        />

        <BottomRow
          quarter={quarter}
          setQuarter={setQuarter}
          timer={timer}
          setTimer={setTimer}
        />
      </section>

      <Buttons
        setHomeScore={setHomeScore}
        setAwayScore={setAwayScore}
        homeScore={homeScore}
        awayScore={awayScore}
      />
    </div>
  );
}

export default App;
