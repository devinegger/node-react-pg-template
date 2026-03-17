# Connectors

This directory is reserved for **connectors**: small, focused modules that integrate the app server with external systems and services.

A connector typically:

- Encapsulates the details of talking to an external API, queue, or webhook.
- Exposes a small, well-typed interface to the rest of the server.
- Keeps third-party specific logic out of your core routes and business logic.

## Suggested pattern

- One subdirectory per connector, e.g. `server/connectors/github`, `server/connectors/stripe`.
- Each connector exports a minimal public surface (e.g. `createClient`, `listResources`, `triggerAction`) and hides any lower-level HTTP or SDK usage.
- Handle authentication, retries, and logging at the connector layer, not inside routes.

You can safely delete or replace this README when you add your first real connector.

