import React, {Component} from 'react';
import {Heading, Slide, Text, Link} from "spectacle";

export default class StartSlide extends Component {


    render() {
        return (
            <Slide transition={['zoom']} >
                <Heading size={1} fit caps >
                    ReactiveX || RxJava
                </Heading>
                <Text textSize="34px" margin="100px 0px 0px" >
                    Konstantin Volivach
                </Text>
                <Text textSize="34px" italic>
                    Middle Kotlin dev
                </Text>
                <Link margin="0px 0px 0px 0px" href={"https://github.com/kostya05983"}>
                    Find me on GitHub
                </Link>
            </Slide>
        )

    }
}