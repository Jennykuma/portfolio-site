import React from "react"
import Typed from 'react-typed'

const TypedDescription = () => (
    <div>
        <Typed
        style={{width: `100%`}}
        strings={[
            'a 5th year CS student @ UCalgary',
            'a curious programmer',
            'an admirer for good design',
            'a constant learner',
            'a lover for photography'
            ]}
            typeSpeed={50}
            backSpeed={15}
            smartBackspace="true"
            loop >
        </Typed>
    </div>
)
export default TypedDescription