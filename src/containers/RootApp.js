import React, {Cpmponent} from 'react'
import {connect} from 'react-redux'
import Counter from '../components/Counter'


function Inc() {

    return (dispatch,getState) => {
        setTimeout(function () {
            dispatch( {
                type:"INCREMENT"
            })

        }, 2000)

    }
}

function Dec() {
    return {type: "DECREMENT"}
}

const RootApp = connect(
    (state) => {
        return {
            value: state
        }
    },
    (dispatch) => {
        return {
            onIncrement: () => {
                console.log("INCREMENT");
                dispatch(Inc())
            },
            onDecrement: () => {
                dispatch(Dec())
            }
        }
    })(Counter)

export default RootApp