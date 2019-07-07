import React, {Component} from 'react';
import {Heading, Text, Slide, Image} from 'spectacle';
import maybe from '../../assets/maybe.png'

export default class MaybeSlide extends Component {

    render() {
        return (
            <Slide>
                <Heading size={4}>
                    Maybe
                </Heading>
                <Text>
                    a flow with no items, exactly one item or an error.
                </Text>
                <Image src={maybe}/>
            </Slide>
        )
    }
}