import { IResolvers } from "graphql-tools";

const query: IResolvers = {
	Query : {
		hola(): string{
			return 'Hola Mundo';
		},
		holaConNombre(__: void, { nombre }): string {
			return `Hola mundo ${nombre}`;
		},
		holaAlApiGraphQL(): string {
			return "Hola Mundo desde Api GraphQL test";
		}
	}
}

export default query;