import { useParams } from 'react-router-dom';

function Profile() {
  const params = useParams();
  const { nickname } = params;

  return (
    <div>
      <h2>Profile page for {nickname}</h2>
    </div>
  );
}

export default Profile;;