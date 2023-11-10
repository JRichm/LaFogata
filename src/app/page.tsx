import Image from 'next/image'
import Menu from './components/menu'
import Locations from './components/locations'

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="bg-gray-200 min-h-60 flex flex-col">
        <div className='flex flex-row justify-between w-[900px]'>
          <p>contact</p>
          <p>search</p>
          <p>menu</p>
        </div>
        <div className='flex justify-center'>
        </div>
      </div>
      <div className='bg-red-100 text-3xl h-[600px] flex justify-center'>
        <div className='flex flex-col place-items-center'>
          <Image src="/logotrans.png" alt="la-fogata-logo" width={600} height={600} className='absolute' />
          <div className='w-full flex'>
            <Image src="/tacopic5.jpg" alt='tacos' width={2000} height={2000} className=''/>
          </div>
        </div>
      </div>
      <div className="bg-yellow-200 min-h-[200px] flex flex-col">
        <p className="text-3xl">locations</p>
        <Locations />
      </div>
      <div className='bg-green-200 min-h-[400px] flex flex-col pt-6'>
        <p className="text-3xl self-center">menu</p>
        <Menu />
      </div>
    </main>
  )
}
