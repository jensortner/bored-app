import { useEffect, useState } from "react";

type GetBoredProps = {
    getNewActivity: number;
}

type BoredFetch = {
    activity: string;
    type: string;
    participants: number;
    price: number;
    link: string;
    key: number;
    accessibility: number;
}

function GetBored(props: GetBoredProps) {
    const { getNewActivity } = props;
    const [whatToDO, setWhatToDo] = useState<BoredFetch>()
    
    useEffect(() =>{

        fetch('https://www.boredapi.com/api/activity', {
            method: 'GET'
        }).then((data) => data.json())
        .then((data) => setWhatToDo(data))

    },[getNewActivity])


    return (
        <>
        <section className="activity">
            <ul className="activity__list">
                <li>{whatToDO?.activity}</li>
                <li>{whatToDO?.participants}</li>
                <li>{whatToDO?.price}</li>
            </ul>  
        </section> 
        </>
    )

}

export default GetBored
