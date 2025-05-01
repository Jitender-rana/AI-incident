import { useState } from "react";
import { Down } from "../icons/down";
import { Up } from "../icons/Up";
import styled from "../styles/IncidentCard.module.scss";

type Severity = "Low" | "Medium" | "High";

interface IncidentCardProps {
  title: string;
  description: string;
  Severity: Severity;
  Date: Date;
}

function IncidentCard({ title, description, Severity, Date }: IncidentCardProps) {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  function toggleShowDetails() {
    setShowDetails((prev) => !prev);
  }

  const getSeverityColor = (severity: Severity) => {
    switch (severity) {
      case "High":
        return styled.high_severity;
      case "Medium":
        return styled.medium_severity;
      case "Low":
        return styled.low_severity;
      default:
        return "";
    }
  };

  return (
    <div className={styled.incident_card}>
      <h2>{title}</h2>
      <p>
        <strong>Severity:</strong>{" "}
        <span className={getSeverityColor(Severity)}>{Severity}</span>
      </p>

      {/* Header for Date + Toggle button */}
      <div className={styled.header}>
        <p className={styled.date}><strong>Date:</strong> {Date.toLocaleString()}</p>

        <div className={styled.toggle} onClick={toggleShowDetails}>
          {showDetails ? (
            <>
              <span className={styled.detail}>Hide details</span> <Up />
            </>
          ) : (
            <>
              <span>View details</span> <Down />
            </>
          )}
        </div>
      </div>

      {showDetails && (
        <p className={styled.description}>{description}</p>
      )}
    </div>
  );
}

export default IncidentCard;
