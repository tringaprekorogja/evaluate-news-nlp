import {getSentiment} from './formHandler';



test('response from the request contains the data in form of an object', () => {
       return getSentiment('https://www.theguardian.com/music/2020/mar/19/david-bowie-50-greatest-songs-ranked')
        .then(result => {
            expect(result).toBeDefined()
            expect(result.polarity).toEqual('positive');
        });
});