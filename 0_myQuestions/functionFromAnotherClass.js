import React, { Component } from 'react';

export default class ExitModal extends Component {
    constructor(props){
        super(props);

        this.modalAppears = this.modalAppears.bind(this);
        this.modalDisappears = this.modalDisappears.bind(this);

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

import ExitModal from './components/ExitModal';
import logo from './assets/logo.png'
class UserInterface extends Component {
    constructor(props) {
        super(props);
        this.handleImgClick = this.handleImgClick.bind(this);
    }

    handleImgClick() {
        ExitModal.modalAppears();
    }

    render() {
        return(
            <img className="top-left-logo" src={ logo } onClick= { () => this.handleImgClick } />
        )
    }
}