
import {MAKE_GUESS, RESTART_GAME, GENERATE_AURAL_UPDATE, makeGuess, restartGame, generateAuralUpdate} from './actions';

describe(`Testing the actions file.`, function() {
    it('runs restartGame', function() {
        const action = restartGame();
        expect(action.type).toEqual(RESTART_GAME);
        console.log('action.corrrectAnswer= ', action.correctAnswer);
        // !!!! Should I expect something here? Comes undefined, albeit the function isn't passed a correctAnswer argument.
    });

    it('runs makeGuess', function() {
        const guess = 40;
        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.guess).toEqual(guess);
    })

    it('runs generateAuralUpdate', function() {
        const action = generateAuralUpdate();
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
    });
});