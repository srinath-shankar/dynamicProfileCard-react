import '../css/card.css'


// card uder details
const userData = [
    {
        name: "james",
        city: "new york",
        role: "UI developer",
        skills: [
            "html", "css", "js", "bootstarp"
        ],
        online: true,
        profile: "2.png"
    },
    {
        name: "sam",
        city: "Las vegas",
        role: "UI developer",
        skills: [
            "html", "css", "js", "bootstarp", "react"
        ],
        online: false,
        profile: "1.png"
    },
    {
        name: "Stanley",
        city: "Mexico",
        role: "UI developer",
        skills: [
            "html", "css", "js", "j query"
        ],
        online: true,
        profile: "3.png"
    }
]

function User(props){
    return (
        <div className="card-container">
       <span className={props.online ? "pro online" : "pro offline"}>
        {props.online ? "online" : "offline"}
       </span>
       <img src={props.profile} alt="" />
       <h3>{props.name}</h3>
       <h3>{props.city}</h3>
       <p>{props.role}</p>
       <div>
        <button>Message</button>
        <button>Following</button>
       </div>
       <div className="skill-sec">
        <h6>Skills</h6>
        <ul>
            {props.skills.map((skill, index)=>(
                <li key={index}>{skill}</li>
            ))}
        </ul>
       </div>
    </div>
    )
}
export const Card = () => {
  return <>
          {
            userData.map((user, index)=>(
                <User key={index} 
                name={user.name}
                city={user.city} 
                role={user.role} 
                skills={user.skills} 
                online={user.online} 
                profile={user.profile}/>
            ))
          }
        </>;
}

//<User name="james" city="new york" role="UI developer" skills={["html", "css", "js", "bootstrap"]} online={false} profile="2.png"/>