import React, {Component} from 'react';
import CodeSlide from 'spectacle-code-slide';
import "../../assets/prism-vs.css"


export default class MapCodeSlide extends Component {

    render() {
        return (
            <CodeSlide
                lang="js"
                code={require("raw-loader!../../assets/code/map.code")}
                ranges={
                    [{loc: [0, 9]},
                        {loc: [6, 9]}]
                }
            />
        )
    }
}