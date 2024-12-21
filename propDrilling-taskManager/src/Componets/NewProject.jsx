import { useRef } from "react"
import Input from "./Input"
import Modal from "./Modal";

export default function NewProject({onAddProject, onCancel}) {

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modalRef = useRef();

    function handleSave() {
        const titleData = title.current.value;
        const descriptionData = description.current.value;
        const dueDateData = dueDate.current.value;
        
        if (
            titleData.trim() === "" ||
            descriptionData.trim() === "" ||
            dueDateData.trim() === "" 
        ) {
            modalRef.current.showModal();
            return;
        }
        onAddProject({
            title: titleData,
            description: descriptionData,
            dueDate: dueDateData
        })
    }

    return (
        <>
            <Modal modal={modalRef}>
                <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
                <p className="text-stone-400 mb-4">Please fill all fields</p>
            </Modal>
        <div className="w-[35rem] mt-16"> 
            <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                <li><button onClick={handleSave} className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md">Save</button></li>
            </menu>
            <div>
                <Input type="text" ref={title} label="Title"/>
                <Input ref={description} label="Description" textarea />
                <Input type="date" ref={dueDate} label="Due Date" />
            </div>
        </div>
        </>
    )
}