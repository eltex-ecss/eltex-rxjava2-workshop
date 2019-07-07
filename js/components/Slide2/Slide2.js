import React, {Component} from 'react';
import {Image, Slide} from "spectacle";
import formidagon from '../../assets/formidable-logo.svg'


export default class Slide2 extends Component {

    render() {
        return (
            <Slide bgColor="secondary">
                <Image src={formidagon} width={800}/>
            </Slide>
        )
    }
}