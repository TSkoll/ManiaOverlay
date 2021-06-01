export const HitStat = ({ value, label, background }) => (
  <div className="hitstat-inline">
    <span style={{ background }}>{label}</span>
    {value}
  </div>
);
