import { Link, useNavigate } from "react-router-dom"
 
function BackBtn(props){
    const navigate = useNavigate();

    return(
        <>
      <button onClick={() => props.text === "Back to Products" ? navigate(-1) : navigate('/home')} className="fixed top-4 left-4 z-40 inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-white/70 dark:bg-slate-800/70 text-indigo-600 dark:text-indigo-300 font-semibold text-sm shadow-md border border-white/30 dark:border-slate-600/40 hover:bg-white/90 dark:hover:bg-slate-700/80 hover:scale-105 transition-all duration-200">
        ← {props.text}
      </button>
        </>
    )
}

export default BackBtn