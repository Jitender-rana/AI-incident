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

  return (
    <div className={styled.incident_card}>
      <h2>{title}</h2>
      <p><strong>Severity:</strong> {Severity}</p>

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
