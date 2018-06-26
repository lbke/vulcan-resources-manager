import React from "react";
import { registerComponent } from "meteor/vulcan:core";

export const SchemasList = ({ route: { schemas } }) => {
  return (
    <div>
      <h1>Schemas</h1>
      <ul>
        {Object.keys(schemas).map(schemaId => {
          schema = schemas[schemaId];
          return (
            <li key={schemaId}>
              <a href={`/resources/${schemaId}`}>{schemaId}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

registerComponent("SchemasList", SchemasList);
