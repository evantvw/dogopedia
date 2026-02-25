import { IBreed } from "@/types/DogList";

import endpoints from "@/constants/endpoints";
import services from ".";

const { breedList, searchBreed: searchBreedEndpoint } = endpoints;

export async function getBreedList(
  breedId: string,
  limit?: number,
): Promise<IBreed>;

export async function getBreedList(
  breedId?: undefined,
  limit?: number,
): Promise<IBreed[]>;

export async function getBreedList(
  breedId?: string,
  limit = 0,
): Promise<IBreed | IBreed[]> {
  const params = {
    ...(limit ? { limit } : {}),
  };

  const res = await services.get(breedList(breedId), { params });

  if (!res.data || res.status !== 200) {
    throw new Error("Something went wrong, please try again later");
  }

  return res.data;
}

export async function searchBreed(
  query: string,
  sort: string,
): Promise<IBreed[]> {
  const params = {
    q: query,
    order: sort,
  };

  const res = await services.get(searchBreedEndpoint, { params });
  if (!res.data || res.status !== 200) {
    throw new Error("Something went wrong, please try again later");
  }

  return res.data;
}
