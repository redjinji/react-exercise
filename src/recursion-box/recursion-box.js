import React from 'react';


class Box extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            children: 0
        };
        
        this.addOne = this.addOne.bind(this);
    }
    
    addOne(e){
        e.stopPropagation();
        this.setState({
            children: this.state.children + 1
        });
    }
    
    makeChildren() {
        let boxComponent=[];
        for (let i=0;i<this.state.children;i++){
            boxComponent.push(<Box key={i}></Box>);
        }
        return boxComponent;
    }
    
    render(){
        return (
            <div className='box' onClick={this.addOne}>
                {this.makeChildren()}
            </div>
        );
    }
}

export default Box;
