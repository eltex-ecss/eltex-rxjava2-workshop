import React, {Component} from 'react';
import {Heading, List, ListItem, Slide} from "spectacle";


export default class Slide4 extends Component {


    render() {
        return (
            <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                <Heading size={6} textColor="secondary" caps>
                    Standard List
                </Heading>
                <List>
                    <ListItem bulletStyle="star">Item 1</ListItem>
                    <ListItem bulletStyle="cross">Item 2</ListItem>
                    <ListItem>Item 3</ListItem>
                    <ListItem>Item 4</ListItem>
                </List>
            </Slide>
        )
    }
}