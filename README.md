The issue I've found when trying to use the `filter` helper from "convex-helpers/server/filter" when using convex pagination is that it seems to not find results that aren't on the first page.

Issue in question: https://github.com/get-convex/convex-helpers/issues/864

Steps:

- `git clone`
- `bun install` or `npm install`
- `npx convex dev`
- `npx convex import --table users sampleUsers.jsonl`
- `bun dev` or `npm run dev`

References: https://stack.convex.dev/complex-filters-in-convex#escape-hatch-pagination

I have seeded 50 example users, and the query has an initial page size of **10** and sorts the users by order ascending.
Search for any user after "Julia Jackson" in the sample data. E.g. if you search for "Oscar Robinson" it should yield no results.
