import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
        <div className="bg-gray-200 flex flex-row justify-between">
            <p>contact</p>
            <p>search</p>
            <p>menu</p>
        </div>
        <div className='bg-red-100 text-3xl min-h-[600px]'>
          <h1>Hero Section</h1>
        </div>
        <div className='bg-green-200 min-h-[400px]'>
          <p className="text-3xl">menu</p>
        </div>
        <div className="bg-yellow-200 min-h-[200px]">
          <p className="text-3xl">locations</p>
        </div>
    </main>
  )
}

interface MenuItemProps {
  itemName: string,
  itemDescription: string,
  itemPrice: number
}

function MenuItem({itemName, itemDescription, itemPrice} : MenuItemProps) {
  return (
    <div>
      <h1 className="text-xl">{itemName}</h1>
      <p>{itemDescription}</p>
      <p>{itemPrice}</p>
    </div>
  )
}