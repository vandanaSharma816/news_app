import { useEffect, useState } from 'react'
import { NavBar } from './components/NavBar'
import { Card } from './components/Card'


function App() {

         const key="b6e37a974ece438f919ac87dedb9adc0";
         const [news,setNews]=useState([]);
         const [type,setType]=useState("india");
      

           

          async function fetchNews(){

              const res=await fetch(`https://newsapi.org/v2/everything?q=${type}&apiKey=${key}`)
                   const data=await res.json();
                     setNews(data.articles);   
             }

           useEffect(()=>{
            fetchNews();
            },[type])

  return (
    < div className=''>
        <NavBar setType={setType}></NavBar>

            <div className='flex flex-wrap justify-between gap-10'>

               
            {news?news.map((curr)=>(

        <Card title={curr.title} author={curr.author} description={curr.description}
                 urlToImage={curr.urlToImage} content={curr.content} url={curr.url}
        ></Card>

)):<div>No related news</div>}
            </div>   
       
    </div>
  )
}

export default App
