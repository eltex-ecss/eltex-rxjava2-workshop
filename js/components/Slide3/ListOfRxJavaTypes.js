import React, {Component} from 'react';
import {Heading, List, ListItem, Slide, Text} from "spectacle";

export default class ListOfRxJavaTypes extends Component {

    render() {
        return (
            <Slide transition={['fade']} bgColor="primary">
                <Heading fit size={2} textColor="secondary" caps>
                    Types in ReactiveX
                </Heading>
                <List>
                    <ListItem>Single</ListItem>
                    <ListItem>Observable</ListItem>
                    <ListItem>Completable</ListItem>
                    <ListItem>Flowable</ListItem>
                    <ListItem>Maybe</ListItem>
                </List>
            </Slide>
        )
    }
}