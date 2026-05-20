import { useState } from 'react'

function Home ({w}) {

// const [currentRank, changeCurrentRank] = useState("");
// const [userName, setUserName] = useState("");
// const [tag, setTag] = useState("");
// const [region, setRegion] = useState("");
// const [platform, setPlatform] = useState("");


const Search = (e) => {
    changeCurrentRank(e.target.value)
} 


// const Ranks = 
//     ["Iron 1", "Iron 2", "Iron 3", 
//     "Silver 1", "Silver 2", "Silver 3", 
//     "Gold 1", "Gold 2", "Gold 3", 
//     "Platinum 1", "Platinum 2", "Platinum 3", 
//     "Diamond 1", "Diamond 2", "Diamond 3", 
//     "Ascendant 1", "Ascendant 2", "Ascendant 3", 
//     "Immortal 1", "Immortal 2", "Immortal 3", 
//     "Radiant"]

// useEffect ( () => {
//     const apiCheck = async () => {
//         try {
// //         const response = await fetch(`https://api.henrikdev.xyz/valorant/v2/mmr/${region}/${userName}/${tag}`, {
// //             method: 'GET',
// //             headers: {
// //       "Authorization": `${apiKey}`,
// //       "Accept": "*/*"
// //     },
// // });
// const data = await response.json();
//         setWeapons(data);
//         }
//     catch (error) {
//         console.error("Fetch error:", error);
//         alert(error)
//             }
//         };
//     apiCheck();

// }, [currentRank])

    return(
    <>
    <div>
        <h1>Andookie's VALORANT App!</h1>
    </div>
        <h2>{w}</h2>
        <div>
            {/* <form type = "text" className = "searchBar">
                <select className = "dropdown" onChange = {Search}>
                    <option>Select Rank: </option>
                    {Ranks.map(rank => <option key = {rank}>{rank}</option>)}
                </select>
            </form>
            <div>
                <h2>Your Rank is {currentRank}</h2>
            </div> */}

                <form className = "form">
                    <input type = "text" placeholder = "Enter Username">
                    </input>

                </form>
        </div>
    </>
    )

}

export default Home