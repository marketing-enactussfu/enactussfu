import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Sponsorship from './Sponsorship';
import WhatWeDo from './about/whatWeDo';
import OurTeam from './about/OurTeam';
import CoastCards from './pastProject/CoastCards';
import Competitions from './Competitions';  
import CountOnMe from './pastProject/CountonMe';
import ChangemakerChallenge from './pastProject/ChangemakerChallenge';
import BrightIdeas from './pastProject/BrightIdeas';
import Careers from './Careers';//:D
import BannerBags from './pastProject/BannerBags';
import MediaMind from './pastProject/MediaMind';
import ReFresh from './pastProject/ReFresh';
import KindredKnots from './pastProject/KindredKnots';
import SecondSavour from './CurrentProjects/SecondSavour';
import SKYES from './CurrentProjects/SKYES';
import AA from './CurrentProjects/AA';
import CommunityGrafts from './CurrentProjects/CommunityGrafts';
import EntrepreneurshipChallenges from './CurrentProjects/EntrepreneurshipChallenges';
import TurbioEnergy from './CurrentProjects/TurbioEnergy';
import Events from './Events';


export default function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sponsorship" element={<Sponsorship/>} />
        <Route path="/about/what-we-do" element={<WhatWeDo/>} />
        <Route path="/about/our-team" element={<OurTeam/>} />
        <Route path='/projects/past-projects/coast-cards' element={<CoastCards/>} />
        <Route path="/competitions" element={<Competitions/>} />
        <Route path='/projects/past-projects/count-on-me' element={<CountOnMe/>} />
        <Route path='/projects/past-projects/changemaker-challenge' element={<ChangemakerChallenge/>} />
        <Route path='/projects/past-projects/bright-ideas' element={<BrightIdeas/>} />
        <Route path='/projects/current-projects/second-savour' element={<SecondSavour/>} />
        <Route path="/careers" element={<Careers/>} />
        <Route path='/projects/past-projects/banner-bags' element={<BannerBags/>} />
        <Route path='/projects/past-projects/media-mind' element={<MediaMind/>} />
        <Route path='/projects/past-projects/refresh' element={<ReFresh/>} />
        <Route path='/projects/past-projects/kindred-knots' element={<KindredKnots/>} />
        <Route path='/projects/current-projects/skyes' element={<SKYES/>} />
        <Route path='/projects/current-projects/community-grafts' element={<CommunityGrafts/>} />
        <Route path='/projects/current-projects/entrepreneurship-challenges' element={<EntrepreneurshipChallenges/>} />
        <Route path='/projects/current-projects/turbio-energy' element={<TurbioEnergy/>} />
        <Route path='/projects/current-projects/aa' element={<AA/>} />
        <Route path='/events' element={<Events/>} />


      </Routes>
    </Router>
  );
}

