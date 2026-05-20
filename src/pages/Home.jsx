import { useState } from 'react'

function Home ({w}) {

    
const [currentRank, changeCurrentRank] = useState("");


const Search = (e) => {
    changeCurrentRank(e.target.value)
} 

const Ranks = 
    ["Iron 1", "Iron 2", "Iron 3", 
    "Silver 1", "Silver 2", "Silver 3", 
    "Gold 1", "Gold 2", "Gold 3", 
    "Platinum 1", "Platinum 2", "Platinum 3", 
    "Diamond 1", "Diamond 2", "Diamond 3", 
    "Ascendant 1", "Ascendant 2", "Ascendant 3", 
    "Immortal 1", "Immortal 2", "Immortal 3", 
    "Radiant"]

    return(
    <>
    <div>
        <h1>Andookie's VALORANT App!</h1>
    </div>
        <h2>{w}</h2>
        <div>
            <form type = "text" className = "searchBar" onSubmit = {Search}>
                <select className = "dropdown" onChange = {Search}>
                    <option>Select Rank: </option>
                    {Ranks.map(rank => <option key = {rank}>{rank}</option>)}
                </select>
            </form>
        <h2>Your Rank is {currentRank}</h2>
        </div>
    </>
    )

}

export default Home