import React, {Component} from 'react';
import {BlockQuote, Cite, Quote, Slide} from "spectacle";


export default class Slide5 extends Component {

    render() {
        return (
            <Slide transition={['fade']} bgColor="secondary" textColor="primary">
                <BlockQuote>
                    <Quote>Example Quote</Quote>
                    <Cite margin="10px 0 0 30px">Author</Cite>
                </BlockQuote>
            </Slide>
        )
    }
}