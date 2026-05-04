import AnalyticsCharts from "@/components/admin/AnalyticsCharts";
import { getAdminDashboardData } from "@/services/admin.service";

export default function AdminAnalyticsPage() {
  const { revenue, roles } = getAdminDashboardData();

  return <AnalyticsCharts revenue={revenue} roles={roles} />;
}
