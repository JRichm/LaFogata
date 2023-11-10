import Image from 'next/image'
import Menu from './components/menu'
import Locations from './components/locations'

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="bg-gray-200 h-60 flex justify-center">
        <div className='flex flex-row justify-between w-[900px]'>
          <p>contact</p>
          <p>search</p>
          <p>menu</p>
        </div>
      </div>
      <div className='bg-red-100 text-3xl min-h-[600px] flex justify-center'>
        <div className='w-[800px]'>
          <h1>Hero Section</h1>
        </div>
      </div>
      <div className="bg-yellow-200 min-h-[200px] flex flex-col">
        <p className="text-3xl">locations</p>
        <Locations />
      </div>
      <div className='bg-green-200 min-h-[400px]'>
        <p className="text-3xl">menu</p>
        <Menu />
      </div>
    </main>
  )
}
