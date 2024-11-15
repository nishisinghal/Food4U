import React from "react";

class Userclass extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state= {
            count:0,

        }

    }
     

    render(){
       return(
        <div>
            <h2>count= {this.state.count}</h2>
            <button onClick={()=>{
                
                this.setState({
                    count : this.state.count+1,
                });
            }} >Countinc</button>

        <h2>Name: {this.props.name}</h2>
        <h3>Location: Sheopur</h3>
        <h4>Conatct: 7909855137</h4>
        </div>
       );
    }
}

export default Userclass;

// for sending props to a class component we wiill sen it as a prop in class we will use constructor to access it ;