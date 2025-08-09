// 1. Keep a queue containing the people to check
// 2. Pop a person off the queue
// 3. Check if the person is a mango seller
// 4a. Yes - You're done
// 4b. No - add all their neighbors to the queues
// 5. Loop
// 6. If the queue empty, there are no mango sellers in you network

// Simple Example
class BreadthFirstSearch {
  private readonly graph: { [key: string]: string[] } = {};

  constructor() {
    this.graph['you'] = ['alice', 'bob', 'claire'];
    this.graph['bob'] = ['anuj', 'peggy'];
    this.graph['alice'] = ['peggy'];
    this.graph['claire'] = ['thom', 'jonny'];
    this.graph['anuj'] = [];
    this.graph['peggy'] = [];
    this.graph['thom'] = [];
    this.graph['jonny'] = [];
  }

  searchMangoSeller(name: string): string {
    const searchQueue: string[] = [...this.graph[name]];
    const searched = new Set();

    while (searchQueue.length > 0) {
      const person = searchQueue.shift();

      if (!searched.has(person) && person) {
        if (this.personIsSeller(person)) {
          return person;
        } else {
          searchQueue.push(...this.graph[person]);
          searched.add(person);
        }
      }
    }

    throw new Error('No one is a mango seller');
  }

  private personIsSeller(name: string): boolean {
    return name.endsWith('m');
  }
}

const bfs = new BreadthFirstSearch();
console.log(bfs.searchMangoSeller('you'));
