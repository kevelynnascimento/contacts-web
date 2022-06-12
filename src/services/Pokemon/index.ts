import { AxiosResponse } from "axios";
import { api } from "../Api";

export interface PokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonListItemResponse[];
}

export interface PokemonListItemResponse {
  id: string;
  name: string;
  url: string;
}

export interface PaginationRequest {
  offset: number;
  limit: number;
}

export interface PokemonDetailsResponse {
  name: string;
  sprites: PokemonDetailSpritesResponse;
  types: PokemonDetailTypesResponse[];
}

export interface PokemonDetailSpritesResponse {
  back_default: string;
}

export interface PokemonDetailTypesResponse {
  slot: number;
  type: PokemonDetailTypeResponse;
}

export interface PokemonDetailTypeResponse {
  name: string;
  url: string;
}

export const findPokemons = async (
  request: PaginationRequest
): Promise<PokemonListResponse> => {
  const { data } = await api.get<PokemonListResponse>("pokemon", {
    params: request,
  });
  return data;
};

export const findDetailsPokemon = async (
  id: string
): Promise<PokemonDetailsResponse> => {
  const { data } = await api.get<PokemonDetailsResponse>(`pokemon/${id}`);
  return data;
};
