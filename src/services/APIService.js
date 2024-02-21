class APIService {
  async getData20({ region, seed, page, errorNum }) {
    let url = `http://localhost:3002/${region}-${seed}-${page}-${errorNum}-20`;
    let data = await fetch(url).then((response) => response.json());
    return data;
  }

  async getData10({ region, seed, page, errorNum }) {
    let url = `http://localhost:3002/${region}-${seed}-${page}-${errorNum}-10`;
    let data = await fetch(url).then((response) => response.json());
    return data;
  }

  async changeErrors({ region, seed, page, errorNum }) {
    let url = `http://localhost:3002/change-errors/${region}-${seed}-${page}-${errorNum}`;
    let data = await fetch(url).then((response) => response.json());
    return data;
  }
}

export default new APIService();
