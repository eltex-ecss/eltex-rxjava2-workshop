import React, {Component} from 'react';
import {Heading, Text, List, ListItem, Slide} from 'spectacle'

export default class SingleProps2Slide extends Component {

    render() {
        return (
            <Slide>
                <List>
                    <ListItem>
                        The Single operates with the following sequential protocol:
                        onSubscribe (onSuccess | onError)?
                        Note that onSuccess and onError are mutually exclusive events; unlike Observable, onSuccess is
                        never
                        followed by onError.
                    </ListItem>
                    <ListItem>
                        Like Observable, a running Single can be stopped through the Disposable instance provided to
                        consumers through SingleObserver.onSubscribe(io.reactivex.disposables.Disposable).
                    </ListItem>
                    <ListItem>
                        Like an Observable, a Single is lazy, can be either "hot" or "cold", synchronous or
                        asynchronous.
                        Single instances returned by the methods of this class are cold and there is a standard hot
                        implementation in the form of a subject: SingleSubject.
                    </ListItem>
                </List>
            </Slide>
        )
    }
}