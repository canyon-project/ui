import Companies from './components/hompage/companies.tsx';
import Feedback from './components/hompage/feedback.tsx';
import Learn from './components/hompage/learn.tsx';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import HomepageMainboard from './components/hompage/mainboard.tsx';
import Pinglun from './components/hompage/pinglun.tsx';
import Workflows from './components/hompage/workflows.tsx';
// import './App.css'

function App() {
  const companiesDataSource = [
    {
      zIndex: 0,
      image: <img src='/img/companies/trip.svg' alt='' className={'h-[50px]'} />,
    },
    {
      zIndex: 0,
      image: <img src='/img/companies/trip.svg' alt='' className={'h-[50px]'} />,
    },
    {
      zIndex: 0,
      image: <img src='/img/companies/trip.svg' alt='' className={'h-[50px]'} />,
    },
    {
      zIndex: 1,
      image: <img src='/img/companies/trip.svg' alt='' className={'h-[50px]'} />,
    },
    {
      zIndex: 1,
      image: <img src='/img/companies/trip.svg' alt='' className={'h-[50px]'} />,
    },
    {
      zIndex: 1,
      image: <img src='/img/companies/trip.svg' alt='' className={'h-[50px]'} />,
    },
  ];
  return (
    <>
      <HomepageMainboard />
      <Companies dataSource={companiesDataSource} topRightButton={<div>1122</div>} />
      <Learn />
      <Workflows />
      <Pinglun />
      <Feedback />
      <footer className={'h-[500px]'} />
    </>
  );
}

export default App;
