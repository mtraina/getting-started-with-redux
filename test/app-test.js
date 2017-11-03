import expect from 'expect';

function counter(state, action){
    if(action.type === 'INCREMENT'){
        return state + 1;
    } else if(action.type === 'DECREMENT'){
        return state  - 1
    }
}

expect(
    counter(0, {type: 'INCREMENT'})
).toEqual(1);