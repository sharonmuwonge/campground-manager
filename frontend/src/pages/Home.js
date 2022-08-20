import Overview from '../components/Overview.js'
import Campsite from '../components/Forms/Campsite'

const Home = () => {
  return (
    <div>
        <header>
            <h1>Daily overview</h1>
        </header>
        <Overview />
        <Campsite />
    </div>
  )
}

export default Home
