import React, {Component} from 'react'
import {Slide, Text, List, ListItem, Heading} from 'spectacle'

export default class ObservableProps1Slide extends Component {

    render() {
        return (
            <Slide>
                <List>
                    <ListItem>
                        The Observable class is the non-backpressured, optionally multi-valued base reactive class that
                        offers factory methods, intermediate operators and the ability to consume synchronous and/or
                        asynchronous reactive dataflows.
                    </ListItem>
                    <ListItem>
                        Many operators in the class accept ObservableSource(s), the base reactive interface for such
                        non-backpressured flows, which Observable itself implements as well.
                    </ListItem>
                    <ListItem>
                        The Observable's operators, by default, run with a buffer size of 128 elements (see
                        Flowable.bufferSize()), that can be overridden globally via the system parameter
                        rx2.buffer-size. Most operators, however, have overloads that allow setting their internal
                        buffer size explicitly.
                    </ListItem>
                </List>
            </Slide>
        )
    }
}