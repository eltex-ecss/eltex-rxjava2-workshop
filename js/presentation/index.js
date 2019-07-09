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
import StartSlide from "../components/Slide1/StartSlide";
import CloneProjectSlide from "../components/Slide2/CloneProjectSlide";
import ListOfRxJavaTypes from "../components/Slide3/ListOfRxJavaTypes";
import SingleSlide from "../components/SingleSlides/SingleSlide";
import ObservableSlide from "../components/ObservableSlides/ObservableSlide";
import CompletableSlide from "../components/Slide6/CompletableSlide";
import FlowableSlide from "../components/Slide7/FlowableSlide";
import MaybeSlide from "../components/Slide8/MaybeSlide";
import SingleProps1Slide from "../components/SingleSlides/SingleProps1Slide";
import SingleProps2Slide from "../components/SingleSlides/SingleProps2Slide";
import ObservableProps1Slide from "../components/ObservableSlides/ObservableProps1Slide";
import CompletableProps1Slide from "../components/Slide6/CompletableProps1Slide";
import MaybeProps1 from "../components/Slide8/MaybeProps1";
import FlowableProps1 from "../components/Slide7/FlowableProps1";
import FilterSlide from "../components/FiltersSlide/FilterSlide";
import FiltersCodeSlide from "../components/FiltersSlide/FiltersCodeSlide";
import MapSlide from "../components/MapSlides/MapSlide";
import MapCodeSlide from "../components/MapSlides/MapCodeSlide";

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
                <StartSlide/>
                <CloneProjectSlide/>
                <ListOfRxJavaTypes/>
                <SingleSlide/>
                <SingleProps1Slide/>
                <SingleProps2Slide/>
                <ObservableSlide/>
                <ObservableProps1Slide/>
                <CompletableSlide/>
                <CompletableProps1Slide/>
                <FlowableSlide/>
                <FlowableProps1/>
                <MaybeSlide/>
                <MaybeProps1/>
                <FilterSlide/>
                <FiltersCodeSlide/>
                <MapSlide/>
                <MapCodeSlide/>
            </Deck>
        );
    }
}
