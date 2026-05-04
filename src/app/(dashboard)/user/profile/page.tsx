import ProfileForm from "@/components/dashboard/ProfileForm";
import { dashboardProfile } from "@/services/dashboard.service";

export default function UserProfilePage() {
  return (
    <div className="mx-auto max-w-3xl">
      <ProfileForm profile={dashboardProfile} />
    </div>
  );
}
