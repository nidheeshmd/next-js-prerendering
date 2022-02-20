import { useState } from 'react';
import { useRouter } from 'next/router';
import { router } from 'json-server';
/* Pre rendering + Client side Data Fetching */

function EventList({eventListData}){

    const [events, setEvents] = useState(eventListData);

    const fetchSportsEvents = async () => {
        const response = await fetch('http://localhost:4000/events?category=sports');
        const data = await response.json();
        setEvents(data);
        router.push('/events?category=sports', undefined, {shallow: true});
    }

    return(
        <>
        <button onClick={fetchSportsEvents}> Sports events</button>
            <h1>List of Events</h1>
            {
                events.map(event => {
                    return(
                        <div key={event.id}>
                            <h2>
                                {event.id} - {event.title} - {event.date} | {event.category}
                            </h2>
                            <p>{event.description}</p>
                            <hr/>
                        </div>
                    )
                })
            }
        </>
    )
}

export default EventList;

export async function getServerSideProps(context){
    const {query} = context;
    const { category } = query;
    const queryString = category ? "category=sports": "";
    const response = await fetch(`http://localhost:4000/events?${queryString}`);
    const data = await response.json();

    return{
        props: {
            eventListData: data,
        }
    }
}