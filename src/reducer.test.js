
import reducer from './reducer';
import {makeGuess, restartGame, generateAuralUpdate} from './actions';

describe('Testing the reducer.', function() {
    const hypotheticalState = {
        guesses: [5,15,40],
        feedback: 'You\'re hot!',
        auralStatus: 'A status',
        correctAnswer: 49
    };;

    it('calls makeGuess from initial state.', function() {
        const state = undefined;
        const newState = reducer(state, makeGuess(45));
        expect(newState.guesses).toEqual([45]);
    });

    it('calls makeGuess from hypothetical state.', function() {
        const state = hypotheticalState;
        const newState = reducer(state, makeGuess(45));
        expect(newState.guesses).toEqual([5,15,40,45]);
        expect(newState.feedback).toEqual("You're Hot!");
    });

    it(`calls makeGuess with info when user makes invalid guess`,function() {
        const state = undefined;
        //const newState = reducer(makeGuess("f"));
        //expect(newState.guesses).toEqual([]);
        //expect(newState.feedback).toEqual('Please enter a valid number.');
        // !!!! Trying to test for invalid submissions.
    });

    it('calls restartGame', function() {
        const state = hypotheticalState;
        const newState = reducer(state, restartGame());
        expect(newState.guesses).toEqual([]);
        expect(newState.feedback).toEqual('Make your guess!');
        expect(newState.auralStatus).toEqual("");
    });

    it(`calls generateAuralUpdate and responds to state`, function() {
        const state = hypotheticalState;
        const newState = reducer(state, generateAuralUpdate());
        expect(newState.auralStatus).toEqual(`Here's the status of the game right now: You're hot! You've made 3 guesses. In order of most- to least-recent, they are: 40, 15, 5`);
    });
});