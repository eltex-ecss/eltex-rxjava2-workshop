import React, {Component} from 'react';
import {Image, Text, Slide, Heading} from "spectacle";
import Completable from '../../assets/completable.png'

export default class CompletableSlide extends Component {

    render() {
        return (
            <Slide>
                <Heading size={4}>Completable</Heading>
                <Text margin="20px 0px 0px 0px">a flow without items but only a completion or error signal</Text>
                <Image src={Completable} width={500}/>
            </Slide>
        )
    }
}