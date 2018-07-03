import React from 'react'
import PropTypes from 'prop-types';
import {shallow,mount} from 'enzyme';
import { Login } from "../pages/login/login";


describe('login',()=>{
    let container;
    beforeEach(()=>{
        container=mount(<Login />)
    })
    it('should be showed the login normaly',()=>{
        let form=container.find('.form');
        expect(form).toHaveLength(1);
    })
})