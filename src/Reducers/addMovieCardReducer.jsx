

const AddMovieCardReducer =(state=[{tab:[{class:"fas fa-star",i:0},{class:"fas fa-star",i:1},{class:"fas fa-star",i:2},{class:"fas fa-star",i:3},{class:"fas fa-star",i:4}],name:'Inception',image:"https://is2-ssl.mzstatic.com/image/thumb/Video113/v4/83/84/eb/8384eb90-6fa0-1a28-a838-b23437efd244/pr_source.lsr/268x0w.jpg",rate:5,year:2010,key:Math.random(),description:"Dom Cobb est un voleur expérimenté dans l'art périlleux de `l'extraction' : sa spécialité consiste à s'approprier les secrets les plus précieux d'un individu, enfouis au plus profond de son subconscient, pendant qu'il rêve et que son esprit est particulièrement vulnérable. Très recherché pour ses talents dans l'univers trouble de l'espionnage industriel, Cobb est aussi devenu un fugitif traqué dans le monde entier. Cependant, une ultime mission pourrait lui permettre de retrouver sa vie d'avant."},{tab:[{class:"fas fa-star",i:0},{class:"fas fa-star",i:1},{class:"fas fa-star",i:2},{class:"fas fa-star",i:3},{class:"far fa-star",i:4}],name:'Blade Runner',image:"https://vignette.wikia.nocookie.net/videotheque-de-morx/images/2/26/Blade_Runner_2049_%282017%29.jpg/revision/latest?cb=20171009062222&path-prefix=fr",rate:4,year:2017,key:Math.random(),description:"En 2049, la société est fragilisée par les nombreuses tensions entre les humains et leurs esclaves créés par bioingénierie. L'officier K est un Blade Runner : il fait partie d'une force d'intervention d'élite chargée de trouver et d'éliminer ceux qui n'obéissent pas aux ordres des humains. Lorsqu'il découvre un secret enfoui depuis longtemps et capable de changer le monde, les plus hautes instances décident que c'est à son tour d'être traqué et éliminé."}],action)=>
{
    if (action.type==='ADD_MOVIE_CARD'){return state=[...state,{tab:action.payload.tab2.slice(0,action.payload.rate).concat(action.payload.tab1.slice(action.payload.rate)),name:action.payload.name,image:action.payload.image,rate:action.payload.rate,year:action.payload.year,key:Math.random(),description:action.payload.description}]}
    else if (action.type==='EDIT'){let newName=prompt("Edit your movie title", "")
    return state.map(el => (el.key===action.payload) ? {...el,name:newName}:el)}
    else if (action.type==="REMOVE"){return state= state.filter(el=> el.key!==action.payload)}
    else return state
}

export default AddMovieCardReducer