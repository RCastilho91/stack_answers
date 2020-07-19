import React, { Component } from 'react';

export default class exitModal {
    constructor(props){
        super(props);

        this.state = {
            visibility: false
        }
    }

    modalAppears() {
        this.setState = {
            visibility: true
        }
    }

    modalDisappears() {
        this.setState = {
            visibility: false
        }
    }


    render() {
        if(this.state.visibility == false){
            return null
        } else {
            return(
                <div className="exit-modal">
                    Content here
                </div>
            );
        }
    }
}
