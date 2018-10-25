import { Machine } from 'xstate';


import {ValidateNested, MaxLength, validate} from "class-validator";

class User {
  @MaxLength(20)
  name: string;
}

class Post {
    @ValidateNested()
    user: User;

    @MaxLength(20)
    name: string;
}

let user = new User();
user.name = "12345678901234567890";

let post = new Post();
// post.user = user;
post.name = '12345678901234567890'
post;

validate(post).then(errors => {
    errors//?
});

const pedestrianStates = {
  initial: 'walk',
  states: {
    walk: {
      on: {
        PED_TIMER: 'wait'
      }
    },
    wait: {
      on: {
        PED_TIMER: 'stop'
      }
    },
    stop: {}
  }
};

const lightMachine = Machine({
  key: 'light',
  initial: 'green',
  states: {
    green: {
      on: {
        TIMER: 'yellow'
      }
    },
    yellow: {
      on: {
        TIMER: 'red'
      }
    },
    red: {
      on: {
        TIMER: 'green'
      },
      ...pedestrianStates
    }
  }
});

const currentState = 'yellow';

const nextState = lightMachine
  .transition(currentState, 'TIMER')
  .value;//?

lightMachine
  .transition('red.walk', 'PED_TIMER')
  .value;//?

  
  lightMachine.historyValue().current//?
  lightMachine.historyValue().states//?
  
  
  // ...
  const waitState = lightMachine
  .transition({ red: 'walk' }, 'PED_TIMER')
  .value;//?
  
  lightMachine
  .transition(waitState, 'PED_TIMER')
  .value;//?
  
  // => { red: 'stop' }
  
  lightMachine
  .transition({ red: 'stop' }, 'TIMER')
  .value;//?
  
  lightMachine//?
  lightMachine.events//?