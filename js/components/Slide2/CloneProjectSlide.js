import React, {Component} from 'react';
import {Slide, Link} from "spectacle";


export default class CloneProjectSlide extends Component {

    render() {
        return (
            <Slide bgColor="primary">
                <Link textSize="100px" fit href="https://github.com/eltex-ecss/eltex-rxjava2-workshop">Clone
                    project</Link>
            </Slide>
        )
    }
}