import { ValidateNested, MaxLength, validate, IsString, IsNumber } from "class-validator";

export class ProviderDetails {
    @MaxLength(20)
    name: string;
    @ValidateNested({
        each: true
    })
    addresses: Address[]
}

export class Address {
    @IsString({
        message: "Must have return a valid address"
    })
    street: string;

    @IsString()
    city: string;

    @IsNumber()
    postCode: number;

    @IsString()
    country: string;
}