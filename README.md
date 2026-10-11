# ChordPro Vault

ChordPro Vault is an Obsidian plugin for viewing and editing ChordPro files.

## Features

- Opens ChordPro files with the `.chordpro`, `.cho`, `.crd`, `.chopro`, `.chord`, and `.pro` extensions
- Displays ChordPro files in a dedicated view
- Lets you edit the source code

## How to use

1. Install the plugin in your vault under `.obsidian/plugins/chordpro-vault/`.
2. Open any supported ChordPro file in Obsidian to view it.
3. Select **Edit source** to edit the file, then **Show preview** to return to the view.

## Development

### Requirements

- Node.js 18 or newer
- npm

### Commands

```bash
npm install
npm run dev
npm run build
npm run lint
```

- `npm run dev` starts the build in watch mode.
- `npm run build` runs TypeScript checks and builds the plugin for production.
- `npm run lint` runs ESLint over the project.

## Manual installation

Copy these files into your vault plugin folder:

```bash
<Vault>/.obsidian/plugins/chordpro-vault/
├── main.js
├── manifest.json
├── styles.css
└── ...
```

Then reload Obsidian and enable the plugin from the Community plugins settings.

## Release process

- Update the version in `manifest.json`.
- Update the corresponding entry in `versions.json`.
- Build the plugin before creating a release.
- Publish the release assets: `manifest.json`, `main.js`, and `styles.css`.
