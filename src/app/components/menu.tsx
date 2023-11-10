"use client"

import React, { useEffect, useState } from 'react'

interface MenuItemProps {
    itemID: number,
    itemCategory: number,
    itemName: string,
    itemDescription: string,
    itemPrice: number
}

export default function Menu() {
    const [menuItems, setMenuItems] = useState<MenuItemProps[]>([])
    
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('/menu.json');
            const data = await response.json();
            console.log('data.cartMenu')
            console.log(data.cartMenu)
            setMenuItems(data.cartMenu);
            console.log(data.cartMenu)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

            fetchData();
          }, []); 

    return (
        <div>
            <h1>Taco Cart Menu</h1>
            <hr className='border-black' />
            <div className='grid grid-cols-2'>
                {menuItems.filter(item => item.itemCategory === 1).map(item => (
                    <MenuItem item={item}/>
                ))}
            </div>
            <hr className='border-black' />
            <div className='grid grid-cols-2'>
                {menuItems.filter(item => item.itemCategory === 2).map(item => (
                    <MenuItem item={item}/>
                ))}
            </div>
            <hr className='border-black' />
            <div className='grid grid-cols-2'>
                {menuItems.filter(item => item.itemCategory === 3).map(item => (
                    <MenuItem item={item}/>
                ))}
            </div>
            <hr className='border-black' />
        </div>
  );
}

function MenuItem({item}: {item: MenuItemProps}) {
    return (
        <div key={item.itemID} className='bg-white m-3 p-5'>
            <h2 className='font-bold'>{item.itemName}</h2>
            <p>{item.itemDescription}</p>
            <p className='text-right'>${item.itemPrice}</p>
        </div>
    )
}
