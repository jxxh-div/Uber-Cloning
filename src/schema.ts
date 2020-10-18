import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import path from "path";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";

const allTypes: GraphQLSchema[] = fileLoader(
    path.join(__dirname, "./api/**/*.graphql")
);

const allResolvers: any[] = fileLoader(
    path.join(__dirname, "./api/**/*.resolvers.*")// ts가 아닌이유는 js로 바뀌기때문.
);

const margedTypes = mergeTypes(allTypes);
const margedResolvers = mergeResolvers(allResolvers);

const schema = makeExecutableSchema({
    typeDefs: margedTypes,
    resolvers: margedResolvers
});

export default schema