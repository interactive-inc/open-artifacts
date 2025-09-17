See @.github/copilot-instructions.md for project overview and @package.json for available npm commands for this project.

## Additional Instructions

- @.github/instructions/core.instructions.md
- @.github/instructions/ts.instructions.md
- @.github/instructions/ts.tanstack-query.instructions.md

## Site Creation and Modification Guidelines

### When User Requests a Site

1. **Check existing sites**: Review current sites in `src/routes/`
2. **If similar site exists**: Modify the existing site based on user requirements
3. **If no similar site exists**: Create a new site directory

### Decision Process

```
User request → Check existing sites
├── Similar site found → Modify existing
│   Example: "Create online store" → Modify existing shop/
└── No similar site → Create new
    Example: "Create blog" → Create new blog/
```

### Site Categories Reference

- **E-commerce**: shop/
- **Food/Restaurant**: cafe/
- **Business/Company**: corporate/
- **Social/Community**: sns/
- **New categories**: Create as needed

## Project Structure Understanding

### Routing Rules

#### Core Principles
- All directories and files under `src/routes/` automatically become routes
- **Hyphen Convention**: Directories/files starting with `-` are excluded from routing
  - `-lib/` : Library code
  - `-components/` : Components

#### Site Structure
```
src/routes/
├── shop/         # Shop site (/shop/*)
├── cafe/         # Cafe site (/cafe/*)
├── corporate/    # Corporate site (/corporate/*)
└── sns/          # SNS site (/sns/*)
```

### API Architecture

#### API File Placement Rules
Each site has its own API:
```
src/routes/{site}/
├── api.ts                    # API entry point (/{site}/api)
└── -lib/
    └── hono/
        ├── factory.ts        # Factory Helper
        ├── index.ts          # Hono app definition
        └── {resource}.ts     # Resource handlers
```

#### RESTful Handler Structure
**File names represent paths, export names represent HTTP methods**:

```typescript
// products.ts → /products
export const GET = factory.createHandlers((c) => { ... })
export const POST = factory.createHandlers((c) => { ... })

// products.$id.ts → /products/:id
export const GET = factory.createHandlers((c) => { ... })
export const PUT = factory.createHandlers((c) => { ... })
export const DELETE = factory.createHandlers((c) => { ... })

// orders.$id.status.ts → /orders/:id/status
export const PATCH = factory.createHandlers((c) => { ... })
```

### Data Management

#### Static Data
- Location: `src/routes/{site}/-data/*.json`
- Import: Static import (`import data from "../-data/file.json"`)
- Built into bundle at build time, no fs usage

#### Dynamic Data
- In-memory Map management (development)
- Database expected in production

## Coding Conventions

### TypeScript Rules
- Use `type` (avoid `interface`)
- HTTP method names in uppercase (`GET`, `POST`, `DELETE`, etc.)
- Always validate parameters

### Hono Factory Pattern
```typescript
import { factory } from "./factory"

export const GET = factory.createHandlers((c) => {
  const id = c.req.param("id")

  // Parameter validation required
  if (!id) {
    return c.json({ error: "Missing ID" }, 400)
  }

  // Business logic
  return c.json(data)
})
```

### Directory Creation Guidelines
- Non-routable: Add `-` prefix
- Shared code: Place in `-lib/`
- Data files: Place in `-data/`
- Internal components: Place in `-components/`

## Critical Constraints

### DO NOT
- Use `fs` module (use static imports for JSON)
- Create index.ts in root directories
- Create global API routes (each site manages independently)
- Use unchecked parameters

### MUST DO
- Validate `c.req.param()` results
- Set proper status codes for error responses
- Use Factory Helper for handler creation
- Follow RESTful naming conventions

## Site Independence

Each site is completely independent:
- Own API (`/{site}/api/*`)
- Own data (`/{site}/-data/*`)
- Own libraries (`/{site}/-lib/*`)
- Own components (`/{site}/-components/*`)

For cross-site code sharing, use explicit import paths.

## Type Safety

### Parameter Handling
```typescript
// ❌ Bad
const id = c.req.param("id")
const data = map.get(id) // id is string | undefined

// ✅ Good
const id = c.req.param("id")
if (!id) {
  return c.json({ error: "Missing ID" }, 400)
}
const data = map.get(id) // id is string
```

## Debug and Troubleshooting

### Common Issues
1. **Route not working**: Check if directory name has `-` prefix
2. **Type error**: Check parameter null validation
3. **JSON import error**: Verify `resolveJsonModule: true` in tsconfig.json
4. **API 404**: Check basePath and route definitions

## Naming Convention Summary

| Type | Convention | Example |
|------|------------|---------|
| Site directory | Lowercase | `shop`, `cafe` |
| API handler file | resource.parameter | `products.$id.ts` |
| HTTP method export | Uppercase | `export const GET` |
| Non-routable | Hyphen prefix | `-lib/`, `-data/` |
| Factory Helper | `factory.createHandlers` | Use in all handlers |

Follow these guidelines strictly for implementation.