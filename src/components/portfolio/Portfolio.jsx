import { useState,useEffect } from "react"
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import { projects } from "../../data.jsx"

export default function Portfolio() {
    const [selected, setSelected] = useState("all")
    const [data, setData] = useState([])
    const list=[
        {
        id:"all",
        title:"All"
    },{
        id:"web",
        title:"Web App"
    },{
        id:"mobile",
        title:"Mobile App"
    },{
        id:"ml",
        title:"Machine Learning App"
    }]
    useEffect(() => {
       switch(selected){
            case "all":
               setData(projects);
               break;
            case "web":
                setData(projects.filter((el,)=> el.type==='web'));
                break;
            case "mobile":
                    setData(projects.filter((el,)=> el.type==='mobile'));
                    break;
            case "ml":
                     setData(projects.filter((el,)=> el.type==='ml'));
                     break;
            default:
                setData(projects)
       }
       
    }, [selected])
    return (
        <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
            {list.map((item, index)=>(
                <PortfolioList
                key={index}
                id={item.id} 
                title={item.title}
                 active={selected===item.id}
                 setSelected={setSelected}/>
            ))}
        </ul>
        <div className="container">
        {
            data.map((d, index)=>(
                <a  href={d.link} target="_blank" className="item" key={index}>
                <img src={d.img}
                 alt="" />
                <h3>{d.title}</h3>
            </a>
                
            ))}
        </div>
        </div>
    )
}
