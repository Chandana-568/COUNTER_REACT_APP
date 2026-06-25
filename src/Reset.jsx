function Reset({count ,setCount}){
    return (
        <button onClick={()=>setCount(0)}>RE-SET</button>
    );
}
export default Reset;