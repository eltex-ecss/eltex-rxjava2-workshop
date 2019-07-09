import React, {Component} from 'react'
import {Slide, List, ListItem} from "spectacle";

export default class MaybeProps1 extends Component {

    render() {
        return (
            <Slide>
                <List>
                    <ListItem>
                        The Maybe class represents a deferred computation and emission of a single value, no value at
                        all or an exception.
                    </ListItem>
                    <ListItem>
                        The Maybe class implements the MaybeSource base interface and the default consumer type it
                        interacts with is the MaybeObserver via the subscribe(MaybeObserver) method.
                    </ListItem>
                    <ListItem>
                        The Maybe operates with the following sequential protocol:
                        onSubscribe (onSuccess | onError | onComplete)?
                    </ListItem>
                    <ListItem>
                        Like Observable, a running Maybe can be stopped through the Disposable instance provided to
                        consumers through MaybeObserver.onSubscribe(io.reactivex.disposables.Disposable).
                    </ListItem>
                    <ListItem>
                        Like an Observable, a Maybe is lazy, can be either "hot" or "cold", synchronous or asynchronous.
                        Maybe instances returned by the methods of this class are cold and there is a standard hot
                        implementation in the form of a subject: MaybeSubject.
                    </ListItem>
                </List>
            </Slide>
        )
    }
}