import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const P = styled.p`
    text-align: left;
    font-size: 1.3rem;
    padding: 1.5rem 0 1.5rem 5rem;
`;

export default class AccountBalance extends Component {
    render() {
        const buttonText = this.props.showBalance ? 'Hide Balance': 'Show Balance';
        let content = null;
        if ( this.props.showBalance ) {
            content = <>Balance: ${this.props.balance}</>
        }
        return (
            <P>
                {content}
                <button onClick={this.props.handleBalanceVisibilityChange}>{buttonText}</button>
            </P>
        );
    }
}

AccountBalance.propTypes = {
    balance: PropTypes.number.isRequired,
}
