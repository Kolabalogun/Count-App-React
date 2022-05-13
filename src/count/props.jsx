import './Count.css'

const Main = (props) => {

    
    return ( 
        <section style={{ margin: '4rem 0' }}>
<h1>Simple Counter App</h1>

        <h1>{props.count}</h1>

     <div className="btn">
     <button onClick={props.addition}>Add</button>
        <button onClick={props.reset}>Reset</button>
        <button onClick={props.subtract}>Sub</button>
     </div>
        </section>
     );
}
 
export default Main;