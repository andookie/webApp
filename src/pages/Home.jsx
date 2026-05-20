import { useState } from 'react'

function Home ({w}) {

const apiKey = import.meta.env.VITE_API_KEY;
const [mmr, setMMR] = useState("");
const [userName, setUserName] = useState("");
const [tag, setTag] = useState("");
const [region, setRegion] = useState("");
const regionsList = ["na", "eu", "latam", "br", "ap", "kr"]
const [array, setArray] = useState([])
const [integer, setInteger] = useState(0)
const ningbong = "ningbong";
const danah = "Helpdanahツ";
const jono = "taeisbad";


const Click = async (e) => {
    e.preventDefault()

    //no region selected error message
    if (region === "" || region === "SELECT"){
        alert("Please select a region");
        return;
    }

    if (userName === "" || tag === ""){
        alert("Please fill in all your information")
        return;
    }
    
    if (userName.toLowerCase() === ningbong || userName.toLowerCase() === danah || userName.toLowerCase() === jono){
        alert("NO STATS FOR YOU ASSHOLE I CLOSE THE WINDOW NOW")
        window.open("about:blank", "_self");
        window.close();
        return;
    }


        const apiCheck = async () => {
        try {
         const response = await fetch(`https://api.henrikdev.xyz/valorant/v2/mmr/${region}/${userName}/${tag}`, {
             method: 'GET',
             headers: {
       "Authorization": `${apiKey}`,
       "Accept": "*/*"
     },
 });
    const data = await response.json();
    //    setArray(prevResults => [...prevResults, data]);
    setMMR(data)
    setInteger(1)
    if (mmr.status === 404){
        alert("Invalid Information")
        return;
    }
      
      // Clear input after submission
    //   setUserName('');
    //   setRegion('');
    //   setTag('');
        }
    catch (error) {
        console.error("Fetch error:", error);
        alert(error)
            }
        };
    apiCheck();


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
// //         const response = await fetch(`https://api.henrikdev.xyz/valorant/v3/mmr/${region}/${userName}/${tag}`, {
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
                    <input className = "textBar" type = "text" placeholder = "Enter Username" onChange = {(e) => setUserName(e.target.value)}/>
                    <input className = "textBar" type = "text" placeholder = "Enter Tagline (Exclude #)" onChange = {(e) => setTag(e.target.value)}/>
                    <select onChange = {(e) => setRegion(e.target.value)}>
                        <option value = "SELECT">Select Region:</option>
                        {regionsList.map(regions => <option key = {regions}>{regions}</option>)}
                    </select>
                    <button className = "submitButton" onClick = {Click}>Submit</button>
                
                </form>
        </div>
            {integer === 1 ? 
            <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '50%'  }}>
                <h2>Username: {mmr.data.name}#{mmr.data.tag}</h2>
                <p>Current Rank: {mmr.data.current_data.currenttierpatched}</p>
                <img src = {mmr.data.current_data.images.small}/>
                <p>Current RR: {mmr.data.current_data.ranking_in_tier}</p>
                <p>Most Recent MMR Change: {mmr.data.current_data.mmr_change_to_last_game}</p>
                <p>Peak Rank: {mmr.data.highest_rank.patched_tier} in {mmr.data.highest_rank.season}</p>
            </div>
            : <div></div>}
    </>
    )

}

export default Home