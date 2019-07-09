import React, {Component} from 'react';
import {Slide, Text, List, ListItem} from 'spectacle'

export default class FlowableProps1 extends Component {

    render() {
        return (
            <Slide>
                <List>
                    <ListItem>
                        Reactive Streams operates with Publishers which Flowable extends. Many operators therefore
                        accept general Publishers directly and allow direct interoperation with other Reactive Streams
                        implementations.
                    </ListItem>
                    <ListItem>
                        The Flowable hosts the default buffer size of 128 elements for operators, accessible via
                        bufferSize(), that can be overridden globally via the system parameter rx2.buffer-size. Most
                        operators, however, have overloads that allow setting their internal buffer size explicitly.
                    </ListItem>
                    <ListItem>
                        The Flowable follows the protocol
                        onSubscribe onNext* (onError | onComplete)?
                    </ListItem>
                    <ListItem>
                        Flowables support backpressure and require Subscribers to signal demand via
                        Subscription.request(long).
                    </ListItem>
                </List>
            </Slide>
        )
    }
}