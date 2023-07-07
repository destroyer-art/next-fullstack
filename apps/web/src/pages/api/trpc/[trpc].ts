import * as trpcNext from "@trpc/server/adapters/next"
import { createContext } from "~/server/trpc/context"
import { appRouter } from "~/server/trpc"
// export API handler
// @see https://trpc.io/docs/server/adapters
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: createContext,
})
