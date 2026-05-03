# JSY-Global Inc. Website

Official website for JSY-Global Inc. - Community Development, Consulting, Research & Education

## Tech Stack

- **Framework**: SvelteKit 2.x with Svelte 5
- **Styling**: TailwindCSS 3.x
- **Language**: TypeScript
- **Deployment**: Static adapter (adapter-static)

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

This command will:
1. Copy all JSON files from `src/lib/data/` to `static/data/`
2. Build the static site to the `build/` directory

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Content Management

### For Developers

Content is managed through JSON files located in `src/lib/data/`. During the build process, these files are automatically copied to `static/data/` and can be fetched dynamically by the application.

### For Clients

After deployment, clients can edit the JSON files directly in the `build/data/` directory on the server. Changes will be reflected immediately without requiring a rebuild.

**See [CLIENT_EDIT_GUIDE.md](./CLIENT_EDIT_GUIDE.md) for detailed instructions (Japanese).**

### Available Content Files

- `news.en.json` / `news.ja.json` - News and announcements
- `works.en.json` / `works.ja.json` - Portfolio and case studies
- `services.en.json` / `services.ja.json` - Services offered
- `company.en.json` / `company.ja.json` - Company information
- `content.en.json` / `content.ja.json` - General content
