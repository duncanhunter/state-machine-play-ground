
import { providerDetailsMachine } from "./provider-details.machine";

describe('test', () => {
    it('should be true', () => {
        expect(true).toBe(true);
    });

    it('should go from name to addresses', (done) => {
        let currentState = providerDetailsMachine.initialState;
        function send(event) {
            currentState = providerDetailsMachine.transition(currentState, event);
        }

        expect(currentState.value).toEqual('name');
        send('NEXT');
        expect(currentState.value).toEqual('addresses');
        done();

    });

})