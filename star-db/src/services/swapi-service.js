export default class SwapiService {

	_apiBase = 'https://swapi.dev/api';

	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}` +
				`, received ${res.status}`)
		}
		return await res.json();
	}

	async getAllPeople() {
		const res = await this.getResource(`/people/`);
		return res.results.map(this._transformPerson);
	}

	async getPerson(id) {
		const person = await this.getResource(`/people/${id}/`);
		return this._transformPerson(person);
	}

	async getAllPlanets() {
		const res = await this.getResource(`/planets/`);
		return res.results.map(this._transformPlanet);
	}

	async getPlanet(id) {
		const planet = await this.getResource(`/planets/${id}/`);
		return this._transformPlanet(planet)
	}

	async getAllStarships() {
		const res = await this.getResource(`/starships/`);
		return res.results.map(this._transformStarship);
	}

	async getStarship(id) {
		const sh = await this.getResource(`/starships/${id}/`);
		return (this._transformStarship(sh))
	}

	_extractId (planet) {
		const regExp = /\/([0-9]*)\/$/;
		const id = planet.url.match(regExp)[1];
		return id;
	}
	_transformPlanet = (planet) => {
		const id = this._extractId(planet);

		return {
			id,
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_perioud,
			diameter: planet.diameter
		}
	}
	_transformStarship = (sh) => {
		const id = this._extractId(sh);

		return {
			id,
			name: sh.name,
			model: sh.model,
			manufacturer: sh.manufacturer,
			costInCredits: sh.costInCredits,
			length: sh.length,
			crew: sh.crew,
			passengers: sh.passengers,
			cargoCapacity: sh.cargoCapacity
		}
	}
	_transformPerson = (p) => {
		const id = this._extractId(p);

		return {
			id,
			name: p.name,
			gender: p.gender,
			birthYear: p.birth_year,
			eyeColor: p.eye_color
		}
	}
}
