import React, {Component} from 'react';
import {Heading, Text, List, ListItem, Slide} from 'spectacle';


export default class SingleProps1Slide extends Component {


    render() {
        return (
            <Slide>
                <List>
                    <ListItem>
                        The Single class implements the Reactive Pattern for a single value response.
                    </ListItem>
                    <ListItem>
                        Single behaves similarly to Observable except that it can only emit either a single successful
                        value or an error (there is no "onComplete" notification as there is for an Observable).
                    </ListItem>
                    <ListItem>
                        The Single class implements the SingleSource base interface and the default consumer type it
                        interacts with is the SingleObserver via the subscribe(SingleObserver) method.
                    </ListItem>

                </List>
            </Slide>
        )
    }
}