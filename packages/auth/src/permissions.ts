import { AbilityBuilder } from "@casl/ability";
import { AppAbility } from ".";
import { User } from "./models/user";
import { Role } from "./role";

type PermissionByRole =(
    user: User,
    builder: AbilityBuilder<AppAbility>,
)=>void;

const permissionsByRole: Record<Role, PermissionByRole> = {
  ADMIN(user,{can,cannot}){
    can("manage","all")
    cannot(["transfer_ownership","update"],"organization")
    can(["transfer_ownership","update"],"organization",{ownerId:user.id})
  },
  MEMBER(user,{can,cannot}){
  can('get', 'User')
    can(['create', 'get'], 'Project')
    can(['update', 'delete'], 'Project', { ownerId: { $eq: user.id } })
  },
  RESELLER(user,{can,cannot}){

cannot(["transfer_ownership","update","delete","view","create"],"organization")
can(["transfer_ownership","update","delete","view","create"],"organization",{ownerId:user.id})
  },
  CLIENT(user,{can,cannot}){
    can("get","all")
    cannot(["transfer_ownership","update","delete","view","create"],"organization")
  },
  BILLING(user,{can,cannot}){
    can("manage","all")
    cannot(["transfer_ownership","delete"],"organization",{ownerId:user.id})
    can(["transfer_ownership","update","delete","view","create"],"organization",{ownerId:user.id})
    can(["transfer_ownership","update","delete","view","create"],"organization",{ownerId:user.id})
  },
  
}

