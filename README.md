# URN

Welcome to the URN Spinup Template! URN enables you to focus on server logic instantly upon setup, saving a lot of unnecessary work.

## Getting Started

1. **Navigate to the App Directory**
   ```sh
   cd src/app
   ```
   You'll see two folders: `external` and `internal`.

   - **External**: Contains external API routes.
   - **Internal**: Contains internal API routes.

2. **Understanding URN Modules**
   URN treats API routes as extensions, whether they're in external or internal modules. Learn how to write a URN module by examining the demo API at `src/app/internal/root`.

3. **Loader Function**
   Every module is loaded by an exported function called `loader()` inside `loader.ts`.

## Database Interface

For more information about database interfaces and other configurations, please refer to the [documentation](https://urn.lolitapi.cyou).
