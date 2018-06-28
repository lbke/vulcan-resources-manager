/**
 * Generate collections and routes from a map of schemas
 */
import {
  addRoute,
  createCollection,
  getDefaultResolvers,
  getDefaultMutations
} from "meteor/vulcan:core";
import schemas from "../schemas/schemaorg-vulcanized";

const toUpperFirst = str =>
  str && str.length ? str[0].toUpperCase() + str.slice(1) : "";

const generateCollections = schemas => {
  Object.keys(schemas).forEach(schemaId => {
    const schema = schemas[schemaId];
    // FIXME: this is due to the bad JSON serialization
    const typeName = toUpperFirst(schemaId);
    createCollection({
      collectionName: schemaId,
      typeName,
      schema,
      resolves: getDefaultResolvers(typeName),
      mutations: getDefaultMutations(typeName)
    });
  });
};

const generateRoutes = schemas => {
  Object.keys(schemas).forEach(schemaId => {
    const schema = schemas[schemaId];
    const typeName = toUpperFirst(schemaId);
    addRoute({
      name: schemaId,
      path: "/resources/" + schemaId,
      componentName: "SchemaPage",
      schema
    });
  });
};

const run = () => {
  generateCollections(schemas);
  generateRoutes(schemas);

  addRoute({
    name: "resources",
    path: "/resources",
    componentName: "SchemasList",
    schemas
  });
};

export default run;
