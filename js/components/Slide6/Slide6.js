import React, {Component} from 'react';
import {Image, Notes, Slide} from "spectacle";
import goodWork from '../../assets/good-work.gif'


export default class Slide6 extends Component {

    render() {
        return (
            <Slide>
                <Image src={goodWork} width={500}/>
                <Notes>gifs work too</Notes>
            </Slide>
        )
    }
}