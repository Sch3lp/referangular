import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let kantoor = [
      {
        kantoorCode: 123,
        naam: 'kantoor 123',
        email: '123@kantoor.be',
        straat: 'stationstraat',
        gemeente: 'Leuven',
        huisnummer: '10',
        bus: 'A',
        postcode: '3000'
      },
      {
        kantoorCode: 321,
        naam: 'kantoor 321',
        email: '321@kantoor.be',
        straat: 'kerkstraat',
        gemeente: 'Hasselt',
        huisnummer: '20',
        bus: 'B',
        postcode: '3500'
      },
    ];
      
    return {kantoor};
  }
}
