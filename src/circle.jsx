import { useState } from "react"

function CircleA(){
    const [circle,setCircle]=useState([]);
    const [intersect,setIntersect]=useState(false)

    function circles(e){
        var x=e.clientX;
        var y=e.clientY;
        // console.log(x,"sdf",y)
        var size=Math.floor(Math.random()*(200-21)+20)
        console.log(size)

        setCircle(prev=>{
            const data=[...prev,{x,y,size}]
            if(data.length>2) return [];
            encount(data);
            return data;
        })
    }
        function encount(data){
           for(let i=0;i<data.length;i++){
            for(let j=i+1;j<data.length;j++){
                const dx=data[j].x-data[i].x;
                const dy=data[j].y-data[i].y;
                const distance=Math.sqrt(dx*dx+dy*dy);
                const radius=(data[i].size/2)+(data[j].size/2);
                if(distance<radius){
                    setIntersect(true)
                    return;
                }
            }
           }
           setIntersect(false)
        }

    return(
        <>
        <div onClick={circles}
        style={{ 
            width:"100vw",
            height:"100vh",
            position:"relative",
            backgroundColor:intersect? "red":"white"

        }}>
            <h1>Click anyware in the screen for circle </h1>
            {circle.map((val,ind)=>{
               return <div key="ind" style={{
                    height:val.size+"px",
                    width:val.size+"px",
                    position:"absolute",
                    top:val.y+"px",
                    left:val.x+"px",
                    border:"2px solid black",
                    borderRadius:"50%"
                }}>

                </div>
            })}
            
        </div>
        
        </>
    )
}
export default CircleA;