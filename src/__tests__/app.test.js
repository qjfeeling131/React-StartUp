import React from 'react'
import { shallow } from "enzyme";

import App from "../App";

describe('App',()=>{

    let container;

    beforeEach(()=>{
        container=shallow(<App />)
    })

    it('should be showed App normally',()=>{
        expect(container).toHaveLength(1)
    })
})