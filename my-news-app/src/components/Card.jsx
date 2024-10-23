export function Card(props){

         function myFun(){      
            window.location.href = props.url;
         }

       return(

            <div className="  h-auto shadow-md bg-slate-200 rounded-md w-80 border border-black  m-4 " >
           
               {
                props.urlToImage==null?<img className="h-40 w-full" src="https://i.insider.com/65bd5e0543bb77284ba33c48?width=1200&format=jpeg" alt="image" /> :<img className="h-40 w-full" src={props.urlToImage} alt="image" /> 
               }             

                        <div className="flex-col justify-between items-center  " > 
                          
                          {/* <div className=" font-bold text-xl ml-1 mt-1 ">{props.author?props.author:"India tv"}</div> */}
                            <div className=" font-medium ml-1 ">{props.title}</div>
                            {/* <p>{props.content}</p> */}
                            <div>{props.description}</div>
                            <button className="border shadow-md border-black ml-20 mt-8 mb-3 h-8 rounded-md w-32 bg-sky-300" onClick={myFun}>Read More</button>
                          </div>
                         
                         </div>

       )

}


// author
// : 
// "Jacquelyn Melinek"
// content
// : 
// "The crypto world is riddled with noise. Memecoins, speculation, rugpulls, scams, hype and doomers distract us from all the innovative stuff people are building with blockchains. And sometimes the noi… [+1136 chars]"
// description
// : 
// "\"I’m not anti-speculation, but I think it’s a question of priorities... It’s putting the cart before the horse.\""
// publishedAt
// : 
// "2024-02-02T17:09:15Z"
// source
// : 
// {id: 'techcrunch', name: 'TechCrunch'}
// title
// : 
// "A16z’s Chris Dixon thinks it's time to focus on blockchains' use cases, not speculation | TechCrunch"
// url
// : 
// "https://techcrunch.com/2024/02/02/a16z-chris-dixon-chain-reaction-interview/"
// urlToImage
// : 
// "https://techcrunch.com/wp-content/uploads/2022/10/tc-disrupt-2022-chris-dixon-9.jpg?resize=1200,800"