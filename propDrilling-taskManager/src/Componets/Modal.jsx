import { createPortal } from "react-dom"
import Button from "./Button"

export default function Modal({ children, modal }) {
    return createPortal(
        <dialog ref={modal} className="backdrop:bg-stone-900/90 p-4 rounded-md showdow-md">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button>close</Button>
            </form>
        </dialog>,
        document.getElementById("modal-root"))
}