import React, {Component} from 'react'
import CodeSlide from 'spectacle-code-slide';
import "../../assets/prism-vs.css"
import "./FiltersCode.css"

export default class FiltersCodeSlide extends Component {

    componentDidMount() {
    }


    render() {
        return (
            <CodeSlide
                lang="js"
                code={require("raw-loader!../../assets/code/filters.code")}
                ranges={
                    [{loc: [0, 3]}]
                }
            >
            </CodeSlide>
        )
    }
}