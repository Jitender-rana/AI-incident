import { useState } from "react";
import IncidentCard from "../components/IncidentCard";
import { Button } from "../components/Button";
import styled from "../styles/Incident.module.scss";
import { Plus } from "../icons/plus";
import { Filter } from "../icons/filter";
import { CreatecontentModal } from "../components/Createcontent";

type Severity = "Low" | "Medium" | "High";

type Incident = {
  id: number;
  title: string;
  description: string;
  severity: Severity;
  reported_at: string; 
};

const initialIncidents: Incident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics...",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z",
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "LLM provided incorrect safety procedure information...",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z",
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata...",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z",
  },
];

export function Incident() {
  const [incidents,setIncidents] = useState<Incident[]>(initialIncidents);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [severityFilter, setSeverityFilter] = useState<Severity | "All">("All");
  const [showModal,setshowModal]=useState<boolean>(false);
  const handleCreateIncident = (newIncident: { title: string; description: string; severity: string }) => {
    const incidentToAdd: Incident = {
      id: incidents.length + 1,
      title: newIncident.title,
      description: newIncident.description,
      severity: newIncident.severity as Severity,
      reported_at: new Date().toISOString()
    };
    setIncidents([incidentToAdd, ...incidents]);
  };





  const filteredIncidents=incidents.filter((incident)=>severityFilter==="All"?true:incident.severity===severityFilter);
  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    if (sortOrder === "newest") {
      return new Date(b.reported_at).getTime() - new Date(a.reported_at).getTime();
    } else {
      return new Date(a.reported_at).getTime() - new Date(b.reported_at).getTime();
    }
  });


  const handleSortChange = (order: "newest" | "oldest") => {
    setSortOrder(order);
  };
  const handleSeverityChnage=(e:any)=>{
    setSeverityFilter(e.target.value);
  }

  return (
    <div>
    <CreatecontentModal open={showModal} onClose={()=>{setshowModal(false)}} onSubmit={handleCreateIncident}/>
    <div className={styled.Incidents}>
      <div className={styled.Top}>
      <h1 className={styled.Tophead}>AI Safety Incident Dashboard</h1>
      <div style={{marginTop: "0.7rem"}}>
        <Button variant="primary" text="Create Incident" startIcon={<Plus/>} onClick={()=>{
          setshowModal(true);
        }}/>
      </div>

      </div>
      

     
      <div className={styled.Filter}>
            <div>
                <button onClick={() => handleSortChange("newest")} disabled={sortOrder === "newest"}>
                  Newest First
                </button>
                <button onClick={() => handleSortChange("oldest")} disabled={sortOrder === "oldest"}>
                  Oldest First
                </button>
            </div>
            <div style={{display: "flex",gap: "0.8rem"}}>
              <div style={{display: "flex",justifyContent:"center",alignItems:"center"}}><Filter/></div>
              <select value={severityFilter} onChange={handleSeverityChnage}>
                <option value="All">All</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>

            </div>
      </div>

     
      <div className={styled.Incidentslist}>
        {sortedIncidents.map((incident) => (
          <IncidentCard
            key={incident.id}
            title={incident.title}
            description={incident.description}
            Severity={incident.severity}
            Date={new Date(incident.reported_at)}
          />
        ))}
      </div>
    </div>
    </div>
  );
}
