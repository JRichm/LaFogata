import React, { useEffect, useState } from 'react'

const menuItems = () => {
    const [menuITems, setMenuItems] = useState([])
    
    
}

export default function Menu() {

}

// import React, { useEffect, useState } from 'react';

// const TacoMenu = () => {
//   const [menuItems, setMenuItems] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('path-to-your-json-file.json');
//         const data = await response.json();
//         setMenuItems(data.cartMenu);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures that the fetch is only called once, similar to componentDidMount

//   return (
//     <div>
//       <h1>Taco Cart Menu</h1>
//       <ul>
//         {menuItems.map(item => (
//           <li key={item.ItemID}>
//             <h2>{item.ItemName}</h2>
//             <p>{item.ItemDescription}</p>
//             <p>${item.ItemPrice.toFixed(2)}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
