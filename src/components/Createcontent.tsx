import styled from "../styles/Modal.module.scss"
import { CrossIcon } from "../icons/CrossIcon"
import { Input } from "./Input"

import { useState,useRef } from "react"
interface ModalProps{
    open: boolean,
    onClose: ()=>void,
    onSubmit: (incident: { title: string; description: string; severity: string }) => void,
}
enum SeverityTypes{
    Low="Low",
    Medium="Medium",
    High="High"

}
export function CreatecontentModal({open,onClose,onSubmit}:ModalProps){
    const [type,settype]=useState(SeverityTypes.Low);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    function onSubmitContent() {
        if (!title.trim() || !description.trim()) {
          alert("Title and Description cannot be empty!");
          return;
        }
        
        onSubmit({
          title,
          description,
          severity: type
        });
        onClose(); 
      }



    return <div>
        {open && <div className={styled.Modal}>

                       <div className={styled.Modal_one}>
                          <div className={styled.Modal_two}>



                            <span className={styled.Modal_three}>

                                <div className="flex justify-end">
                                    <div className="cursor-pointer" onClick={onClose}><CrossIcon/></div>

                                </div>
                                <div>
                                               <Input type="text" placeholder="Title" labelname="Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                                               <Input type="text" placeholder="description" labelname="Description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                                    
                                    
                                    

                                </div>
                                <div className={styled.Typehead}>Select Severity</div>
                                <div className={styled.Typeselect}>
                                    <button onClick={()=>{settype(SeverityTypes.Low)}} disabled={type === SeverityTypes.Low}>Low</button>
                                    <button onClick={()=>{settype(SeverityTypes.Medium)}} disabled={type === SeverityTypes.Medium}>Medium</button>
                                    <button onClick={()=>{settype(SeverityTypes.High)}} disabled={type === SeverityTypes.High}>High</button>
                                </div>
                                <div className="flex justify-center mt-4">
                                    <button onClick={onSubmitContent}>Submit</button>

                                </div>

                            </span>

                          </div>



                       </div>
            </div>}
    </div>

}