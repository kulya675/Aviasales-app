import type { TicketI } from '../redux/reducer';

type SearchId = {
  searchId: string;
};

interface SearchType {
  tickets: TicketI[];
  stop: boolean;
}

class AviaAPI {
  BASE_URL = 'https://front-test.beta.aviasales.ru/';

  SEARCH_ID = '';

  async getId(): Promise<void> {
    const response = await fetch(`${this.BASE_URL}search`);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const body: SearchId = await response.json();
    this.SEARCH_ID = body.searchId;
  }

  async getSearchResult(): Promise<SearchType> {
    if (!this.SEARCH_ID) {
      await this.getId();
    }

    const response = await fetch(`${this.BASE_URL}tickets?searchId=${this.SEARCH_ID}`);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.json();
  }
}

const aviaAPI = new AviaAPI();
export default aviaAPI;
