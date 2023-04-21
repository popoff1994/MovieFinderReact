import { GoChevronDown} from "react-icons/go";
import { useState, useEffect, useRef } from "react";
import {Link} from 'react-router-dom';
import Panel from './Panel'
function Dropdown({ links, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if(!divEl.current){
                return;
            }
            
            if(!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handler, true);
        return () => {
            document.removeEventListener('click', handler);
        };
    }, [])


    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    };
    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option);
    }
    
    const renderedLinks = links.map((link) => {
        return <div key={link.label}><Link to={link.path} onClick={() => handleOptionClick(link)} 
         >{link.label}</Link></div>
    });
    

    return (
    <div ref={divEl} className="w-48 relative">
        <Panel className="flex justify-between items-center cursor-pointer ml-5 selectionText"
        onClick={handleClick}
        >
        {value?.label || 'Select movies or series'}
        <GoChevronDown className="text-lg"/>
        </Panel>
        {isOpen && <Panel className="absolute top-full selectionText">
            {renderedLinks}
        </Panel>}
    </div>
)}

export default Dropdown;