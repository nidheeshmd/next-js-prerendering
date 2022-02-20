import useSWR from "swr";

const fetcherFunction = async () => {
    const response = await fetch('http://localhost:4000/dashboard')
    const data = await response.json();
    return data;
}

function  DashboardSWR(){
    const {data, error} = useSWR('dashbaord', fetcherFunction);
    /* First argument of useSWR is unique key ( here dashboard ). */
    if(error){
        return 'An error has occurred';
    }
    if(!data){
        return 'Loading...';
    }

    return(<div>
            <h2>Dashboard</h2>
            <h2>Posts - {data.posts}</h2>
            <h2>Likes - {data.likes}</h2>
            <h2>Followers - {data.followers}</h2>
            <h2>Following - {data.following}</h2>
        </div>)
}

export default DashboardSWR;