import './App.css';
import BodyItem from './BodyItem';
import Footer from './Footer';
import Header from "./Header.js"
function App() {
  return (
    <div className="App">
      <Header />
      <BodyItem product="Model 3" description="Electric vehicle incentives are now available on eligible Model 3 in ACT, NSW, TAS and VIC. Learn More" first__btn="EXISTING INVENTORY" second__btn="CUSTOM ORDER" background__image="https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop"/>
      <BodyItem product="Solar and Powerwall" description="Power Everything" first__btn="LEARN MORE" second__btn="STAY UPDATED" background__image="https://tesla-cdn.thron.com/delivery/public/image/tesla/45992f1c-a33a-4a04-b1f0-338aff182f8e/bvlatuR/std/2880x1800/_25-Hero-D"/>
      <BodyItem product="Model Y" first__btn="LEARN MORE" second__btn="STAY UPDATED" background__image="https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70"/>
      <BodyItem product="Model S" description="Schedule a Touchless Test Drive" first__btn="CUSTOM ORDER" second__btn="LEARN MORE" background__image="https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop"/>
      <BodyItem product="Model X" description="Schedule a Touchless Test Drive" first__btn="CUSTOM ORDER" second__btn="LEARN MORE" background__image="https://tesla-cdn.thron.com/delivery/public/image/tesla/325743a2-d187-4e28-91a3-5a2e47e317f7/bvlatuR/std/2880x1800/ModelX-Homepage-D"/>
      <Footer/>
    </div>
  );
}

export default App;
