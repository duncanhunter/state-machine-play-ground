import { Machine } from "xstate";

export const providerDetailsMachine = Machine({
  key: 'providerDetails',
  initial: 'name',
  states: {
    name: {
      on: {
        NEXT: 'addresses'
      }
    },
    addresses: {
      on: {
        NEXT: 'personel'
      }
    },
    personel: {
      on: {
        NEXT: ''
      },
    }
  }
});