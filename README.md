# Angel's Stadium Fryer Tracker

A simple web app for tracking fryer operations at Angel's Stadium. The app is designed to organize and log essential fryer data, including Level, Stand, FryerDumpNSCount, and OilCount.

## Overview

This project helps staff quickly record and review fryer activity across different stands and locations. It provides a clean browser-based interface for entering operational counts and monitoring status over time.

## Features

- Track fryer Level data
- Group entries by Stand
- Log Fryer Dump and Sauce Counts
- Monitor Oil Count information
- Use a lightweight static HTML/JavaScript interface

## Tech Stack

- HTML
- JavaScript

## Repository Contents

- `Index.html` — main application page
- `AppV1•o.js` — app logic and behavior
- `*.png` assets — branding and UI visuals

## Getting Started

1. Clone or download this repository.
2. Open `Index.html` in a browser.
3. Start entering fryer data.

## Local Preview

If your browser has trouble loading local assets, run a local server from the project folder:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Usage Notes

This application is intended for operational logging and quick review. It does not currently appear to include a backend database or cloud storage layer, so data may be stored locally or managed manually depending on usage.

## Future Improvements

Potential enhancements for this app include:

- local storage persistence
- CSV or PDF export
- user login and access control
- reporting dashboard
- better validation and data entry workflows

## License

No explicit license file is currently present in the repository. If you plan to share or distribute this project publicly, consider adding a license.

## Contact

For questions, updates, or feature requests, use the GitHub repository issues and pull requests.
