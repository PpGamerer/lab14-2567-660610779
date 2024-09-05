import { footerProps } from "@lib/types";
export default function Footer({year, fullName ,studentId} :footerProps) {
  return (
    <div>
      <p>Copyright © {year} {fullName} {studentId}</p>
    </div>
  );
}
