import { GrUserWorker } from "react-icons/gr";
import EmptyState from "../../components/EmptyState";

const UnderWorking = () => {
  return (
    <div>
      <EmptyState text="Feature is under working..." icon={GrUserWorker}/>
    </div>
  )
}

export default UnderWorking;