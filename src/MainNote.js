import React,{useState} from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const MainNote = (props) => {
    const [content, setContent] = useState({
        title: "",
        content: "",
    });

    const inputEvent = (event)=>{
        const {name,value} = event.target;

        setContent((preContent)=>{
            return {
                ...preContent,
                [name] : value,
            };
        });
    };

    const addNote = ()=>{
        props.passNote(content);
        setContent({
            title: "",
            content: "",
        });
    }

    return (
        <>
            <div className="main_note">
                <form>
                    <input name="title" value={content.title} onChange={inputEvent} type="text" placeholder="Title" autoComplete="off" />
                    <textarea name="content" value={content.content} onChange={inputEvent} placeholder="Please Enter your Note..." />
                    <Button onClick={addNote} class="plusButton">
                        <AddIcon className="plusSign" />
                    </Button>
                </form>
            </div>
        </>
    );
};

export default MainNote;