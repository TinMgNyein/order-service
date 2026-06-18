# Order Service

NestJS API service for the workshop POS demo.

The service receives orders from `pos-app` and calls `inventory-service`
internally to reduce product stock.

## Run Locally

```bash
npm install
npm run build
npm start
```

The service listens on:

```text
http://localhost:3001
```

For development:

```bash
npm run dev
```

## Endpoints

```text
GET  /health
GET  /api/orders
POST /api/orders
```

## Inventory Service

For local runs:

```bash
INVENTORY_SERVICE_URL=http://localhost:3002 npm start
```

For Docker Compose, use Docker's internal service name:

```text
INVENTORY_SERVICE_URL=http://inventory-service:3002
```

## Docker

Build from this directory:

```bash
docker build -f deployment/Dockerfile.dev -t order-service:latest .
```

Run:

```bash
docker run --rm -p 3001:3001 \
  -e INVENTORY_SERVICE_URL=http://host.docker.internal:3002 \
  order-service:latest
```

## GitHub Actions

The dev workflow builds this Dockerfile:

```text
deployment/Dockerfile.dev
```

with this build context:

```text
.
```
