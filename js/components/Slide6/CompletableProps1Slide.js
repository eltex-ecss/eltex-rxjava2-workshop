import React, {Component} from 'react'
import {Slide, Text, List, ListItem, Heading} from 'spectacle'

export default class CompletableProps1Slide extends Component {

    render() {
        return (
            <Slide>
                <List>
                    <ListItem>
                        Completable behaves similarly to Observable except that it can only emit either a completion or
                        error signal (there is no onNext or onSuccess as with the other reactive types).
                    </ListItem>
                    <ListItem>
                        The Completable class implements the CompletableSource base interface and the default consumer
                        type
                        it interacts with is the CompletableObserver via the subscribe(CompletableObserver) method. The
                    </ListItem>
                    <ListItem>
                        Completable operates with the following sequential protocol:
                        onSubscribe (onError | onComplete)?
                    </ListItem>
                    <ListItem>
                        Note that as with the Observable protocol, onError and onComplete are mutually exclusive events.
                    </ListItem>
                    <ListItem>
                        Like Observable, a running Completable can be stopped through the Disposable instance provided
                        to
                        consumers through SingleObserver.onSubscribe(io.reactivex.disposables.Disposable).
                    </ListItem>
                    <ListItem>
                        Like an Observable, a Completable is lazy, can be either "hot" or "cold", synchronous or
                        asynchronous. Completable instances returned by the methods of this class are cold and there is
                        a
                        standard hot implementation in the form of a subject: CompletableSubject.
                    </ListItem>
                </List>
            </Slide>
        )
    }
}