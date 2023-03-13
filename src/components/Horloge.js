import React from 'react';

class Horloge extends React.Component {

    constructor(props){
        super(props);
        this.state = {date : new Date()}
        this.timerID = null
    }

    componentDidMount (){

        this.timerID = setInterval(()=>{
            this.setState({date : new Date()})
        }
        , 1000)
    }
    componentWillUnmount (){
        clearInterval(this.timerID)
    }
    componentDidUpdate (){

    }


    
    render () {
        return (
            <div>
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}
export default Horloge;