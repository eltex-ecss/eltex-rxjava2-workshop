import React, {Component} from 'react';
import {Heading, Text, Image, Slide} from "spectacle";
import ObservableImg from '../../assets/observable.png'

export default class ObservableSlide extends Component {

    render() {
        return (
            <Slide transition={['fade']} bgColor="primary" textColor="primary">
                <Heading size={4}>Observable</Heading>
                <Text>0..N flows, no backpressure</Text>
                <Image src={ObservableImg}></Image>
            </Slide>
        )
    }
}