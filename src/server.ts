import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { IResolvers, makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';

const app = express();

app.use('*', cors());

app.use(compression());

const typeDefs = `
	type Query {
		hola: String!
		holaConNombre(nombre: String!): String!
		holaAlApiGraphQL: String!
	}
`
const resolvers: IResolvers = {
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

const schema: GraphQLSchema = makeExecutableSchema({
	typeDefs,
	resolvers
});


app.use('/', (req,res) => {
	res.send('Welcome to Express Response end point...');
});

const PORT = 5300;

app.listen(
	{port: PORT},
	() => console.log(`Hola Mundo API GraphQL http://localhost:${PORT}`)
);