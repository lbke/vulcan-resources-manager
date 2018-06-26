import React from "react";
import { registerComponent } from "meteor/vulcan:core";

export const SchemaPage = ({ route: { schemaId, schema } }) => (
  <div>
    <h1>{schemaId}</h1>
    <div>
      <code>
        <pre>{JSON.stringify(schema, 0, 2)}</pre>
      </code>
    </div>
  </div>
);
registerComponent("SchemaPage", SchemaPage);
