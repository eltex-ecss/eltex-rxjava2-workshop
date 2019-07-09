import React, {Component} from 'react'
import {Slide, Heading, Text, Image} from 'spectacle'
import MapImage from '../../assets/map.png'

export default class MapSlide extends Component {

    render() {
        return (
            <Slide>
                <Heading size={1}>
                    Map
                </Heading>
                <Text fit margin="50px 0px 50px 0px">
                    transform the items emitted by an Observable by applying a function to each item
                </Text>
                <Image src={MapImage}/>
            </Slide>
        )
    }
}