import UsersTable from "@/components/admin/UsersTable";
import { adminUsers } from "@/services/admin.service";

export default function AdminUsersPage() {
  return <UsersTable users={adminUsers} />;
}
