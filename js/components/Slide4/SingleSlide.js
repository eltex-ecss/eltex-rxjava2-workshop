import React, {Component} from 'react';
import {Heading, Text, Image, ListItem, Slide} from "spectacle";
import SingleImage from '../../assets/Single.png'

export default class SingleSlide extends Component {


    render() {
        return (
            <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                <Heading size={6} textColor="secondary" caps>
                    Single
                </Heading>
                <Text margin="30px 0px 30px 0px">
                    A flow of exactly 1 item or an error
                </Text>
                <Image src={SingleImage}/>
            </Slide>
        )
    }
}