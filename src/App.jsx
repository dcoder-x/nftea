import {Features,Button,Download,SectionWrapper} from './components'
import './index.css'
import assets from './assets'
function App() {

  return (
      <div className='App'>
        <div className={`flex-col  absolute justify-center`} style={{alignItems:"center"}}>
        <img src="src\assets\logo.png" alt="logo" style={{height:'100px',width:'100px'}} /> 
        {/* <p className={` px-5 py-2`}>Nftea</p> */}
        </div>
        
        <SectionWrapper 
        desc='Nftea is a Cross chain NFT platform that allows free minting, selling, buying and reselling NFTs.
         The ultimate Nft market platform for buying and selling top nfts'
        title='Mint, Buy and sell NFTs with ease on the Nftea app. 
        Free minting(no gas fee). '
        showBtn
        mockupImg={assets.homeHero}
        banner='banner'
        />
        <SectionWrapper 
        desc='Enjoy welcoming and beautiful UI on the Nftea App '
        title='Freindly user interface and user experience '
        reverse
        mockupImg={assets.homeCards}
        />
        <Features/>
        <SectionWrapper 
        desc='Nftea will launch Officialy this summer. Excited right? Nftea can be currently viewed on Expo go. '
        title='Deployment '
        reverse
        mockupImg={assets.feature}
        />
        <SectionWrapper 
        desc='Nftea will launch Officialy this summer. Excited right? Nftea can be currently viewed on Expo go. '
        title='Deployment '
        mockupImg={assets.mockup}
        banner='banner02'
        />
        <Download/>
        <div className={`flex flex-col justify-center align-middle banner04 bg-primary px-4 py-20 text-center text-white`} >
          <p>
            Made with love by Ayomikun Faluyi, inspired by Javascript Mastery
          </p>
        </div>
      </div>
  )
}

export default App
