import { Inter } from 'next/font/google'
import MainComponent from './components/MainComponent'
import AnotherComp from './components/AnotherComponent'
const inter = Inter({ subsets: ['latin'] })

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MainComponent />
      <AnotherComp />
    </main>
  )
}

export default Home
