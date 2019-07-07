// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    Image,
    List,
    ListItem,
    Notes,
    Quote,
    Slide,
    Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import Slide1 from "../components/Slide1/Slide1";
import CloneProjectSlide from "../components/Slide2/CloneProjectSlide";
import ListOfRxJavaTypes from "../components/Slide3/ListOfRxJavaTypes";
import SingleSlide from "../components/Slide4/SingleSlide";
import ObservableSlide from "../components/Slide5/ObservableSlide";
import CompletableSlide from "../components/Slide6/CompletableSlide";
import FlowableSlide from "../components/Slide7/FlowableSlide";
import MaybeSlide from "../components/Slide8/MaybeSlide";

const images = {
    formidagon: require('../assets/formidable-logo.svg'),
    goodWork: require('../assets/good-work.gif')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
    {
        primary: 'white',
        secondary: '#1F2022',
        tertiary: '#03A9FC',
        quaternary: '#CECECE'
    },
    {
        primary: 'Montserrat',
        secondary: 'Helvetica'
    }
);

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck
                transition={['zoom', 'slide']}
                transitionDuration={500}
                theme={theme}
            >
                <Slide1/>
                <CloneProjectSlide/>
                <ListOfRxJavaTypes/>
                <SingleSlide/>
                <ObservableSlide/>
                <CompletableSlide/>
                <FlowableSlide/>
                <MaybeSlide/>
            </Deck>
        );
    }
}
