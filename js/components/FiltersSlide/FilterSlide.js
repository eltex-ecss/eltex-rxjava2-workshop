import React, {Component} from 'react'
import FilterImage from '../../assets/filters.png'
import {Heading, Image, Slide, Text} from 'spectacle';


export default class FilterSlide extends Component {

    render() {
        return (
            <Slide>
                <Heading size={4}>Observable</Heading>
                <Image src={FilterSlide}/>
            </Slide>
        )
    }
}