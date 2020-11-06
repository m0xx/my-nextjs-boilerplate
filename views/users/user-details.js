import {fetcher} from "../../lib/api";
import {useRouter} from "next/router";
import useSWR from "swr";
import Button from "../../components/button";

const UserDetails = () => {
  const router = useRouter();
  const { data, error } = useSWR(() => {
    const { userId } = router.query;

    if (!userId) {
      throw 'undefined';
    }

    return `/api/v1/users/${userId}`;
  }, fetcher);

  if(!data && !error) {
    return <div>Loading....</div>
  }

  if(error) {
    return <div className="text-red-500">
      <pre>{ JSON.stringify(error, null, 4)}</pre>
    </div>
  }

  return <div>
    <pre>{ JSON.stringify(data, null, 4)}</pre>
    <Button href="/" className="mt-4">Create another user</Button>
  </div>

}

export default UserDetails;
