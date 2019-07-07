import React, {Component} from 'react';
import {Slide, Text, Heading, Image} from 'spectacle';
import flowable from '../../assets/flowable.png';


export default class FlowableSlide extends Component {


    render() {
        return (
            <Slide>
                <Heading size={4}>Flowable</Heading>
                <Text margin="20px 0px 0px 0px">0..N flows, supporting Reactive-Streams and backpressure</Text>
                <Image src={flowable}/>
            </Slide>
        )
    }
}