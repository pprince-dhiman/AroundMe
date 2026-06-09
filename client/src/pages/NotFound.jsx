import EmptyState from '../components/EmptyState';
import { FiSearch } from 'react-icons/fi';

const NotFound = () => {
  return (
    <div>
      <EmptyState text="404, Page Not Found." icon={FiSearch}/>
    </div>
  )
}

export default NotFound;