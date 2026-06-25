function Increment({count,setCount}){
    return(
        <button onClick={()=> setCount(count +1)}>INCREMENT</button>
    );
}
export default Increment;