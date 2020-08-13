export * from './user.ts';
import { UserResolvers } from "./user.ts";
import { BusinessUnitResolvers } from './business-unit.ts';

export const resolvers = [ UserResolvers, BusinessUnitResolvers ];