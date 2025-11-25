import { query } from "./_generated/server";
import { v } from "convex/values";
import { paginationOptsValidator } from "convex/server";
import { filter } from "convex-helpers/server/filter";

export const paginate = query({
  args: {
    paginationOpts: paginationOptsValidator,
    searchTerm: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const term = args.searchTerm?.toLowerCase();

    return filter(ctx.db.query("users"), (user) => {
      return term ? user.name.toLowerCase().includes(term) : true;
    })
      .order("asc")
      .paginate(args.paginationOpts);
  },
});
