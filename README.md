# Indonesian Area Data API

This project provides a simple API for fetching Indonesian area data, including provinces, regencies, districts, and villages. It is built using TypeScript and Bun.js, a JavaScript runtime that supports TypeScript natively.

## Features

- Fetch provinces, regencies, districts, and villages data.
- Filter data by province ID, regency ID, and district ID.
- Serve data through RESTful endpoints.

## Getting Started

### Prerequisites

- Node.js installed on your system.
- Bun.js installed globally. If not installed, you can install it using `npm install -g bun`.

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `bun install` to install the project dependencies.

### Running the API

To start the API server, run the following command in the project directory:

```bash
bun run index.ts
```

The server will start on port 3000 by default.

## API Endpoints

- `GET /province`: Fetches all provinces.
- `GET /regency`: Fetches all regencies. Optionally, you can filter by `province_id` using the query parameter.
- `GET /district`: Fetches all districts. Optionally, you can filter by `regency_id` using the query parameter.
- `GET /village`: Fetches all villages. Optionally, you can filter by `district_id` using the query parameter.

## Usage

To fetch data, make a GET request to the appropriate endpoint. For example, to fetch all provinces, make a GET request to `http://localhost:3000/province`.

To filter data by a specific ID, include the ID as a query parameter in the request URL. For example, to fetch regencies in a specific province, make a GET request to `http://localhost:3000/regency?province_id=11`.

## Contributing

Contributions are welcome. Please feel free to submit a pull request or open an issue for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
