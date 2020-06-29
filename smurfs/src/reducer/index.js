import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, ADD_SMURF, ADDING_SMURF } from '../actions/index.js';

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
};

