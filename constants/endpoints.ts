const endpoints = {
  breedList: (breedId?: string) =>
    breedId ? `/v1/breeds/${breedId}` : "/v1/breeds",
  searchBreed: " /v1/breeds/search",
};

export default endpoints;
