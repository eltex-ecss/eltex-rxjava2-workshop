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
import Slide2 from "../components/Slide2/Slide2";
import Slide3 from "../components/Slide3/Slide3";
import Slide4 from "../components/Slide4/Slide4";
import Slide5 from "../components/Slide5/Slide5";
import Slide6 from "../components/Slide6/Slide6";

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
                <Slide2/>
                <Slide3/>
                <Slide4/>
                <Slide5/>
                <Slide6/>
            </Deck>
        );
    }
}
