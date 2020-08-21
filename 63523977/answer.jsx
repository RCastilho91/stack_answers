import React, { Component } from 'react';

export default class Foo extends Component {
    constructor(props){
        super(props);

        this.state = {
            records: []
        }
    
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(records) {
        this.setState({
            ...this.state,
            records: records
        });
    }

    render(){
        return(
            <div className="records">
                { this.state.records }
            </div>
        )
    }
}