import React,{useState} from 'react' 
export default function HomePage(){ 

const [name, setName] = useState("")
const [soyad, setSurName] = useState("")
const [age, setOld] = useState("")


    const [mockData, setMockData] = useState([
        {name:"Mehmet",surname:"Tunç",age:21},
        {name:"Ahmet",surname:"İpek",age:25},
        {name:"Ayşe",surname:"Aslan",age:20},
        {name:"Hasan",surname:"Yıldırım",age:32},
        {name:"Melek",surname:"Öztürk",age:34}
    ])

    return(
        <div class="container mt-4">
            <h3>
                Üye Form
            </h3>
            <table>
  <tr>
    <th>Ad</th>
    <th>Soyad</th>
    <th>Yaş</th>
    <th>Detay</th>
  </tr>
  {
      mockData.map(item=> <tr>
        <td>{item.name}</td>
        <td>{item.surname}</td>
        <td>{item.age}</td>
        <td>  <a href={`forms/`+item.name+'-'+item.surname+'-'+item.age   }>
           Detay
          </a></td>
      </tr>)
  }
 
  
</table>      
<br />
<br />
<br />
<br />

<input class="form-control mb-2"  type="text" placeholder="name" onChange={(text)=>setName(text.target.value)} />
<input class="form-control mb-2" type="text" placeholder="surname" onChange={(text)=>setSurName(text.target.value)} />
<input class="form-control mb-2" type="number" min="0" max="100" placeholder="age" onChange={(text)=>setOld(text.target.value)} />
<a class="btn btn-success mb-4" onClick={()=>setMockData([...mockData,{name,surname:soyad,age}])} >Ekle</a>

        </div>
    )
}