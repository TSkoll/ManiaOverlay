import { HitStat } from "./HitStat";

import "./HitStat.css"

export const HitStatView = ({marvelous, perfect, great, good, bad, miss, visible = false}) => {
  return (
    <div className="hitStatView">
      <HitStat background="#D6F7FF" label="marvelous" value={marvelous} />
      <HitStat background="#FFFA49" label="perfect" value={perfect} />
      <HitStat background="#00E721" label="great" value={great} />
      <HitStat background="#00B9E7" label="good" value={good} />
      <HitStat background="#E50097" label="bad" value={bad} />
      <HitStat background="#C70000" label="miss" value={miss} />
    </div>
  );
};
