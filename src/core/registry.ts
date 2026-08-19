import { z } from "zod"
export const toolSchema = z.object({ name: z.string(), category: z.string(), level: z.enum(["iron","copper","silver","gold"]), description: z.string() })
export type RingTool = z.infer<typeof toolSchema> & { execute: Function }
