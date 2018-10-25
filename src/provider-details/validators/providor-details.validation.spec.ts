import { validate } from "class-validator";
import { Address, ProviderDetails } from "./provider-details.validation";

describe('test', () => {
    it('should be true', () => {
        expect(true).toBe(true);
    });

    it('is a valid address', (done) => {
        let address1 = new Address();
        address1.street = 'street1'
        address1.city = 'street1'
        address1.postCode = 2000
        address1.country = 'Australia'

        validate(address1).then(errors => { // errors is an array of validation errors
            expect(errors.length).toEqual(0);
            done();
        });
    });

    it('is a invalid address', (done) => {
        let address1 = new Address();
        // address1.street = 'street1'
        address1.city = 'street1'
        address1.postCode = 2000
        address1.country = 'Australia'

        validate(address1).then(errors => { // errors is an array of validation errors
            expect(errors[0].constraints['isString']).toEqual('Must have return a valid address');
            done();
        });
    });

    it('is a valid ProviderDetails', (done) => {
        let address1 = new Address();
        address1.street = 'street1'
        address1.city = 'street1'
        address1.postCode = 2000
        address1.country = 'Australia'

        let providerDetails = new ProviderDetails();
        providerDetails.name = 'BHP';
        providerDetails.addresses = [
            address1, address1
        ]
        validate(providerDetails).then(errors => { // errors is an array of validation errors
            expect(errors.length).toEqual(0);
            done();
        });
    });
})