import {checkForName} from './nameChecker';


test ('checkForName ()', ()=> {
   let result = checkForName('');
   expect(result).toBeTruthy;
})

