function Decrement(props){
    return (
        <button onClick={()=>props.setCount(props.count -1)}>DECREMENT</button>
    );

}
export default Decrement;