import { contactDetails } from "@/constants";

export const ContactInformation = () => {
  return (
    <div className="space-y-3">
      <h4>Contact Information</h4>

      <div className="space-y-6">
        {contactDetails.map(({ Icon, label, value }, index) => (
          <div key={index} className="flex items-center gap-x-3">
            <Icon size={16} />
            <div>
              <h5 className="font-medium">{label}</h5>
              <p>{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
