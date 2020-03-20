import {validateUrl} from './urlValidator';
let result;

test ('check if validateUrl is called', ()=>{
    result = validateUrl('https://www.theguardian.com/music/2020/mar/19/david-bowie-50-greatest-songs-ranked')
    expect(result).toBeTruthy();
    result = validateUrl(' ')
    expect(result).toBeFalsy()    
});