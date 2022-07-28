import { Routes, Route } from 'react-router-dom';

import Activity from '../../Pages/Activity/Activity';
import Map from '../../Pages/Map/Map';
import Time from '../../Pages/Time/Time';

export default function RoutesComponent() {
  return (
    <Routes>
      <Route exact path="/" element={<Activity />} />
      <Route exact path="/map" element={<Map />} />
      <Route exact path="/time" element={<Time />} />
    </Routes>
  );
}
