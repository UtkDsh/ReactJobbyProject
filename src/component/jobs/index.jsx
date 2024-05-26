import { useEffect, useState } from "react"
import Header from "../header"
import Cookies from "js-cookie";
import './index.css'
import FilterSection from "../filterSection";
import DisplayAllJobs from "../displayAllJobs";

const Jobs=()=>{
    
    const token=Cookies.get("jwtToken")

    // console.log(token);

    const [allValues,setValue]=useState({
      jobsList:[]}
    )


    useEffect(() => {

        const fetchJobsData= async ()=>{
        
        const url="https://apis.ccbp.in/jobs";

        const options = {
            method: 'GET',
            headers : {
                Authorization : `Bearer ${token}`
            }
          }
          
          const response=await fetch(url,options);
          const jobsData=await response.json();
          // console.log(jobsData);


          if(response.ok===true)
            {
              setValue({...allValues,jobsList:jobsData.jobs})

            }

            console.log(allValues.jobsList)


        }

      fetchJobsData();
    }, []);
    






    return(
    <>
    <Header></Header>

    <div className=" filter-all-jobs-cont">
      <div className=" border border-primary jobs-filter-section">
        <FilterSection></FilterSection>
      </div>
      <div className=" border border-danger jobs-all-jobs-section">
        <ul>
        
        {allValues.jobsList.map(each=><DisplayAllJobs jobsItem={each}> key={each.id}</DisplayAllJobs>)}
        </ul>
        
      </div>
    </div>
        
    </>)
}


export default Jobs