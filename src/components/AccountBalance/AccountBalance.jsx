import React, { Component } from 'react';
//import './AccountBalance.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const P = styled.p`
    text-align: left;
    font-size: 1.3rem;
    padding: 1.5rem 0 1.5rem 5rem;
`;

export default class AccountBalance extends Component {
    render() {
        return (
            <P>
                Balance: ${this.props.balance}
            </P>
        )
    }
}

AccountBalance.propTypes = {
    balance: PropTypes.number.isRequired,
}
