import React from 'react'
export default function Day6() {
    var menu=[{id:1,name:"Strawberry",price:"50",image:<div id="fru1"><img src="https://tse4.mm.bing.net/th?id=OIP.qz9iqMrqdg5w1JECwNMkwgHaDw&pid=Api&P=0" alt=" "/></div>},
               {id:2,name:"Grapes",price:"100",image:<div id="fru2"><img src="https://tse3.mm.bing.net/th?id=OIP.KNHJ3Zj5fMpWo1Hhs97uDwHaF7&pid=Api&P=0" alt=" "/></div>},
               {id:3,name:" Apple",price:"150",image:<div id="fru3"><img src="https://tse4.mm.bing.net/th?id=OIP.VCgRxWcTx836WafFitRx0AHaIn&pid=Api&P=0" alt=" "/></div>}]
    var dispmenu=menu.map((fname)=>{return<li key={fname.id}>{fname.id} .{fname.name} <br/> PRICE: {fname.price} <br/> IMAGE: <br/> {fname.image}<br/><br/></li>})
  return (
    <div>
    <h1 id="HEAD"><marquee>FRESH & FRUITY </marquee></h1><br/>
        {dispmenu}
    </div>
  )
}