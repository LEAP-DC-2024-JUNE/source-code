import { socialMediaPlatforms } from "@/constants";

export const FollowUs = () => {
  return (
    <div className="space-y-3">
      <h4>Follow us</h4>

      <div className="flex flex-col gap-3 lg:flex-row">
        {socialMediaPlatforms.map((social, index) => (
          <span key={index} className="font-medium">
            {social}
          </span>
        ))}
      </div>
    </div>
  );
};
