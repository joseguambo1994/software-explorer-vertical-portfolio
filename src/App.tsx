import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import supermanLogo from 'superman.svg'; // with import
import supermanLogo2 from './superman.svg'; // Tell webpack this JS file uses this image
import logo from './logo.svg';
import man from './man.svg';
import SoftwareExplorerLogo from './SoftwareExplorerLogo.svg';






// Little helpers ...
const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function App() {

  const personalData = {
    name: 'Jose Guambo',
    identification: '0603720848',
    email: 'jlguambo@gmail.com',
    address: 'Humberto Albornoz y oe5-221',
    City: 'Quito, Pichincha, Ecuador',
  }
  const jobExperience = {
    '2019-2020': 'BlueHat Consultores',
    '2020-2021': 'Formos',
    '2021-present': 'BlueHat Consultores', 
  }
  const skills = [
    'React Native',
    'CSS',
    'HTML',
    'Git',
    'Firebase',
    'Cibersecurity'
  ]
  const parallax = useRef<IParallax>(null!)
  const url = (name: string, wrap = false) =>
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
  return (
    <div style={{ width: '100%', height: '100%', background: 'blue' }}>
      <Parallax ref={parallax} pages={6}>

        <ParallaxLayer offset={0} factor={6} speed={1} style={{ flex: 1, backgroundColor: 'purple' }} >

        {
            Object.entries(jobExperience).map(([key, value]) => {
              return <p>{key +' ' + value}</p> 
            })
           }
          
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />
        <ParallaxLayer offset={1} factor={2} speed={2} style={{
          flex: 1,
          opacity: 1,
          backgroundColor: 'pink'
        }} >
          
           {
            Object.entries(personalData).map(([key, value]) => {
              return <p>{key +' ' + value}</p> // "a 5", "b 7", "c 9"
            })
           }
          
        </ParallaxLayer>
        <ParallaxLayer offset={1} factor={3} speed={1} style={{
          flex: 1,
          opacity: 0.8,
          backgroundColor: 'red'
        }} >
               {
            skills.map((item) => {
              return <p>{item}</p> 
            })
           }
          
        </ParallaxLayer>
       
        <ParallaxLayer offset={2} factor={4} speed={1} style={{
          flex: 1,
          opacity: 0.2,

          backgroundColor: 'green'
        }} />
        <ParallaxLayer offset={2} factor={5} speed={1} style={{
          flex: 1,
          opacity: 0.2,
          backgroundColor: 'yellow'
        }} />
<ParallaxLayer offset={0.5} speed={-0.8} style={{ pointerEvents: 'none' }}>
          <img src={man} style={{ width: '30%', marginLeft: '70%' }} />
        </ParallaxLayer>

<ParallaxLayer offset={0.5} speed={-1} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>


        <ParallaxLayer offset={0.5} speed={-1} style={{ pointerEvents: 'none' }}>
          <img src={SoftwareExplorerLogo} style={{ width: '40%', justifySelf:'flex-end' }} />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
